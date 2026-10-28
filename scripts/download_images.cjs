const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

function downloadImage(url, destPath) {
  return new Promise((resolve) => {
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
      return resolve({ success: true, cached: true });
    }

    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, destPath).then(resolve);
      }
      if (res.statusCode !== 200) {
        return resolve({ success: false, status: res.statusCode, url });
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(() => resolve({ success: true, cached: false }));
      });
      fileStream.on('error', (err) => {
        fs.unlink(destPath, () => {});
        resolve({ success: false, error: err.message });
      });
    });

    req.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });
    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ success: false, error: 'Timeout' });
    });
  });
}

// Batch runner helper
async function mapConcurrent(items, limit, fn) {
  const results = [];
  const executing = [];
  for (const item of items) {
    const p = Promise.resolve().then(() => fn(item));
    results.push(p);
    if (limit <= items.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(results);
}

async function run() {
  console.log('Starting parallel image downloader...');

  const basePublicDir = path.join(__dirname, '..', 'public', 'images');
  ['characters', 'weapons', 'artifacts', 'enemies', 'materials'].forEach(dir => {
    fs.mkdirSync(path.join(basePublicDir, dir), { recursive: true });
  });

  const filesToUpdate = [
    path.join(__dirname, '..', 'src', 'data', 'characters.ts'),
    path.join(__dirname, '..', 'src', 'data', 'weapons.ts'),
    path.join(__dirname, '..', 'src', 'data', 'artifacts.ts'),
    path.join(__dirname, '..', 'src', 'data', 'enemies.ts'),
    path.join(__dirname, '..', 'src', 'data', 'materials.ts'),
  ];

  let fileContents = filesToUpdate.map(f => fs.readFileSync(f, 'utf8'));

  const urlRegex = /https?:\/\/[^"'\s]+\.(png|jpg|jpeg|webp|svg)/gi;
  let urlsFound = new Set();
  fileContents.forEach(content => {
    (content.match(urlRegex) || []).forEach(u => urlsFound.add(u));
  });

  console.log(`Found ${urlsFound.size} unique image URLs.`);

  const urlList = Array.from(urlsFound);

  let successCount = 0;
  let failCount = 0;

  await mapConcurrent(urlList, 15, async (url) => {
    let category = 'general';
    if (url.includes('Avatar') || url.includes('character') || url.includes('Player')) category = 'characters';
    else if (url.includes('Equip') || url.includes('weapon') || url.includes('Sword') || url.includes('Bow')) category = 'weapons';
    else if (url.includes('Relic') || url.includes('artifact')) category = 'artifacts';
    else if (url.includes('Item') || url.includes('enemy') || url.includes('boss')) category = 'enemies';

    let filename = path.basename(url.split('?')[0]);
    if (!filename.includes('.')) filename += '.png';

    const localPath = path.join(basePublicDir, category, filename);
    const relativeWebPath = `/images/${category}/${filename}`;

    const res = await downloadImage(url, localPath);

    if (res.success) {
      successCount++;
      for (let i = 0; i < fileContents.length; i++) {
        fileContents[i] = fileContents[i].replaceAll(url, relativeWebPath);
      }
    } else {
      console.warn(`Failed URL: ${url} (${res.error || res.status})`);
      failCount++;
    }
  });

  for (let i = 0; i < filesToUpdate.length; i++) {
    fs.writeFileSync(filesToUpdate[i], fileContents[i], 'utf8');
  }

  console.log(`Downloaded ${successCount} images. Failed: ${failCount}. Updated data files.`);
}

run();
