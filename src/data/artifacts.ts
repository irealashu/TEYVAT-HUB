import { ArtifactSet } from '../types';
import { sortByReleaseDesc } from '../utils/versionSort';

const RAW_ARTIFACTS: ArtifactSet[] = [
  {
    "id": "a-day-carved-from-rising-winds",
    "name": "A Day Carved From Rising Winds",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Windborne Flower's Spruchdichtung",
      "plume": "Dawn's Brilliant Oath",
      "sands": "A Note in Spring's Leich",
      "goblet": "Heldenepos's Unspoken Tale",
      "circlet": "Minnesang of Love and Lament"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15044_4.png"
  },
  {
    "id": "adventurer",
    "name": "Adventurer",
    "maxRarity": 3,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Adventurer's Flower",
      "plume": "Adventurer's Tail Feather",
      "sands": "Adventurer's Pocket Watch",
      "goblet": "Adventurer's Golden Goblet",
      "circlet": "Adventurer's Bandana"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10010_4.png"
  },
  {
    "id": "archaic-petra",
    "name": "Archaic Petra",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Flower of Creviced Cliff",
      "plume": "Feather of Jagged Peaks",
      "sands": "Sundial of Enduring Jade",
      "goblet": "Goblet of Chiseled Crag",
      "circlet": "Mask of Solitude Basalt"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15014_4.png"
  },
  {
    "id": "aubade-of-morningstar-and-moon",
    "name": "Aubade of Morningstar and Moon",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Moonlit Offering's Opulent Dream",
      "plume": "Moonlit Offering's Parting Light",
      "sands": "Moonlit Offering's Final Hour",
      "goblet": "Moonlit Offering's Libation",
      "circlet": "Moonlit Offering's Silver Crown"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15043_4.png"
  },
  {
    "id": "berserker",
    "name": "Berserker",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Berserker's Rose",
      "plume": "Berserker's Indigo Feather",
      "sands": "Berserker's Timepiece",
      "goblet": "Berserker's Bone Goblet",
      "circlet": "Berserker's Battle Mask"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10005_4.png"
  },
  {
    "id": "blizzard-strayer",
    "name": "Blizzard Strayer",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Snowswept Memory",
      "plume": "Icebreaker's Resolve",
      "sands": "Frozen Homeland's Demise",
      "goblet": "Frost-Weaved Dignity",
      "circlet": "Broken Rime's Echo"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_14001_4.png"
  },
  {
    "id": "bloodstained-chivalry",
    "name": "Bloodstained Chivalry",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Bloodstained Flower of Iron",
      "plume": "Bloodstained Black Plume",
      "sands": "Bloodstained Final Hour",
      "goblet": "Bloodstained Chevalier's Goblet",
      "circlet": "Bloodstained Iron Mask"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15008_4.png"
  },
  {
    "id": "brave-heart",
    "name": "Brave Heart",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Medal of the Brave",
      "plume": "Prospect of the Brave",
      "sands": "Fortitude of the Brave",
      "goblet": "Outset of the Brave",
      "circlet": "Crown of the Brave"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10002_4.png"
  },
  {
    "id": "celestial-gift",
    "name": "Celestial Gift",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Heavensent Fragrance",
      "plume": "Heavensent Demise",
      "sands": "Heavensent Decree",
      "goblet": "Heavensent Reward",
      "circlet": "Heavensent Crown"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15045_4.png"
  },
  {
    "id": "crimson-witch-of-flames",
    "name": "Crimson Witch of Flames",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Witch's Flower of Blaze",
      "plume": "Witch's Ever-Burning Plume",
      "sands": "Witch's End Time",
      "goblet": "Witch's Heart Flames",
      "circlet": "Witch's Scorching Hat"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15006_4.png"
  },
  {
    "id": "deepwood-memories",
    "name": "Deepwood Memories",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Labyrinth Wayfarer",
      "plume": "Scholar of Vines",
      "sands": "A Time of Insight",
      "goblet": "Lamp of the Lost",
      "circlet": "Laurel Coronet"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15025_4.png"
  },
  {
    "id": "defender-s-will",
    "name": "Defender's Will",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Guardian's Flower",
      "plume": "Guardian's Sigil",
      "sands": "Guardian's Clock",
      "goblet": "Guardian's Vessel",
      "circlet": "Guardian's Band"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10003_4.png"
  },
  {
    "id": "desert-pavilion-chronicle",
    "name": "Desert Pavilion Chronicle",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "The First Days of the City of Kings",
      "plume": "End of the Golden Realm",
      "sands": "Timepiece of the Lost Path",
      "goblet": "Defender of the Enchanting Dream",
      "circlet": "Legacy of the Desert High-Born"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15027_4.png"
  },
  {
    "id": "disenchantment-in-deep-shadow",
    "name": "Disenchantment in Deep Shadow",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Iridescence That Ceased Amidst Glory",
      "plume": "Sharpness That Ceased Upon Wondrous Creation",
      "sands": "Moment That Ceased Upon Waking From Grand Dreams",
      "goblet": "Ovations That Ceased Upon Festivity",
      "circlet": "Pendulum That Ceased Amidst a Great Fall"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15046_4.png"
  },
  {
    "id": "echoes-of-an-offering",
    "name": "Echoes of an Offering",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Soulscent Bloom",
      "plume": "Jade Leaf",
      "sands": "Symbol of Felicitation",
      "goblet": "Chalice of the Font",
      "circlet": "Flowing Rings"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15024_4.png"
  },
  {
    "id": "emblem-of-severed-fate",
    "name": "Emblem of Severed Fate",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Magnificent Tsuba",
      "plume": "Sundered Feather",
      "sands": "Storm Cage",
      "goblet": "Scarlet Vessel",
      "circlet": "Ornate Kabuto"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15020_4.png"
  },
  {
    "id": "finale-of-the-deep-galleries",
    "name": "Finale of the Deep Galleries",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Deep Gallery's Echoing Song",
      "plume": "Deep Gallery's Distant Pact",
      "sands": "Deep Gallery's Moment of Oblivion",
      "goblet": "Deep Gallery's Bestowed Banquet",
      "circlet": "Deep Gallery's Lost Crown"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15040_4.png"
  },
  {
    "id": "flower-of-paradise-lost",
    "name": "Flower of Paradise Lost",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Ay-Khanoum's Myriad",
      "plume": "Wilting Feast",
      "sands": "A Moment Congealed",
      "goblet": "Secret-Keeper's Magic Bottle",
      "circlet": "Amethyst Crown"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15028_4.png"
  },
  {
    "id": "fragment-of-harmonic-whimsy",
    "name": "Fragment of Harmonic Whimsy",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Harmonious Symphony Prelude",
      "plume": "Ancient Sea's Nocturnal Musing",
      "sands": "The Grand Jape of the Turning of Fate",
      "goblet": "Ichor Shower Rhapsody",
      "circlet": "Whimsical Dance of the Withered"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15035_4.png"
  },
  {
    "id": "gambler",
    "name": "Gambler",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Gambler's Brooch",
      "plume": "Gambler's Feather Accessory",
      "sands": "Gambler's Pocket Watch",
      "goblet": "Gambler's Dice Cup",
      "circlet": "Gambler's Earrings"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10008_4.png"
  },
  {
    "id": "gilded-dreams",
    "name": "Gilded Dreams",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Dreaming Steelbloom",
      "plume": "Feather of Judgment",
      "sands": "The Sunken Years",
      "goblet": "Honeyed Final Feast",
      "circlet": "Shadow of the Sand King"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15026_4.png"
  },
  {
    "id": "gladiator-s-finale",
    "name": "Gladiator's Finale",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Gladiator's Nostalgia",
      "plume": "Gladiator's Destiny",
      "sands": "Gladiator's Longing",
      "goblet": "Gladiator's Intoxication",
      "circlet": "Gladiator's Triumphus"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15001_4.png"
  },
  {
    "id": "golden-troupe",
    "name": "Golden Troupe",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Golden Song's Variation",
      "plume": "Golden Bird's Shedding",
      "sands": "Golden Era's Prelude",
      "goblet": "Golden Night's Bustle",
      "circlet": "Golden Troupe's Reward"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15032_4.png"
  },
  {
    "id": "heart-of-depth",
    "name": "Heart of Depth",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Gilded Corsage",
      "plume": "Gust of Nostalgia",
      "sands": "Copper Compass",
      "goblet": "Goblet of Thundering Deep",
      "circlet": "Wine-Stained Tricorne"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15016_4.png"
  },
  {
    "id": "heart-of-the-furnace",
    "name": "Heart of the Furnace",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Foundryman's Conjecture",
      "plume": "Foundryman's Observation",
      "sands": "Foundryman's Calculus",
      "goblet": "Foundryman's Magnanimity",
      "circlet": "Foundryman's Legacy"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15048_4.png"
  },
  {
    "id": "husk-of-opulent-dreams",
    "name": "Husk of Opulent Dreams",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Bloom Times",
      "plume": "Plume of Luxury",
      "sands": "Song of Life",
      "goblet": "Calabash of Awakening",
      "circlet": "Skeletal Hat"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15021_4.png"
  },
  {
    "id": "instructor",
    "name": "Instructor",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Instructor's Brooch",
      "plume": "Instructor's Feather Accessory",
      "sands": "Instructor's Pocket Watch",
      "goblet": "Instructor's Tea Cup",
      "circlet": "Instructor's Cap"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10007_4.png"
  },
  {
    "id": "lavawalker",
    "name": "Lavawalker",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Lavawalker's Resolution",
      "plume": "Lavawalker's Salvation",
      "sands": "Lavawalker's Torment",
      "goblet": "Lavawalker's Epiphany",
      "circlet": "Lavawalker's Wisdom"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_14003_4.png"
  },
  {
    "id": "long-night-s-oath",
    "name": "Long Night's Oath",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Lightkeeper's Pledge",
      "plume": "Nightingale's Tail Feather",
      "sands": "Undying One's Mourning Bell",
      "goblet": "A Horn Unwinded",
      "circlet": "Dyed Tassel"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15039_4.png"
  },
  {
    "id": "lucky-dog",
    "name": "Lucky Dog",
    "maxRarity": 3,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Lucky Dog's Clover",
      "plume": "Lucky Dog's Eagle Feather",
      "sands": "Lucky Dog's Hourglass",
      "goblet": "Lucky Dog's Goblet",
      "circlet": "Lucky Dog's Silver Circlet"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10011_4.png"
  },
  {
    "id": "maiden-beloved",
    "name": "Maiden Beloved",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Maiden's Distant Love",
      "plume": "Maiden's Heart-stricken Infatuation",
      "sands": "Maiden's Passing Youth",
      "goblet": "Maiden's Fleeting Leisure",
      "circlet": "Maiden's Fading Beauty"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_14004_4.png"
  },
  {
    "id": "marechaussee-hunter",
    "name": "Marechaussee Hunter",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Hunter's Brooch",
      "plume": "Masterpiece's Overture",
      "sands": "Moment of Judgment",
      "goblet": "Forgotten Vessel",
      "circlet": "Veteran's Visage"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15031_4.png"
  },
  {
    "id": "martial-artist",
    "name": "Martial Artist",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Martial Artist's Red Flower",
      "plume": "Martial Artist's Feather Accessory",
      "sands": "Martial Artist's Water Hourglass",
      "goblet": "Martial Artist's Wine Cup",
      "circlet": "Martial Artist's Bandana"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10006_4.png"
  },
  {
    "id": "night-of-the-sky-s-unveiling",
    "name": "Night of the Sky's Unveiling",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Bloom of the Mind's Desire",
      "plume": "Feather of Indelible Sin",
      "sands": "Revelation's Toll",
      "goblet": "Vessel of Plenty",
      "circlet": "Crown of the Befallen"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15041_4.png"
  },
  {
    "id": "nighttime-whispers-in-the-echoing-woods",
    "name": "Nighttime Whispers in the Echoing Woods",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Selfless Floral Accessory",
      "plume": "Honest Quill",
      "sands": "Faithful Hourglass",
      "goblet": "Magnanimous Ink Bottle",
      "circlet": "Compassionate Ladies' Hat"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15034_4.png"
  },
  {
    "id": "noblesse-oblige",
    "name": "Noblesse Oblige",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Royal Flora",
      "plume": "Royal Plume",
      "sands": "Royal Pocket Watch",
      "goblet": "Royal Silver Urn",
      "circlet": "Royal Masque"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15007_4.png"
  },
  {
    "id": "nymph-s-dream",
    "name": "Nymph's Dream",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Odyssean Flower",
      "plume": "Wicked Mage's Plumule",
      "sands": "Nymph's Constancy",
      "goblet": "Heroes' Tea Party",
      "circlet": "Fell Dragon's Monocle"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15029_4.png"
  },
  {
    "id": "obsidian-codex",
    "name": "Obsidian Codex",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Reckoning of the Xenogenic",
      "plume": "Root of the Spirit-Marrow",
      "sands": "Myths of the Night Realm",
      "goblet": "Pre-Banquet of the Contenders",
      "circlet": "Crown of the Saints"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15038_4.png"
  },
  {
    "id": "ocean-hued-clam",
    "name": "Ocean-Hued Clam",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Sea-Dyed Blossom",
      "plume": "Deep Palace's Plume",
      "sands": "Cowry of Parting",
      "goblet": "Pearl Cage",
      "circlet": "Crown of Watatsumi"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15022_4.png"
  },
  {
    "id": "pale-flame",
    "name": "Pale Flame",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Stainless Bloom",
      "plume": "Wise Doctor's Pinion",
      "sands": "Moment of Cessation",
      "goblet": "Surpassing Cup",
      "circlet": "Mocking Mask"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15018_4.png"
  },
  {
    "id": "prayers-for-destiny",
    "name": "Prayers for Destiny",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Prayers for Destiny Flower",
      "plume": "Prayers for Destiny Plume",
      "sands": "Prayers for Destiny Sands",
      "goblet": "Prayers for Destiny Goblet",
      "circlet": "Tiara of Torrents"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15010_3.png"
  },
  {
    "id": "prayers-for-illumination",
    "name": "Prayers for Illumination",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Prayers for Illumination Flower",
      "plume": "Prayers for Illumination Plume",
      "sands": "Prayers for Illumination Sands",
      "goblet": "Prayers for Illumination Goblet",
      "circlet": "Tiara of Flame"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15009_3.png"
  },
  {
    "id": "prayers-for-wisdom",
    "name": "Prayers for Wisdom",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Prayers for Wisdom Flower",
      "plume": "Prayers for Wisdom Plume",
      "sands": "Prayers for Wisdom Sands",
      "goblet": "Prayers for Wisdom Goblet",
      "circlet": "Tiara of Thunder"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15011_3.png"
  },
  {
    "id": "prayers-to-springtime",
    "name": "Prayers to Springtime",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Prayers to Springtime Flower",
      "plume": "Prayers to Springtime Plume",
      "sands": "Prayers to Springtime Sands",
      "goblet": "Prayers to Springtime Goblet",
      "circlet": "Tiara of Frost"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15013_3.png"
  },
  {
    "id": "resolution-of-sojourner",
    "name": "Resolution of Sojourner",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Heart of Comradeship",
      "plume": "Feather of Homecoming",
      "sands": "Sundial of the Sojourner",
      "goblet": "Goblet of the Sojourner",
      "circlet": "Crown of Parting"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10001_4.png"
  },
  {
    "id": "retracing-bolide",
    "name": "Retracing Bolide",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Summer Night's Bloom",
      "plume": "Summer Night's Finale",
      "sands": "Summer Night's Moment",
      "goblet": "Summer Night's Waterballoon",
      "circlet": "Summer Night's Mask"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15015_4.png"
  },
  {
    "id": "scarlet-proof",
    "name": "Scarlet Proof",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Honor to Your Devotion",
      "plume": "Glory to Your Legacy",
      "sands": "Time Gifted Unto You",
      "goblet": "Chalice of Your Blood and Sorrow",
      "circlet": "Testament to Your Faith"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15047_4.png"
  },
  {
    "id": "scholar",
    "name": "Scholar",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Scholar's Bookmark",
      "plume": "Scholar's Quill Pen",
      "sands": "Scholar's Clock",
      "goblet": "Scholar's Ink Cup",
      "circlet": "Scholar's Lens"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10012_4.png"
  },
  {
    "id": "scroll-of-the-hero-of-cinder-city",
    "name": "Scroll of the Hero of Cinder City",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Beast Tamer's Talisman",
      "plume": "Mountain Ranger's Marker",
      "sands": "Mystic's Gold Dial",
      "goblet": "Wandering Scholar's Claw Cup",
      "circlet": "Demon-Warrior's Feather Mask"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15037_4.png"
  },
  {
    "id": "shimenawa-s-reminiscence",
    "name": "Shimenawa's Reminiscence",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Entangling Bloom",
      "plume": "Shaft of Remembrance",
      "sands": "Morning Dew's Moment",
      "goblet": "Hopeful Heart",
      "circlet": "Capricious Visage"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15019_4.png"
  },
  {
    "id": "silken-moon-s-serenade",
    "name": "Silken Moon's Serenade",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Crystal Tear of the Wanderer",
      "plume": "Pristine Plume of the Blessed",
      "sands": "Frost Devotee's Delirium",
      "goblet": "Joyous Glory of the Pure",
      "circlet": "Holy Crown of the Believer"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15042_4.png"
  },
  {
    "id": "song-of-days-past",
    "name": "Song of Days Past",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Forgotten Oath of Days Past",
      "plume": "Recollection of Days Past",
      "sands": "Echoing Sound From Days Past",
      "goblet": "Promised Dream of Days Past",
      "circlet": "Poetry of Days Past"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15033_4.png"
  },
  {
    "id": "tenacity-of-the-millelith",
    "name": "Tenacity of the Millelith",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Flower of Accolades",
      "plume": "Ceremonial War-Plume",
      "sands": "Orichalceous Time-Dial",
      "goblet": "Noble's Pledging Vessel",
      "circlet": "General's Ancient Helm"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15017_4.png"
  },
  {
    "id": "the-exile",
    "name": "The Exile",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Exile's Flower",
      "plume": "Exile's Feather",
      "sands": "Exile's Pocket Watch",
      "goblet": "Exile's Goblet",
      "circlet": "Exile's Circlet"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10009_4.png"
  },
  {
    "id": "thundering-fury",
    "name": "Thundering Fury",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Thunderbird's Mercy",
      "plume": "Survivor of Catastrophe",
      "sands": "Hourglass of Thunder",
      "goblet": "Omen of Thunderstorm",
      "circlet": "Thunder Summoner's Crown"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15005_4.png"
  },
  {
    "id": "thundersoother",
    "name": "Thundersoother",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Thundersoother's Heart",
      "plume": "Thundersoother's Plume",
      "sands": "Hour of Soothing Thunder",
      "goblet": "Thundersoother's Goblet",
      "circlet": "Thundersoother's Diadem"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_14002_4.png"
  },
  {
    "id": "tiny-miracle",
    "name": "Tiny Miracle",
    "maxRarity": 4,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Tiny Miracle's Flower",
      "plume": "Tiny Miracle's Feather",
      "sands": "Tiny Miracle's Hourglass",
      "goblet": "Tiny Miracle's Goblet",
      "circlet": "Tiny Miracle's Earrings"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10004_4.png"
  },
  {
    "id": "traveling-doctor",
    "name": "Traveling Doctor",
    "maxRarity": 3,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Traveling Doctor's Silver Lotus",
      "plume": "Traveling Doctor's Owl Feather",
      "sands": "Traveling Doctor's Pocket Watch",
      "goblet": "Traveling Doctor's Medicine Pot",
      "circlet": "Traveling Doctor's Handkerchief"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_10013_4.png"
  },
  {
    "id": "unfinished-reverie",
    "name": "Unfinished Reverie",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Dark Fruit of Bright Flowers",
      "plume": "Faded Emerald Tail",
      "sands": "Moment of Attainment",
      "goblet": "The Wine-Flask Over Which the Plan Was Hatched",
      "circlet": "Crownless Crown"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15036_4.png"
  },
  {
    "id": "vermillion-hereafter",
    "name": "Vermillion Hereafter",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Flowering Life",
      "plume": "Feather of Nascent Light",
      "sands": "Solar Relic",
      "goblet": "Moment of the Pact",
      "circlet": "Thundering Poise"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15023_4.png"
  },
  {
    "id": "viridescent-venerer",
    "name": "Viridescent Venerer",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "In Remembrance of Viridescent Fields",
      "plume": "Viridescent Arrow Feather",
      "sands": "Viridescent Venerer's Determination",
      "goblet": "Viridescent Venerer's Vessel",
      "circlet": "Viridescent Venerer's Diadem"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15002_4.png"
  },
  {
    "id": "vourukasha-s-glow",
    "name": "Vourukasha's Glow",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Stamen of Khvarena's Origin",
      "plume": "Vibrant Pinion",
      "sands": "Ancient Abscission",
      "goblet": "Feast of Boundless Joy",
      "circlet": "Heart of Khvarena's Brilliance"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15030_4.png"
  },
  {
    "id": "wanderer-s-troupe",
    "name": "Wanderer's Troupe",
    "maxRarity": 5,
    "twoPieceBonus": "Increases attributes.",
    "fourPieceBonus": "Enhances team reactions and ability damage.",
    "pieces": {
      "flower": "Troupe's Dawnlight",
      "plume": "Bard's Arrow Feather",
      "sands": "Concert's Final Hour",
      "goblet": "Wanderer's String-Kettle",
      "circlet": "Conductor's Top Hat"
    },
    "domain": "Domain of Blessing",
    "region": "Teyvat",
    "recommendedFor": [
      "Mavuika",
      "Xilonen",
      "Furina",
      "Neuvillette",
      "Arlecchino"
    ],
    "icon": "/images/artifacts/UI_RelicIcon_15003_4.png"
  }
];
export const ARTIFACTS_DATA: ArtifactSet[] = sortByReleaseDesc(RAW_ARTIFACTS);
