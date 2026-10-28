import { Quest } from '../types';
import { sortByReleaseDesc } from '../utils/versionSort';

const RAW_QUESTS: Quest[] = [
  // ==========================================
  // PROLOGUE: MONDSTADT - The Outlander Who Caught the Wind
  // ==========================================
  {
    id: 'aq-0-1',
    title: 'The Outlander Who Caught the Wind',
    act: 'Act I',
    chapter: 'Prologue: Mondstadt',
    type: 'Archon Quest',
    region: 'Mondstadt',
    rewards: { primogems: 60, exp: 1200, mora: 45000, items: ['Favonius Warbow', 'Enhancement Ore x12'] },
    summary: 'Awakening on the shores of Teyvat, the Traveler meets Paimon and journeys to the City of Freedom. Witnessing Stormterror\'s sudden assault, the Traveler joins forces with Amber, Kaeya, and Lisa of the Knights of Favonius to secure four wind temples.',
    version: '1.0',
    keyCharacters: ['Aether/Lumine', 'Paimon', 'Amber', 'Kaeya', 'Lisa', 'Jean'],
    prerequisites: 'Begin the journey in Teyvat'
  },
  {
    id: 'aq-0-2',
    title: 'For a Tomorrow Without Tears',
    act: 'Act II',
    chapter: 'Prologue: Mondstadt',
    type: 'Archon Quest',
    region: 'Mondstadt',
    rewards: { primogems: 60, exp: 1400, mora: 60000, items: ['Wanderer\'s Advice x15', 'Tainted Blood'] },
    summary: 'The mysterious bard Venti reveals his divine identity as Barbatos. Conspiring with Master Diluc at the Angel\'s Share, the group attempts to retrieve the Holy Lyre der Himmel from the cathedral vaults, only to be ambushed by the Fatui Harbinger Signora\'s agents.',
    version: '1.0',
    keyCharacters: ['Venti', 'Diluc', 'Jean', 'Fatui Agents'],
    prerequisites: 'Complete Prologue: Act I'
  },
  {
    id: 'aq-0-3',
    title: 'Song of the Dragon and Freedom',
    act: 'Act III',
    chapter: 'Prologue: Mondstadt',
    type: 'Archon Quest',
    region: 'Mondstadt',
    rewards: { primogems: 120, exp: 2000, mora: 100000, items: ['Memory of Roving Gales', 'Northlander Bow Billet'] },
    summary: 'Breaching the swirling tempest around Stormterror\'s Lair, the party purifies the corrupted blood clots on Dvalin\'s neck. Dvalin reclaims his sanity and saves the group from falling. Outside Mondstadt Cathedral, the Eighth Fatui Harbinger, La Signora, ambushes Venti and forcefully extracts his Anemo Gnosis.',
    version: '1.0',
    keyCharacters: ['Venti', 'Dvalin', 'Diluc', 'Jean', 'La Signora'],
    prerequisites: 'Complete Prologue: Act II'
  },

  // ==========================================
  // CHAPTER I: LIYUE - Farewell, Archaic Lord
  // ==========================================
  {
    id: 'aq-1-1',
    title: 'Of the Land Amidst Monoliths',
    act: 'Act I',
    chapter: 'Chapter I: Liyue',
    type: 'Archon Quest',
    region: 'Liyue',
    rewards: { primogems: 60, exp: 1600, mora: 75000, items: ['Adventurer\'s Experience x20'] },
    summary: 'Arriving in Liyue Harbor during the annual Rite of Descension, the Traveler watches in shock as the Geo Archon Rex Lapis crashes from the heavens, seemingly assassinated. Fleeing the Millelith, the Eleventh Fatui Harbinger Childe offers aid and directs the Traveler to the illuminated Adepti in Jueyun Karst.',
    version: '1.0',
    keyCharacters: ['Tartaglia (Childe)', 'Ningguang', 'Moon Carver', 'Mountain Shaper', 'Xiao'],
    prerequisites: 'Complete Prologue: Act III'
  },
  {
    id: 'aq-1-2',
    title: 'Farewell, Archaic Lord',
    act: 'Act II',
    chapter: 'Chapter I: Liyue',
    type: 'Archon Quest',
    region: 'Liyue',
    rewards: { primogems: 60, exp: 1800, mora: 90000, items: ['Mystic Enhancement Ore x15'] },
    summary: 'Guided by Childe to the Wangsheng Funeral Parlor, the Traveler assists the mysterious consultant Zhongli in preparing the solemn Rite of Parting. Gathering Glaze Lilies, Noctilucous Jade, and sacred oils reveals Zhongli\'s peerless understanding of ancient Liyue traditions.',
    version: '1.0',
    keyCharacters: ['Zhongli', 'Tartaglia', 'Madame Ping', 'Ganyu'],
    prerequisites: 'Complete Chapter I: Act I'
  },
  {
    id: 'aq-1-3',
    title: 'A New Star Approaches',
    act: 'Act III',
    chapter: 'Chapter I: Liyue',
    type: 'Archon Quest',
    region: 'Liyue',
    rewards: { primogems: 120, exp: 2400, mora: 140000, items: ['Memory of Immovable Crystals', 'Monolith Fragment'] },
    summary: 'Childe breaks into the Golden House to seize the Exuvia, triggering a fierce clash in his Foul Legacy Transformation. Finding the Gnosis gone, he unleashes Sigils of Permission to awaken the ancient Overlord of the Vortex, Osial. Ningguang sacrifices the Jade Chamber to crush the god. Zhongli confirms his identity as Morax and relinquishes his Gnosis to Signora in accordance with his contract.',
    version: '1.1',
    keyCharacters: ['Zhongli', 'Tartaglia', 'Ningguang', 'Keqing', 'Xiao', 'La Signora'],
    prerequisites: 'Complete Chapter I: Act II'
  },
  {
    id: 'aq-1-4',
    title: 'We Will Be Reunited',
    act: 'Act IV',
    chapter: 'Chapter I: Liyue',
    type: 'Archon Quest',
    region: 'Liyue',
    rewards: { primogems: 60, exp: 1600, mora: 85000, items: ['Hero\'s Wit x10', 'Defiled Statue Fragment'] },
    summary: 'Partnering with the mysterious Bough Keeper Dainsleif, the Traveler investigates the Abyss Order\'s grand scheme: corrupting a stolen Statue of The Seven to craft a mechanized divine weapon with Osial\'s limb. Coming face-to-face with an Abyss Herald and their lost twin, the twin refuses to return home until the Traveler learns "the true nature of this world."',
    version: '1.4',
    keyCharacters: ['Dainsleif', 'The Sibling', 'Abyss Herald'],
    prerequisites: 'Complete Chapter I: Act III & Bough Keeper: Dainsleif'
  },

  // ==========================================
  // CHAPTER II: INAZUMA - Omnipresence Over Mortals
  // ==========================================
  {
    id: 'aq-2-0',
    title: 'Autumn Winds, Scarlet Leaves',
    act: 'Prologue',
    chapter: 'Chapter II: Inazuma',
    type: 'Archon Quest',
    region: 'Liyue',
    rewards: { primogems: 60, exp: 1400, mora: 65000, items: ['Guide to Prosperity x4'] },
    summary: 'Seeking passage through the raging thunderstorms encircling Inazuma, the Traveler attends Captain Beidou\'s Crux Clash in Guyun Stone Forest, crossing paths with the exiled wandering samurai Kaedehara Kazuha and hearing the story of his deceased friend who defied the Raiden Shogun.',
    version: '1.6',
    keyCharacters: ['Beidou', 'Kaedehara Kazuha'],
    prerequisites: 'Complete Chapter I: Act IV'
  },
  {
    id: 'aq-2-1',
    title: 'The Immovable God and the Eternal Euthymia',
    act: 'Act I',
    chapter: 'Chapter II: Inazuma',
    type: 'Archon Quest',
    region: 'Inazuma',
    rewards: { primogems: 60, exp: 1750, mora: 80000, items: ['Hero\'s Wit x12'] },
    summary: 'Landing in Ritou under the Sakoku Decree, the Traveler observes the horrific consequences of the Vision Hunt Decree where people lose their ambitions and memories. Aided by Thoma and Ayaka of the Yashiro Commission, the Traveler embraces the plight of Inazuma\'s people.',
    version: '2.0',
    keyCharacters: ['Kamisato Ayaka', 'Thoma', 'Yoimiya'],
    prerequisites: 'Complete Autumn Winds, Scarlet Leaves'
  },
  {
    id: 'aq-2-2',
    title: 'Stillness, the Sublimation of Shadow',
    act: 'Act II',
    chapter: 'Chapter II: Inazuma',
    type: 'Archon Quest',
    region: 'Inazuma',
    rewards: { primogems: 60, exp: 1800, mora: 85000, items: ['Guide to Elegance x4'] },
    summary: 'Thoma is captured for the 100th Vision ceremony before the Statue of the Omnipresent God. The Traveler intervenes, rescuing Thoma and engaging the Raiden Shogun in the Plane of Euthymia, barely escaping alive. Joining the Sangonomiya Resistance on Kannazuka, the civil war escalates.',
    version: '2.0',
    keyCharacters: ['Raiden Shogun', 'Thoma', 'Sangonomiya Kokomi', 'Gorou', 'Kujou Sara'],
    prerequisites: 'Complete Chapter II: Act I'
  },
  {
    id: 'aq-2-3',
    title: 'Omnipresence Over Mortals',
    act: 'Act III',
    chapter: 'Chapter II: Inazuma',
    type: 'Archon Quest',
    region: 'Inazuma',
    rewards: { primogems: 120, exp: 2600, mora: 160000, items: ['Memory of Violet Flash', 'Crown of Insight'] },
    summary: 'Unmasking the Fatui Delusion factory led by Scaramouche on Yashiori Island, Yae Miko trades the Electro Gnosis to save the Traveler. At Tenshukaku, the Traveler defeats La Signora in a duel before the throne; the Shogun executes Signora on the spot. Bolstered by the ambitions of a hundred visions, the Traveler breaks into Ei\'s inner realm and convinces her to abolish the Sakoku and Vision Hunt decrees.',
    version: '2.1',
    keyCharacters: ['Raiden Ei', 'Yae Miko', 'Scaramouche', 'La Signora', 'Kazuha'],
    prerequisites: 'Complete Chapter II: Act II'
  },
  {
    id: 'aq-2-4',
    title: 'Requiem of the Echoing Depths',
    act: 'Act IV',
    chapter: 'Chapter II: Inazuma',
    type: 'Archon Quest',
    region: 'Liyue',
    rewards: { primogems: 60, exp: 1750, mora: 85000, items: ['Hero\'s Wit x12'] },
    summary: 'Deep within The Chasm\'s underground mines, the Traveler reunites with Dainsleif. Discovering a pool that purges abyssal erosion, they witness how mutated Hilichurls crawl to this forgotten sanctuary to die in peace. Halfdan, a fallen Royal Guard of Khaenri\'ah, sacrifices his spirit to dismantle the Abyss purifier.',
    version: '2.6',
    keyCharacters: ['Dainsleif', 'Halfdan'],
    prerequisites: 'Complete Chapter II: Act III'
  },

  // ==========================================
  // INTERLUDE CHAPTERS
  // ==========================================
  {
    id: 'in-1',
    title: 'The Crane Returns on the Wind',
    act: 'Act I',
    chapter: 'Interlude Chapter',
    type: 'Interlude Chapter',
    region: 'Liyue',
    rewards: { primogems: 60, exp: 1600, mora: 80000, items: ['Sunset Vermilionite'] },
    summary: 'Ningguang organizes the reconstruction of the Jade Chamber. Along with the exorcist disciple Shenhe and opera star Yun Jin, the defenders repel Beisht, Osial\'s vengeful wife, proving humanity can defend Liyue without reliance on the divine.',
    version: '2.4',
    keyCharacters: ['Shenhe', 'Yun Jin', 'Ningguang', 'Beisht'],
    prerequisites: 'Complete Chapter I: Act III'
  },
  {
    id: 'in-2',
    title: 'Perilous Trail',
    act: 'Act II',
    chapter: 'Interlude Chapter',
    type: 'Interlude Chapter',
    region: 'Liyue',
    rewards: { primogems: 60, exp: 1800, mora: 95000, items: ['Moonpiercer Fragment'] },
    summary: 'Trapped in a distorted temporal subterranean rift beneath The Chasm alongside Yanfei, Yelan, Kuki Shinobu, and Arataki Itto, the group uncovers the sacrifice of Bosacius, the strongest Yaksha, and the imperial sorcerer Boyang during the Cataclysm 500 years ago.',
    version: '2.7',
    keyCharacters: ['Xiao', 'Yelan', 'Yanfei', 'Itto', 'Kuki Shinobu', 'Bosacius'],
    prerequisites: 'Complete Requiem of the Echoing Depths'
  },
  {
    id: 'in-3',
    title: 'Inversion of Genesis',
    act: 'Act III',
    chapter: 'Interlude Chapter',
    type: 'Interlude Chapter',
    region: 'Sumeru',
    rewards: { primogems: 60, exp: 1800, mora: 95000, items: ['Annihilation Feather', 'Name-Change Feather'] },
    summary: 'With Nahida\'s permission, the defeated Scaramouche enters Irminsul and deletes his former existence from history to undo the Tatarasuna tragedies. However, history reweaves itself. Confronting his reborn, unburdened self ("The Wanderer"), he accepts his original memories and gains an Anemo Vision.',
    version: '3.3',
    keyCharacters: ['Wanderer / Scaramouche', 'Nahida', 'Traveler'],
    prerequisites: 'Complete Chapter III: Act V'
  },

  // ==========================================
  // CHAPTER III: SUMERU - Truth Amongst the Pages of Purana
  // ==========================================
  {
    id: 'aq-3-1',
    title: 'Through Mists of Smoke and Forests Dark',
    act: 'Act I',
    chapter: 'Chapter III: Sumeru',
    type: 'Archon Quest',
    region: 'Sumeru',
    rewards: { primogems: 60, exp: 1750, mora: 80000, items: ['Hero\'s Wit x10'] },
    summary: 'Venturing into Avidya Forest, the Traveler breathes incense spirit fumes and hears the dying whisper: "World... forget me." Nursed back to health by Forest Watcher Tighnari and Collei, they travel to Sumeru City and uncover the Akasha System controlled by the corrupt Akademiya.',
    version: '3.0',
    keyCharacters: ['Tighnari', 'Collei', 'Dori', 'Alhaitham'],
    prerequisites: 'Complete Chapter II: Act IV'
  },
  {
    id: 'aq-3-2',
    title: 'The Morn a Thousand Roses Brings',
    act: 'Act II',
    chapter: 'Chapter III: Sumeru',
    type: 'Archon Quest',
    region: 'Sumeru',
    rewards: { primogems: 60, exp: 1800, mora: 90000, items: ['Nilotpala Lotus Extract'] },
    summary: 'During the Sabzeruz Festival celebrating Lesser Lord Kusanali\'s birthday, the Akademiya traps the entire city in an infinite Akasha dream samsara to harvest brain waves. Guided by Nahida, the Traveler breaks through Dunyarzad\'s subconscious loop before she succumbs to Eleazar.',
    version: '3.0',
    keyCharacters: ['Nahida', 'Nilou', 'Dunyarzad', 'Dehya'],
    prerequisites: 'Complete Chapter III: Act I'
  },
  {
    id: 'aq-3-3',
    title: 'Dreams, Emptiness, Deception',
    act: 'Act III',
    chapter: 'Chapter III: Sumeru',
    type: 'Archon Quest',
    region: 'Sumeru',
    rewards: { primogems: 60, exp: 1800, mora: 90000, items: ['Guide to Ingenuity x4'] },
    summary: 'Il Dottore (The Doctor) arrives in Sumeru, trapping Nahida inside her physical vessel at the Sanctuary of Surasthana using acoustic sound waves. The Traveler and Paimon escape into the Gilded Desert to forge alliances with the Eremites and Cyno.',
    version: '3.1',
    keyCharacters: ['Nahida', 'Il Dottore', 'Cyno', 'Alhaitham', 'Dehya'],
    prerequisites: 'Complete Chapter III: Act II'
  },
  {
    id: 'aq-3-4',
    title: 'King Deshret and the Three Magi',
    act: 'Act IV',
    chapter: 'Chapter III: Sumeru',
    type: 'Archon Quest',
    region: 'Sumeru',
    rewards: { primogems: 60, exp: 1850, mora: 95000, items: ['Desert Ruby'] },
    summary: 'In Aaru Village, Cyno, Alhaitham, Dehya, and Rahman uncover the truth of King Deshret\'s historic tragedy: his sacrifice to stop forbidden knowledge rather than an act of malice by Greater Lord Rukkhadevata. The desert and rainforest unite.',
    version: '3.1',
    keyCharacters: ['Alhaitham', 'Cyno', 'Candace', 'Dehya'],
    prerequisites: 'Complete Chapter III: Act III'
  },
  {
    id: 'aq-3-5',
    title: 'Akasha Pulses, the Kalpa Flame Rises',
    act: 'Act V',
    chapter: 'Chapter III: Sumeru',
    type: 'Archon Quest',
    region: 'Sumeru',
    rewards: { primogems: 120, exp: 2800, mora: 160000, items: ['Memory of Flourishing Green', 'Crown of Insight'] },
    summary: 'A breathtaking military plan orchestrated by Alhaitham topples Grand Sage Azar. Nahida is freed and, aided by the people of Sumeru, defeats Shouki no Kami, the artificial god Scaramouche. At the core of Irminsul, Nahida encounters the remaining memory of Greater Lord Rukkhadevata and, weeping, purges her from the world\'s collective consciousness to eradicate Forbidden Knowledge.',
    version: '3.2',
    keyCharacters: ['Nahida', 'Alhaitham', 'Cyno', 'Scaramouche', 'Greater Lord Rukkhadevata', 'Il Dottore'],
    prerequisites: 'Complete Chapter III: Act IV'
  },
  {
    id: 'aq-3-6',
    title: 'Caribert',
    act: 'Act VI',
    chapter: 'Chapter III: Sumeru',
    type: 'Archon Quest',
    region: 'Sumeru',
    rewards: { primogems: 60, exp: 1750, mora: 85000, items: ['Caribert\'s Mask', 'Hero\'s Wit x12'] },
    summary: 'The Traveler relives a memory experienced through the eyes of their sibling centuries ago in Avidya Forest. Encountering Chlothar Alberich, founder of the Abyss Order, they witness the despair of a Khaenri\'ahn father trying to restore his hilichurl son Caribert through the power of the "Sinner".',
    version: '3.5',
    keyCharacters: ['Dainsleif', 'Chlothar Alberich', 'Caribert', 'The Sinner (Vedrfolnir)'],
    prerequisites: 'Complete Chapter III: Act V'
  },

  // ==========================================
  // CHAPTER IV: FONTAINE - Masquerade of the Guilty
  // ==========================================
  {
    id: 'aq-4-1',
    title: 'Prelude of Blancheur and Noirceur',
    act: 'Act I',
    chapter: 'Chapter IV: Fontaine',
    type: 'Archon Quest',
    region: 'Fontaine',
    rewards: { primogems: 60, exp: 1750, mora: 80000, items: ['Hero\'s Wit x10'] },
    summary: 'Stepping into the Court of Fontaine, the Traveler meets the theatrical Hydro Archon Furina and Chief Justice Neuvillette at the Opera Epiclese. When a magic trick by Lyney and Lynette goes wrong and an audience member dissolves into water, the Traveler acts as defense attorney, unraveling the ominous prophecy of Fontaine.',
    version: '4.0',
    keyCharacters: ['Furina', 'Neuvillette', 'Lyney', 'Lynette', 'Navia'],
    prerequisites: 'Complete Caribert'
  },
  {
    id: 'aq-4-2',
    title: 'As Light Rain Falls Without Reason',
    act: 'Act II',
    chapter: 'Chapter IV: Fontaine',
    type: 'Archon Quest',
    region: 'Fontaine',
    rewards: { primogems: 60, exp: 1800, mora: 90000, items: ['Spina di Rosula Badge'] },
    summary: 'Collaborating with Navia, president of Spina di Rosula, the Traveler re-examines the unsolved serial disappearances of young women. They discover that the culprit Vacher dissolved women into water using Primordial Sea water to reunite with his lost lover, proving Fontainians are descendants of Oceanids.',
    version: '4.0',
    keyCharacters: ['Navia', 'Neuvillette', 'Clorinde', 'Marcel / Vacher'],
    prerequisites: 'Complete Chapter IV: Act I'
  },
  {
    id: 'aq-4-3',
    title: 'To the Stars Shining in the Depths',
    act: 'Act III',
    chapter: 'Chapter IV: Fontaine',
    type: 'Archon Quest',
    region: 'Fontaine',
    rewards: { primogems: 60, exp: 1800, mora: 90000, items: ['Credit Coupons x500'] },
    summary: 'Infiltrating the Fortress of Meropide as an inmate under Neuvillette\'s request, the Traveler monitors Duke Wriothesley and the missing Childe. Deep within the prison, Wriothesley keeps watch over an immense sluice gate holding back the surging Primordial Sea.',
    version: '4.1',
    keyCharacters: ['Wriothesley', 'Sigewinne', 'Clorinde', 'Tartaglia'],
    prerequisites: 'Complete Chapter IV: Act II'
  },
  {
    id: 'aq-4-4',
    title: 'Cataclysm\'s Quickening',
    act: 'Act IV',
    chapter: 'Chapter IV: Fontaine',
    type: 'Archon Quest',
    region: 'Fontaine',
    rewards: { primogems: 60, exp: 1850, mora: 95000, items: ['Hero\'s Wit x12'] },
    summary: 'The Primordial Sea ruptures the Meropide seal. Wriothesley and Clorinde hold the breach until Neuvillette arrives, wielding ancient sovereign power to force the waters back. Meanwhile, the Fourth Harbinger Arlecchino confronts Furina over her lack of divine power.',
    version: '4.1',
    keyCharacters: ['Neuvillette', 'Wriothesley', 'Arlecchino', 'Furina'],
    prerequisites: 'Complete Chapter IV: Act III'
  },
  {
    id: 'aq-4-5',
    title: 'Masquerade of the Guilty',
    act: 'Act V',
    chapter: 'Chapter IV: Fontaine',
    type: 'Archon Quest',
    region: 'Fontaine',
    rewards: { primogems: 120, exp: 2800, mora: 160000, items: ['Memory of Running Stream', 'Crown of Insight'] },
    summary: 'The truth behind Furina is brought to trial: she is a cursed human woman without divinity who endured 500 years of agonizing masquerade. The divine Hydro Archon Focalors uses the accumulated energy in the Oratrice to execute her divine throne, destroying the Hydro seat of the Heavenly Principles and returning full Dragon Sovereign authority to Neuvillette. Neuvillette pardons Fontainians and transforms them into true humans, before teaming up with the Traveler and Skirk to defeat the All-Devouring Narwhal.',
    version: '4.2',
    keyCharacters: ['Furina', 'Focalors', 'Neuvillette', 'Skirk', 'Arlecchino', 'All-Devouring Narwhal'],
    prerequisites: 'Complete Chapter IV: Act IV'
  },
  {
    id: 'aq-4-6',
    title: 'Bedtime Story',
    act: 'Act VI',
    chapter: 'Chapter IV: Fontaine',
    type: 'Archon Quest',
    region: 'Fontaine',
    rewards: { primogems: 60, exp: 1750, mora: 85000, items: ['Caribert\'s Photo', 'Memory of Time'] },
    summary: 'Reuniting with Dainsleif in Fontaine, they track down the completed "Loom of Fate". Within an artificial memory sanctuary woven by Caribert\'s fading consciousness, the Traveler speaks directly to their Abyss Sibling in the flesh, sharing memories before Caribert evaporates into starlight.',
    version: '4.7',
    keyCharacters: ['Dainsleif', 'Caribert', 'The Abyss Twin'],
    prerequisites: 'Complete Masquerade of the Guilty'
  },

  // ==========================================
  // CHAPTER V: NATLAN - Incandescent Ode of Resurrection
  // ==========================================
  {
    id: 'aq-5-1',
    title: 'Flowers Resplendent on the Sun-Drenched Track',
    act: 'Act I',
    chapter: 'Chapter V: Natlan',
    type: 'Archon Quest',
    region: 'Natlan',
    rewards: { primogems: 60, exp: 1750, mora: 80000, items: ['Hero\'s Wit x10', 'Saurian Bond Ring'] },
    summary: 'Arriving in the untamed volcanic wilderness of Natlan, the Traveler bonds with a baby Tepetlisaur (Indwell), befriends the geo warrior Kachina, and enters the sacred pilgrimage of the Return of the Sacred Flame at the Stadium. Meeting the blazing Pyro Archon Mavuika, they learn that Natlan has been waging continuous war against the Abyss for 500 years.',
    version: '5.0',
    keyCharacters: ['Mavuika', 'Kachina', 'Mualani', 'Kinich'],
    prerequisites: 'Complete Bedtime Story'
  },
  {
    id: 'aq-5-2',
    title: 'Black Stone Buried in White Sand',
    act: 'Act II',
    chapter: 'Chapter V: Natlan',
    type: 'Archon Quest',
    region: 'Natlan',
    rewards: { primogems: 60, exp: 1800, mora: 90000, items: ['Guide to Contention x4'] },
    summary: 'When Kachina fails to return from the Night Kingdom after the Pilgrimage, Mualani, Kinich, and the Traveler descend into the Spirit Realm to retrieve her. Back at the surface, the First Fatui Harbinger, Il Capitano "The Captain", challenges Mavuika in an explosive clash of Cryo and Pyro at the Stadium.',
    version: '5.0',
    keyCharacters: ['Mavuika', 'Il Capitano', 'Kachina', 'Mualani', 'Kinich'],
    prerequisites: 'Complete Chapter V: Act I'
  },
  {
    id: 'aq-5-3',
    title: 'Beyond the Smoke and Mirrors',
    act: 'Act III',
    chapter: 'Chapter V: Natlan',
    type: 'Archon Quest',
    region: 'Natlan',
    rewards: { primogems: 60, exp: 1850, mora: 95000, items: ['Night Realm Obsidian Shard'] },
    summary: 'To forge the Ancient Names required to awaken the Sacred Flame and shield Natlan from the impending abyssal siege, the Traveler collaborates with tribal elders, Xilonen, and Chasca, unlocking ancient dragon hieroglyphs and tribal memories across the six regions of Natlan.',
    version: '5.1',
    keyCharacters: ['Xilonen', 'Chasca', 'Ororon', 'Mavuika'],
    prerequisites: 'Complete Chapter V: Act II'
  },
  {
    id: 'aq-5-4',
    title: 'The Rainbow Destined to Burn',
    act: 'Act IV',
    chapter: 'Chapter V: Natlan',
    type: 'Archon Quest',
    region: 'Natlan',
    rewards: { primogems: 60, exp: 1900, mora: 100000, items: ['Hero\'s Wit x15'] },
    summary: 'The Abyss launches an unprecedented full-scale invasion upon the Stadium of the Sacred Flame and all six tribes. Warriors from every clan fight desperately on the ramparts. In the skies, Chasca rides the fiery drafts while Mavuika burns her divine vitality to keep the sacred ward ablaze.',
    version: '5.1',
    keyCharacters: ['Mavuika', 'Chasca', 'Citlali', 'Ororon', 'Il Capitano'],
    prerequisites: 'Complete Chapter V: Act III'
  },
  {
    id: 'aq-5-5',
    title: 'All Fires Fuel the Flame',
    act: 'Act V',
    chapter: 'Chapter V: Natlan',
    type: 'Archon Quest',
    region: 'Natlan',
    rewards: { primogems: 120, exp: 2800, mora: 160000, items: ['Memory of the Sacred Flame', 'Crown of Insight'] },
    summary: 'The ultimate counteroffensive against the Abyssal Core. Uniting the six Ancient Names and the Dragon Sovereign pact with Xbalanque, Mavuika and the Traveler plunge into the heart of the Night Kingdom, shattering the abyssal corruption root and establishing permanent rebirth for Natlan\'s warriors.',
    version: '5.3',
    keyCharacters: ['Mavuika', 'Traveler', 'Xbalanque', 'Il Capitano', 'Citlali', 'Ororon'],
    prerequisites: 'Complete Chapter V: Act IV'
  },

  // ==========================================
  // SACRED WORLD QUESTLINES & MYTHOS
  // ==========================================
  {
    id: 'wq-sakura',
    title: 'Sacred Sakura Cleansing Ritual',
    act: 'Complete Saga',
    chapter: 'Sacred World Quests',
    type: 'World Quest',
    region: 'Inazuma',
    rewards: { primogems: 220, exp: 3200, mora: 220000, items: ['Mask of Memories', 'Hakushin Ring Blueprint'] },
    summary: 'Meeting the shrine maiden Kazari (Hanachirusato) at Konda Village, the Traveler breaks five ancient subterranean seals across Narukami Island, purifying the roots of the Sacred Sakura and defeating the Miasmic Tumor born from Kitsune Saiguu\'s dying filth.',
    version: '2.0',
    keyCharacters: ['Kazari (Hanachirusato)', 'Kitsune Saiguu memory'],
    prerequisites: 'Escape Ritou in Inazuma'
  },
  {
    id: 'wq-aranyaka',
    title: 'Aranyaka: Children of the Forest',
    act: 'Episodes I - IV',
    chapter: 'Sacred World Quests',
    type: 'World Quest',
    region: 'Sumeru',
    rewards: { primogems: 380, exp: 5000, mora: 350000, items: ['Vintage Lyre', 'Bija of Memory', 'Aranyaka Journal'] },
    summary: 'The vast epic of the Aranara spirits in the dream world of Vanarana. Across the Varuna Gatha, Vimana Agama, and Agnihotra Sutra, the Traveler restores the leylines, repairs the ancient Ruin Golem of Devantaka, and enters the Old Vanarana dream to purify the avatar of Marana (The Withering).',
    version: '3.0',
    keyCharacters: ['Arama', 'Arabalika', 'Rana', 'Marana'],
    prerequisites: 'Save Rana in Avidya Forest'
  },
  {
    id: 'wq-dirge',
    title: 'The Dirge of Bilqis & Golden Slumber',
    act: 'Desert Saga',
    chapter: 'Sacred World Quests',
    type: 'World Quest',
    region: 'Sumeru',
    rewards: { primogems: 320, exp: 4200, mora: 280000, items: ['Jinni in the Magic Bottle: Liloupar', 'Scarlet Sand Slate'] },
    summary: 'Accompanied by the fiery Eremite Jeht and the Jinni Liloupar, the Traveler unlocks the mausoleum of King Deshret and explores the ancient underground ruin city of Gurabad, discovering the tragic hubris of King Deshret and Queen Aranyani.',
    version: '3.1',
    keyCharacters: ['Jeht', 'Jebrael', 'Liloupar', 'Babel'],
    prerequisites: 'Enter the Great Red Sand Desert'
  },
  {
    id: 'wq-narzissen',
    title: 'In the Wake of Narcissus & Narzissenkreuz Ordo',
    act: 'Fontaine Epic',
    chapter: 'Sacred World Quests',
    type: 'World Quest',
    region: 'Fontaine',
    rewards: { primogems: 360, exp: 4800, mora: 320000, items: ['Sword of Narzissenkreuz', 'Mini Oceanid Ann'] },
    summary: 'Four interconnected questlines (Ann of the Narzissenkreuz, Ancient Colors, Unfinished Comedy) converge in the Tower of Gestalt. Rene (Master Narzissenkreuz) attempts to fuse all Fontainian wills into a single cosmic mind to survive the apocalypse, until the Traveler reforges the holy sword of reason and awakens Mary-Ann.',
    version: '4.0',
    keyCharacters: ['Ann', 'Seymour', 'Caterpillar', 'Mary-Ann', 'Rene de Petrichor'],
    prerequisites: 'Explore Annapausis and Merusea Village'
  }
];
export const QUESTS_DATA: Quest[] = sortByReleaseDesc(RAW_QUESTS);
