export type ElementType = 'Pyro' | 'Hydro' | 'Anemo' | 'Electro' | 'Dendro' | 'Cryo' | 'Geo' | 'None';

export type WeaponType = 'Sword' | 'Claymore' | 'Polearm' | 'Bow' | 'Catalyst';

export type Region = 
  | 'Mondstadt' 
  | 'Liyue' 
  | 'Inazuma' 
  | 'Sumeru' 
  | 'Fontaine' 
  | 'Natlan' 
  | 'Snezhnaya'
  | 'Nod-Krai'
  | 'Teyvat'
  | 'Other';

export type Rarity = 1 | 2 | 3 | 4 | 5;

export interface CharacterStat {
  level: number;
  hp: number;
  atk: number;
  def: number;
  ascensionStat: string;
  ascensionValue: string;
}

export interface Talent {
  name: string;
  type: 'Normal Attack' | 'Elemental Skill' | 'Elemental Burst' | '1st Ascension Passive' | '4th Ascension Passive' | 'Utility Passive';
  description: string;
  icon?: string;
  scaling?: { label: string; values: string[] }[];
}

export interface Constellation {
  level: number;
  name: string;
  description: string;
  icon?: string;
}

export interface Character {
  id: string;
  name: string;
  title: string;
  rarity: number;
  element: ElementType;
  weaponType: WeaponType;
  region: Region | string;
  affiliation: string;
  role: 'Main DPS' | 'Sub DPS' | 'Support' | 'Healer' | 'Shielder';
  version: string;
  releaseDate: string;
  avatar: string;
  splashArt?: string;
  description: string;
  baseStatsLvl90: {
    hp: number;
    atk: number;
    def: number;
    ascensionStat: string;
    ascensionValue: string;
  };
  statProgression: CharacterStat[];
  talents: Talent[];
  constellations: Constellation[];
  recommendedWeapons: { name: string; rarity: number; reason: string }[];
  recommendedArtifacts: { name: string; pieces: 2 | 4; mainStats: { sands: string; goblet: string; circlet: string } }[];
  synergies: string[];
  ascensionMaterials: {
    gem: string;
    bossMat: string;
    localSpecialty: string;
    commonDrop: string;
    talentBook: string;
    weeklyBossMat: string;
  };
}

export interface Weapon {
  id: string;
  name: string;
  rarity: number;
  type: WeaponType;
  baseAtkLvl90: number;
  subStatType: string;
  subStatValueLvl90: string;
  passiveName: string;
  passiveDesc: string;
  refinements: string[];
  ascensionMaterial: string;
  introducedVersion: string;
  icon: string;
}

export interface ArtifactSet {
  id: string;
  name: string;
  maxRarity: number;
  twoPieceBonus: string;
  fourPieceBonus: string;
  pieces: {
    flower: string;
    plume: string;
    sands: string;
    goblet: string;
    circlet: string;
  };
  domain: string;
  region: Region | string;
  recommendedFor: string[];
  icon: string;
}

export interface TeamMember {
  characterId: string;
  weaponId?: string;
  artifactSetId?: string;
  role: string;
}

export interface TeamPreset {
  id: string;
  name: string;
  description: string;
  characters: string[]; // character IDs
  primaryReaction: string;
  rotationNotes: string;
  synergyScore: number;
}

export interface Material {
  id: string;
  name: string;
  category: 'Local Specialty' | 'Talent Book' | 'Weapon Material' | 'Boss Drop' | 'Weekly Boss Drop' | 'Common Material' | 'Gemstone';
  rarity: Rarity;
  region: Region;
  sources: string[];
  farmDays?: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[];
  usedByCharacters?: string[];
  icon: string;
}

export interface DomainEntry {
  id: string;
  name: string;
  region: Region;
  type: 'Talent Books' | 'Weapon Materials' | 'Artifacts' | 'Trounce (Weekly)';
  schedule: {
    [key in 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday']?: string[];
  };
  location: string;
  drops: string[];
}

export interface Enemy {
  id: string;
  name: string;
  category: 'Normal' | 'Elite' | 'World Boss' | 'Weekly Boss';
  elementalAffinity: ElementType[];
  region: Region;
  location: string;
  drops: string[];
  description: string;
  combatTips: string;
  icon: string;
}

export interface Quest {
  id: string;
  title: string;
  act: string;
  chapter: string;
  type: 'Archon Quest' | 'Story Quest' | 'World Quest' | 'Interlude Chapter';
  region: Region;
  rewards: { primogems?: number; exp?: number; mora?: number; items?: string[] };
  summary: string;
  version: string;
  keyCharacters?: string[];
  prerequisites?: string;
}

export interface Recipe {
  id: string;
  name: string;
  rarity: 1 | 2 | 3 | 4 | 5;
  category: 'Recovery' | 'ATK-Boosting' | 'DEF-Boosting' | 'Adventurer';
  effect: string;
  ingredients: { name: string; count: number }[];
  specialtyCharacter?: string;
  specialtyDish?: string;
}

export interface Achievement {
  id: string;
  name: string;
  category: string;
  description: string;
  primogems: number;
  version?: string;
  isSecret?: boolean;
  requirements?: string;
}

export interface MapMarker {
  id: string;
  name: string;
  category: 'waypoint' | 'statue' | 'oculus' | 'boss' | 'domain' | 'specialty' | 'chest';
  region: Region;
  x: number; // percentage 0-100 on map
  y: number; // percentage 0-100 on map
  description: string;
  collected?: boolean;
}

export interface WishPull {
  id: string;
  itemType: 'character' | 'weapon';
  itemId: string;
  name: string;
  rarity: 3 | 4 | 5;
  element?: ElementType;
  pityCount: number;
  isWon5050?: boolean;
  timestamp: string;
  bannerType: 'character' | 'weapon' | 'standard';
}
