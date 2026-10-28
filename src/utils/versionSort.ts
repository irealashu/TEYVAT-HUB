/**
 * Helper utilities to parse Genshin Impact version numbers and sort entities
 * by release order: Newest first (e.g. 7.1, 5.2, 5.0) and oldest last (1.0).
 */

export function parseVersion(v?: string | number): number {
  if (v === undefined || v === null) return 0;
  if (typeof v === 'number') return v;
  const match = String(v).match(/\d+(\.\d+)?/);
  if (!match) return 0;
  return parseFloat(match[0]);
}

const REGION_RELEASE_RANK: Record<string, number> = {
  'Nod-Krai': 7.1,
  'Natlan': 5.0,
  'Fontaine': 4.0,
  'Sumeru': 3.0,
  'Inazuma': 2.0,
  'Snezhnaya': 6.0,
  'Liyue': 1.1,
  'Mondstadt': 1.0,
  'Teyvat': 1.0,
  'Other': 1.0,
};

export function getEntityReleaseVersion(entity: any): number {
  if (entity.version) return parseVersion(entity.version);
  if (entity.introducedVersion) return parseVersion(entity.introducedVersion);
  if (entity.region && REGION_RELEASE_RANK[entity.region]) {
    return REGION_RELEASE_RANK[entity.region];
  }
  return 1.0;
}

export function sortByReleaseDesc<T>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const vA = getEntityReleaseVersion(a);
    const vB = getEntityReleaseVersion(b);
    if (vB !== vA) return vB - vA; // Newest version first
    
    // Tie breaker 1: Rarity (5-star before 4-star)
    const rarityA = (a as any).rarity || (a as any).maxRarity || 0;
    const rarityB = (b as any).rarity || (b as any).maxRarity || 0;
    if (rarityB !== rarityA) return rarityB - rarityA;
    
    // Tie breaker 2: Alphabetical name
    const nameA = String((a as any).name || (a as any).title || '');
    const nameB = String((b as any).name || (b as any).title || '');
    return nameA.localeCompare(nameB);
  });
}
