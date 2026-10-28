import { Character } from '../types';
import { sortByReleaseDesc } from '../utils/versionSort';

const RAW_CHARACTERS: Character[] = [
  {
    "id": "aether",
    "name": "Aether",
    "title": "Aether",
    "rarity": 5,
    "element": "None",
    "weaponType": "Sword",
    "region": "Other",
    "affiliation": "Teyvat",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_PlayerBoy.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_PlayerBoy.png",
    "description": "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
    "baseStatsLvl90": {
      "hp": 10875,
      "atk": 212,
      "def": 683,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 870,
        "atk": 17,
        "def": 55,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2175,
        "atk": 42,
        "def": 137,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5437,
        "atk": 106,
        "def": 341,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8156,
        "atk": 159,
        "def": 512,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10875,
        "atk": 212,
        "def": 683,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [],
    "constellations": [],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "None DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "None DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "None Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Brilliant Diamond Sliver",
      "commonDrop": "Windwheel Aster",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "aino",
    "name": "Aino",
    "title": "Clinky-Clank Gadgets-A-Gogo",
    "rarity": 4,
    "element": "Hydro",
    "weaponType": "Claymore",
    "region": "Nod-Krai",
    "affiliation": "Clink-Clank Krumkake Craftshop",
    "role": "Support",
    "version": "6.0",
    "releaseDate": "v6.0",
    "avatar": "/images/characters/UI_AvatarIcon_Aino.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Aino.png",
    "description": "A genius mechanic and inventor from Nod-Krai who loves interesting machines and sweet treats.",
    "baseStatsLvl90": {
      "hp": 11201,
      "atk": 242,
      "def": 607,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "96"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 896,
        "atk": 19,
        "def": 49,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2240,
        "atk": 48,
        "def": 121,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5601,
        "atk": 121,
        "def": 304,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8401,
        "atk": 182,
        "def": 456,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11201,
        "atk": 242,
        "def": 607,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "96"
      }
    ],
    "talents": [
      {
        "name": "Bish-Bash-Bosh Repair",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Musecatcher",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Precision Hydronic Cooler",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Modular Efficiency Protocol",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Structured Power Booster",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Force Limit Analysis",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "The Theory of Ash—Field Equilibrium",
        "description": ""
      },
      {
        "level": 2,
        "name": "The Principle of Transference in Gear Differentials",
        "description": ""
      },
      {
        "level": 3,
        "name": "Cake and the Art of Mechanism Repair",
        "description": ""
      },
      {
        "level": 4,
        "name": "Butter and Cats and the Law of Energy Supply",
        "description": ""
      },
      {
        "level": 5,
        "name": "Perpetual Turbine of Metal and Light",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Burden of Creative Genius",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Portable Bearing",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "albedo",
    "name": "Albedo",
    "title": "Kreideprinz",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Sword",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "1.2",
    "releaseDate": "v1.2",
    "avatar": "/images/characters/UI_AvatarIcon_Albedo.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Albedo.png",
    "description": "A genius known as the Kreideprinz, he is the Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius.",
    "baseStatsLvl90": {
      "hp": 13226,
      "atk": 251,
      "def": 876,
      "ascensionStat": "Geo DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1058,
        "atk": 20,
        "def": 70,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2645,
        "atk": 50,
        "def": 175,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6613,
        "atk": 126,
        "def": 438,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9919,
        "atk": 188,
        "def": 657,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13226,
        "atk": 251,
        "def": 876,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Favonius Bladework - Weiss",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Abiogenesis: Solar Isotoma",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Rite of Progeniture: Tectonic Tide",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Calcite Might",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Homuncular Nature",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Flash of Genius",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Flower of Eden",
        "description": ""
      },
      {
        "level": 2,
        "name": "Opening of Phanerozoic",
        "description": ""
      },
      {
        "level": 3,
        "name": "Grace of Helios",
        "description": ""
      },
      {
        "level": 4,
        "name": "Descent of Divinity",
        "description": ""
      },
      {
        "level": 5,
        "name": "Tide of Hadean",
        "description": ""
      },
      {
        "level": 6,
        "name": "Dust of Purification",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Cecilia",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "alhaitham",
    "name": "Alhaitham",
    "title": "Admonishing Instruction",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Sword",
    "region": "Sumeru",
    "affiliation": "Sumeru Akademiya",
    "role": "Main DPS",
    "version": "3.4",
    "releaseDate": "v3.4",
    "avatar": "/images/characters/UI_AvatarIcon_Alhatham.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Alhatham.png",
    "description": "The current scribe of the Sumeru Akademiya, a man endowed with extraordinary intelligence and talent. He lives free — free from the searching eyes of ordinary people, anyway.",
    "baseStatsLvl90": {
      "hp": 13348,
      "atk": 313,
      "def": 782,
      "ascensionStat": "Dendro DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1068,
        "atk": 25,
        "def": 63,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2670,
        "atk": 63,
        "def": 156,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6674,
        "atk": 157,
        "def": 391,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10011,
        "atk": 235,
        "def": 586,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13348,
        "atk": 313,
        "def": 782,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Abductive Reasoning",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Universality: An Elaboration on Form",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Particular Field: Fetters of Phenomena",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Four-Causal Correction",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Mysteries Laid Bare",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Law of Reductive Overdetermination",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Intuition",
        "description": ""
      },
      {
        "level": 2,
        "name": "Debate",
        "description": ""
      },
      {
        "level": 3,
        "name": "Negation",
        "description": ""
      },
      {
        "level": 4,
        "name": "Elucidation",
        "description": ""
      },
      {
        "level": 5,
        "name": "Sagacity",
        "description": ""
      },
      {
        "level": 6,
        "name": "Structuration",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Sand Grease Pupa",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "aloy",
    "name": "Aloy",
    "title": "Savior From Another World",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Bow",
    "region": "Other",
    "affiliation": "Wandering Heroine",
    "role": "Main DPS",
    "version": "2.1",
    "releaseDate": "v2.1",
    "avatar": "/images/characters/UI_AvatarIcon_Aloy.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Aloy.png",
    "description": "Formerly an outcast, now a hunter of unparalleled skill. Ready to do the right thing at any time.",
    "baseStatsLvl90": {
      "hp": 10899,
      "atk": 234,
      "def": 676,
      "ascensionStat": "Cryo DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 872,
        "atk": 19,
        "def": 54,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2180,
        "atk": 47,
        "def": 135,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5449,
        "atk": 117,
        "def": 338,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8174,
        "atk": 175,
        "def": 507,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10899,
        "atk": 234,
        "def": 676,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Rapid Fire",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Frozen Wilds",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Prophecies of Dawn",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Combat Override",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Strong Strike",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Easy Does It",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Star of Another World",
        "description": ""
      },
      {
        "level": 2,
        "name": "Star of Another World",
        "description": ""
      },
      {
        "level": 3,
        "name": "Star of Another World",
        "description": ""
      },
      {
        "level": 4,
        "name": "Star of Another World",
        "description": ""
      },
      {
        "level": 5,
        "name": "Star of Another World",
        "description": ""
      },
      {
        "level": 6,
        "name": "Star of Another World",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Crystal Marrow",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "alyosha",
    "name": "Alyosha",
    "title": "Swift-Striding Hound",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Polearm",
    "region": "Other",
    "affiliation": "Snezhnaya",
    "role": "Support",
    "version": "7.0",
    "releaseDate": "v7.0",
    "avatar": "/images/characters/UI_AvatarIcon_Alyosha.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Alyosha.png",
    "description": "A \"professional hunter\" and master of the Snezhnayan snowfields. A fierce, distinct \"idealism\" burns beneath his calm demeanor.",
    "baseStatsLvl90": {
      "hp": 11962,
      "atk": 265,
      "def": 703,
      "ascensionStat": "Energy Recharge",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 957,
        "atk": 21,
        "def": 56,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2392,
        "atk": 53,
        "def": 141,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5981,
        "atk": 133,
        "def": 351,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8972,
        "atk": 199,
        "def": 527,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11962,
        "atk": 265,
        "def": 703,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Skirmishing Spear",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Thunderbolt Strike",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Hunter's Advance",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Awakened by the Baying Hounds",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Suffer the Winter Wheat Will",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Into the Fray",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Frostvale Thunderclap",
        "description": ""
      },
      {
        "level": 2,
        "name": "Howl From Afar",
        "description": ""
      },
      {
        "level": 3,
        "name": "Friendly Call",
        "description": ""
      },
      {
        "level": 4,
        "name": "Harvest the Spoils",
        "description": ""
      },
      {
        "level": 5,
        "name": "When the Nightbird Falls Silent",
        "description": ""
      },
      {
        "level": 6,
        "name": "Standard Reclaimed",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Flockingweed",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "amber",
    "name": "Amber",
    "title": "Gliding Champion",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Bow",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Ambor.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Ambor.png",
    "description": "Always energetic and full of life, Amber's the best — albeit only — Outrider of the Knights of Favonius.",
    "baseStatsLvl90": {
      "hp": 9461,
      "atk": 223,
      "def": 601,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 757,
        "atk": 18,
        "def": 48,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1892,
        "atk": 45,
        "def": 120,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4731,
        "atk": 112,
        "def": 300,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7096,
        "atk": 167,
        "def": 450,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9461,
        "atk": 223,
        "def": 601,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Sharpshooter",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Explosive Puppet",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Fiery Rain",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Every Arrow Finds Its Target",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Precise Shot",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Gliding Champion",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "One Arrow to Rule Them All",
        "description": ""
      },
      {
        "level": 2,
        "name": "Bunny Triggered",
        "description": ""
      },
      {
        "level": 3,
        "name": "It Burns!",
        "description": ""
      },
      {
        "level": 4,
        "name": "It's Not Just Any Doll...",
        "description": ""
      },
      {
        "level": 5,
        "name": "It's Baron Bunny!",
        "description": ""
      },
      {
        "level": 6,
        "name": "Wildfire",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Small Lamp Grass",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "arataki-itto",
    "name": "Arataki Itto",
    "title": "Hanamizaka Heroics",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Claymore",
    "region": "Inazuma",
    "affiliation": "Arataki Gang",
    "role": "Main DPS",
    "version": "2.3",
    "releaseDate": "v2.3",
    "avatar": "/images/characters/UI_AvatarIcon_Itto.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Itto.png",
    "description": "The first and greatest head of the Arataki Gang, famed throughout Inazuma City's Hanamizaka... Wait, what? You've never heard of them? Are you trying to be funny here?",
    "baseStatsLvl90": {
      "hp": 12858,
      "atk": 227,
      "def": 959,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1029,
        "atk": 18,
        "def": 77,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2572,
        "atk": 45,
        "def": 192,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6429,
        "atk": 114,
        "def": 480,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9644,
        "atk": 170,
        "def": 719,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12858,
        "atk": 227,
        "def": 959,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Fight Club Legend",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Masatsu Zetsugi: Akaushi Burst!",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Royal Descent: Behold, Itto the Evil!",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Arataki Ichiban",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Bloodline of the Crimson Oni",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Woodchuck Chucked",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Stay a While and Listen Up",
        "description": ""
      },
      {
        "level": 2,
        "name": "Gather 'Round, It's a Brawl!",
        "description": ""
      },
      {
        "level": 3,
        "name": "Horns Lowered, Coming Through",
        "description": ""
      },
      {
        "level": 4,
        "name": "Jailhouse Bread and Butter",
        "description": ""
      },
      {
        "level": 5,
        "name": "10 Years of Hanamizaka Fame",
        "description": ""
      },
      {
        "level": 6,
        "name": "Arataki Itto, Present!",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Onikabuto",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "arlecchino",
    "name": "Arlecchino",
    "title": "Dire Balemoon",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Polearm",
    "region": "Snezhnaya",
    "affiliation": "Fatui",
    "role": "Main DPS",
    "version": "4.6",
    "releaseDate": "v4.6",
    "avatar": "/images/characters/UI_AvatarIcon_Arlecchino.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Arlecchino.png",
    "description": "\"The Knave,\" Fourth of the Fatui Harbingers. A poised, ruthless diplomat. To the children in the House of the Hearth, she is their feared yet dependable \"Father.\"",
    "baseStatsLvl90": {
      "hp": 13103,
      "atk": 342,
      "def": 765,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1048,
        "atk": 27,
        "def": 61,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2621,
        "atk": 68,
        "def": 153,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6552,
        "atk": 171,
        "def": 382,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9827,
        "atk": 257,
        "def": 574,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13103,
        "atk": 342,
        "def": 765,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Invitation to a Beheading",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "All Is Ash",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Balemoon Rising",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Agony Alone May Be Repaid",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Strength Alone Can Defend",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "The Balemoon Alone May Know",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"All Reprisals and Arrears, Mine to Bear...\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"All Rewards and Retribution, Mine to Bestow...\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"You Shall Become a New Member of Our Family...\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"You Shall Love and Protect Each Other Henceforth...\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"For Alone, We Are as Good as Dead...\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"From This Day On, We Shall Delight in New Life Together.\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Rainbow Rose",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "baizhu",
    "name": "Baizhu",
    "title": "Beyond Mortality",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Catalyst",
    "region": "Liyue",
    "affiliation": "Bubu Pharmacy",
    "role": "Main DPS",
    "version": "3.6",
    "releaseDate": "v3.6",
    "avatar": "/images/characters/UI_AvatarIcon_Baizhuer.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Baizhuer.png",
    "description": "The owner of Bubu Pharmacy, who is rarely seen without the white snake named Changsheng. His medicinal knowledge is encyclopedic, and his personal intrigues subtle.",
    "baseStatsLvl90": {
      "hp": 13348,
      "atk": 193,
      "def": 500,
      "ascensionStat": "HP",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1068,
        "atk": 15,
        "def": 40,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2670,
        "atk": 39,
        "def": 100,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6674,
        "atk": 96,
        "def": 250,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10011,
        "atk": 144,
        "def": 375,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13348,
        "atk": 193,
        "def": 500,
        "ascensionStat": "HP",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "The Classics of Acupuncture",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Universal Diagnosis",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Holistic Revivification",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Five Fortunes Forever",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "All Things Are of the Earth",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Herbal Nourishment",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Attentive Observation",
        "description": ""
      },
      {
        "level": 2,
        "name": "Incisive Discernment",
        "description": ""
      },
      {
        "level": 3,
        "name": "All Aspects Stabilized",
        "description": ""
      },
      {
        "level": 4,
        "name": "Ancient Art of Perception",
        "description": ""
      },
      {
        "level": 5,
        "name": "The Hidden Ebb and Flow",
        "description": ""
      },
      {
        "level": 6,
        "name": "Elimination of Malicious Qi",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Violetgrass",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "barbara",
    "name": "Barbara",
    "title": "Shining Idol",
    "rarity": 4,
    "element": "Hydro",
    "weaponType": "Catalyst",
    "region": "Mondstadt",
    "affiliation": "Church of Favonius",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Barbara.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Barbara.png",
    "description": "Every citizen of Mondstadt adores Barbara. She learned the word \"idol\" from a magazine.",
    "baseStatsLvl90": {
      "hp": 9787,
      "atk": 159,
      "def": 669,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 783,
        "atk": 13,
        "def": 54,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1957,
        "atk": 32,
        "def": 134,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4894,
        "atk": 80,
        "def": 334,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7341,
        "atk": 119,
        "def": 502,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9787,
        "atk": 159,
        "def": 669,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Whisper of Water",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Let the Show Begin♪",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Shining Miracle♪",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Glorious Season",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Encore",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "With My Whole Heart♪",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Gleeful Songs",
        "description": ""
      },
      {
        "level": 2,
        "name": "Vitality Burst",
        "description": ""
      },
      {
        "level": 3,
        "name": "Star of Tomorrow",
        "description": ""
      },
      {
        "level": 4,
        "name": "Attentiveness Be My Power",
        "description": ""
      },
      {
        "level": 5,
        "name": "The Purest Companionship",
        "description": ""
      },
      {
        "level": 6,
        "name": "Dedicating Everything to You",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Philanemo Mushroom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "beidou",
    "name": "Beidou",
    "title": "Uncrowned Lord of the Ocean",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Claymore",
    "region": "Liyue",
    "affiliation": "The Crux",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Beidou.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Beidou.png",
    "description": "Captain of her crew, The Crux. She's quite an unbound and forthright woman.",
    "baseStatsLvl90": {
      "hp": 13050,
      "atk": 225,
      "def": 648,
      "ascensionStat": "Electro DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1044,
        "atk": 18,
        "def": 52,
        "ascensionStat": "Electro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2610,
        "atk": 45,
        "def": 130,
        "ascensionStat": "Electro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6525,
        "atk": 113,
        "def": 324,
        "ascensionStat": "Electro DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9787,
        "atk": 169,
        "def": 486,
        "ascensionStat": "Electro DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13050,
        "atk": 225,
        "def": 648,
        "ascensionStat": "Electro DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Oceanborne",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Tidecaller",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Stormbreaker",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Retribution",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Lightning Storm",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Conqueror of Tides",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Sea Beast's Scourge",
        "description": ""
      },
      {
        "level": 2,
        "name": "Upon the Turbulent Sea, the Thunder Arises",
        "description": ""
      },
      {
        "level": 3,
        "name": "Summoner of Storm",
        "description": ""
      },
      {
        "level": 4,
        "name": "Stunning Revenge",
        "description": ""
      },
      {
        "level": 5,
        "name": "Crimson Tidewalker",
        "description": ""
      },
      {
        "level": 6,
        "name": "Bane of Evil",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Noctilucous Jade",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "bennett",
    "name": "Bennett",
    "title": "Trial by Fire",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Sword",
    "region": "Mondstadt",
    "affiliation": "Adventurers' Guild",
    "role": "Support",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Bennett.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Bennett.png",
    "description": "A good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.",
    "baseStatsLvl90": {
      "hp": 12397,
      "atk": 191,
      "def": 771,
      "ascensionStat": "Energy Recharge",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 992,
        "atk": 15,
        "def": 62,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2479,
        "atk": 38,
        "def": 154,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6199,
        "atk": 96,
        "def": 386,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9298,
        "atk": 143,
        "def": 578,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12397,
        "atk": 191,
        "def": 771,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Strike of Fortune",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Passion Overload",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Fantastic Voyage",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Rekindle",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Fearnaught",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "It Should Be Safe...",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Grand Expectation",
        "description": ""
      },
      {
        "level": 2,
        "name": "Impasse Conqueror",
        "description": ""
      },
      {
        "level": 3,
        "name": "Unstoppable Fervor",
        "description": ""
      },
      {
        "level": 4,
        "name": "Unexpected Odyssey",
        "description": ""
      },
      {
        "level": 5,
        "name": "True Explorer",
        "description": ""
      },
      {
        "level": 6,
        "name": "Fire Ventures With Me",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Windwheel Aster",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "candace",
    "name": "Candace",
    "title": "Golden Vow",
    "rarity": 4,
    "element": "Hydro",
    "weaponType": "Polearm",
    "region": "Sumeru",
    "affiliation": "Aaru Village",
    "role": "Main DPS",
    "version": "3.1",
    "releaseDate": "v3.1",
    "avatar": "/images/characters/UI_AvatarIcon_Candace.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Candace.png",
    "description": "A descendant of King Deshret with an amber left eye. The defender of Aaru Village.",
    "baseStatsLvl90": {
      "hp": 10875,
      "atk": 212,
      "def": 683,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 870,
        "atk": 17,
        "def": 55,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2175,
        "atk": 42,
        "def": 137,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5437,
        "atk": 106,
        "def": 341,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8156,
        "atk": 159,
        "def": 512,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10875,
        "atk": 212,
        "def": 683,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Gleaming Spear - Guardian Stance",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Sacred Rite: Heron's Sanctum",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Sacred Rite: Wagtail's Tide",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Aegis of Crossed Arrows",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Celestial Dome of Sand",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "To Dawn's First Light",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Returning Heiress of the Scarlet Sands",
        "description": ""
      },
      {
        "level": 2,
        "name": "Moon-Piercing Brilliance",
        "description": ""
      },
      {
        "level": 3,
        "name": "Hunter's Supplication",
        "description": ""
      },
      {
        "level": 4,
        "name": "Sentinel Oath",
        "description": ""
      },
      {
        "level": 5,
        "name": "Heterochromatic Gaze",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Overflow",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Henna Berry",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "charlotte",
    "name": "Charlotte",
    "title": "Lens of Verity",
    "rarity": 4,
    "element": "Cryo",
    "weaponType": "Catalyst",
    "region": "Fontaine",
    "affiliation": "The Steambird",
    "role": "Main DPS",
    "version": "4.2",
    "releaseDate": "v4.2",
    "avatar": "/images/characters/UI_AvatarIcon_Charlotte.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Charlotte.png",
    "description": "Indefatigable reporter of The Steambird, constantly on the hunt for the \"truth.\"",
    "baseStatsLvl90": {
      "hp": 10766,
      "atk": 173,
      "def": 546,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 861,
        "atk": 14,
        "def": 44,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2153,
        "atk": 35,
        "def": 109,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5383,
        "atk": 87,
        "def": 273,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8075,
        "atk": 130,
        "def": 410,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10766,
        "atk": 173,
        "def": 546,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Cool-Color Capture",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Framing: Freezing Point Composition",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Still Photo: Comprehensive Confirmation",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Moment of Impact",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Diversified Investigation",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "First-Person Shutter",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "A Need to Verify Facts",
        "description": ""
      },
      {
        "level": 2,
        "name": "A Duty to Pursue Truth",
        "description": ""
      },
      {
        "level": 3,
        "name": "An Imperative to Independence",
        "description": ""
      },
      {
        "level": 4,
        "name": "A Responsibility to Oversee",
        "description": ""
      },
      {
        "level": 5,
        "name": "A Principle of Conscience",
        "description": ""
      },
      {
        "level": 6,
        "name": "A Summation of Interest",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Beryl Conch",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "chasca",
    "name": "Chasca",
    "title": "Skyborne Arbiter",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Bow",
    "region": "Natlan",
    "affiliation": "Tlalocan",
    "role": "Main DPS",
    "version": "5.2",
    "releaseDate": "v5.2",
    "avatar": "/images/characters/UI_AvatarIcon_Chasca.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Chasca.png",
    "description": "The Peacemaker of the Tlalocan, the ender of all disputes.",
    "baseStatsLvl90": {
      "hp": 9797,
      "atk": 347,
      "def": 615,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 784,
        "atk": 28,
        "def": 49,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1959,
        "atk": 69,
        "def": 123,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4898,
        "atk": 173,
        "def": 307,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7348,
        "atk": 260,
        "def": 461,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9797,
        "atk": 347,
        "def": 615,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Phantom Feather Flurry",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Spirit Reins, Shadow Hunt",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Soul Reaper's Fatal Round",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Bullet Trick",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Intent to Cover",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Everburning Heart",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Cylinder, the Restless Roulette",
        "description": ""
      },
      {
        "level": 2,
        "name": "Muzzle, the Searing Smoke",
        "description": ""
      },
      {
        "level": 3,
        "name": "Reins, Her Careful Control",
        "description": ""
      },
      {
        "level": 4,
        "name": "Sparks, the Sudden Shot",
        "description": ""
      },
      {
        "level": 5,
        "name": "Brim, the Sandshadow's Silhouette",
        "description": ""
      },
      {
        "level": 6,
        "name": "Showdown, the Glory of Battle",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Withering Purpurbloom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "chevreuse",
    "name": "Chevreuse",
    "title": "Executor of Justice",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Polearm",
    "region": "Fontaine",
    "affiliation": "Special Security and Surveillance Patrol",
    "role": "Main DPS",
    "version": "4.3",
    "releaseDate": "v4.3",
    "avatar": "/images/characters/UI_AvatarIcon_Chevreuse.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Chevreuse.png",
    "description": "The captain of the Special Security and Surveillance Patrol, who wears justice as an ever-present seal upon her heart. Her musket shall only ever point at the guilty.",
    "baseStatsLvl90": {
      "hp": 11962,
      "atk": 193,
      "def": 605,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 957,
        "atk": 15,
        "def": 48,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2392,
        "atk": 39,
        "def": 121,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5981,
        "atk": 97,
        "def": 302,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8972,
        "atk": 145,
        "def": 454,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11962,
        "atk": 193,
        "def": 605,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Line Bayonet Thrust EX",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Short-Range Rapid Interdiction Fire",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Ring of Bursting Grenades",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Vanguard's Coordinated Tactics",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Vertical Force Coordination",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Double Time March",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Stable Front Line's Resolve",
        "description": ""
      },
      {
        "level": 2,
        "name": "Sniper Induced Explosion",
        "description": ""
      },
      {
        "level": 3,
        "name": "Practiced Field Stripping Technique",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Secret to Rapid-Fire Multishots",
        "description": ""
      },
      {
        "level": 5,
        "name": "Enhanced Incendiary Firepower",
        "description": ""
      },
      {
        "level": 6,
        "name": "In Pursuit of Ending Evil",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Lumidouce Bell",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "chiori",
    "name": "Chiori",
    "title": "The Thundering Seamstress",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Sword",
    "region": "Inazuma",
    "affiliation": "Court of Fontaine",
    "role": "Main DPS",
    "version": "4.5",
    "releaseDate": "v4.5",
    "avatar": "/images/characters/UI_AvatarIcon_Chiori.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Chiori.png",
    "description": "The owner of Chioriya Boutique. A tailor renowned throughout Fontaine.",
    "baseStatsLvl90": {
      "hp": 11438,
      "atk": 323,
      "def": 953,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 915,
        "atk": 26,
        "def": 76,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2288,
        "atk": 65,
        "def": 191,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5719,
        "atk": 161,
        "def": 477,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8578,
        "atk": 242,
        "def": 715,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11438,
        "atk": 323,
        "def": 953,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Weaving Blade",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Fluttering Hasode",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Hiyoku: Twin Blades",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Tailor-Made",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "The Finishing Touch",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Brocaded Collar's Beauteous Silhouette",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Six Paths of Sage Silkcraft",
        "description": ""
      },
      {
        "level": 2,
        "name": "In Five Colors Dyed",
        "description": ""
      },
      {
        "level": 3,
        "name": "Four Brocade Embellishments",
        "description": ""
      },
      {
        "level": 4,
        "name": "A Tailor's Three Courtesies",
        "description": ""
      },
      {
        "level": 5,
        "name": "Two Silken Plumules",
        "description": ""
      },
      {
        "level": 6,
        "name": "Sole Principle Pursuit",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Dendrobium",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "chongyun",
    "name": "Chongyun",
    "title": "Frozen Ardor",
    "rarity": 4,
    "element": "Cryo",
    "weaponType": "Claymore",
    "region": "Liyue",
    "affiliation": "Tianheng Thaumaturges",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Chongyun.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Chongyun.png",
    "description": "A young exorcist from a family of exorcists. He does everything he can to suppress his abundance of yang energy.",
    "baseStatsLvl90": {
      "hp": 10984,
      "atk": 223,
      "def": 648,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 879,
        "atk": 18,
        "def": 52,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2197,
        "atk": 45,
        "def": 130,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5492,
        "atk": 112,
        "def": 324,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8238,
        "atk": 167,
        "def": 486,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10984,
        "atk": 223,
        "def": 648,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Demonbane",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Spirit Blade: Chonghua's Layered Frost",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Spirit Blade: Cloud-Parting Star",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Steady Breathing",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Rimechaser Blade",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Gallant Journey",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Ice Unleashed",
        "description": ""
      },
      {
        "level": 2,
        "name": "Atmospheric Revolution",
        "description": ""
      },
      {
        "level": 3,
        "name": "Cloudburst",
        "description": ""
      },
      {
        "level": 4,
        "name": "Frozen Skies",
        "description": ""
      },
      {
        "level": 5,
        "name": "The True Path",
        "description": ""
      },
      {
        "level": 6,
        "name": "Rally of Four Blades",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Cor Lapis",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "citlali",
    "name": "Citlali",
    "title": "Obsidian Opalstar",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Catalyst",
    "region": "Natlan",
    "affiliation": "Mictlan",
    "role": "Support",
    "version": "5.3",
    "releaseDate": "v5.3",
    "avatar": "/images/characters/UI_AvatarIcon_Citlali.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Citlali.png",
    "description": "The great shaman from the Masters of the Night-Wind, the universally-revered Granny Itztli.",
    "baseStatsLvl90": {
      "hp": 11634,
      "atk": 127,
      "def": 763,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "115.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 931,
        "atk": 10,
        "def": 61,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2327,
        "atk": 25,
        "def": 153,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5817,
        "atk": 63,
        "def": 382,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8725,
        "atk": 95,
        "def": 572,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11634,
        "atk": 127,
        "def": 763,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "115.2"
      }
    ],
    "talents": [
      {
        "name": "Shadow-Stealing Spirit Vessel",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Dawnfrost Darkstar",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Edict of Entwined Splendor",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Mamaloaco's Frigid Rain",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Itzpapalotl's Star Garments",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Smoke, Mirrors, and the Flowing Winds",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Radiant Blades of Centzon Mimixcoah",
        "description": ""
      },
      {
        "level": 2,
        "name": "Heart Devourer's Travail",
        "description": ""
      },
      {
        "level": 3,
        "name": "Cloud Serpent's Feathered Crown",
        "description": ""
      },
      {
        "level": 4,
        "name": "Death Defier's Spirit Skull",
        "description": ""
      },
      {
        "level": 5,
        "name": "Nemontemi's Hex",
        "description": ""
      },
      {
        "level": 6,
        "name": "Teoiztac's Secret Pact",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Quenepa Berry",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "clorinde",
    "name": "Clorinde",
    "title": "Candlebearer, Shadowhunter",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Sword",
    "region": "Fontaine",
    "affiliation": "Trial Court",
    "role": "Main DPS",
    "version": "4.7",
    "releaseDate": "v4.7",
    "avatar": "/images/characters/UI_AvatarIcon_Clorinde.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Clorinde.png",
    "description": "An undefeated Champion Duelist. Sword in hand, she defends justice in the Court of Fontaine.",
    "baseStatsLvl90": {
      "hp": 12956,
      "atk": 337,
      "def": 784,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1036,
        "atk": 27,
        "def": 63,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2591,
        "atk": 67,
        "def": 157,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6478,
        "atk": 169,
        "def": 392,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9717,
        "atk": 253,
        "def": 588,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12956,
        "atk": 337,
        "def": 784,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Oath of Hunting Shadows",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Hunter's Vigil",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Last Lightfall",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Dark-Shattering Flame",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Lawful Remuneration",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Vigil's Harvest",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"From This Day, I Pass the Candle's Shadow-Veil\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"Now, As We Face the Perils of the Long Night\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"I Pledge to Remember the Oath of Daylight\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"To Enshrine Tears, Life, and Love\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"Holding Dawn's Coming as My Votive\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"And So Shall I Never Despair\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Lumitoile",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "collei",
    "name": "Collei",
    "title": "Sprout of Rebirth",
    "rarity": 4,
    "element": "Dendro",
    "weaponType": "Bow",
    "region": "Sumeru",
    "affiliation": "Gandharva Ville",
    "role": "Main DPS",
    "version": "3.0",
    "releaseDate": "v3.0",
    "avatar": "/images/characters/UI_AvatarIcon_Collei.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Collei.png",
    "description": "A trainee ranger active in Avidya Forest. Behind her enthusiastic words and actions hides a slightly introverted personality.",
    "baseStatsLvl90": {
      "hp": 9787,
      "atk": 200,
      "def": 601,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 783,
        "atk": 16,
        "def": 48,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1957,
        "atk": 40,
        "def": 120,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4894,
        "atk": 100,
        "def": 300,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7341,
        "atk": 150,
        "def": 450,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9787,
        "atk": 200,
        "def": 601,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Supplicant's Bowmanship",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Floral Brush",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Trump-Card Kitty",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Floral Sidewinder",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "The Languid Wood",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Gliding Champion of Sumeru",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Deepwood Patrol",
        "description": ""
      },
      {
        "level": 2,
        "name": "Through Hill and Copse",
        "description": ""
      },
      {
        "level": 3,
        "name": "Scent of Summer",
        "description": ""
      },
      {
        "level": 4,
        "name": "Gift of the Woods",
        "description": ""
      },
      {
        "level": 5,
        "name": "All Embers",
        "description": ""
      },
      {
        "level": 6,
        "name": "Forest of Falling Arrows",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Rukkhashava Mushrooms",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "columbina",
    "name": "Columbina",
    "title": "Welkin Moon's Homecoming",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Catalyst",
    "region": "Nod-Krai",
    "affiliation": "Silvermoon Hall",
    "role": "Main DPS",
    "version": "6.3",
    "releaseDate": "v6.3",
    "avatar": "/images/characters/UI_AvatarIcon_Columbina.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Columbina.png",
    "description": "The Moon Maiden born in Nod-Krai, and also the welkin moon returning home.",
    "baseStatsLvl90": {
      "hp": 14695,
      "atk": 96,
      "def": 515,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1176,
        "atk": 8,
        "def": 41,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2939,
        "atk": 19,
        "def": 103,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7348,
        "atk": 48,
        "def": 257,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11021,
        "atk": 72,
        "def": 386,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 14695,
        "atk": 96,
        "def": 515,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Moondew Cascade",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Eternal Tides",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Moonlit Melancholy",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Lunacy's Lure",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Law of the New Moon",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Moonlight, Lent Unto You",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Radiance Over Blossoms and Peaks",
        "description": ""
      },
      {
        "level": 2,
        "name": "Not in Lone Splendor",
        "description": ""
      },
      {
        "level": 3,
        "name": "Dreamlike Glow Across Tranquil Waters",
        "description": ""
      },
      {
        "level": 4,
        "name": "Cloudveiled Ridges in Floral Mists",
        "description": ""
      },
      {
        "level": 5,
        "name": "Silence Tending One Lone Song",
        "description": ""
      },
      {
        "level": 6,
        "name": "Through Darkness Led by Moonlight",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Winter Icelea",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "cyno",
    "name": "Cyno",
    "title": "Judicator of Secrets",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Polearm",
    "region": "Sumeru",
    "affiliation": "Temple of Silence",
    "role": "Main DPS",
    "version": "3.1",
    "releaseDate": "v3.1",
    "avatar": "/images/characters/UI_AvatarIcon_Cyno.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Cyno.png",
    "description": "The General Mahamatra in charge of supervising the researchers of the Akademiya. It is said that when he gets down to work, the General Mahamatra is even more efficient than the \"Great Vayuvyastra\" made by the Kshahrewar.",
    "baseStatsLvl90": {
      "hp": 12491,
      "atk": 318,
      "def": 859,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 999,
        "atk": 25,
        "def": 69,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2498,
        "atk": 64,
        "def": 172,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6245,
        "atk": 159,
        "def": 430,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9368,
        "atk": 239,
        "def": 644,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12491,
        "atk": 318,
        "def": 859,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Invoker's Spear",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Secret Rite: Chasmic Soulfarer",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Sacred Rite: Wolf's Swiftness",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Featherfall Judgment",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Authority Over the Nine Bows",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "The Gift of Silence",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Ordinance: Unceasing Vigil",
        "description": ""
      },
      {
        "level": 2,
        "name": "Ceremony: Homecoming of Spirits",
        "description": ""
      },
      {
        "level": 3,
        "name": "Precept: Lawful Enforcer",
        "description": ""
      },
      {
        "level": 4,
        "name": "Austerity: Forbidding Guard",
        "description": ""
      },
      {
        "level": 5,
        "name": "Funerary Rite: The Passing of Starlight",
        "description": ""
      },
      {
        "level": 6,
        "name": "Raiment: Just Scales",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Scarab",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "dahlia",
    "name": "Dahlia",
    "title": "Ode and Oblation",
    "rarity": 4,
    "element": "Hydro",
    "weaponType": "Sword",
    "region": "Mondstadt",
    "affiliation": "Church of Favonius",
    "role": "Main DPS",
    "version": "5.7",
    "releaseDate": "v5.7",
    "avatar": "/images/characters/UI_AvatarIcon_Dahlia.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Dahlia.png",
    "description": "Deacon of the Church of Favonius and the Anemo Archon's representative in the church.",
    "baseStatsLvl90": {
      "hp": 12506,
      "atk": 189,
      "def": 560,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1000,
        "atk": 15,
        "def": 45,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2501,
        "atk": 38,
        "def": 112,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6253,
        "atk": 95,
        "def": 280,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9380,
        "atk": 142,
        "def": 420,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12506,
        "atk": 189,
        "def": 560,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Favonius Bladework - Ritual",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Immersive Ordinance",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Radiant Psalter",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "The Wind's Gentle Grace",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Prayer of Well-Wrought Joy",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Pilgrimage Upon Returning Winds",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Infallible Procession",
        "description": ""
      },
      {
        "level": 2,
        "name": "Revelation of Mercy",
        "description": ""
      },
      {
        "level": 3,
        "name": "Windblume Offertory",
        "description": ""
      },
      {
        "level": 4,
        "name": "Collect of the Assembly",
        "description": ""
      },
      {
        "level": 5,
        "name": "Let It Be Subtly So",
        "description": ""
      },
      {
        "level": 6,
        "name": "You Shall Go Out With Joy",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Calla Lily",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "dehya",
    "name": "Dehya",
    "title": "Flame-Mane",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Claymore",
    "region": "Sumeru",
    "affiliation": "The Eremites",
    "role": "Main DPS",
    "version": "3.5",
    "releaseDate": "v3.5",
    "avatar": "/images/characters/UI_AvatarIcon_Dehya.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Dehya.png",
    "description": "A member of the Eremites, a mercenary organization that roams the sands of Sumeru. Valiant and powerful, she enjoys great fame amongst her fellow Eremites.",
    "baseStatsLvl90": {
      "hp": 15675,
      "atk": 265,
      "def": 628,
      "ascensionStat": "HP",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1254,
        "atk": 21,
        "def": 50,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 3135,
        "atk": 53,
        "def": 126,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7837,
        "atk": 133,
        "def": 314,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11756,
        "atk": 199,
        "def": 471,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 15675,
        "atk": 265,
        "def": 628,
        "ascensionStat": "HP",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Sandstorm Assault",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Molten Inferno",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Leonine Bite",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Unstinting Succor",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Stalwart and True",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "The Sunlit Way",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "The Flame Incandescent",
        "description": ""
      },
      {
        "level": 2,
        "name": "The Sand-Blades Glittering",
        "description": ""
      },
      {
        "level": 3,
        "name": "A Rage Swift as Fire",
        "description": ""
      },
      {
        "level": 4,
        "name": "An Oath Abiding",
        "description": ""
      },
      {
        "level": 5,
        "name": "The Alpha Unleashed",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Burning Claws Cleaving",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Sand Grease Pupa",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "diluc",
    "name": "Diluc",
    "title": "Dark Side of Dawn",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Claymore",
    "region": "Mondstadt",
    "affiliation": "Dawn Winery",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Diluc.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Diluc.png",
    "description": "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.",
    "baseStatsLvl90": {
      "hp": 12981,
      "atk": 335,
      "def": 784,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1038,
        "atk": 27,
        "def": 63,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2596,
        "atk": 67,
        "def": 157,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6490,
        "atk": 167,
        "def": 392,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9735,
        "atk": 251,
        "def": 588,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12981,
        "atk": 335,
        "def": 784,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Tempered Sword",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Searing Onslaught",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Dawn",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Relentless",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Blessing of Phoenix",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Tradition of the Dawn Knight",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Conviction",
        "description": ""
      },
      {
        "level": 2,
        "name": "Searing Ember",
        "description": ""
      },
      {
        "level": 3,
        "name": "Fire and Steel",
        "description": ""
      },
      {
        "level": 4,
        "name": "Flowing Flame",
        "description": ""
      },
      {
        "level": 5,
        "name": "Phoenix, Harbinger of Dawn",
        "description": ""
      },
      {
        "level": 6,
        "name": "Flaming Sword, Nemesis of the Dark",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Small Lamp Grass",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "diona",
    "name": "Diona",
    "title": "Kätzlein Cocktail",
    "rarity": 4,
    "element": "Cryo",
    "weaponType": "Bow",
    "region": "Mondstadt",
    "affiliation": "The Cat's Tail",
    "role": "Main DPS",
    "version": "1.1",
    "releaseDate": "v1.1",
    "avatar": "/images/characters/UI_AvatarIcon_Diona.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Diona.png",
    "description": "A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.",
    "baseStatsLvl90": {
      "hp": 9570,
      "atk": 212,
      "def": 601,
      "ascensionStat": "Cryo DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 766,
        "atk": 17,
        "def": 48,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1914,
        "atk": 42,
        "def": 120,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4785,
        "atk": 106,
        "def": 300,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7177,
        "atk": 159,
        "def": 450,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9570,
        "atk": 212,
        "def": 601,
        "ascensionStat": "Cryo DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Kätzlein Style",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Icy Paws",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Signature Mix",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Cat's Tail Secret Menu",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Drunkards' Farce",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Complimentary Bar Food",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "A Lingering Flavor",
        "description": ""
      },
      {
        "level": 2,
        "name": "Shaken, Not Purred",
        "description": ""
      },
      {
        "level": 3,
        "name": "A—Another Round?",
        "description": ""
      },
      {
        "level": 4,
        "name": "Wine Industry Slayer",
        "description": ""
      },
      {
        "level": 5,
        "name": "Double Shot, on the Rocks",
        "description": ""
      },
      {
        "level": 6,
        "name": "Cat's Tail Closing Time",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Calla Lily",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "dori",
    "name": "Dori",
    "title": "Treasure of Dream Garden",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Claymore",
    "region": "Sumeru",
    "affiliation": "The Palace of Alcazarzaray",
    "role": "Main DPS",
    "version": "3.0",
    "releaseDate": "v3.0",
    "avatar": "/images/characters/UI_AvatarIcon_Dori.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Dori.png",
    "description": "An elusive merchant who has a fondness for glittering Mora.",
    "baseStatsLvl90": {
      "hp": 12397,
      "atk": 223,
      "def": 723,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 992,
        "atk": 18,
        "def": 58,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2479,
        "atk": 45,
        "def": 145,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6199,
        "atk": 112,
        "def": 362,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9298,
        "atk": 167,
        "def": 543,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12397,
        "atk": 223,
        "def": 723,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Marvelous Sword-Dance (Modified)",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Spirit-Warding Lamp: Troubleshooter Cannon",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Alcazarzaray's Exactitude",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "An Eye for Gold",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Compound Interest",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Unexpected Order",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Additional Investment",
        "description": ""
      },
      {
        "level": 2,
        "name": "Special Franchise",
        "description": ""
      },
      {
        "level": 3,
        "name": "Wonders Never Cease",
        "description": ""
      },
      {
        "level": 4,
        "name": "Discretionary Supplement",
        "description": ""
      },
      {
        "level": 5,
        "name": "Value for Mora",
        "description": ""
      },
      {
        "level": 6,
        "name": "Sprinkling Weight",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Kalpalata Lotus",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "durin",
    "name": "Durin",
    "title": "\"The Undying Fire\"",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Sword",
    "region": "Mondstadt",
    "affiliation": "Hexenzirkel",
    "role": "Main DPS",
    "version": "6.2",
    "releaseDate": "v6.2",
    "avatar": "/images/characters/UI_AvatarIcon_Durin.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Durin.png",
    "description": "A dragon born from M's pen, who came to alight in the human world. His \"story\" continues to unfold.",
    "baseStatsLvl90": {
      "hp": 12430,
      "atk": 347,
      "def": 822,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 994,
        "atk": 28,
        "def": 66,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2486,
        "atk": 69,
        "def": 164,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6215,
        "atk": 173,
        "def": 411,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9322,
        "atk": 260,
        "def": 617,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12430,
        "atk": 347,
        "def": 822,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Radiant Wingslash",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Binary Form: Convergence and Division",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Principle of Purity: As the Light Shifts",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Light Manifest of the Divine Calculus",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Chaos Formed Like the Night",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Echoes of the Surging Earth",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Adamah's Redemption",
        "description": ""
      },
      {
        "level": 2,
        "name": "Unground Visions",
        "description": ""
      },
      {
        "level": 3,
        "name": "Flame Mirror's Revelation",
        "description": ""
      },
      {
        "level": 4,
        "name": "Emanare's Source",
        "description": ""
      },
      {
        "level": 5,
        "name": "Scouring Flame's Sundering",
        "description": ""
      },
      {
        "level": 6,
        "name": "Dual Birth",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Frostlamp Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "emilie",
    "name": "Emilie",
    "title": "A Thousand Scents Traced",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Polearm",
    "region": "Fontaine",
    "affiliation": "Court of Fontaine",
    "role": "Main DPS",
    "version": "4.8",
    "releaseDate": "v4.8",
    "avatar": "/images/characters/UI_AvatarIcon_Emilie.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Emilie.png",
    "description": "A Fontainian perfumer, one who bottles secrets.",
    "baseStatsLvl90": {
      "hp": 13568,
      "atk": 335,
      "def": 730,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1085,
        "atk": 27,
        "def": 58,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2714,
        "atk": 67,
        "def": 146,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6784,
        "atk": 167,
        "def": 365,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10176,
        "atk": 251,
        "def": 548,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13568,
        "atk": 335,
        "def": 730,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Shadow-Hunting Spear (Custom)",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Fragrance Extraction",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Aromatic Explication",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Lingering Fragrance",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Rectification",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Headspace Capture",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Light Fragrance Leaching",
        "description": ""
      },
      {
        "level": 2,
        "name": "Lakelight Top Note",
        "description": ""
      },
      {
        "level": 3,
        "name": "Exquisite Essence",
        "description": ""
      },
      {
        "level": 4,
        "name": "Lumidouce Heart Note",
        "description": ""
      },
      {
        "level": 5,
        "name": "Puredew Aroma",
        "description": ""
      },
      {
        "level": 6,
        "name": "Marcotte Sillage",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Lakelight Lily",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "escoffier",
    "name": "Escoffier",
    "title": "Tasteful Excellence",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Polearm",
    "region": "Fontaine",
    "affiliation": "Fontaine",
    "role": "Main DPS",
    "version": "5.6",
    "releaseDate": "v5.6",
    "avatar": "/images/characters/UI_AvatarIcon_Escoffier.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Escoffier.png",
    "description": "The ex-head chef of Hotel Debord, renowned throughout Fontaine as the Patissiere Supreme and vanguard of precision gastronomy. Has incomparably strict standards when it comes to cooking.",
    "baseStatsLvl90": {
      "hp": 13348,
      "atk": 347,
      "def": 732,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1068,
        "atk": 28,
        "def": 59,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2670,
        "atk": 69,
        "def": 146,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6674,
        "atk": 173,
        "def": 366,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10011,
        "atk": 260,
        "def": 549,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13348,
        "atk": 347,
        "def": 732,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Kitchen Skills",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Low-Temperature Cooking",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Scoring Cuts",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Better to Salivate Than Medicate",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Inspiration-Immersed Seasoning",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Constant Off-the-Cuff Cookery",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Pre-Dinner Dance for Your Taste Buds",
        "description": ""
      },
      {
        "level": 2,
        "name": "Fresh, Fragrant Stew Is an Art",
        "description": ""
      },
      {
        "level": 3,
        "name": "The Bakery Magic of Caramel Browning",
        "description": ""
      },
      {
        "level": 4,
        "name": "Secret Rosemary Recipe",
        "description": ""
      },
      {
        "level": 5,
        "name": "Symphony of a Thousand Sauces",
        "description": ""
      },
      {
        "level": 6,
        "name": "Tea Parties Bursting With Color",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Beryl Conch",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "eula",
    "name": "Eula",
    "title": "Dance of the Shimmering Wave",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Claymore",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "1.5",
    "releaseDate": "v1.5",
    "avatar": "/images/characters/UI_AvatarIcon_Eula.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Eula.png",
    "description": "The Spindrift Knight, a scion of the old aristocracy, and the Captain of the Knights of Favonius Reconnaissance Company. The reason for which a descendant of the ancient nobles might join the Knights remains a great mystery in Mondstadt to this very day.",
    "baseStatsLvl90": {
      "hp": 13226,
      "atk": 342,
      "def": 751,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1058,
        "atk": 27,
        "def": 60,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2645,
        "atk": 68,
        "def": 150,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6613,
        "atk": 171,
        "def": 375,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9919,
        "atk": 257,
        "def": 563,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13226,
        "atk": 342,
        "def": 751,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Favonius Bladework - Edel",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Icetide Vortex",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Glacial Illumination",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Roiling Rime",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Wellspring of War-Lust",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Aristocratic Introspection",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Tidal Illusion",
        "description": ""
      },
      {
        "level": 2,
        "name": "Lady of Seafoam",
        "description": ""
      },
      {
        "level": 3,
        "name": "Lawrence Pedigree",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Obstinacy of One's Inferiors",
        "description": ""
      },
      {
        "level": 5,
        "name": "Chivalric Quality",
        "description": ""
      },
      {
        "level": 6,
        "name": "Noble Obligation",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Dandelion Seed",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "faruzan",
    "name": "Faruzan",
    "title": "Enigmatic Machinist",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Bow",
    "region": "Sumeru",
    "affiliation": "Haravatat",
    "role": "Main DPS",
    "version": "3.3",
    "releaseDate": "v3.3",
    "avatar": "/images/characters/UI_AvatarIcon_Faruzan.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Faruzan.png",
    "description": "A researcher from \"one hundred years ago.\" She enjoys self-identifying as everyone's senior, and has significant knowledge of ancient scripts and machines of all kinds.",
    "baseStatsLvl90": {
      "hp": 9570,
      "atk": 196,
      "def": 628,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 766,
        "atk": 16,
        "def": 50,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1914,
        "atk": 39,
        "def": 126,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4785,
        "atk": 98,
        "def": 314,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7177,
        "atk": 147,
        "def": 471,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9570,
        "atk": 196,
        "def": 628,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Parthian Shot",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Wind Realm of Nasamjnin",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "The Wind's Secret Ways",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Impetuous Flow",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Lost Wisdom of the Seven Caverns",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Tomes Light the Path",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Truth by Any Means",
        "description": ""
      },
      {
        "level": 2,
        "name": "Overzealous Intellect",
        "description": ""
      },
      {
        "level": 3,
        "name": "Spirit-Orchard Stroll",
        "description": ""
      },
      {
        "level": 4,
        "name": "Divine Comprehension",
        "description": ""
      },
      {
        "level": 5,
        "name": "Wonderland of Rumination",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Wondrous Path of Truth",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Henna Berry",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "fischl",
    "name": "Fischl",
    "title": "Prinzessin der Verurteilung!",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Bow",
    "region": "Mondstadt",
    "affiliation": "Adventurers' Guild",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Fischl.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Fischl.png",
    "description": "A mysterious girl who calls herself \"Prinzessin der Verurteilung\" and travels with a night raven named Oz.",
    "baseStatsLvl90": {
      "hp": 9189,
      "atk": 244,
      "def": 594,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 735,
        "atk": 20,
        "def": 48,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1838,
        "atk": 49,
        "def": 119,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4595,
        "atk": 122,
        "def": 297,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 6892,
        "atk": 183,
        "def": 445,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9189,
        "atk": 244,
        "def": 594,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Bolts of Downfall",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Nightrider",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Midnight Phantasmagoria",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Stellar Predator",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Undone Be Thy Sinful Hex",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Mein Hausgarten",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Gaze of the Deep",
        "description": ""
      },
      {
        "level": 2,
        "name": "Devourer of All Sins",
        "description": ""
      },
      {
        "level": 3,
        "name": "Wings of Nightmare",
        "description": ""
      },
      {
        "level": 4,
        "name": "Her Pilgrimage of Bleak",
        "description": ""
      },
      {
        "level": 5,
        "name": "Against the Fleeing Light",
        "description": ""
      },
      {
        "level": 6,
        "name": "Evernight Raven",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Small Lamp Grass",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "flins",
    "name": "Flins",
    "title": "Shadowy Lights, Stranger Wights",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Polearm",
    "region": "Nod-Krai",
    "affiliation": "Lightkeepers",
    "role": "Main DPS",
    "version": "6.0",
    "releaseDate": "v6.0",
    "avatar": "/images/characters/UI_AvatarIcon_Flins.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Flins.png",
    "description": "A Lightkeeper of Nod-Krai, guardian of a lighthouse and graveyard on a northern isle. An enigmatic gentleman, cultured and courtly.",
    "baseStatsLvl90": {
      "hp": 12491,
      "atk": 352,
      "def": 809,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 999,
        "atk": 28,
        "def": 65,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2498,
        "atk": 70,
        "def": 162,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6245,
        "atk": 176,
        "def": 404,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9368,
        "atk": 264,
        "def": 606,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12491,
        "atk": 352,
        "def": 809,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Pocztowy Demonspear",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Ancient Rite: Arcane Light",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Ancient Ritual: Cometh the Night",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Symphony of Winter",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Whispering Flame",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Old World Secrets",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Part the Veil of Snow",
        "description": ""
      },
      {
        "level": 2,
        "name": "The Devil's Wall",
        "description": ""
      },
      {
        "level": 3,
        "name": "Stranger in the Night",
        "description": ""
      },
      {
        "level": 4,
        "name": "Night on Bald Mountain",
        "description": ""
      },
      {
        "level": 5,
        "name": "Exile's Shadow",
        "description": ""
      },
      {
        "level": 6,
        "name": "Songs and Dances of Death",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Frostlamp Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "freminet",
    "name": "Freminet",
    "title": "Yearning for Unseen Depths",
    "rarity": 4,
    "element": "Cryo",
    "weaponType": "Claymore",
    "region": "Fontaine",
    "affiliation": "Hotel Bouffes d'ete",
    "role": "Main DPS",
    "version": "4.0",
    "releaseDate": "v4.0",
    "avatar": "/images/characters/UI_AvatarIcon_Freminet.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Freminet.png",
    "description": "A reserved young man who is well-versed in diving. Beneath his distant, icy demeanor lies a pure heart bereft of all flaws.",
    "baseStatsLvl90": {
      "hp": 12071,
      "atk": 255,
      "def": 708,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 966,
        "atk": 20,
        "def": 57,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2414,
        "atk": 51,
        "def": 142,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6036,
        "atk": 127,
        "def": 354,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9053,
        "atk": 191,
        "def": 531,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12071,
        "atk": 255,
        "def": 708,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Flowing Eddies",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Pressurized Floe",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Shadowhunter's Ambush",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Saturation Deep Dive",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Parallel Condensers",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Deepwater Navigation",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Dreams of the Foamy Deep",
        "description": ""
      },
      {
        "level": 2,
        "name": "Penguins and the Land of Plenty",
        "description": ""
      },
      {
        "level": 3,
        "name": "Song of the Eddies and Bleached Sands",
        "description": ""
      },
      {
        "level": 4,
        "name": "Dance of the Snowy Moon and Flute",
        "description": ""
      },
      {
        "level": 5,
        "name": "Nights of Hearth and Happiness",
        "description": ""
      },
      {
        "level": 6,
        "name": "Moment of Waking and Resolve",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Romaritime Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "furina",
    "name": "Furina",
    "title": "Endless Solo of Solitude",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Sword",
    "region": "Fontaine",
    "affiliation": "Court of Fontaine",
    "role": "Main DPS",
    "version": "4.2",
    "releaseDate": "v4.2",
    "avatar": "/images/characters/UI_AvatarIcon_Furina.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Furina.png",
    "description": "The absolute focus of the stage of judgment, until the final applause sounds.",
    "baseStatsLvl90": {
      "hp": 15307,
      "atk": 244,
      "def": 696,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1225,
        "atk": 20,
        "def": 56,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 3061,
        "atk": 49,
        "def": 139,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7654,
        "atk": 122,
        "def": 348,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11481,
        "atk": 183,
        "def": 522,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 15307,
        "atk": 244,
        "def": 696,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Soloist's Solicitation",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Salon Solitaire",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Let the People Rejoice",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Endless Waltz",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Unheard Confession",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "The Sea Is My Stage",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"Love Is a Rebellious Bird That None Can Tame\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"A Woman Adapts Like Duckweed in Water\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"My Secret Is Hidden Within Me, No One Will Know My Name\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"They Know Not Life, Who Dwelt in the Netherworld Not!\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"His Name I Now Know, It Is...!\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"Hear Me — Let Us Raise the Chalice of Love!\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Lakelight Lily",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "gaming",
    "name": "Gaming",
    "title": "Leonine Vanguard",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Claymore",
    "region": "Liyue",
    "affiliation": "Sword and Strongbox Secure Transport Agency",
    "role": "Main DPS",
    "version": "4.4",
    "releaseDate": "v4.4",
    "avatar": "/images/characters/UI_AvatarIcon_Gaming.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Gaming.png",
    "description": "Guard of the Sword and Strongbox Secure Transport Agency, and the head of the \"Mighty Mythical Beasts\" Wushou troupe.",
    "baseStatsLvl90": {
      "hp": 11419,
      "atk": 302,
      "def": 703,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 913,
        "atk": 24,
        "def": 56,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2284,
        "atk": 60,
        "def": 141,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5709,
        "atk": 151,
        "def": 351,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8564,
        "atk": 226,
        "def": 527,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11419,
        "atk": 302,
        "def": 703,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Stellar Rend",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Bestial Ascent",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Suanni's Gilded Dance",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Dance of Amity",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Air of Prosperity",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "The Striding Beast",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Bringer of Blessing",
        "description": ""
      },
      {
        "level": 2,
        "name": "Plum Blossoms Underfoot",
        "description": ""
      },
      {
        "level": 3,
        "name": "Awakening Spirit",
        "description": ""
      },
      {
        "level": 4,
        "name": "Soar Across Mountains",
        "description": ""
      },
      {
        "level": 5,
        "name": "Evil-Daunting Roar",
        "description": ""
      },
      {
        "level": 6,
        "name": "To Tame All Beasts",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Starconch",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "ganyu",
    "name": "Ganyu",
    "title": "Plenilune Gaze",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Bow",
    "region": "Liyue",
    "affiliation": "Yuehai Pavilion",
    "role": "Main DPS",
    "version": "1.2",
    "releaseDate": "v1.2",
    "avatar": "/images/characters/UI_AvatarIcon_Ganyu.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Ganyu.png",
    "description": "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.",
    "baseStatsLvl90": {
      "hp": 9797,
      "atk": 335,
      "def": 630,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 784,
        "atk": 27,
        "def": 50,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1959,
        "atk": 67,
        "def": 126,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4898,
        "atk": 167,
        "def": 315,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7348,
        "atk": 251,
        "def": 473,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9797,
        "atk": 335,
        "def": 630,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Liutian Archery",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Trail of the Qilin",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Celestial Shower",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Undivided Heart",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Harmony Between Heaven and Earth",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Preserved for the Hunt",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Dew-Drinker",
        "description": ""
      },
      {
        "level": 2,
        "name": "The Auspicious",
        "description": ""
      },
      {
        "level": 3,
        "name": "Cloud-Strider",
        "description": ""
      },
      {
        "level": 4,
        "name": "Westward Sojourn",
        "description": ""
      },
      {
        "level": 5,
        "name": "The Merciful",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Clement",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Qingxin",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "gorou",
    "name": "Gorou",
    "title": "Canine Warrior",
    "rarity": 4,
    "element": "Geo",
    "weaponType": "Bow",
    "region": "Inazuma",
    "affiliation": "Watatsumi Island",
    "role": "Main DPS",
    "version": "2.3",
    "releaseDate": "v2.3",
    "avatar": "/images/characters/UI_AvatarIcon_Gorou.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Gorou.png",
    "description": "The great general of Watatsumi Island's forces. He is deeply trusted by his subordinates.",
    "baseStatsLvl90": {
      "hp": 9570,
      "atk": 183,
      "def": 648,
      "ascensionStat": "Geo DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 766,
        "atk": 15,
        "def": 52,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1914,
        "atk": 37,
        "def": 130,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4785,
        "atk": 91,
        "def": 324,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7177,
        "atk": 137,
        "def": 486,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9570,
        "atk": 183,
        "def": 648,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Ripping Fang Fletching",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Inuzaka All-Round Defense",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Juuga: Forward Unto Victory",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Heedless of the Wind and Weather",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "A Favor Repaid",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Seeker of Shinies",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Rushing Hound: Swift as the Wind",
        "description": ""
      },
      {
        "level": 2,
        "name": "Sitting Hound: Steady as a Clock",
        "description": ""
      },
      {
        "level": 3,
        "name": "Mauling Hound: Fierce as Fire",
        "description": ""
      },
      {
        "level": 4,
        "name": "Lapping Hound: Warm as Water",
        "description": ""
      },
      {
        "level": 5,
        "name": "Striking Hound: Thunderous Force",
        "description": ""
      },
      {
        "level": 6,
        "name": "Valiant Hound: Mountainous Fealty",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Sango Pearl",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "hu-tao",
    "name": "Hu Tao",
    "title": "Fragrance in Thaw",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Polearm",
    "region": "Liyue",
    "affiliation": "Wangsheng Funeral Parlor",
    "role": "Main DPS",
    "version": "1.3",
    "releaseDate": "v1.3",
    "avatar": "/images/characters/UI_AvatarIcon_Hutao.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Hutao.png",
    "description": "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.",
    "baseStatsLvl90": {
      "hp": 15552,
      "atk": 106,
      "def": 876,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1244,
        "atk": 9,
        "def": 70,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 3110,
        "atk": 21,
        "def": 175,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7776,
        "atk": 53,
        "def": 438,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11664,
        "atk": 80,
        "def": 657,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 15552,
        "atk": 106,
        "def": 876,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Secret Spear of Wangsheng",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Guide to Afterlife",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Spirit Soother",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Flutter By",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Sanguine Rouge",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "The More the Merrier",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Crimson Bouquet",
        "description": ""
      },
      {
        "level": 2,
        "name": "Ominous Rainfall",
        "description": ""
      },
      {
        "level": 3,
        "name": "Lingering Carmine",
        "description": ""
      },
      {
        "level": 4,
        "name": "Garden of Eternal Rest",
        "description": ""
      },
      {
        "level": 5,
        "name": "Floral Incense",
        "description": ""
      },
      {
        "level": 6,
        "name": "Butterfly's Embrace",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Silk Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "iansan",
    "name": "Iansan",
    "title": "Tempered in Molten Stone",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Polearm",
    "region": "Natlan",
    "affiliation": "Teteocan",
    "role": "Main DPS",
    "version": "5.5",
    "releaseDate": "v5.5",
    "avatar": "/images/characters/UI_AvatarIcon_Iansan.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Iansan.png",
    "description": "Head coach of the fitness club at the Collective of Plenty, and a renowned Natlanese nutritionist.",
    "baseStatsLvl90": {
      "hp": 10657,
      "atk": 257,
      "def": 638,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 853,
        "atk": 21,
        "def": 51,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2131,
        "atk": 51,
        "def": 128,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5329,
        "atk": 129,
        "def": 319,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7993,
        "atk": 193,
        "def": 479,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10657,
        "atk": 257,
        "def": 638,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Weighted Spike",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Thunderbolt Rush",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "The Three Principles of Power",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Enhanced Resistance Training",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Kinetic Energy Gradient Test",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Hard Work and Drive",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Starting's Never Easy",
        "description": ""
      },
      {
        "level": 2,
        "name": "Laziness is the Enemy!",
        "description": ""
      },
      {
        "level": 3,
        "name": "Scientific Diet Planning",
        "description": ""
      },
      {
        "level": 4,
        "name": "Slow and Steady Wins the Race",
        "description": ""
      },
      {
        "level": 5,
        "name": "We Can Push It Further!",
        "description": ""
      },
      {
        "level": 6,
        "name": "Teachings of the Collective of Plenty",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Dracolite",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "ifa",
    "name": "Ifa",
    "title": "In the Wake of Wandering Winds",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Catalyst",
    "region": "Natlan",
    "affiliation": "Tlalocan",
    "role": "Support",
    "version": "5.6",
    "releaseDate": "v5.6",
    "avatar": "/images/characters/UI_AvatarIcon_Ifa.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Ifa.png",
    "description": "A vet from the Flower-Feather Clan who cherishes the life he leads alongside all manner of living things — people, animals, you name it.",
    "baseStatsLvl90": {
      "hp": 10081,
      "atk": 178,
      "def": 605,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "96"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 806,
        "atk": 14,
        "def": 48,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2016,
        "atk": 36,
        "def": 121,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5041,
        "atk": 89,
        "def": 303,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7561,
        "atk": 134,
        "def": 454,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10081,
        "atk": 178,
        "def": 605,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "96"
      }
    ],
    "talents": [
      {
        "name": "Rite of Dispelling Winds",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Airborne Disease Prevention",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Compound Sedation Field",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Field Medic's Vision",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Mutual Aid Agreement",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Focused Emergency Rescue",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Vitiferous Elixir's Concoction",
        "description": ""
      },
      {
        "level": 2,
        "name": "Guiding Spirit of Ballistic Prayer",
        "description": ""
      },
      {
        "level": 3,
        "name": "Rebuttal in Negotiations With the Night",
        "description": ""
      },
      {
        "level": 4,
        "name": "Decayed Vessel's Permutation",
        "description": ""
      },
      {
        "level": 5,
        "name": "Vow of Universal Coexistence",
        "description": ""
      },
      {
        "level": 6,
        "name": "Oath on a Feathered Knot",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Saurian Claw Succulent",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "illuga",
    "name": "Illuga",
    "title": "Nightmare's Burning Heart",
    "rarity": 4,
    "element": "Geo",
    "weaponType": "Polearm",
    "region": "Nod-Krai",
    "affiliation": "Lightkeepers",
    "role": "Support",
    "version": "6.3",
    "releaseDate": "v6.3",
    "avatar": "/images/characters/UI_AvatarIcon_Illuga.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Illuga.png",
    "description": "Member of the investigation squad, the Nightmare Orioles. The youngest squad leader among the Lightkeepers.",
    "baseStatsLvl90": {
      "hp": 11962,
      "atk": 191,
      "def": 814,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "96"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 957,
        "atk": 15,
        "def": 65,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2392,
        "atk": 38,
        "def": 163,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5981,
        "atk": 96,
        "def": 407,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8972,
        "atk": 143,
        "def": 610,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11962,
        "atk": 191,
        "def": 814,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "96"
      }
    ],
    "talents": [
      {
        "name": "Oathkeeper's Spear",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Dawnbearing Songbird",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Shadowless Reflection",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Torchforger's Covenant",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Demonhunter's Dusk",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Unwithering in Winter",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Vigilant Sentinel",
        "description": ""
      },
      {
        "level": 2,
        "name": "Elk With Fanged Antlers",
        "description": ""
      },
      {
        "level": 3,
        "name": "Earthshaking Maw",
        "description": ""
      },
      {
        "level": 4,
        "name": "Solarhunting Wolf",
        "description": ""
      },
      {
        "level": 5,
        "name": "Hurricane Steed",
        "description": ""
      },
      {
        "level": 6,
        "name": "Nightmare Orioles",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Pine Amber",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "ineffa",
    "name": "Ineffa",
    "title": "Boom Boom Thunderwave",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Polearm",
    "region": "Nod-Krai",
    "affiliation": "Clink-Clank Krumkake Craftshop",
    "role": "Main DPS",
    "version": "5.8",
    "releaseDate": "v5.8",
    "avatar": "/images/characters/UI_AvatarIcon_Ineffa.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Ineffa.png",
    "description": "A multifunctional robot containing integrated mechanical components from various nations. The Source Core in her chest has endured the passage of countless years.",
    "baseStatsLvl90": {
      "hp": 12613,
      "atk": 330,
      "def": 828,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1009,
        "atk": 26,
        "def": 66,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2523,
        "atk": 66,
        "def": 166,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6307,
        "atk": 165,
        "def": 414,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9460,
        "atk": 248,
        "def": 621,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12613,
        "atk": 330,
        "def": 828,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Cyclonic Duster",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Cleaning Mode: Carrier Frequency",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Supreme Instruction: Cyclonic Exterminator",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Overclocking Circuit",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Panoramic Permutation Protocol",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Assemblage Hub",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Rectifying Processor",
        "description": ""
      },
      {
        "level": 2,
        "name": "Support Cleaning Module",
        "description": ""
      },
      {
        "level": 3,
        "name": "Enhanced Emotion Emulator",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Edictless Path",
        "description": ""
      },
      {
        "level": 5,
        "name": "Mirror's Dream Transcension",
        "description": ""
      },
      {
        "level": 6,
        "name": "A Dawning Morn for You",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Glowing Hornshroom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "jahoda",
    "name": "Jahoda",
    "title": "Windthreading Shadow",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Bow",
    "region": "Nod-Krai",
    "affiliation": "Curatorium of Secrets",
    "role": "Main DPS",
    "version": "6.2",
    "releaseDate": "v6.2",
    "avatar": "/images/characters/UI_AvatarIcon_Jahoda.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Jahoda.png",
    "description": "The Curatorium of Secrets' extremely reliable, do-it-all super employee (or so she claims).",
    "baseStatsLvl90": {
      "hp": 9646,
      "atk": 223,
      "def": 580,
      "ascensionStat": "Healing Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 772,
        "atk": 18,
        "def": 46,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1929,
        "atk": 45,
        "def": 116,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4823,
        "atk": 112,
        "def": 290,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7235,
        "atk": 167,
        "def": 435,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9646,
        "atk": 223,
        "def": 580,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Strike While the Arrow's Hot",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Savvy Strategy: Splitting the Spoils",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Hidden Aces: Seven Tools of the Hunter",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Plan to Get Paid",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Sweet Berry Bounty",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Rooftop Dash",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "One More Flask!",
        "description": ""
      },
      {
        "level": 2,
        "name": "Rogue's Quick Thinking",
        "description": ""
      },
      {
        "level": 3,
        "name": "Desperate Gamble",
        "description": ""
      },
      {
        "level": 4,
        "name": "Wild Berry Amid the Dust",
        "description": ""
      },
      {
        "level": 5,
        "name": "The Greatest Treasure",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Littlest Luck",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Portable Bearing",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "jean",
    "name": "Jean",
    "title": "Dandelion Knight",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Sword",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Qin.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Qin.png",
    "description": "The righteous and rigorous Dandelion Knight, and Acting Grand Master of Mondstadt's Knights of Favonius.",
    "baseStatsLvl90": {
      "hp": 14695,
      "atk": 239,
      "def": 769,
      "ascensionStat": "Healing Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1176,
        "atk": 19,
        "def": 61,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2939,
        "atk": 48,
        "def": 154,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7348,
        "atk": 120,
        "def": 384,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11021,
        "atk": 179,
        "def": 576,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 14695,
        "atk": 239,
        "def": 769,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Favonius Bladework",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Gale Blade",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Dandelion Breeze",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Wind Companion",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Let the Wind Lead",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Guiding Breeze",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Spiraling Tempest",
        "description": ""
      },
      {
        "level": 2,
        "name": "People's Aegis",
        "description": ""
      },
      {
        "level": 3,
        "name": "When the West Wind Arises",
        "description": ""
      },
      {
        "level": 4,
        "name": "Lands of Dandelion",
        "description": ""
      },
      {
        "level": 5,
        "name": "Outbursting Gust",
        "description": ""
      },
      {
        "level": 6,
        "name": "Lion's Fang, Fair Protector of Mondstadt",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Dandelion Seed",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kachina",
    "name": "Kachina",
    "title": "Mottled Gold Yet Unsmelted",
    "rarity": 4,
    "element": "Geo",
    "weaponType": "Polearm",
    "region": "Natlan",
    "affiliation": "Nanatzcayan",
    "role": "Main DPS",
    "version": "5.0",
    "releaseDate": "v5.0",
    "avatar": "/images/characters/UI_AvatarIcon_Kachina.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Kachina.png",
    "description": "A young warrior of the Nanatzcayan, given the Ancient Name of \"Uthabiti.\" Kind-hearted and insatiably persistent, she grows stronger and more capable with each setback she faces.",
    "baseStatsLvl90": {
      "hp": 11799,
      "atk": 217,
      "def": 792,
      "ascensionStat": "Geo DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 944,
        "atk": 17,
        "def": 63,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2360,
        "atk": 43,
        "def": 158,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5900,
        "atk": 108,
        "def": 396,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8849,
        "atk": 162,
        "def": 594,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11799,
        "atk": 217,
        "def": 792,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Cragbiter",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Go, Go Turbo Twirly!",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Time to Get Serious!",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Mountain Echoes",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "The Weight of Stone",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Heart of Unity",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Shards Are Gems Too",
        "description": ""
      },
      {
        "level": 2,
        "name": "Never Leave Home Without... Turbo Twirly",
        "description": ""
      },
      {
        "level": 3,
        "name": "Improved Stabilizer",
        "description": ""
      },
      {
        "level": 4,
        "name": "More Foes, More Caution",
        "description": ""
      },
      {
        "level": 5,
        "name": "All I've Collected Till Now",
        "description": ""
      },
      {
        "level": 6,
        "name": "This Time, I've Gotta Win",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Quenepa Berry",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kaedehara-kazuha",
    "name": "Kaedehara Kazuha",
    "title": "Scarlet Leaves Pursue Wild Waves",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Sword",
    "region": "Inazuma",
    "affiliation": "The Crux",
    "role": "Support",
    "version": "1.6",
    "releaseDate": "v1.6",
    "avatar": "/images/characters/UI_AvatarIcon_Kazuha.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Kazuha.png",
    "description": "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past.",
    "baseStatsLvl90": {
      "hp": 13348,
      "atk": 297,
      "def": 807,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "115.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1068,
        "atk": 24,
        "def": 65,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2670,
        "atk": 59,
        "def": 161,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6674,
        "atk": 148,
        "def": 403,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10011,
        "atk": 222,
        "def": 605,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13348,
        "atk": 297,
        "def": 807,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "115.2"
      }
    ],
    "talents": [
      {
        "name": "Garyuu Bladework",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Chihayaburu",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Kazuha Slash",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Soumon Swordsmanship",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Poetics of Fuubutsu",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Cloud Strider",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Scarlet Hills",
        "description": ""
      },
      {
        "level": 2,
        "name": "Yamaarashi Tailwind",
        "description": ""
      },
      {
        "level": 3,
        "name": "Maple Monogatari",
        "description": ""
      },
      {
        "level": 4,
        "name": "Oozora Genpou",
        "description": ""
      },
      {
        "level": 5,
        "name": "Wisdom of Bansei",
        "description": ""
      },
      {
        "level": 6,
        "name": "Crimson Momiji",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Sea Ganoderma",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kaeya",
    "name": "Kaeya",
    "title": "Frostwind Swordsman",
    "rarity": 4,
    "element": "Cryo",
    "weaponType": "Sword",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Support",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Kaeya.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Kaeya.png",
    "description": "An accomplished swordsman and a strategic thinker in the Knights of Favonius, rumored to hail from beyond Mondstadt.",
    "baseStatsLvl90": {
      "hp": 11636,
      "atk": 223,
      "def": 792,
      "ascensionStat": "Energy Recharge",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 931,
        "atk": 18,
        "def": 63,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2327,
        "atk": 45,
        "def": 158,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5818,
        "atk": 112,
        "def": 396,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8727,
        "atk": 167,
        "def": 594,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11636,
        "atk": 223,
        "def": 792,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Ceremonial Bladework",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Frostgnaw",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Glacial Waltz",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Cold-Blooded Strike",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Glacial Heart",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Hidden Strength",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Excellent Blood",
        "description": ""
      },
      {
        "level": 2,
        "name": "Never-Ending Performance",
        "description": ""
      },
      {
        "level": 3,
        "name": "Dance of Frost",
        "description": ""
      },
      {
        "level": 4,
        "name": "Frozen Kiss",
        "description": ""
      },
      {
        "level": 5,
        "name": "Frostbiting Embrace",
        "description": ""
      },
      {
        "level": 6,
        "name": "Glacial Whirlwind",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Calla Lily",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kamisato-ayaka",
    "name": "Kamisato Ayaka",
    "title": "Frostflake Heron",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Sword",
    "region": "Inazuma",
    "affiliation": "Yashiro Commission",
    "role": "Main DPS",
    "version": "2.0",
    "releaseDate": "v2.0",
    "avatar": "/images/characters/UI_AvatarIcon_Ayaka.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Ayaka.png",
    "description": "Daughter of the Yashiro Commission's Kamisato Clan. Dignified and elegant, as well as wise and strong.",
    "baseStatsLvl90": {
      "hp": 12858,
      "atk": 342,
      "def": 784,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1029,
        "atk": 27,
        "def": 63,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2572,
        "atk": 68,
        "def": 157,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6429,
        "atk": 171,
        "def": 392,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9644,
        "atk": 257,
        "def": 588,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12858,
        "atk": 342,
        "def": 784,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Kamisato Art: Kabuki",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Kamisato Art: Hyouka",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Kamisato Art: Soumetsu",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Amatsumi Kunitsumi Sanctification",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Kanten Senmyou Blessing",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Fruits of Shinsa",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Snowswept Sakura",
        "description": ""
      },
      {
        "level": 2,
        "name": "Blizzard Blade Seki no To",
        "description": ""
      },
      {
        "level": 3,
        "name": "Frostbloom Kamifubuki",
        "description": ""
      },
      {
        "level": 4,
        "name": "Ebb and Flow",
        "description": ""
      },
      {
        "level": 5,
        "name": "Blossom Cloud Irutsuki",
        "description": ""
      },
      {
        "level": 6,
        "name": "Dance of Suigetsu",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Sakura Bloom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kamisato-ayato",
    "name": "Kamisato Ayato",
    "title": "Pillar of Fortitude",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Sword",
    "region": "Inazuma",
    "affiliation": "Yashiro Commission",
    "role": "Main DPS",
    "version": "2.6",
    "releaseDate": "v2.6",
    "avatar": "/images/characters/UI_AvatarIcon_Ayato.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Ayato.png",
    "description": "The young but highly accomplished head of the Yashiro Commission's Kamisato Clan. Cultured and polite, he is a man of many ways and means.",
    "baseStatsLvl90": {
      "hp": 13715,
      "atk": 299,
      "def": 769,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1097,
        "atk": 24,
        "def": 61,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2743,
        "atk": 60,
        "def": 154,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6858,
        "atk": 149,
        "def": 384,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10287,
        "atk": 224,
        "def": 576,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13715,
        "atk": 299,
        "def": 769,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Kamisato Art: Marobashi",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Kamisato Art: Kyouka",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Kamisato Art: Suiyuu",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Kamisato Art: Mine Wo Matoishi Kiyotaki",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Kamisato Art: Michiyuku Hagetsu",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Kamisato Art: Daily Cooking",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Kyouka Fuushi",
        "description": ""
      },
      {
        "level": 2,
        "name": "World Source",
        "description": ""
      },
      {
        "level": 3,
        "name": "To Admire the Flowers",
        "description": ""
      },
      {
        "level": 4,
        "name": "Endless Flow",
        "description": ""
      },
      {
        "level": 5,
        "name": "Bansui Ichiro",
        "description": ""
      },
      {
        "level": 6,
        "name": "Boundless Origin",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Sakura Bloom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kaveh",
    "name": "Kaveh",
    "title": "Empyrean Reflection",
    "rarity": 4,
    "element": "Dendro",
    "weaponType": "Claymore",
    "region": "Sumeru",
    "affiliation": "Independent Design Studio",
    "role": "Support",
    "version": "3.6",
    "releaseDate": "v3.6",
    "avatar": "/images/characters/UI_AvatarIcon_Kaveh.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Kaveh.png",
    "description": "A renowned architect from Sumeru who perhaps cares a bit too much about too many things. He is an aesthete troubled by reality.",
    "baseStatsLvl90": {
      "hp": 11962,
      "atk": 234,
      "def": 751,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "96"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 957,
        "atk": 19,
        "def": 60,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2392,
        "atk": 47,
        "def": 150,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5981,
        "atk": 117,
        "def": 375,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8972,
        "atk": 175,
        "def": 563,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11962,
        "atk": 234,
        "def": 751,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "96"
      }
    ],
    "talents": [
      {
        "name": "Schematic Setup",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Artistic Ingenuity",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Painted Dome",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "An Architect's Undertaking",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "A Craftsman's Curious Conceptions",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "The Art of Budgeting",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Sublime Salutations",
        "description": ""
      },
      {
        "level": 2,
        "name": "Grace of Royal Roads",
        "description": ""
      },
      {
        "level": 3,
        "name": "Profferings of Dur Untash",
        "description": ""
      },
      {
        "level": 4,
        "name": "Feast of Apadana",
        "description": ""
      },
      {
        "level": 5,
        "name": "Treasures of Bonkhanak",
        "description": ""
      },
      {
        "level": 6,
        "name": "Pairidaeza's Dreams",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Mourning Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "keqing",
    "name": "Keqing",
    "title": "Driving Thunder",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Sword",
    "region": "Liyue",
    "affiliation": "Liyue Qixing",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Keqing.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Keqing.png",
    "description": "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis's unilateral approach to policymaking in Liyue — but in truth, gods admire skeptics such as her quite a lot.",
    "baseStatsLvl90": {
      "hp": 13103,
      "atk": 323,
      "def": 799,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1048,
        "atk": 26,
        "def": 64,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2621,
        "atk": 65,
        "def": 160,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6552,
        "atk": 161,
        "def": 400,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9827,
        "atk": 242,
        "def": 599,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13103,
        "atk": 323,
        "def": 799,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Yunlai Swordsmanship",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Stellar Restoration",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Starward Sword",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Thundering Penance",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Aristocratic Dignity",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Land's Overseer",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Thundering Might",
        "description": ""
      },
      {
        "level": 2,
        "name": "Keen Extraction",
        "description": ""
      },
      {
        "level": 3,
        "name": "Foreseen Reformation",
        "description": ""
      },
      {
        "level": 4,
        "name": "Attunement",
        "description": ""
      },
      {
        "level": 5,
        "name": "Beckoning Stars",
        "description": ""
      },
      {
        "level": 6,
        "name": "Tenacious Star",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Cor Lapis",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kinich",
    "name": "Kinich",
    "title": "Turnfire Hunt",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Claymore",
    "region": "Natlan",
    "affiliation": "Huitztlan",
    "role": "Main DPS",
    "version": "5.0",
    "releaseDate": "v5.0",
    "avatar": "/images/characters/UI_AvatarIcon_Kinich.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Kinich.png",
    "description": "A Huitztlan Saurian Hunter skilled at counting costs.",
    "baseStatsLvl90": {
      "hp": 12858,
      "atk": 332,
      "def": 802,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1029,
        "atk": 27,
        "def": 64,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2572,
        "atk": 66,
        "def": 160,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6429,
        "atk": 166,
        "def": 401,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9644,
        "atk": 249,
        "def": 601,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12858,
        "atk": 332,
        "def": 802,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Nightsun Style",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Canopy Hunter: Riding High",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Hail to the Almighty Dragonlord",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "The Price of Desolation",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Flame Spirit Pact",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Repaid in Full",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Parrot's Beak",
        "description": ""
      },
      {
        "level": 2,
        "name": "Tiger Beetle's Palm",
        "description": ""
      },
      {
        "level": 3,
        "name": "Protosuchian's Claw",
        "description": ""
      },
      {
        "level": 4,
        "name": "Hummingbird's Feather",
        "description": ""
      },
      {
        "level": 5,
        "name": "Howler Monkey's Tail",
        "description": ""
      },
      {
        "level": 6,
        "name": "Auspicious Beast's Shape",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Saurian Claw Succulent",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kirara",
    "name": "Kirara",
    "title": "Cat Upon the Eaves",
    "rarity": 4,
    "element": "Dendro",
    "weaponType": "Sword",
    "region": "Inazuma",
    "affiliation": "Komaniya Express",
    "role": "Main DPS",
    "version": "3.7",
    "releaseDate": "v3.7",
    "avatar": "/images/characters/UI_AvatarIcon_Momoka.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Momoka.png",
    "description": "A courier for Komaniya Express, a delivery company in Inazuma. A nekomata who loves her job and human society.",
    "baseStatsLvl90": {
      "hp": 12180,
      "atk": 223,
      "def": 546,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 974,
        "atk": 18,
        "def": 44,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2436,
        "atk": 45,
        "def": 109,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6090,
        "atk": 112,
        "def": 273,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9135,
        "atk": 167,
        "def": 410,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12180,
        "atk": 223,
        "def": 546,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Boxcutter",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Meow-teor Kick",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Secret Art: Surprise Dispatch",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Bewitching, Betwitching Tails",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Pupillary Variance",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Cat's Creeping Carriage",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Material Circulation",
        "description": ""
      },
      {
        "level": 2,
        "name": "Perfectly Packaged",
        "description": ""
      },
      {
        "level": 3,
        "name": "Universal Recognition",
        "description": ""
      },
      {
        "level": 4,
        "name": "Steed of Skanda",
        "description": ""
      },
      {
        "level": 5,
        "name": "A Thousand Miles in a Day",
        "description": ""
      },
      {
        "level": 6,
        "name": "Countless Sights to See",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Amakumo Fruit",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "klee",
    "name": "Klee",
    "title": "Fleeing Sunlight",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Catalyst",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Klee.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Klee.png",
    "description": "An explosives expert and a regular at the Knights of Favonius's confinement room. Also known as Fleeing Sunlight.",
    "baseStatsLvl90": {
      "hp": 10287,
      "atk": 311,
      "def": 615,
      "ascensionStat": "Pyro DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 823,
        "atk": 25,
        "def": 49,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2057,
        "atk": 62,
        "def": 123,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5143,
        "atk": 155,
        "def": 307,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7715,
        "atk": 233,
        "def": 461,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10287,
        "atk": 311,
        "def": 615,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Kaboom!",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Jumpy Dumpty",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Sparks 'n' Splash",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Pounding Surprise",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Sparkling Burst",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "All Of My Treasures!",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Chained Reactions",
        "description": ""
      },
      {
        "level": 2,
        "name": "Explosive Frags",
        "description": ""
      },
      {
        "level": 3,
        "name": "Exquisite Compound",
        "description": ""
      },
      {
        "level": 4,
        "name": "Sparkly Explosion",
        "description": ""
      },
      {
        "level": 5,
        "name": "Nova Burst",
        "description": ""
      },
      {
        "level": 6,
        "name": "Blazing Delight",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Philanemo Mushroom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kujou-sara",
    "name": "Kujou Sara",
    "title": "Crowfeather Kaburaya",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Bow",
    "region": "Inazuma",
    "affiliation": "Tenryou Commission",
    "role": "Main DPS",
    "version": "2.1",
    "releaseDate": "v2.1",
    "avatar": "/images/characters/UI_AvatarIcon_Sara.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Sara.png",
    "description": "A general of the Tenryou Commission. Bold, decisive, and skilled in battle.",
    "baseStatsLvl90": {
      "hp": 9570,
      "atk": 195,
      "def": 628,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 766,
        "atk": 16,
        "def": 50,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1914,
        "atk": 39,
        "def": 126,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4785,
        "atk": 98,
        "def": 314,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7177,
        "atk": 147,
        "def": 471,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9570,
        "atk": 195,
        "def": 628,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Tengu Bowmanship",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Tengu Stormcall",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Subjugation: Koukou Sendou",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Immovable Will",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Decorum",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Land Survey",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Crow's Eye",
        "description": ""
      },
      {
        "level": 2,
        "name": "Dark Wings",
        "description": ""
      },
      {
        "level": 3,
        "name": "The War Within",
        "description": ""
      },
      {
        "level": 4,
        "name": "Conclusive Proof",
        "description": ""
      },
      {
        "level": 5,
        "name": "Spellsinger",
        "description": ""
      },
      {
        "level": 6,
        "name": "Sin of Pride",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Dendrobium",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "kuki-shinobu",
    "name": "Kuki Shinobu",
    "title": "Mender of Tribulations",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Sword",
    "region": "Inazuma",
    "affiliation": "Arataki Gang",
    "role": "Main DPS",
    "version": "2.7",
    "releaseDate": "v2.7",
    "avatar": "/images/characters/UI_AvatarIcon_Shinobu.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Shinobu.png",
    "description": "The capable and reliable Arataki Gang deputy leader. Please note: capable and reliable are not appellations for the \"Arataki Gang,\" but for their deputy leader in specific.",
    "baseStatsLvl90": {
      "hp": 12289,
      "atk": 212,
      "def": 751,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 983,
        "atk": 17,
        "def": 60,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2458,
        "atk": 42,
        "def": 150,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6144,
        "atk": 106,
        "def": 375,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9216,
        "atk": 159,
        "def": 563,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12289,
        "atk": 212,
        "def": 751,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Shinobu's Shadowsword",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Sanctifying Ring",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Gyoei Narukami Kariyama Rite",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Breaking Free",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Heart's Repose",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Protracted Prayers",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "To Cloister Compassion",
        "description": ""
      },
      {
        "level": 2,
        "name": "To Forsake Fortune",
        "description": ""
      },
      {
        "level": 3,
        "name": "To Sequester Sorrow",
        "description": ""
      },
      {
        "level": 4,
        "name": "To Sever Sealing",
        "description": ""
      },
      {
        "level": 5,
        "name": "To Cease Courtesies",
        "description": ""
      },
      {
        "level": 6,
        "name": "To Ward Weakness",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Naku Weed",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "lan-yan",
    "name": "Lan Yan",
    "title": "Spring Woven From Jade",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Catalyst",
    "region": "Liyue",
    "affiliation": "Chenyu Vale",
    "role": "Main DPS",
    "version": "5.3",
    "releaseDate": "v5.3",
    "avatar": "/images/characters/UI_AvatarIcon_Lanyan.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Lanyan.png",
    "description": "A rattan weaver from Chenyu Vale. Clear-minded and well-tempered, she is as lively as a mountain spring.",
    "baseStatsLvl90": {
      "hp": 9244,
      "atk": 251,
      "def": 580,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 739,
        "atk": 20,
        "def": 46,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1849,
        "atk": 50,
        "def": 116,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4622,
        "atk": 125,
        "def": 290,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 6933,
        "atk": 188,
        "def": 435,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9244,
        "atk": 251,
        "def": 580,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Black Pheasant Strides on Water",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Swallow-Wisp Pinion Dance",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Lustrous Moonrise",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Four Sealing Divination Charms",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Skyfeather Evil-Subduing Charm",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Thought and Intent, Like Silken Scent",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"As One Might Stride Betwixt the Clouds\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"Dance Vestments Billow Like Rainbow Jade\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"On White Wings Pierce Through Cloud and Fog\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"With Drakefalcon's Blood-Pearls Adorned\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"Having Met You, My Heart is Gladdened\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"Let Us Away on Sylphic Wing, the Silvered Ornaments to Ring\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Clearwater Jade",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "lauma",
    "name": "Lauma",
    "title": "Evermoon's Sacrament Song",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Catalyst",
    "region": "Nod-Krai",
    "affiliation": "Frostmoon Scions",
    "role": "Support",
    "version": "6.0",
    "releaseDate": "v6.0",
    "avatar": "/images/characters/UI_AvatarIcon_Lauma.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Lauma.png",
    "description": "A Maiden blessed by moonlight and the grove alike, hope born to the Frostmoon Scions.",
    "baseStatsLvl90": {
      "hp": 10654,
      "atk": 255,
      "def": 669,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "115.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 852,
        "atk": 20,
        "def": 53,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2131,
        "atk": 51,
        "def": 134,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5327,
        "atk": 127,
        "def": 334,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7990,
        "atk": 191,
        "def": 501,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10654,
        "atk": 255,
        "def": 669,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "115.2"
      }
    ],
    "talents": [
      {
        "name": "Peregrination of Linnunrata",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Runo: Dawnless Rest of Karsikko",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Runo: All Hearts Become the Beating Moon",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Light for the Frosty Night",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Cleansing for the Spring",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Nature's Chorus",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"O Lips, Weave Me Songs and Psalms\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"Twine Warnings and Tales From the North\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"Seek Not to Tread the Sly Fox's Path\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"Nor Yearn for the Great Bear's Might\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"If Truth May Be Subject to Witness\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"I Offer Blood and Tears to the Moonlight\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Moonfall Silver",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "layla",
    "name": "Layla",
    "title": "Fantastical Evening Star",
    "rarity": 4,
    "element": "Cryo",
    "weaponType": "Sword",
    "region": "Sumeru",
    "affiliation": "Rtawahist",
    "role": "Main DPS",
    "version": "3.2",
    "releaseDate": "v3.2",
    "avatar": "/images/characters/UI_AvatarIcon_Layla.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Layla.png",
    "description": "A Rtawahist student who specializes in Theoretical Astrology. Heavily prone to somnambulism and locked in a grinding war with sleep deprivation, the problem of restful slumber is a most troubling one to her.",
    "baseStatsLvl90": {
      "hp": 11092,
      "atk": 217,
      "def": 655,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 887,
        "atk": 17,
        "def": 52,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2218,
        "atk": 43,
        "def": 131,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5546,
        "atk": 108,
        "def": 328,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8319,
        "atk": 162,
        "def": 491,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11092,
        "atk": 217,
        "def": 655,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Sword of the Radiant Path",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Nights of Formal Focus",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Dream of the Star-Stream Shaker",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Like Nascent Light",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Sweet Slumber Undisturbed",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Shadowy Dream-Signs",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Fortress of Fantasy",
        "description": ""
      },
      {
        "level": 2,
        "name": "Light's Remit",
        "description": ""
      },
      {
        "level": 3,
        "name": "Secrets of the Night",
        "description": ""
      },
      {
        "level": 4,
        "name": "Starry Illumination",
        "description": ""
      },
      {
        "level": 5,
        "name": "Stream of Consciousness",
        "description": ""
      },
      {
        "level": 6,
        "name": "Radiant Soulfire",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Nilotpala Lotus",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "linnea",
    "name": "Linnea",
    "title": "Augur of Wonders",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Bow",
    "region": "Nod-Krai",
    "affiliation": "Adventurers' Guild",
    "role": "Main DPS",
    "version": "6.5",
    "releaseDate": "v6.5",
    "avatar": "/images/characters/UI_AvatarIcon_Linnea.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Linnea.png",
    "description": "Naturalist and Advisor to the Nod-Krai Branch of the Adventurers' Guild.",
    "baseStatsLvl90": {
      "hp": 9895,
      "atk": 144,
      "def": 907,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 792,
        "atk": 11,
        "def": 73,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1979,
        "atk": 29,
        "def": 181,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4947,
        "atk": 72,
        "def": 453,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7421,
        "atk": 108,
        "def": 680,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9895,
        "atk": 144,
        "def": 907,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Capture Protocol",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Countermeasure: Lumi's Battle Cry!",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Memo: Survival Guide in Extreme Conditions",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Field Observation Notes",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Universal Naturalist Archive",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Habitat Survey",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Provisional Classification",
        "description": ""
      },
      {
        "level": 2,
        "name": "Tidings of Joy and Sorrow",
        "description": ""
      },
      {
        "level": 3,
        "name": "Eventful Log Page",
        "description": ""
      },
      {
        "level": 4,
        "name": "Expert Instinct",
        "description": ""
      },
      {
        "level": 5,
        "name": "Fairyland's Farewell Gift",
        "description": ""
      },
      {
        "level": 6,
        "name": "Golden Beagle's Dream",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Etherwing Moth",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "lisa",
    "name": "Lisa",
    "title": "Witch of Purple Rose",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Catalyst",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Support",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Lisa.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Lisa.png",
    "description": "The languid but knowledgeable Librarian of the Knights of Favonius, deemed by Sumeru Akademiya to be their most distinguished graduate in the past two centuries.",
    "baseStatsLvl90": {
      "hp": 9570,
      "atk": 232,
      "def": 573,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "96"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 766,
        "atk": 19,
        "def": 46,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1914,
        "atk": 46,
        "def": 115,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4785,
        "atk": 116,
        "def": 287,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7177,
        "atk": 174,
        "def": 430,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9570,
        "atk": 232,
        "def": 573,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "96"
      }
    ],
    "talents": [
      {
        "name": "Lightning Touch",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Violet Arc",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Lightning Rose",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Induced Aftershock",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Static Electricity Field",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "General Pharmaceutics",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Infinite Circuit",
        "description": ""
      },
      {
        "level": 2,
        "name": "Electromagnetic Field",
        "description": ""
      },
      {
        "level": 3,
        "name": "Resonant Thunder",
        "description": ""
      },
      {
        "level": 4,
        "name": "Plasma Eruption",
        "description": ""
      },
      {
        "level": 5,
        "name": "Electrocute",
        "description": ""
      },
      {
        "level": 6,
        "name": "Pulsating Witch",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Valberry",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "lohen",
    "name": "Lohen",
    "title": "Sharpened Arrowhead",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Polearm",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "6.6",
    "releaseDate": "v6.6",
    "avatar": "/images/characters/UI_AvatarIcon_Lohen.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Lohen.png",
    "description": "Vice Captain of the Knights of Favonius Ranged Company, a knight known for his unorthodox approach and fondness for unconventional tactics.",
    "baseStatsLvl90": {
      "hp": 12858,
      "atk": 344,
      "def": 784,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1029,
        "atk": 28,
        "def": 63,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2572,
        "atk": 69,
        "def": 157,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6429,
        "atk": 172,
        "def": 392,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9644,
        "atk": 258,
        "def": 588,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12858,
        "atk": 344,
        "def": 784,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Spear of Favonius — Broken Oath",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Unforeseen Strike",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Manifest Judgment",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Moratorium on Questioning",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Flippant Masterpiece",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "When the Mood Strikes",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "O Breezes, That So Oft Bear Sorrowful Lament",
        "description": ""
      },
      {
        "level": 2,
        "name": "In Flight, I Strike Whatever Flies",
        "description": ""
      },
      {
        "level": 3,
        "name": "Only the Spear That Wounds Can Heal",
        "description": ""
      },
      {
        "level": 4,
        "name": "Radiant Love, Laughing Death",
        "description": ""
      },
      {
        "level": 5,
        "name": "Never Ask, Nor Trouble You to Know",
        "description": ""
      },
      {
        "level": 6,
        "name": "To Drown, to Sink, Unconscious — Supreme Joy",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Etherwing Moth",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "lumine",
    "name": "Lumine",
    "title": "Lumine",
    "rarity": 5,
    "element": "None",
    "weaponType": "Sword",
    "region": "Other",
    "affiliation": "Teyvat",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_PlayerGirl.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_PlayerGirl.png",
    "description": "A traveler from another world who had their only kin taken away, forcing them to embark on a journey to find The Seven.",
    "baseStatsLvl90": {
      "hp": 10875,
      "atk": 212,
      "def": 683,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 870,
        "atk": 17,
        "def": 55,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2175,
        "atk": 42,
        "def": 137,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5437,
        "atk": 106,
        "def": 341,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8156,
        "atk": 159,
        "def": 512,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10875,
        "atk": 212,
        "def": 683,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [],
    "constellations": [],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "None DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "None DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "None Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Brilliant Diamond Sliver",
      "commonDrop": "Windwheel Aster",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "lynette",
    "name": "Lynette",
    "title": "Elegance in the Shadows",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Sword",
    "region": "Fontaine",
    "affiliation": "Hotel Bouffes d'ete",
    "role": "Main DPS",
    "version": "4.0",
    "releaseDate": "v4.0",
    "avatar": "/images/characters/UI_AvatarIcon_Linette.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Linette.png",
    "description": "A magic assistant of few words, her emotions are as inscrutable as any cat's.",
    "baseStatsLvl90": {
      "hp": 12397,
      "atk": 232,
      "def": 712,
      "ascensionStat": "Anemo DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 992,
        "atk": 19,
        "def": 57,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2479,
        "atk": 46,
        "def": 142,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6199,
        "atk": 116,
        "def": 356,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9298,
        "atk": 174,
        "def": 534,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12397,
        "atk": 232,
        "def": 712,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Rapid Ritesword",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Enigmatic Feint",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Magic Trick: Astonishing Shift",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Sophisticated Synergy",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Props Positively Prepped",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Loci-Based Mnemonics",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "A Cold Blade Like a Shadow",
        "description": ""
      },
      {
        "level": 2,
        "name": "Endless Mysteries",
        "description": ""
      },
      {
        "level": 3,
        "name": "Cognition-Inverting Gaze",
        "description": ""
      },
      {
        "level": 4,
        "name": "Tacit Coordination",
        "description": ""
      },
      {
        "level": 5,
        "name": "Obscuring Ambiguity",
        "description": ""
      },
      {
        "level": 6,
        "name": "Watchful Eye",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Lumidouce Bell",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "lyney",
    "name": "Lyney",
    "title": "Spectacle of Phantasmagoria",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Bow",
    "region": "Fontaine",
    "affiliation": "Hotel Bouffes d'ete",
    "role": "Main DPS",
    "version": "4.0",
    "releaseDate": "v4.0",
    "avatar": "/images/characters/UI_AvatarIcon_Liney.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Liney.png",
    "description": "A famed Fontainian magician who possesses great stage presence as well as gift of the gab. Audiences are enthralled by his exquisite skills, and they hang on to his every clever word.",
    "baseStatsLvl90": {
      "hp": 11021,
      "atk": 318,
      "def": 538,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 882,
        "atk": 25,
        "def": 43,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2204,
        "atk": 64,
        "def": 108,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5511,
        "atk": 159,
        "def": 269,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8266,
        "atk": 239,
        "def": 403,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11021,
        "atk": 318,
        "def": 538,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Card Force Translocation",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Bewildering Lights",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Wondrous Trick: Miracle Parade",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Perilous Performance",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Conclusive Ovation",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Trivial Observations",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Whimsical Wonders",
        "description": ""
      },
      {
        "level": 2,
        "name": "Loquacious Cajoling",
        "description": ""
      },
      {
        "level": 3,
        "name": "Prestidigitation",
        "description": ""
      },
      {
        "level": 4,
        "name": "Well-Versed, Well-Rehearsed",
        "description": ""
      },
      {
        "level": 5,
        "name": "To Pierce Enigmas",
        "description": ""
      },
      {
        "level": 6,
        "name": "Guarded Smile",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Rainbow Rose",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "manekin",
    "name": "Manekin",
    "title": "Manekin",
    "rarity": 5,
    "element": "None",
    "weaponType": "Sword",
    "region": "Other",
    "affiliation": "——",
    "role": "Main DPS",
    "version": "6.1",
    "releaseDate": "v6.1",
    "avatar": "/images/characters/UI_AvatarIcon_PlayerBoy.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_PlayerBoy.png",
    "description": "A Manekin gifted to you and Paimon by a witch who uses the pseudonym \"Octavia.\" They are gifted at exploring the mysteries sealed within the Miliastra Wonderland.",
    "baseStatsLvl90": {
      "hp": 10875,
      "atk": 212,
      "def": 683,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 870,
        "atk": 17,
        "def": 55,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2175,
        "atk": 42,
        "def": 137,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5437,
        "atk": 106,
        "def": 341,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8156,
        "atk": 159,
        "def": 512,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10875,
        "atk": 212,
        "def": 683,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [],
    "constellations": [],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "None DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "None DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "None Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Regional Specialty",
      "commonDrop": "Common Monster Drop",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "manekina",
    "name": "Manekina",
    "title": "Manekina",
    "rarity": 5,
    "element": "None",
    "weaponType": "Sword",
    "region": "Other",
    "affiliation": "——",
    "role": "Main DPS",
    "version": "6.1",
    "releaseDate": "v6.1",
    "avatar": "/images/characters/UI_AvatarIcon_PlayerGirl.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_PlayerGirl.png",
    "description": "A Manekin gifted to you and Paimon by a witch who uses the pseudonym \"Octavia.\" They are gifted at exploring the mysteries sealed within the Miliastra Wonderland.",
    "baseStatsLvl90": {
      "hp": 10875,
      "atk": 212,
      "def": 683,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 870,
        "atk": 17,
        "def": 55,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2175,
        "atk": 42,
        "def": 137,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5437,
        "atk": 106,
        "def": 341,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8156,
        "atk": 159,
        "def": 512,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10875,
        "atk": 212,
        "def": 683,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [],
    "constellations": [],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "None DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "None DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "None Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Regional Specialty",
      "commonDrop": "Common Monster Drop",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "mavuika",
    "name": "Mavuika",
    "title": "Night-Igniting Flame",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Claymore",
    "region": "Natlan",
    "affiliation": "Huitztlan",
    "role": "Main DPS",
    "version": "5.3",
    "releaseDate": "v5.3",
    "avatar": "/images/characters/UI_AvatarIcon_Mavuika.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Mavuika.png",
    "description": "The leader of Natlan who inherited the Ancient Name of \"Kiongozi.\" She made a vow to illuminate the future of the nation of war with the Sacred Flame.",
    "baseStatsLvl90": {
      "hp": 12552,
      "atk": 359,
      "def": 792,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1004,
        "atk": 29,
        "def": 63,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2510,
        "atk": 72,
        "def": 158,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6276,
        "atk": 179,
        "def": 396,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9414,
        "atk": 269,
        "def": 594,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12552,
        "atk": 359,
        "def": 792,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Flames Weave Life",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "The Named Moment",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Hour of Burning Skies",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Gift of Flaming Flowers",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "\"Kiongozi\"",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Exhaust Mode",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "The Night-Lord's Explication",
        "description": ""
      },
      {
        "level": 2,
        "name": "The Ashen Price",
        "description": ""
      },
      {
        "level": 3,
        "name": "The Burning Sun",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Leader's Resolve",
        "description": ""
      },
      {
        "level": 5,
        "name": "The Meaning of Truth",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"Humanity's Name\" Unfettered",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Withering Purpurbloom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "mika",
    "name": "Mika",
    "title": "Coordinates of Clear Frost",
    "rarity": 4,
    "element": "Cryo",
    "weaponType": "Polearm",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "3.5",
    "releaseDate": "v3.5",
    "avatar": "/images/characters/UI_AvatarIcon_Mika.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Mika.png",
    "description": "A young knight born to an ordinary family. He serves as a Front-Line Surveyor in his Company. He is a low-key and cautious character.",
    "baseStatsLvl90": {
      "hp": 12506,
      "atk": 223,
      "def": 713,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1000,
        "atk": 18,
        "def": 57,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2501,
        "atk": 45,
        "def": 143,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6253,
        "atk": 112,
        "def": 357,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9380,
        "atk": 167,
        "def": 535,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12506,
        "atk": 223,
        "def": 713,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Spear of Favonius - Arrow's Passage",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Starfrost Swirl",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Skyfeather Song",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Suppressive Barrage",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Topographical Mapping",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Demarcation",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Factor Confluence",
        "description": ""
      },
      {
        "level": 2,
        "name": "Companion's Ingress",
        "description": ""
      },
      {
        "level": 3,
        "name": "Reconnaissance Experience",
        "description": ""
      },
      {
        "level": 4,
        "name": "Sunfrost Encomium",
        "description": ""
      },
      {
        "level": 5,
        "name": "Signal Arrow",
        "description": ""
      },
      {
        "level": 6,
        "name": "Companion's Counsel",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Wolfhook",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "mona",
    "name": "Mona",
    "title": "Astral Reflection",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Catalyst",
    "region": "Mondstadt",
    "affiliation": "Mondstadt",
    "role": "Support",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Mona.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Mona.png",
    "description": "A mysterious young astrologer who proclaims herself to be \"Astrologist Mona Megistus,\" and who possesses abilities to match the title. Erudite, but prideful.",
    "baseStatsLvl90": {
      "hp": 10409,
      "atk": 287,
      "def": 653,
      "ascensionStat": "Energy Recharge",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 833,
        "atk": 23,
        "def": 52,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2082,
        "atk": 57,
        "def": 131,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5205,
        "atk": 144,
        "def": 327,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7807,
        "atk": 215,
        "def": 490,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10409,
        "atk": 287,
        "def": 653,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Ripple of Fate",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Mirror Reflection of Doom",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Stellaris Phantasm",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "\"Come 'n' Get Me, Hag!\"",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Waterborne Destiny",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Principium of Astrology",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Prophecy of Submersion",
        "description": ""
      },
      {
        "level": 2,
        "name": "Lunar Chain",
        "description": ""
      },
      {
        "level": 3,
        "name": "Restless Revolution",
        "description": ""
      },
      {
        "level": 4,
        "name": "Prophecy of Oblivion",
        "description": ""
      },
      {
        "level": 5,
        "name": "Mockery of Fortuna",
        "description": ""
      },
      {
        "level": 6,
        "name": "Rhetorics of Calamitas",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Philanemo Mushroom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "mualani",
    "name": "Mualani",
    "title": "Splish-Splash Wavechaser",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Catalyst",
    "region": "Natlan",
    "affiliation": "Meztli",
    "role": "Main DPS",
    "version": "5.0",
    "releaseDate": "v5.0",
    "avatar": "/images/characters/UI_AvatarIcon_Mualani.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Mualani.png",
    "description": "A well-known guide in Natlan who owns a watersports shop, and expert in all forms of wave-chasing.",
    "baseStatsLvl90": {
      "hp": 15185,
      "atk": 182,
      "def": 570,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1215,
        "atk": 15,
        "def": 46,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 3037,
        "atk": 36,
        "def": 114,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7592,
        "atk": 91,
        "def": 285,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11389,
        "atk": 136,
        "def": 428,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 15185,
        "atk": 182,
        "def": 570,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Cooling Treatment",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Surfshark Wavebreaker",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Boomsharka-laka",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Heat-Resistant Freshwater Floater",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Natlan's Greatest Guide",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Crests and Troughs",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "The Leisurely \"Meztli\"...",
        "description": ""
      },
      {
        "level": 2,
        "name": "Mualani, Going All Out!",
        "description": ""
      },
      {
        "level": 3,
        "name": "Surfing Atop Joyous Seas",
        "description": ""
      },
      {
        "level": 4,
        "name": "Sharky Eats Puffies",
        "description": ""
      },
      {
        "level": 5,
        "name": "Same Style of Surfboard on Sale!",
        "description": ""
      },
      {
        "level": 6,
        "name": "Spirit of the Springs' People",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Sprayfeather Gill",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "nahida",
    "name": "Nahida",
    "title": "Physic of Purity",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Catalyst",
    "region": "Sumeru",
    "affiliation": "Sumeru City",
    "role": "Support",
    "version": "3.2",
    "releaseDate": "v3.2",
    "avatar": "/images/characters/UI_AvatarIcon_Nahida.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Nahida.png",
    "description": "A caged bird secluded within the confines of the Sanctuary of Surasthana who can only see the world in her dreams.",
    "baseStatsLvl90": {
      "hp": 10360,
      "atk": 299,
      "def": 630,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "115.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 829,
        "atk": 24,
        "def": 50,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2072,
        "atk": 60,
        "def": 126,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5180,
        "atk": 149,
        "def": 315,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7770,
        "atk": 224,
        "def": 473,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10360,
        "atk": 299,
        "def": 630,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "115.2"
      }
    ],
    "talents": [
      {
        "name": "Akara",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "All Schemes to Know",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Illusory Heart",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Compassion Illuminated",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Awakening Elucidated",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "On All Things Meditated",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "The Seed of Stored Knowledge",
        "description": ""
      },
      {
        "level": 2,
        "name": "The Root of All Fullness",
        "description": ""
      },
      {
        "level": 3,
        "name": "The Shoot of Conscious Attainment",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Stem of Manifest Inference",
        "description": ""
      },
      {
        "level": 5,
        "name": "The Leaves of Enlightening Speech",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Fruit of Reason's Culmination",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Kalpalata Lotus",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "navia",
    "name": "Navia",
    "title": "Helm of the Radiant Rose",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Claymore",
    "region": "Fontaine",
    "affiliation": "Spina di Rosula",
    "role": "Main DPS",
    "version": "4.3",
    "releaseDate": "v4.3",
    "avatar": "/images/characters/UI_AvatarIcon_Navia.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Navia.png",
    "description": "The current President of Spina di Rosula, who is lovely, dutiful, and a great boss.",
    "baseStatsLvl90": {
      "hp": 12650,
      "atk": 352,
      "def": 793,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1012,
        "atk": 28,
        "def": 63,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2530,
        "atk": 70,
        "def": 159,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6325,
        "atk": 176,
        "def": 397,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9488,
        "atk": 264,
        "def": 595,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12650,
        "atk": 352,
        "def": 793,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Blunt Refusal",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Ceremonial Crystalshot",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "As the Sunlit Sky's Singing Salute",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Undisclosed Distribution Channels",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Mutual Assistance Network",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Painstaking Transaction",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "A Lady's Rules for Keeping a Courteous Distance",
        "description": ""
      },
      {
        "level": 2,
        "name": "The President's Pursuit of Victory",
        "description": ""
      },
      {
        "level": 3,
        "name": "Businesswoman's Broad Vision",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Oathsworn Never Capitulate",
        "description": ""
      },
      {
        "level": 5,
        "name": "Negotiator's Resolute Negotiations",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Flexible Finesse of the Spina's President",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Spring of the First Dewdrop",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "nefer",
    "name": "Nefer",
    "title": "Secret Beneath the Sands",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Catalyst",
    "region": "Nod-Krai",
    "affiliation": "Curatorium of Secrets",
    "role": "Main DPS",
    "version": "6.1",
    "releaseDate": "v6.1",
    "avatar": "/images/characters/UI_AvatarIcon_Nefer.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Nefer.png",
    "description": "The remarkably resourceful owner of the Curatorium of Secrets.",
    "baseStatsLvl90": {
      "hp": 12704,
      "atk": 344,
      "def": 799,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1016,
        "atk": 28,
        "def": 64,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2541,
        "atk": 69,
        "def": 160,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6352,
        "atk": 172,
        "def": 400,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9528,
        "atk": 258,
        "def": 599,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12704,
        "atk": 344,
        "def": 799,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Striking Serpent",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Senet Strategy: Dance of a Thousand Nights",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Sacred Vow: True Eye's Phantasm",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "A Wager of Moonlight",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Daughter of the Dust and Sand",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: Dusklit Eaves",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Planning Breeds Success",
        "description": ""
      },
      {
        "level": 2,
        "name": "Observation Feeds Strategy",
        "description": ""
      },
      {
        "level": 3,
        "name": "Deceit Cloaks the Truth",
        "description": ""
      },
      {
        "level": 4,
        "name": "Delusion Ensnares Reason",
        "description": ""
      },
      {
        "level": 5,
        "name": "Opportunity Hides in the Margins",
        "description": ""
      },
      {
        "level": 6,
        "name": "Victory Flows from the Turning of Tides",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Moonfall Silver",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "neuvillette",
    "name": "Neuvillette",
    "title": "Ordainer of Inexorable Judgment",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Catalyst",
    "region": "Fontaine",
    "affiliation": "Court of Fontaine",
    "role": "Main DPS",
    "version": "4.1",
    "releaseDate": "v4.1",
    "avatar": "/images/characters/UI_AvatarIcon_Neuvillette.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Neuvillette.png",
    "description": "The Chief Justice of Fontaine, known as the Iudex, is renowned for his unassailable impartiality.",
    "baseStatsLvl90": {
      "hp": 14695,
      "atk": 208,
      "def": 576,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1176,
        "atk": 17,
        "def": 46,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2939,
        "atk": 42,
        "def": 115,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7348,
        "atk": 104,
        "def": 288,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11021,
        "atk": 156,
        "def": 432,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 14695,
        "atk": 208,
        "def": 576,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "As Water Seeks Equilibrium",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "O Tears, I Shall Repay",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "O Tides, I Have Returned",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Heir to the Ancient Sea's Authority",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Discipline of the Supreme Arbitration",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Gather Like the Tide",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Venerable Institution",
        "description": ""
      },
      {
        "level": 2,
        "name": "Juridical Exhortation",
        "description": ""
      },
      {
        "level": 3,
        "name": "Ancient Postulation",
        "description": ""
      },
      {
        "level": 4,
        "name": "Crown of Commiseration",
        "description": ""
      },
      {
        "level": 5,
        "name": "Axiomatic Judgment",
        "description": ""
      },
      {
        "level": 6,
        "name": "Wrathful Recompense",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Lumitoile",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "nicole",
    "name": "Nicole",
    "title": "Clamor Within",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Catalyst",
    "region": "Other",
    "affiliation": "Hexenzirkel",
    "role": "Main DPS",
    "version": "6.6",
    "releaseDate": "v6.6",
    "avatar": "/images/characters/UI_AvatarIcon_Nicole.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Nicole.png",
    "description": "The Silent \"Mage,\" the Voiceless \"Angel.\"",
    "baseStatsLvl90": {
      "hp": 10409,
      "atk": 342,
      "def": 563,
      "ascensionStat": "ATK",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 833,
        "atk": 27,
        "def": 45,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2082,
        "atk": 68,
        "def": 113,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5205,
        "atk": 171,
        "def": 281,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7807,
        "atk": 257,
        "def": 422,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10409,
        "atk": 342,
        "def": 563,
        "ascensionStat": "ATK",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Allegoria",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Revelation: Uncreated Light",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Revelation: Ladder of Divine Ascent",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Methexis",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Philokalia",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Nepsis",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"Do Not Be Afraid, Child Who Is Loved\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"I Will Guide You and Show You the Path You Should Tread\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"A Lamp by Your Side, A Light to Shine the Way\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"Whether Left or Right, No Matter Which Way You Turn\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"You Will Hear My Voice Beside You\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"This Is the Path, Walk It Without Delay\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Pine Amber",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "nilou",
    "name": "Nilou",
    "title": "Dance of Lotuslight",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Sword",
    "region": "Sumeru",
    "affiliation": "Zubayr Theater",
    "role": "Main DPS",
    "version": "3.1",
    "releaseDate": "v3.1",
    "avatar": "/images/characters/UI_AvatarIcon_Nilou.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Nilou.png",
    "description": "The star of the Zubayr Theater. She is full of warmth and innocence, and her dances are lively and elegant.",
    "baseStatsLvl90": {
      "hp": 15185,
      "atk": 230,
      "def": 729,
      "ascensionStat": "HP",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1215,
        "atk": 18,
        "def": 58,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 3037,
        "atk": 46,
        "def": 146,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7592,
        "atk": 115,
        "def": 364,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11389,
        "atk": 172,
        "def": 546,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 15185,
        "atk": 230,
        "def": 729,
        "ascensionStat": "HP",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Dance of Samser",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Dance of Haftkarsvar",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Dance of Abzendegi: Distant Dreams, Listening Spring",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Court of Dancing Petals",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Dreamy Dance of Aeons",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "White Jade Lotus",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Dance of the Waning Moon",
        "description": ""
      },
      {
        "level": 2,
        "name": "The Starry Skies Their Flowers Rain",
        "description": ""
      },
      {
        "level": 3,
        "name": "Beguiling Shadowstep",
        "description": ""
      },
      {
        "level": 4,
        "name": "Fricative Pulse",
        "description": ""
      },
      {
        "level": 5,
        "name": "Twirling Light",
        "description": ""
      },
      {
        "level": 6,
        "name": "Frostbreaker's Melody",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Padisarah",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "ningguang",
    "name": "Ningguang",
    "title": "Eclipsing Star",
    "rarity": 4,
    "element": "Geo",
    "weaponType": "Catalyst",
    "region": "Liyue",
    "affiliation": "Liyue Qixing",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Ningguang.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Ningguang.png",
    "description": "The Tianquan of the Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.",
    "baseStatsLvl90": {
      "hp": 9787,
      "atk": 212,
      "def": 573,
      "ascensionStat": "Geo DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 783,
        "atk": 17,
        "def": 46,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1957,
        "atk": 42,
        "def": 115,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4894,
        "atk": 106,
        "def": 287,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7341,
        "atk": 159,
        "def": 430,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9787,
        "atk": 212,
        "def": 573,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Sparkling Scatter",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Jade Screen",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Starshatter",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Backup Plan",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Strategic Reserve",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Trove of Marvelous Treasures",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Piercing Fragments",
        "description": ""
      },
      {
        "level": 2,
        "name": "Shock Effect",
        "description": ""
      },
      {
        "level": 3,
        "name": "Majesty Be the Array of Stars",
        "description": ""
      },
      {
        "level": 4,
        "name": "Exquisite be the Jade, Outshining All Beneath",
        "description": ""
      },
      {
        "level": 5,
        "name": "Invincible Be the Jade Screen",
        "description": ""
      },
      {
        "level": 6,
        "name": "Grandeur Be the Seven Stars",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Glaze Lily",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "noelle",
    "name": "Noelle",
    "title": "Chivalric Blossom",
    "rarity": 4,
    "element": "Geo",
    "weaponType": "Claymore",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Noel.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Noel.png",
    "description": "A maid who faithfully serves the Knights of Favonius. She dreams of joining their ranks someday.",
    "baseStatsLvl90": {
      "hp": 12071,
      "atk": 191,
      "def": 799,
      "ascensionStat": "DEF",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 966,
        "atk": 15,
        "def": 64,
        "ascensionStat": "DEF",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2414,
        "atk": 38,
        "def": 160,
        "ascensionStat": "DEF",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6036,
        "atk": 96,
        "def": 399,
        "ascensionStat": "DEF",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9053,
        "atk": 143,
        "def": 599,
        "ascensionStat": "DEF",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12071,
        "atk": 191,
        "def": 799,
        "ascensionStat": "DEF",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Favonius Bladework - Maid",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Breastplate",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Sweeping Time",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Devotion",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Nice and Clean",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Maid's Knighthood",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "I Got Your Back",
        "description": ""
      },
      {
        "level": 2,
        "name": "Combat Maid",
        "description": ""
      },
      {
        "level": 3,
        "name": "Invulnerable Maid",
        "description": ""
      },
      {
        "level": 4,
        "name": "To Be Cleaned",
        "description": ""
      },
      {
        "level": 5,
        "name": "Favonius Sweeper Master",
        "description": ""
      },
      {
        "level": 6,
        "name": "Must Be Spotless",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Valberry",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "odette",
    "name": "Odette",
    "title": "Swirling Snow",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Sword",
    "region": "Other",
    "affiliation": "Korolevskiy Troupe",
    "role": "Main DPS",
    "version": "7.0",
    "releaseDate": "v7.0",
    "avatar": "/images/characters/UI_AvatarIcon_Odette.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Odette.png",
    "description": "A famed Snezhnayan ballerina who blossoms against the frozen landscape with a beauty as sharp as frost.",
    "baseStatsLvl90": {
      "hp": 12981,
      "atk": 335,
      "def": 787,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1038,
        "atk": 27,
        "def": 63,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2596,
        "atk": 67,
        "def": 157,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6490,
        "atk": 167,
        "def": 393,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9735,
        "atk": 251,
        "def": 590,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12981,
        "atk": 335,
        "def": 787,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Snow Swan Variation",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Adagio: Phantom Night Dancers",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Presto: Bluebird Finale",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Spring Rite of the Chosen One",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Pathetique of Pateticheskaya",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Stellar Jubilee: Dance of Aurore",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"On This Danceless Morn, She Gazes at Her Reflection\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"I Must See the Snow Swan's Unseen Dream for Myself, She Thought\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"I'll Chase the Shouting Wind Along, Climbing Alone As I Go\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"Up, Up the Long, Delirious, Burning Blue\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"Oh! I Have Slipped the Surly Bonds of Earth\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"Put Out My Hand, and Touched the Face of the Divine\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Frostfairy Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "ororon",
    "name": "Ororon",
    "title": "Shadow of the Night-Wind",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Bow",
    "region": "Natlan",
    "affiliation": "Mictlan",
    "role": "Main DPS",
    "version": "5.2",
    "releaseDate": "v5.2",
    "avatar": "/images/characters/UI_AvatarIcon_Olorun.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Olorun.png",
    "description": "A young man from the Masters of the Night-Wind who instead lives in the wild alongside all manner of life.",
    "baseStatsLvl90": {
      "hp": 9244,
      "atk": 244,
      "def": 587,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 739,
        "atk": 20,
        "def": 47,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1849,
        "atk": 49,
        "def": 117,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4622,
        "atk": 122,
        "def": 293,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 6933,
        "atk": 183,
        "def": 440,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9244,
        "atk": 244,
        "def": 587,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Spiritvessel Snapshot",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Night's Sling",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Dark Voices Echo",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Nightshade Synesthesia",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Aspect Catalyst",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Flowing Fog, Spritely Shadows",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Trails Amidst the Forest Fog",
        "description": ""
      },
      {
        "level": 2,
        "name": "King Bee of the Hidden Honeyed Wine",
        "description": ""
      },
      {
        "level": 3,
        "name": "Roosting Bat's Spiritcage",
        "description": ""
      },
      {
        "level": 4,
        "name": "As the Mysteries of the Night Wind",
        "description": ""
      },
      {
        "level": 5,
        "name": "A Gift For the Soul",
        "description": ""
      },
      {
        "level": 6,
        "name": "Ode to Deep Springs",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Glowing Hornshroom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "prune",
    "name": "Prune",
    "title": "Childlike Dreams Cherished",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Catalyst",
    "region": "Mondstadt",
    "affiliation": "Mondstadt",
    "role": "Main DPS",
    "version": "6.6",
    "releaseDate": "v6.6",
    "avatar": "/images/characters/UI_AvatarIcon_Prune.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Prune.png",
    "description": "A diminutive Witch Hunter who has journeyed all the way from Nod-Krai with the singular purpose of rooting out a witch who, to hear her tell it, has committed every sin imaginable — including bullying little kids!",
    "baseStatsLvl90": {
      "hp": 9679,
      "atk": 221,
      "def": 580,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 774,
        "atk": 18,
        "def": 46,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1936,
        "atk": 44,
        "def": 116,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4839,
        "atk": 110,
        "def": 290,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7259,
        "atk": 166,
        "def": 435,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9679,
        "atk": 221,
        "def": 580,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Badaboom! Hexbuster Hammer",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Ring-A-Ding-Ding! Hexhunter Chime",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "The Bell Tolls! The Hunt Is On!",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Verdict and Punishment",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Tolling Synchronicity",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Tinker-Tink, Clank, and Bang!",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "With a Vow to Rescue, the Journey Begins",
        "description": ""
      },
      {
        "level": 2,
        "name": "Useful for Cleaning Messy Baggage, Elemental Powers Are Indeed",
        "description": ""
      },
      {
        "level": 3,
        "name": "The Caravan Exits the Mountain Pass, the Scenery Once More Changed",
        "description": ""
      },
      {
        "level": 4,
        "name": "Looking Back Following the Wind, One's Shadow Still Halved",
        "description": ""
      },
      {
        "level": 5,
        "name": "100 Defeats? No Problem, Tomorrow, We Go Again",
        "description": ""
      },
      {
        "level": 6,
        "name": "And That's the Story! Share It With Your Friends!",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Winter Icelea",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "qiqi",
    "name": "Qiqi",
    "title": "Icy Resurrection",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Sword",
    "region": "Liyue",
    "affiliation": "Bubu Pharmacy",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Qiqi.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Qiqi.png",
    "description": "An apprentice and herb gatherer at Bubu Pharmacy. An undead with a bone-white complexion, she seldom has much in the way of words or emotion.",
    "baseStatsLvl90": {
      "hp": 12368,
      "atk": 287,
      "def": 922,
      "ascensionStat": "Healing Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 989,
        "atk": 23,
        "def": 74,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2474,
        "atk": 57,
        "def": 184,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6184,
        "atk": 144,
        "def": 461,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9276,
        "atk": 215,
        "def": 692,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12368,
        "atk": 287,
        "def": 922,
        "ascensionStat": "Healing Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Ancient Sword Art",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Adeptus Art: Herald of Frost",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Adeptus Art: Preserver of Fortune",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Life-Prolonging Methods",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "A Glimpse Into Arcanum",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Former Life Memories",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Ascetics of Frost",
        "description": ""
      },
      {
        "level": 2,
        "name": "Frozen to the Bone",
        "description": ""
      },
      {
        "level": 3,
        "name": "Ascendant Praise",
        "description": ""
      },
      {
        "level": 4,
        "name": "Divine Suppression",
        "description": ""
      },
      {
        "level": 5,
        "name": "Crimson Lotus Bloom",
        "description": ""
      },
      {
        "level": 6,
        "name": "Rite of Resurrection",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Violetgrass",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "raiden-shogun",
    "name": "Raiden Shogun",
    "title": "Plane of Euthymia",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Polearm",
    "region": "Inazuma",
    "affiliation": "Inazuma City",
    "role": "Support",
    "version": "2.1",
    "releaseDate": "v2.1",
    "avatar": "/images/characters/UI_AvatarIcon_Shougun.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Shougun.png",
    "description": "Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging Eternity.",
    "baseStatsLvl90": {
      "hp": 12907,
      "atk": 337,
      "def": 789,
      "ascensionStat": "Energy Recharge",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1033,
        "atk": 27,
        "def": 63,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2581,
        "atk": 67,
        "def": 158,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6454,
        "atk": 169,
        "def": 395,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9680,
        "atk": 253,
        "def": 592,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12907,
        "atk": 337,
        "def": 789,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Origin",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Transcendence: Baleful Omen",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Secret Art: Musou Shinsetsu",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Wishes Unnumbered",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Enlightened One",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "All-Preserver",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Ominous Inscription",
        "description": ""
      },
      {
        "level": 2,
        "name": "Steelbreaker",
        "description": ""
      },
      {
        "level": 3,
        "name": "Shinkage Bygones",
        "description": ""
      },
      {
        "level": 4,
        "name": "Pledge of Propriety",
        "description": ""
      },
      {
        "level": 5,
        "name": "Shogun's Descent",
        "description": ""
      },
      {
        "level": 6,
        "name": "Wishbearer",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Amakumo Fruit",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "razor",
    "name": "Razor",
    "title": "Wolf Boy",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Claymore",
    "region": "Mondstadt",
    "affiliation": "Wolvendom",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Razor.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Razor.png",
    "description": "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.",
    "baseStatsLvl90": {
      "hp": 11962,
      "atk": 234,
      "def": 751,
      "ascensionStat": "Physical DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 957,
        "atk": 19,
        "def": 60,
        "ascensionStat": "Physical DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2392,
        "atk": 47,
        "def": 150,
        "ascensionStat": "Physical DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5981,
        "atk": 117,
        "def": 375,
        "ascensionStat": "Physical DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8972,
        "atk": 175,
        "def": 563,
        "ascensionStat": "Physical DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11962,
        "atk": 234,
        "def": 751,
        "ascensionStat": "Physical DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Steel Fang",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Claw and Thunder",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Lightning Fang",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Awakening",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Hunger",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Wolvensprint",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Wolf's Instinct",
        "description": ""
      },
      {
        "level": 2,
        "name": "Suppression",
        "description": ""
      },
      {
        "level": 3,
        "name": "Soul Companion",
        "description": ""
      },
      {
        "level": 4,
        "name": "Bite",
        "description": ""
      },
      {
        "level": 5,
        "name": "Sharpened Claws",
        "description": ""
      },
      {
        "level": 6,
        "name": "Lupus Fulguris",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Wolfhook",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "rosaria",
    "name": "Rosaria",
    "title": "Thorny Benevolence",
    "rarity": 4,
    "element": "Cryo",
    "weaponType": "Polearm",
    "region": "Mondstadt",
    "affiliation": "Church of Favonius",
    "role": "Main DPS",
    "version": "1.4",
    "releaseDate": "v1.4",
    "avatar": "/images/characters/UI_AvatarIcon_Rosaria.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Rosaria.png",
    "description": "A sister of the church, though you wouldn't know it if it weren't for her attire. Known for her sharp, cold words and manner, she often works alone.",
    "baseStatsLvl90": {
      "hp": 12289,
      "atk": 240,
      "def": 710,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 983,
        "atk": 19,
        "def": 57,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2458,
        "atk": 48,
        "def": 142,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6144,
        "atk": 120,
        "def": 355,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9216,
        "atk": 180,
        "def": 532,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12289,
        "atk": 240,
        "def": 710,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Spear of the Church",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Ravaging Confession",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Rites of Termination",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Regina Probationum",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Shadow Samaritan",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Walk",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Unholy Revelation",
        "description": ""
      },
      {
        "level": 2,
        "name": "Land Without Promise",
        "description": ""
      },
      {
        "level": 3,
        "name": "The Wages of Sin",
        "description": ""
      },
      {
        "level": 4,
        "name": "Painful Grace",
        "description": ""
      },
      {
        "level": 5,
        "name": "Last Rites",
        "description": ""
      },
      {
        "level": 6,
        "name": "Divine Retribution",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Valberry",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "sandrone",
    "name": "Sandrone",
    "title": "Mirrored Analysis",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Claymore",
    "region": "Other",
    "affiliation": "Fatui",
    "role": "Main DPS",
    "version": "6.7",
    "releaseDate": "v6.7",
    "avatar": "/images/characters/UI_AvatarIcon_Sandrone.png",
    "splashArt": "/images/characters/UI_AvatarIcon_Sandrone.png",
    "description": "The Seventh of the Fatui Harbingers, \"Marionette.\" Interprets all phenomena through the prism of mathematics, and is an elegant lady who is never absent from a tea party.",
    "baseStatsLvl90": {
      "hp": 13226,
      "atk": 342,
      "def": 752,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1058,
        "atk": 27,
        "def": 60,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2645,
        "atk": 68,
        "def": 150,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6613,
        "atk": 171,
        "def": 376,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9919,
        "atk": 257,
        "def": 564,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13226,
        "atk": 342,
        "def": 752,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Formule Phenomenale: Self-Evident Proposition",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Formule Phenomenale: Differential Analysis",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Formule Phenomenale: Q.E.D.",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Eternal Speculation Engine",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "A Lady's Code of Conduct",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Stellar Jubilee: Light of Rationalisme",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Morrow After the Golden Dusk",
        "description": ""
      },
      {
        "level": 2,
        "name": "An Heiress Gazed Into the Looking-Glass",
        "description": ""
      },
      {
        "level": 3,
        "name": "Refuse the Wake of Dusk, the Moonlit Yoke",
        "description": ""
      },
      {
        "level": 4,
        "name": "In Knowledge Lies the World's True Ground",
        "description": ""
      },
      {
        "level": 5,
        "name": "Of All Beside, She Takes No Part",
        "description": ""
      },
      {
        "level": 6,
        "name": "Narcissus Wakes, Her Eyes Upon the Dawn",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Subdetection Unit",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "sangonomiya-kokomi",
    "name": "Sangonomiya Kokomi",
    "title": "Pearl of Wisdom",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Catalyst",
    "region": "Inazuma",
    "affiliation": "Watatsumi Island",
    "role": "Main DPS",
    "version": "2.1",
    "releaseDate": "v2.1",
    "avatar": "/images/characters/UI_AvatarIcon_Kokomi.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Kokomi.png",
    "description": "The Divine Priestess of Watatsumi Island. All of the island's affairs are at this young lady's fingertips.",
    "baseStatsLvl90": {
      "hp": 13471,
      "atk": 234,
      "def": 657,
      "ascensionStat": "Hydro DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1078,
        "atk": 19,
        "def": 53,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2694,
        "atk": 47,
        "def": 131,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6735,
        "atk": 117,
        "def": 329,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10103,
        "atk": 176,
        "def": 493,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13471,
        "atk": 234,
        "def": 657,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "The Shape of Water",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Kurage's Oath",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Nereid's Ascension",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Tamakushi Casket",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Song of Pearls",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Princess of Watatsumi",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "At Water's Edge",
        "description": ""
      },
      {
        "level": 2,
        "name": "The Clouds Like Waves Rippling",
        "description": ""
      },
      {
        "level": 3,
        "name": "The Moon, A Ship O'er the Seas",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Moon Overlooks the Waters",
        "description": ""
      },
      {
        "level": 5,
        "name": "All Streams Flow to the Sea",
        "description": ""
      },
      {
        "level": 6,
        "name": "Sango Isshin",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Sango Pearl",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "sayu",
    "name": "Sayu",
    "title": "Mujina Ninja",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Claymore",
    "region": "Inazuma",
    "affiliation": "Shuumatsuban",
    "role": "Support",
    "version": "2.0",
    "releaseDate": "v2.0",
    "avatar": "/images/characters/UI_AvatarIcon_Sayu.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Sayu.png",
    "description": "A pint-sized ninja attached to the Shuumatsuban, who always seems sleep-deprived.",
    "baseStatsLvl90": {
      "hp": 11854,
      "atk": 244,
      "def": 745,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "96"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 948,
        "atk": 20,
        "def": 60,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2371,
        "atk": 49,
        "def": 149,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5927,
        "atk": 122,
        "def": 372,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8890,
        "atk": 183,
        "def": 558,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11854,
        "atk": 244,
        "def": 745,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "96"
      }
    ],
    "talents": [
      {
        "name": "Shuumatsuban Ninja Blade",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Yoohoo Art: Fuuin Dash",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Yoohoo Art: Mujina Flurry",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Someone More Capable",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "No Work Today!",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Yoohoo Art: Silencer's Secret",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Multi-Task no Jutsu",
        "description": ""
      },
      {
        "level": 2,
        "name": "Egress Prep",
        "description": ""
      },
      {
        "level": 3,
        "name": "Eh, the Bunshin Can Handle It",
        "description": ""
      },
      {
        "level": 4,
        "name": "Skiving: New and Improved",
        "description": ""
      },
      {
        "level": 5,
        "name": "Speed Comes First",
        "description": ""
      },
      {
        "level": 6,
        "name": "Sleep O'Clock",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Crystal Marrow",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "sethos",
    "name": "Sethos",
    "title": "Wisdom's Measure",
    "rarity": 4,
    "element": "Electro",
    "weaponType": "Bow",
    "region": "Sumeru",
    "affiliation": "Temple of Silence",
    "role": "Support",
    "version": "4.7",
    "releaseDate": "v4.7",
    "avatar": "/images/characters/UI_AvatarIcon_Sethos.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Sethos.png",
    "description": "The Temple of Silence's heir. Burdened with secrets, he comes from the sands.",
    "baseStatsLvl90": {
      "hp": 9787,
      "atk": 227,
      "def": 560,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "96"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 783,
        "atk": 18,
        "def": 45,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1957,
        "atk": 45,
        "def": 112,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4894,
        "atk": 114,
        "def": 280,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7341,
        "atk": 170,
        "def": 420,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9787,
        "atk": 227,
        "def": 560,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "96"
      }
    ],
    "talents": [
      {
        "name": "Royal Reed Archery",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Ancient Rite: The Thundering Sands",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Secret Rite: Twilight Shadowpiercer",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Black Kite's Enigma",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "The Sand King's Boon",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Thoth's Revelation",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Sealed Shrine's Spiritsong",
        "description": ""
      },
      {
        "level": 2,
        "name": "Papyrus Scripture of Silent Secrets",
        "description": ""
      },
      {
        "level": 3,
        "name": "Ode to the Moonrise Sage",
        "description": ""
      },
      {
        "level": 4,
        "name": "Beneficent Plumage",
        "description": ""
      },
      {
        "level": 5,
        "name": "Record of the Desolate God's Burning Sands",
        "description": ""
      },
      {
        "level": 6,
        "name": "Pylon of the Sojourning Sun Temple",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Trishiraite",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "shenhe",
    "name": "Shenhe",
    "title": "Lonesome Transcendence",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Polearm",
    "region": "Liyue",
    "affiliation": "Cloud Retainer's Abode",
    "role": "Main DPS",
    "version": "2.4",
    "releaseDate": "v2.4",
    "avatar": "/images/characters/UI_AvatarIcon_Shenhe.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Shenhe.png",
    "description": "An adepti disciple with a most unusual air about her. Having spent much time cultivating in isolation in Liyue's mountains, she has become every bit as cool and distant as the adepti themselves.",
    "baseStatsLvl90": {
      "hp": 12993,
      "atk": 304,
      "def": 830,
      "ascensionStat": "ATK",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1039,
        "atk": 24,
        "def": 66,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2599,
        "atk": 61,
        "def": 166,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6496,
        "atk": 152,
        "def": 415,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9745,
        "atk": 228,
        "def": 623,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12993,
        "atk": 304,
        "def": 830,
        "ascensionStat": "ATK",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Dawnstar Piercer",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Spring Spirit Summoning",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Divine Maiden's Deliverance",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Deific Embrace",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Spirit Communion Seal",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Precise Comings and Goings",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Clarity of Heart",
        "description": ""
      },
      {
        "level": 2,
        "name": "Centered Spirit",
        "description": ""
      },
      {
        "level": 3,
        "name": "Seclusion",
        "description": ""
      },
      {
        "level": 4,
        "name": "Insight",
        "description": ""
      },
      {
        "level": 5,
        "name": "Divine Attainment",
        "description": ""
      },
      {
        "level": 6,
        "name": "Mystical Abandon",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Qingxin",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "shikanoin-heizou",
    "name": "Shikanoin Heizou",
    "title": "Analytical Harmony",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Catalyst",
    "region": "Inazuma",
    "affiliation": "Tenryou Commission",
    "role": "Main DPS",
    "version": "2.8",
    "releaseDate": "v2.8",
    "avatar": "/images/characters/UI_AvatarIcon_Heizo.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Heizo.png",
    "description": "A young prodigy detective from the Tenryou Commission. His senses are sharp and his thoughts are clear.",
    "baseStatsLvl90": {
      "hp": 10657,
      "atk": 225,
      "def": 684,
      "ascensionStat": "Anemo DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 853,
        "atk": 18,
        "def": 55,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2131,
        "atk": 45,
        "def": 137,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5329,
        "atk": 113,
        "def": 342,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7993,
        "atk": 169,
        "def": 513,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10657,
        "atk": 225,
        "def": 684,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Fudou Style Martial Arts",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Heartstopper Strike",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Windmuster Kick",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Paradoxical Practice",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Penetrative Reasoning",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Pre-Existing Guilt",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Named Juvenile Casebook",
        "description": ""
      },
      {
        "level": 2,
        "name": "Investigative Collection",
        "description": ""
      },
      {
        "level": 3,
        "name": "Esoteric Puzzle Book",
        "description": ""
      },
      {
        "level": 4,
        "name": "Tome of Lies",
        "description": ""
      },
      {
        "level": 5,
        "name": "Secret Archive",
        "description": ""
      },
      {
        "level": 6,
        "name": "Curious Casefiles",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Onikabuto",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "sigewinne",
    "name": "Sigewinne",
    "title": "Wondrous Dragonheir",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Bow",
    "region": "Fontaine",
    "affiliation": "Fortress of Meropide",
    "role": "Main DPS",
    "version": "4.7",
    "releaseDate": "v4.7",
    "avatar": "/images/characters/UI_AvatarIcon_Sigewinne.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Sigewinne.png",
    "description": "A Melusine and the Fortress of Meropide's head nurse. She cares equally for every convict locked in the undersea prison.",
    "baseStatsLvl90": {
      "hp": 13348,
      "atk": 193,
      "def": 500,
      "ascensionStat": "HP",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1068,
        "atk": 15,
        "def": 40,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2670,
        "atk": 39,
        "def": 100,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6674,
        "atk": 96,
        "def": 250,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10011,
        "atk": 144,
        "def": 375,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13348,
        "atk": 193,
        "def": 500,
        "ascensionStat": "HP",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Targeted Treatment",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Rebound Hydrotherapy",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Super Saturated Syringing",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Requires Appropriate Rest",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Detailed Diagnosis, Thorough Treatment",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Emergency Dose",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"Can the Happiest of Spirits Understand Anxiety?\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"Can the Most Merciful of Spirits Defeat Its Foes?\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"Can the Healthiest of Spirits Cure Fevers?\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"Can the Loveliest of Spirits Keep Decay at Bay?\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"Can the Most Joyful of Spirits Alleviate Agony?\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"Can the Most Radiant of Spirits Pray For Me?\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Romaritime Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "skirk",
    "name": "Skirk",
    "title": "Void Star",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Sword",
    "region": "Other",
    "affiliation": "Cosmic Calamity",
    "role": "Main DPS",
    "version": "5.7",
    "releaseDate": "v5.7",
    "avatar": "/images/characters/UI_AvatarIcon_Skirk.png",
    "splashArt": "/images/characters/UI_AvatarIcon_Skirk.png",
    "description": "A visitor who once appeared in an Abyssal rift and the Primordial Sea, this solitary warrior mentored Tartaglia in the martial arts.",
    "baseStatsLvl90": {
      "hp": 12417,
      "atk": 359,
      "def": 806,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 993,
        "atk": 29,
        "def": 64,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2483,
        "atk": 72,
        "def": 161,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6209,
        "atk": 179,
        "def": 403,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9313,
        "atk": 269,
        "def": 605,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12417,
        "atk": 359,
        "def": 806,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Havoc: Sunder",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Havoc: Warp",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Havoc: Ruin",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Reason Beyond Reason",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Return to Oblivion",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Mutual Weapons Mentorship",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Far to Fall",
        "description": ""
      },
      {
        "level": 2,
        "name": "Into the Abyss",
        "description": ""
      },
      {
        "level": 3,
        "name": "Serendipitous Sin",
        "description": ""
      },
      {
        "level": 4,
        "name": "Fractured Flow",
        "description": ""
      },
      {
        "level": 5,
        "name": "End of Wishes",
        "description": ""
      },
      {
        "level": 6,
        "name": "To the Source",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Skysplit Gembloom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "sucrose",
    "name": "Sucrose",
    "title": "Harmless Sweetie",
    "rarity": 4,
    "element": "Anemo",
    "weaponType": "Catalyst",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Sucrose.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Sucrose.png",
    "description": "An alchemist filled with curiosity about all things. She researches bio-alchemy.",
    "baseStatsLvl90": {
      "hp": 9244,
      "atk": 170,
      "def": 703,
      "ascensionStat": "Anemo DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 739,
        "atk": 14,
        "def": 56,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1849,
        "atk": 34,
        "def": 141,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4622,
        "atk": 85,
        "def": 351,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 6933,
        "atk": 127,
        "def": 527,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9244,
        "atk": 170,
        "def": 703,
        "ascensionStat": "Anemo DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Wind Spirit Creation",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Astable Anemohypostasis Creation - 6308",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Forbidden Creation - Isomer 75 / Type II",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Catalyst Conversion",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Mollis Favonius",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Astable Invention",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Clustered Vacuum Field",
        "description": ""
      },
      {
        "level": 2,
        "name": "Beth: Unbound Form",
        "description": ""
      },
      {
        "level": 3,
        "name": "Flawless Alchemistress",
        "description": ""
      },
      {
        "level": 4,
        "name": "Alchemania",
        "description": ""
      },
      {
        "level": 5,
        "name": "Caution: Standard Flask",
        "description": ""
      },
      {
        "level": 6,
        "name": "Chaotic Entropy",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Windwheel Aster",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "tartaglia",
    "name": "Tartaglia",
    "title": "Childe",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Bow",
    "region": "Snezhnaya",
    "affiliation": "Fatui",
    "role": "Main DPS",
    "version": "1.1",
    "releaseDate": "v1.1",
    "avatar": "/images/characters/UI_AvatarIcon_Tartaglia.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Tartaglia.png",
    "description": "No. 11 of The Harbingers, also known as \"Childe.\" His name is highly feared on the battlefield.",
    "baseStatsLvl90": {
      "hp": 13103,
      "atk": 301,
      "def": 815,
      "ascensionStat": "Hydro DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1048,
        "atk": 24,
        "def": 65,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2621,
        "atk": 60,
        "def": 163,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6552,
        "atk": 151,
        "def": 407,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9827,
        "atk": 226,
        "def": 611,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13103,
        "atk": 301,
        "def": 815,
        "ascensionStat": "Hydro DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Cutting Torrent",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Foul Legacy: Raging Tide",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Havoc: Obliteration",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Never Ending",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Sword of Torrents",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Master of Weaponry",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Foul Legacy: Tide Withholder",
        "description": ""
      },
      {
        "level": 2,
        "name": "Foul Legacy: Understream",
        "description": ""
      },
      {
        "level": 3,
        "name": "Abyssal Mayhem: Vortex of Turmoil",
        "description": ""
      },
      {
        "level": 4,
        "name": "Abyssal Mayhem: Hydrospout",
        "description": ""
      },
      {
        "level": 5,
        "name": "Havoc: Formless Blade",
        "description": ""
      },
      {
        "level": 6,
        "name": "Havoc: Annihilation",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Starconch",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "thoma",
    "name": "Thoma",
    "title": "Protector From Afar",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Polearm",
    "region": "Inazuma",
    "affiliation": "Yashiro Commission",
    "role": "Main DPS",
    "version": "2.2",
    "releaseDate": "v2.2",
    "avatar": "/images/characters/UI_AvatarIcon_Tohma.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Tohma.png",
    "description": "The Kamisato Clan's housekeeper. A well-known \"fixer\" in Inazuma.",
    "baseStatsLvl90": {
      "hp": 10331,
      "atk": 202,
      "def": 751,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 826,
        "atk": 16,
        "def": 60,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2066,
        "atk": 40,
        "def": 150,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5166,
        "atk": 101,
        "def": 375,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7748,
        "atk": 151,
        "def": 563,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10331,
        "atk": 202,
        "def": 751,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Swiftshatter Spear",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Blazing Blessing",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Crimson Ooyoroi",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Imbricated Armor",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Flaming Assault",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Snap and Swing",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "A Comrade's Duty",
        "description": ""
      },
      {
        "level": 2,
        "name": "A Subordinate's Skills",
        "description": ""
      },
      {
        "level": 3,
        "name": "Fortified Resolve",
        "description": ""
      },
      {
        "level": 4,
        "name": "Long-Term Planning",
        "description": ""
      },
      {
        "level": 5,
        "name": "Raging Wildfire",
        "description": ""
      },
      {
        "level": 6,
        "name": "Burning Heart",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Fluorescent Fungus",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "tighnari",
    "name": "Tighnari",
    "title": "Verdant Strider",
    "rarity": 5,
    "element": "Dendro",
    "weaponType": "Bow",
    "region": "Sumeru",
    "affiliation": "Gandharva Ville",
    "role": "Main DPS",
    "version": "3.0",
    "releaseDate": "v3.0",
    "avatar": "/images/characters/UI_AvatarIcon_Tighnari.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Tighnari.png",
    "description": "A young researcher well-versed in botany who currently serves as a Forest Watcher in Avidya Forest. He is a straight shooter with a warm heart — and a dab hand at guiding even the dullest of pupils.",
    "baseStatsLvl90": {
      "hp": 10850,
      "atk": 268,
      "def": 630,
      "ascensionStat": "Dendro DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 868,
        "atk": 21,
        "def": 50,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2170,
        "atk": 54,
        "def": 126,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5425,
        "atk": 134,
        "def": 315,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8137,
        "atk": 201,
        "def": 473,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10850,
        "atk": 268,
        "def": 630,
        "ascensionStat": "Dendro DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Khanda Barrier-Buster",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Vijnana-Phala Mine",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Fashioner's Tanglevine Shaft",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Keen Sight",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Scholarly Blade",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Encyclopedic Knowledge",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Beginnings Determined at the Roots",
        "description": ""
      },
      {
        "level": 2,
        "name": "Origins Known From the Stem",
        "description": ""
      },
      {
        "level": 3,
        "name": "Fortunes Read Amongst the Branches",
        "description": ""
      },
      {
        "level": 4,
        "name": "Withering Glimpsed in the Leaves",
        "description": ""
      },
      {
        "level": 5,
        "name": "Comprehension Amidst the Flowers",
        "description": ""
      },
      {
        "level": 6,
        "name": "Karma Adjudged From the Leaden Fruit",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Nilotpala Lotus",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "varesa",
    "name": "Varesa",
    "title": "Strength in Serenity",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Catalyst",
    "region": "Natlan",
    "affiliation": "Teteocan",
    "role": "Main DPS",
    "version": "5.5",
    "releaseDate": "v5.5",
    "avatar": "/images/characters/UI_AvatarIcon_Varesa.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Varesa.png",
    "description": "A laid-back orchard manager and warrior of the Collective of Plenty. An aspiring hero who hungers for justice... and lots and lots of food!",
    "baseStatsLvl90": {
      "hp": 12699,
      "atk": 356,
      "def": 782,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1016,
        "atk": 29,
        "def": 63,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2540,
        "atk": 71,
        "def": 156,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6350,
        "atk": 178,
        "def": 391,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9524,
        "atk": 267,
        "def": 586,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12699,
        "atk": 356,
        "def": 782,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "By the Horns",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Riding the Night-Rainbow",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Guardian Vent!",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Tag-Team Triple Jump!",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "The Hero Twice-Returned!",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: A Torch That Incinerates Evil",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Undying Passion",
        "description": ""
      },
      {
        "level": 2,
        "name": "Beyond the Edge of Light",
        "description": ""
      },
      {
        "level": 3,
        "name": "Unbowed Resolve",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Courage to Press On",
        "description": ""
      },
      {
        "level": 5,
        "name": "Thoughts Floating on the Warm Breeze",
        "description": ""
      },
      {
        "level": 6,
        "name": "A Hero of Justice's Triumph",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Skysplit Gembloom",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "varka",
    "name": "Varka",
    "title": "Knight of Boreas",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Claymore",
    "region": "Mondstadt",
    "affiliation": "Knights of Favonius",
    "role": "Main DPS",
    "version": "6.4",
    "releaseDate": "v6.4",
    "avatar": "/images/characters/UI_AvatarIcon_Varka.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Varka.png",
    "description": "Grand Master of the Knights of Favonius. Knight of Boreas, protector of Mondstadt.",
    "baseStatsLvl90": {
      "hp": 12613,
      "atk": 353,
      "def": 795,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1009,
        "atk": 28,
        "def": 64,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2523,
        "atk": 71,
        "def": 159,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6307,
        "atk": 176,
        "def": 398,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9460,
        "atk": 265,
        "def": 597,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12613,
        "atk": 353,
        "def": 795,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Favonius Bladework: Dancing Radiance",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Windbound Execution",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Northwind Avatar",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Dawn Wind's March",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Wind's Vanguard",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Homebound Wind's Paean",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "\"Come, Friend, Let Us Dance Beneath the Moon's Soft Glow\"",
        "description": ""
      },
      {
        "level": 2,
        "name": "\"When Dawn Breaks, Our Journey Shall Take Flight\"",
        "description": ""
      },
      {
        "level": 3,
        "name": "\"O Friend, Quaff Not the Bitter Wine That Brings Tears of Woe\"",
        "description": ""
      },
      {
        "level": 4,
        "name": "\"For None May Take From Us Our Freedom of Song\"",
        "description": ""
      },
      {
        "level": 5,
        "name": "\"Fill High the Cup With Fine Wine, for Tyrants Come and Go\"",
        "description": ""
      },
      {
        "level": 6,
        "name": "\"Beloved Mondstadt, Steadfast You Shall Shine\"",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Wolfhook",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "venti",
    "name": "Venti",
    "title": "Windborne Bard",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Bow",
    "region": "Mondstadt",
    "affiliation": "Mondstadt",
    "role": "Support",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Venti.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Venti.png",
    "description": "One of the many bards of Mondstadt, who freely wanders the city's streets and alleys.",
    "baseStatsLvl90": {
      "hp": 10531,
      "atk": 263,
      "def": 669,
      "ascensionStat": "Energy Recharge",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 843,
        "atk": 21,
        "def": 53,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2106,
        "atk": 53,
        "def": 134,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5266,
        "atk": 132,
        "def": 334,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7899,
        "atk": 197,
        "def": 501,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10531,
        "atk": 263,
        "def": 669,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Divine Marksmanship",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Skyward Sonnet",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Wind's Grand Ode",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Embrace of Winds",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Stormeye",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Windrider",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Splitting Gales",
        "description": ""
      },
      {
        "level": 2,
        "name": "Breeze of Reminiscence",
        "description": ""
      },
      {
        "level": 3,
        "name": "Ode to Thousand Winds",
        "description": ""
      },
      {
        "level": 4,
        "name": "Hurricane of Freedom",
        "description": ""
      },
      {
        "level": 5,
        "name": "Concerto dal Cielo",
        "description": ""
      },
      {
        "level": 6,
        "name": "Storm of Defiance",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Cecilia",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "vesna",
    "name": "Vesna",
    "title": "Snowy Banquet's Sharp Blade",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Sword",
    "region": "Other",
    "affiliation": "Druzhna",
    "role": "Main DPS",
    "version": "7.1",
    "releaseDate": "v7.1",
    "avatar": "/images/characters/UI_AvatarIcon_Vesna.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Vesna.png",
    "description": "Commander of the Druzhna and the Tsaritsa's keen blade.",
    "baseStatsLvl90": {
      "hp": 13262,
      "atk": 354,
      "def": 730,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1061,
        "atk": 28,
        "def": 58,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2652,
        "atk": 71,
        "def": 146,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6631,
        "atk": 177,
        "def": 365,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9947,
        "atk": 265,
        "def": 548,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13262,
        "atk": 354,
        "def": 730,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Vila Blade Dance",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "The Art of Victory",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "For the Tsaritsa!",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Rite of Spring's Procession",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Truth Prevails",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Stellar Jubilee: Splendid Prelude",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Winter's Farewell Feast",
        "description": ""
      },
      {
        "level": 2,
        "name": "Kolo of Spring's Arrival",
        "description": ""
      },
      {
        "level": 3,
        "name": "Winter's Last Offering",
        "description": ""
      },
      {
        "level": 4,
        "name": "Glory to Our Forebears",
        "description": ""
      },
      {
        "level": 5,
        "name": "The Nobleborn's Charge",
        "description": ""
      },
      {
        "level": 6,
        "name": "Unwavering Ardor",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Golden Fern",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "vodyanitsa",
    "name": "Vodyanitsa",
    "title": "Lingering Siren-Song",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Catalyst",
    "region": "Other",
    "affiliation": "Korolevskiy Troupe",
    "role": "Main DPS",
    "version": "7.1",
    "releaseDate": "v7.1",
    "avatar": "/images/characters/UI_AvatarIcon_Vodyanitsa.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Vodyanitsa.png",
    "description": "Prima Donna of the Korolevskiy Troupe and a Water Imp who has parted from her kin.",
    "baseStatsLvl90": {
      "hp": 14818,
      "atk": 108,
      "def": 484,
      "ascensionStat": "HP",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1185,
        "atk": 9,
        "def": 39,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2964,
        "atk": 22,
        "def": 97,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7409,
        "atk": 54,
        "def": 242,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11113,
        "atk": 81,
        "def": 363,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 14818,
        "atk": 108,
        "def": 484,
        "ascensionStat": "HP",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Psyshkhwe Arietta",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Rechitativ: Sonorous Dawn",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Koda: Sink With Thee",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "The Last Djeguako Songstress",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Dirge of the Fandyr",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Echoes Over the Frozen Lake",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Waters in Full Splendor",
        "description": ""
      },
      {
        "level": 2,
        "name": "Echoes That Pierce the Snow",
        "description": ""
      },
      {
        "level": 3,
        "name": "Song Lingering on a Spring Morning",
        "description": ""
      },
      {
        "level": 4,
        "name": "Melancholic Voice Upon the Gentle Waters",
        "description": ""
      },
      {
        "level": 5,
        "name": "Together, Down Into the Deep",
        "description": ""
      },
      {
        "level": 6,
        "name": "Neverending Song of Revelry",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Frostfairy Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "wanderer",
    "name": "Wanderer",
    "title": "Eons Adrift",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Catalyst",
    "region": "Sumeru",
    "affiliation": "None",
    "role": "Main DPS",
    "version": "3.3",
    "releaseDate": "v3.3",
    "avatar": "/images/characters/UI_AvatarIcon_Wanderer.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Wanderer.png",
    "description": "A wayfaring figure whose identity is a mystery. He dresses like a mountain ascetic, but he certainly does not act the part.",
    "baseStatsLvl90": {
      "hp": 10164,
      "atk": 328,
      "def": 607,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 813,
        "atk": 26,
        "def": 49,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2033,
        "atk": 66,
        "def": 121,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5082,
        "atk": 164,
        "def": 304,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7623,
        "atk": 246,
        "def": 455,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10164,
        "atk": 328,
        "def": 607,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Yuuban Meigen",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Hanega: Song of the Wind",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Kyougen: Five Ceremonial Plays",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Jade-Claimed Flower",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Gales of Reverie",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Strum the Swirling Winds",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Shoban: Ostentatious Plumage",
        "description": ""
      },
      {
        "level": 2,
        "name": "Niban: Isle Amidst White Waves",
        "description": ""
      },
      {
        "level": 3,
        "name": "Sanban: Moonflower Kusemai",
        "description": ""
      },
      {
        "level": 4,
        "name": "Yonban: Set Adrift into Spring",
        "description": ""
      },
      {
        "level": 5,
        "name": "Matsuban: Ancient Illuminator From Abroad",
        "description": ""
      },
      {
        "level": 6,
        "name": "Shugen: The Curtains' Melancholic Sway",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Rukkhashava Mushrooms",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "wriothesley",
    "name": "Wriothesley",
    "title": "Emissary of Solitary Iniquity",
    "rarity": 5,
    "element": "Cryo",
    "weaponType": "Catalyst",
    "region": "Fontaine",
    "affiliation": "Fortress of Meropide",
    "role": "Main DPS",
    "version": "4.1",
    "releaseDate": "v4.1",
    "avatar": "/images/characters/UI_AvatarIcon_Wriothesley.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Wriothesley.png",
    "description": "Duke of the Fortress of Meropide, Lord Incognito of the murky depths.",
    "baseStatsLvl90": {
      "hp": 13593,
      "atk": 311,
      "def": 763,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1087,
        "atk": 25,
        "def": 61,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2719,
        "atk": 62,
        "def": 153,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6796,
        "atk": 155,
        "def": 382,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10195,
        "atk": 233,
        "def": 572,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 13593,
        "atk": 311,
        "def": 763,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Forceful Fists of Frost",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Icefang Rush",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Darkgold Wolfbite",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "There Shall Be a Plea for Justice",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "There Shall Be a Reckoning for Sin",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "The Duke's Grace",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Terror for the Evildoers",
        "description": ""
      },
      {
        "level": 2,
        "name": "Shackles for the Arrogant",
        "description": ""
      },
      {
        "level": 3,
        "name": "Punishment for the Frauds",
        "description": ""
      },
      {
        "level": 4,
        "name": "Redemption for the Suffering",
        "description": ""
      },
      {
        "level": 5,
        "name": "Mercy for the Wronged",
        "description": ""
      },
      {
        "level": 6,
        "name": "Esteem for the Innocent",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Cryo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Cryo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Shivada Jade Sliver",
      "commonDrop": "Subdetection Unit",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "xiangling",
    "name": "Xiangling",
    "title": "Exquisite Delicacy",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Polearm",
    "region": "Liyue",
    "affiliation": "Wanmin Restaurant",
    "role": "Support",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Xiangling.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Xiangling.png",
    "description": "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.",
    "baseStatsLvl90": {
      "hp": 10875,
      "atk": 225,
      "def": 669,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "96"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 870,
        "atk": 18,
        "def": 54,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2175,
        "atk": 45,
        "def": 134,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5437,
        "atk": 113,
        "def": 334,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8156,
        "atk": 169,
        "def": 502,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10875,
        "atk": 225,
        "def": 669,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "96"
      }
    ],
    "talents": [
      {
        "name": "Dough-Fu",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Guoba Attack",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Pyronado",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Crossfire",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Beware, It's Super Hot!",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Chef de Cuisine",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Crispy Outside, Tender Inside",
        "description": ""
      },
      {
        "level": 2,
        "name": "Oil Meets Fire",
        "description": ""
      },
      {
        "level": 3,
        "name": "Deepfry",
        "description": ""
      },
      {
        "level": 4,
        "name": "Slowbake",
        "description": ""
      },
      {
        "level": 5,
        "name": "Guoba Mad",
        "description": ""
      },
      {
        "level": 6,
        "name": "Condensed Pyronado",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Jueyun Chili",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "xianyun",
    "name": "Xianyun",
    "title": "Passerine Herald",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Catalyst",
    "region": "Liyue",
    "affiliation": "Mt. Aocang",
    "role": "Main DPS",
    "version": "4.4",
    "releaseDate": "v4.4",
    "avatar": "/images/characters/UI_AvatarIcon_Liuyun.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Liuyun.png",
    "description": "One of the Mighty and Illuminated Adepti of Jueyun, known as \"Cloud Retainer.\" Expert in all kinds of mechanical contraptions, her heart now turns towards the affairs of the mortal world, through which she walks under the name \"Xianyun.\"",
    "baseStatsLvl90": {
      "hp": 10409,
      "atk": 335,
      "def": 573,
      "ascensionStat": "ATK",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 833,
        "atk": 27,
        "def": 46,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2082,
        "atk": 67,
        "def": 115,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5205,
        "atk": 167,
        "def": 286,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7807,
        "atk": 251,
        "def": 429,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10409,
        "atk": 335,
        "def": 573,
        "ascensionStat": "ATK",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Word of Wind and Flower",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "White Clouds at Dawn",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Stars Gather at Dusk",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Galefeather Pursuit",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Consider, the Adeptus in Her Realm",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Crane Form",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Purifying Wind",
        "description": ""
      },
      {
        "level": 2,
        "name": "Aloof From the World",
        "description": ""
      },
      {
        "level": 3,
        "name": "Creations of Star and Moon",
        "description": ""
      },
      {
        "level": 4,
        "name": "Mystery Millet Gourmet",
        "description": ""
      },
      {
        "level": 5,
        "name": "Astride Rose-Colored Clouds",
        "description": ""
      },
      {
        "level": 6,
        "name": "They Call Her Cloud Retainer",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Clearwater Jade",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "xiao",
    "name": "Xiao",
    "title": "Vigilant Yaksha",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Polearm",
    "region": "Liyue",
    "affiliation": "Liyue Adeptus",
    "role": "Main DPS",
    "version": "1.3",
    "releaseDate": "v1.3",
    "avatar": "/images/characters/UI_AvatarIcon_Xiao.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Xiao.png",
    "description": "A yaksha adeptus who defends Liyue. Also heralded as the \"Conqueror of Demons\" and \"Vigilant Yaksha.\"",
    "baseStatsLvl90": {
      "hp": 12736,
      "atk": 349,
      "def": 799,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1019,
        "atk": 28,
        "def": 64,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2547,
        "atk": 70,
        "def": 160,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6368,
        "atk": 175,
        "def": 400,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9552,
        "atk": 262,
        "def": 599,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12736,
        "atk": 349,
        "def": 799,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Whirlwind Thrust",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Lemniscatic Wind Cycling",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Bane of All Evil",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Conqueror of Evil: Tamer of Demons",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Dissolution Eon: Heaven Fall",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Transcension: Gravity Defier",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Dissolution Eon: Destroyer of Worlds",
        "description": ""
      },
      {
        "level": 2,
        "name": "Annihilation Eon: Blossom of Kaleidos",
        "description": ""
      },
      {
        "level": 3,
        "name": "Conqueror of Evil: Wrath Deity",
        "description": ""
      },
      {
        "level": 4,
        "name": "Transcension: Extinction of Suffering",
        "description": ""
      },
      {
        "level": 5,
        "name": "Evolution Eon: Origin of Ignorance",
        "description": ""
      },
      {
        "level": 6,
        "name": "Conqueror of Evil: Guardian Yaksha",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Qingxin",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "xilonen",
    "name": "Xilonen",
    "title": "Ardent Flames Forge the Soul",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Sword",
    "region": "Natlan",
    "affiliation": "Nanatzcayan",
    "role": "Main DPS",
    "version": "5.1",
    "releaseDate": "v5.1",
    "avatar": "/images/characters/UI_AvatarIcon_Xilonen.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Xilonen.png",
    "description": "A Name Engraver of the Nanatzcayan, she is especially skilled at finding a good balance between the heavy responsibilities of her job and living well.",
    "baseStatsLvl90": {
      "hp": 12405,
      "atk": 275,
      "def": 930,
      "ascensionStat": "DEF",
      "ascensionValue": "0.4"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 992,
        "atk": 22,
        "def": 74,
        "ascensionStat": "DEF",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2481,
        "atk": 55,
        "def": 186,
        "ascensionStat": "DEF",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6203,
        "atk": 138,
        "def": 465,
        "ascensionStat": "DEF",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9304,
        "atk": 206,
        "def": 697,
        "ascensionStat": "DEF",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12405,
        "atk": 275,
        "def": 930,
        "ascensionStat": "DEF",
        "ascensionValue": "0.4"
      }
    ],
    "talents": [
      {
        "name": "Ehecatl's Roar",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Yohual's Scratch",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Ocelotlicue Point!",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Netotiliztli's Echoes",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Portable Armored Sheath",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Night Realm's Gift: Blessing of Forge-Fire",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Sabbatical Phrase",
        "description": ""
      },
      {
        "level": 2,
        "name": "Chiucue Mix",
        "description": ""
      },
      {
        "level": 3,
        "name": "Tonalpohualli's Loop",
        "description": ""
      },
      {
        "level": 4,
        "name": "Suchitl's Trance",
        "description": ""
      },
      {
        "level": 5,
        "name": "Tlaltecuhtli's Crossfade",
        "description": ""
      },
      {
        "level": 6,
        "name": "Imperishable Night Carnival",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Brilliant Chrysanthemum",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "xingqiu",
    "name": "Xingqiu",
    "title": "Juvenile Galant",
    "rarity": 4,
    "element": "Hydro",
    "weaponType": "Sword",
    "region": "Liyue",
    "affiliation": "Feiyun Commerce Guild",
    "role": "Main DPS",
    "version": "1.0",
    "releaseDate": "v1.0",
    "avatar": "/images/characters/UI_AvatarIcon_Xingqiu.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Xingqiu.png",
    "description": "A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.",
    "baseStatsLvl90": {
      "hp": 10222,
      "atk": 202,
      "def": 758,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 818,
        "atk": 16,
        "def": 61,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2044,
        "atk": 40,
        "def": 152,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5111,
        "atk": 101,
        "def": 379,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7667,
        "atk": 151,
        "def": 568,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10222,
        "atk": 202,
        "def": 758,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Guhua Style",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Guhua Sword: Fatal Rainscreen",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Guhua Sword: Raincutter",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Hydropathic",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Blades Amidst Raindrops",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Flash of Genius",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "The Scent Remained",
        "description": ""
      },
      {
        "level": 2,
        "name": "Rainbow Upon the Azure Sky",
        "description": ""
      },
      {
        "level": 3,
        "name": "Weaver of Verses",
        "description": ""
      },
      {
        "level": 4,
        "name": "Evilsoother",
        "description": ""
      },
      {
        "level": 5,
        "name": "Embrace of Rain",
        "description": ""
      },
      {
        "level": 6,
        "name": "Hence, Call Them My Own Verses",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Silk Flower",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "xinyan",
    "name": "Xinyan",
    "title": "Blazing Riff",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Claymore",
    "region": "Liyue",
    "affiliation": "\"The Red Strings\"",
    "role": "Main DPS",
    "version": "1.1",
    "releaseDate": "v1.1",
    "avatar": "/images/characters/UI_AvatarIcon_Xinyan.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Xinyan.png",
    "description": "Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.",
    "baseStatsLvl90": {
      "hp": 11201,
      "atk": 249,
      "def": 799,
      "ascensionStat": "ATK",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 896,
        "atk": 20,
        "def": 64,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2240,
        "atk": 50,
        "def": 160,
        "ascensionStat": "ATK",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5601,
        "atk": 124,
        "def": 399,
        "ascensionStat": "ATK",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 8401,
        "atk": 186,
        "def": 599,
        "ascensionStat": "ATK",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 11201,
        "atk": 249,
        "def": 799,
        "ascensionStat": "ATK",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Dance on Fire",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Sweeping Fervor",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Riff Revolution",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "\"The Show Goes On, Even Without an Audience...\"",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "\"...Now That's Rock 'N' Roll!\"",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "A Rad Recipe",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Fatal Acceleration",
        "description": ""
      },
      {
        "level": 2,
        "name": "Impromptu Opening",
        "description": ""
      },
      {
        "level": 3,
        "name": "Double-Stop",
        "description": ""
      },
      {
        "level": 4,
        "name": "Wildfire Rhythm",
        "description": ""
      },
      {
        "level": 5,
        "name": "Screamin' for an Encore",
        "description": ""
      },
      {
        "level": 6,
        "name": "Rockin' in a Flaming World",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Claymore",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Claymore",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Violetgrass",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "yae-miko",
    "name": "Yae Miko",
    "title": "Astute Amusement",
    "rarity": 5,
    "element": "Electro",
    "weaponType": "Catalyst",
    "region": "Inazuma",
    "affiliation": "Grand Narukami Shrine",
    "role": "Main DPS",
    "version": "2.5",
    "releaseDate": "v2.5",
    "avatar": "/images/characters/UI_AvatarIcon_Yae.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Yae.png",
    "description": "Lady Guuji of the Grand Narukami Shrine. Also serves as the editor-in-chief of Yae Publishing House. Unimaginable intelligence and cunning are hidden under her beautiful appearance.",
    "baseStatsLvl90": {
      "hp": 10372,
      "atk": 340,
      "def": 569,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 830,
        "atk": 27,
        "def": 45,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2074,
        "atk": 68,
        "def": 114,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5186,
        "atk": 170,
        "def": 284,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7779,
        "atk": 255,
        "def": 427,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10372,
        "atk": 340,
        "def": 569,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Spiritfox Sin-Eater",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Yakan Evocation: Sesshou Sakura",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Great Secret Art: Tenko Kenshin",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "The Shrine's Sacred Shade",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Enlightened Blessing",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Meditations of a Yako",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Yakan Offering",
        "description": ""
      },
      {
        "level": 2,
        "name": "Fox's Mooncall",
        "description": ""
      },
      {
        "level": 3,
        "name": "The Seven Glamours",
        "description": ""
      },
      {
        "level": 4,
        "name": "Sakura Channeling",
        "description": ""
      },
      {
        "level": 5,
        "name": "Mischievous Teasing",
        "description": ""
      },
      {
        "level": 6,
        "name": "Forbidden Art: Daisesshou",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Electro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Electro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vajrada Amethyst Sliver",
      "commonDrop": "Sea Ganoderma",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "yanfei",
    "name": "Yanfei",
    "title": "Wise Innocence",
    "rarity": 4,
    "element": "Pyro",
    "weaponType": "Catalyst",
    "region": "Liyue",
    "affiliation": "Yanfei Legal Consultancy",
    "role": "Main DPS",
    "version": "1.5",
    "releaseDate": "v1.5",
    "avatar": "/images/characters/UI_AvatarIcon_Feiyan.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Feiyan.png",
    "description": "A well-known legal adviser active in Liyue Harbor. A brilliant young lady in whose veins runs the blood of an illuminated beast.",
    "baseStatsLvl90": {
      "hp": 9352,
      "atk": 240,
      "def": 587,
      "ascensionStat": "Pyro DMG Bonus",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 748,
        "atk": 19,
        "def": 47,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 1870,
        "atk": 48,
        "def": 117,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 4676,
        "atk": 120,
        "def": 293,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7014,
        "atk": 180,
        "def": 440,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 9352,
        "atk": 240,
        "def": 587,
        "ascensionStat": "Pyro DMG Bonus",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Seal of Approval",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Signed Edict",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Done Deal",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Proviso",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Blazing Eye",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Encyclopedic Expertise",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "The Law Knows No Kindness",
        "description": ""
      },
      {
        "level": 2,
        "name": "Right of Final Interpretation",
        "description": ""
      },
      {
        "level": 3,
        "name": "Samadhi Fire-Forged",
        "description": ""
      },
      {
        "level": 4,
        "name": "Supreme Amnesty",
        "description": ""
      },
      {
        "level": 5,
        "name": "Abiding Affidavit",
        "description": ""
      },
      {
        "level": 6,
        "name": "Extra Clause",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Noctilucous Jade",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "yaoyao",
    "name": "Yaoyao",
    "title": "Burgeoning Grace",
    "rarity": 4,
    "element": "Dendro",
    "weaponType": "Polearm",
    "region": "Liyue",
    "affiliation": "Streetward Rambler's Abode",
    "role": "Main DPS",
    "version": "3.4",
    "releaseDate": "v3.4",
    "avatar": "/images/characters/UI_AvatarIcon_Yaoyao.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Yaoyao.png",
    "description": "Streetward Rambler's youngest disciple. A gentle and caring \"little adult.\"",
    "baseStatsLvl90": {
      "hp": 12289,
      "atk": 212,
      "def": 751,
      "ascensionStat": "HP",
      "ascensionValue": "0.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 983,
        "atk": 17,
        "def": 60,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2458,
        "atk": 42,
        "def": 150,
        "ascensionStat": "HP",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6144,
        "atk": 106,
        "def": 375,
        "ascensionStat": "HP",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9216,
        "atk": 159,
        "def": 563,
        "ascensionStat": "HP",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12289,
        "atk": 212,
        "def": 751,
        "ascensionStat": "HP",
        "ascensionValue": "0.2"
      }
    ],
    "talents": [
      {
        "name": "Toss 'N' Turn Spear",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Raphanus Sky Cluster",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Moonjade Descent",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Starscatter",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "In Others' Shoes",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Tailing on Tiptoes",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Adeptus' Tutelage",
        "description": ""
      },
      {
        "level": 2,
        "name": "Innocent",
        "description": ""
      },
      {
        "level": 3,
        "name": "Loyal and Kind",
        "description": ""
      },
      {
        "level": 4,
        "name": "Winsome",
        "description": ""
      },
      {
        "level": 5,
        "name": "Compassionate",
        "description": ""
      },
      {
        "level": 6,
        "name": "Beneficent",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Dendro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Dendro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Nagadus Emerald Sliver",
      "commonDrop": "Jueyun Chili",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "yelan",
    "name": "Yelan",
    "title": "Valley Orchid",
    "rarity": 5,
    "element": "Hydro",
    "weaponType": "Bow",
    "region": "Liyue",
    "affiliation": "Yanshang Teahouse",
    "role": "Main DPS",
    "version": "2.7",
    "releaseDate": "v2.7",
    "avatar": "/images/characters/UI_AvatarIcon_Yelan.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Yelan.png",
    "description": "A mysterious person who claims to work for the Ministry of Civil Affairs, but is a \"non-entity\" on the Ministry of Civil Affairs' list.",
    "baseStatsLvl90": {
      "hp": 14450,
      "atk": 244,
      "def": 548,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1156,
        "atk": 20,
        "def": 44,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2890,
        "atk": 49,
        "def": 110,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7225,
        "atk": 122,
        "def": 274,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 10838,
        "atk": 183,
        "def": 411,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 14450,
        "atk": 244,
        "def": 548,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Stealthy Bowshot",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Lingering Lifeline",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Depth-Clarion Dice",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Turn Control",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Adapt With Ease",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Necessary Calculation",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Enter the Plotters",
        "description": ""
      },
      {
        "level": 2,
        "name": "Taking All Comers",
        "description": ""
      },
      {
        "level": 3,
        "name": "Beware the Trickster's Dice",
        "description": ""
      },
      {
        "level": 4,
        "name": "Bait-and-Switch",
        "description": ""
      },
      {
        "level": 5,
        "name": "Dealer's Sleight",
        "description": ""
      },
      {
        "level": 6,
        "name": "Winner Takes All",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Hydro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Hydro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Varunada Lazurite Sliver",
      "commonDrop": "Starconch",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "yoimiya",
    "name": "Yoimiya",
    "title": "Frolicking Flames",
    "rarity": 5,
    "element": "Pyro",
    "weaponType": "Bow",
    "region": "Inazuma",
    "affiliation": "Naganohara Fireworks",
    "role": "Main DPS",
    "version": "2.0",
    "releaseDate": "v2.0",
    "avatar": "/images/characters/UI_AvatarIcon_Yoimiya.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Yoimiya.png",
    "description": "Owner of Naganohara Fireworks. Known as the \"Queen of the Summer Festival,\" she excels in her craft of creating fireworks that symbolize people's hopes and dreams.",
    "baseStatsLvl90": {
      "hp": 10164,
      "atk": 323,
      "def": 615,
      "ascensionStat": "CRIT Rate",
      "ascensionValue": "24.2%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 813,
        "atk": 26,
        "def": 49,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2033,
        "atk": 65,
        "def": 123,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5082,
        "atk": 161,
        "def": 307,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7623,
        "atk": 242,
        "def": 461,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10164,
        "atk": 323,
        "def": 615,
        "ascensionStat": "CRIT Rate",
        "ascensionValue": "24.2%"
      }
    ],
    "talents": [
      {
        "name": "Firework Flare-Up",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Niwabi Fire-Dance",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Ryuukin Saxifrage",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Tricks of the Trouble-Maker",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Summer Night's Dawn",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Blazing Match",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Agate Ryuukin",
        "description": ""
      },
      {
        "level": 2,
        "name": "A Procession of Bonfires",
        "description": ""
      },
      {
        "level": 3,
        "name": "Trickster's Flare",
        "description": ""
      },
      {
        "level": 4,
        "name": "Pyrotechnic Professional",
        "description": ""
      },
      {
        "level": 5,
        "name": "A Summer Festival's Eve",
        "description": ""
      },
      {
        "level": 6,
        "name": "Naganohara Meteor Swarm",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Bow",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Bow",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Pyro DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Pyro Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Agnidus Agate Sliver",
      "commonDrop": "Naku Weed",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "yumemizuki-mizuki",
    "name": "Yumemizuki Mizuki",
    "title": "Embrace of Enchanting Dreams",
    "rarity": 5,
    "element": "Anemo",
    "weaponType": "Catalyst",
    "region": "Inazuma",
    "affiliation": "Inazuma",
    "role": "Support",
    "version": "5.4",
    "releaseDate": "v5.4",
    "avatar": "/images/characters/UI_AvatarIcon_Mizuki.png",
    "splashArt": "/images/characters/UI_AvatarIcon_Mizuki.png",
    "description": "A shareholder of Aisa Bathhouse, a baku, and a clinical psychologist. Dedicated to the dispersal of nightmares, and to bringing people peace of mind.",
    "baseStatsLvl90": {
      "hp": 12736,
      "atk": 215,
      "def": 757,
      "ascensionStat": "Elemental Mastery",
      "ascensionValue": "115.2"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1019,
        "atk": 17,
        "def": 61,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2547,
        "atk": 43,
        "def": 151,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6368,
        "atk": 108,
        "def": 379,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9552,
        "atk": 161,
        "def": 568,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12736,
        "atk": 215,
        "def": 757,
        "ascensionStat": "Elemental Mastery",
        "ascensionValue": "115.2"
      }
    ],
    "talents": [
      {
        "name": "Pure Heart, Pure Dreams",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Aisa Utamakura Pilgrimage",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Anraku Secret Spring Therapy",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Bright Moon's Restless Voice",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Thoughts by Day Bring Dreams by Night",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "All Ailments Banished",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "In Mist-Like Waters",
        "description": ""
      },
      {
        "level": 2,
        "name": "Your Echo I Meet in Dreams",
        "description": ""
      },
      {
        "level": 3,
        "name": "Till Dawn's Moon Ends Night",
        "description": ""
      },
      {
        "level": 4,
        "name": "Buds Warm Lucid Springs",
        "description": ""
      },
      {
        "level": 5,
        "name": "As Setting Moon Brings Year's End",
        "description": ""
      },
      {
        "level": 6,
        "name": "The Heart Lingers Long",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Catalyst",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Catalyst",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Anemo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Anemo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Vayuda Turquoise Sliver",
      "commonDrop": "Sea Ganoderma",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "yun-jin",
    "name": "Yun Jin",
    "title": "Stage Lucida",
    "rarity": 4,
    "element": "Geo",
    "weaponType": "Polearm",
    "region": "Liyue",
    "affiliation": "Yun-Han Opera Troupe",
    "role": "Support",
    "version": "2.4",
    "releaseDate": "v2.4",
    "avatar": "/images/characters/UI_AvatarIcon_Yunjin.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Yunjin.png",
    "description": "A renowned Liyue opera singer who is skilled in both playwriting and singing. Her style is one-of-a-kind, exquisite and delicate, much like the person herself.",
    "baseStatsLvl90": {
      "hp": 10657,
      "atk": 191,
      "def": 734,
      "ascensionStat": "Energy Recharge",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 853,
        "atk": 15,
        "def": 59,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2131,
        "atk": 38,
        "def": 147,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 5329,
        "atk": 96,
        "def": 367,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 7993,
        "atk": 143,
        "def": 551,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 10657,
        "atk": 191,
        "def": 734,
        "ascensionStat": "Energy Recharge",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Cloud-Grazing Strike",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Opening Flourish",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Cliffbreaker's Banner",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "True to Oneself",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Breaking Conventions",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Light Nourishment",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Thespian Gallop",
        "description": ""
      },
      {
        "level": 2,
        "name": "Myriad Mise-En-Scène",
        "description": ""
      },
      {
        "level": 3,
        "name": "Seafaring General",
        "description": ""
      },
      {
        "level": 4,
        "name": "Flower and a Fighter",
        "description": ""
      },
      {
        "level": 5,
        "name": "Famed Throughout the Land",
        "description": ""
      },
      {
        "level": 6,
        "name": "Decorous Harmony",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Glaze Lily",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "zhongli",
    "name": "Zhongli",
    "title": "Vago Mundo",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Polearm",
    "region": "Liyue",
    "affiliation": "Liyue Harbor",
    "role": "Main DPS",
    "version": "1.1",
    "releaseDate": "v1.1",
    "avatar": "/images/characters/UI_AvatarIcon_Zhongli.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Zhongli.png",
    "description": "A mysterious expert contracted by the Wangsheng Funeral Parlor. Extremely knowledgeable in all things.",
    "baseStatsLvl90": {
      "hp": 14695,
      "atk": 251,
      "def": 738,
      "ascensionStat": "Geo DMG Bonus",
      "ascensionValue": "0.3"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1176,
        "atk": 20,
        "def": 59,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2939,
        "atk": 50,
        "def": 148,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 7348,
        "atk": 126,
        "def": 369,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 11021,
        "atk": 188,
        "def": 553,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 14695,
        "atk": 251,
        "def": 738,
        "ascensionStat": "Geo DMG Bonus",
        "ascensionValue": "0.3"
      }
    ],
    "talents": [
      {
        "name": "Rain of Stone",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Dominus Lapidis",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Planet Befall",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "Resonant Waves",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Dominance of Earth",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Arcanum of Crystal",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Rock, the Backbone of Earth",
        "description": ""
      },
      {
        "level": 2,
        "name": "Stone, the Cradle of Jade",
        "description": ""
      },
      {
        "level": 3,
        "name": "Jade, Shimmering through Darkness",
        "description": ""
      },
      {
        "level": 4,
        "name": "Topaz, Unbreakable and Fearless",
        "description": ""
      },
      {
        "level": 5,
        "name": "Lazuli, Herald of the Order",
        "description": ""
      },
      {
        "level": 6,
        "name": "Chrysos, Bounty of Dominator",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Polearm",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Polearm",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Cor Lapis",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  },
  {
    "id": "zibai",
    "name": "Zibai",
    "title": "White Horse's Fleeting Spring",
    "rarity": 5,
    "element": "Geo",
    "weaponType": "Sword",
    "region": "Other",
    "affiliation": "Liyue Harbor",
    "role": "Main DPS",
    "version": "6.3",
    "releaseDate": "v6.3",
    "avatar": "/images/characters/UI_AvatarIcon_Zibai.png",
    "splashArt": "/images/characters/UI_Gacha_AvatarImg_Zibai.png",
    "description": "The White Horse Adeptus from Liyue's legends, known as Zibai. The most mysterious figure in Liyue's myths.",
    "baseStatsLvl90": {
      "hp": 12919,
      "atk": 225,
      "def": 957,
      "ascensionStat": "CRIT DMG",
      "ascensionValue": "88.4%"
    },
    "statProgression": [
      {
        "level": 1,
        "hp": 1034,
        "atk": 18,
        "def": 77,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 20,
        "hp": 2584,
        "atk": 45,
        "def": 191,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "0%"
      },
      {
        "level": 50,
        "hp": 6460,
        "atk": 112,
        "def": 478,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "9.6%"
      },
      {
        "level": 70,
        "hp": 9690,
        "atk": 169,
        "def": 718,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "14.4%"
      },
      {
        "level": 90,
        "hp": 12919,
        "atk": 225,
        "def": 957,
        "ascensionStat": "CRIT DMG",
        "ascensionValue": "88.4%"
      }
    ],
    "talents": [
      {
        "name": "Golden Blade's Petaled Touch",
        "type": "Normal Attack",
        "description": ""
      },
      {
        "name": "Heaven and Earth Made Manifest",
        "type": "Elemental Skill",
        "description": ""
      },
      {
        "name": "Tri-Sphere Eminence",
        "type": "Elemental Burst",
        "description": ""
      },
      {
        "name": "The Selenic Adeptus Descends",
        "type": "1st Ascension Passive",
        "description": ""
      },
      {
        "name": "Layered Peaks Pierce the Clouds",
        "type": "4th Ascension Passive",
        "description": ""
      },
      {
        "name": "Moonsign Benediction: The Coursing Sun and Moon",
        "type": "Utility Passive",
        "description": ""
      }
    ],
    "constellations": [
      {
        "level": 1,
        "name": "Burst Forth With Vigor, But Enter in Silence",
        "description": ""
      },
      {
        "level": 2,
        "name": "At Birth Are Souls Born, and in Death Leave But Husks",
        "description": ""
      },
      {
        "level": 3,
        "name": "Free From Constraints and Worldly Ties",
        "description": ""
      },
      {
        "level": 4,
        "name": "The Spirit Passes, Then Form Follows",
        "description": ""
      },
      {
        "level": 5,
        "name": "Perceive the Worthless and Debate It Not",
        "description": ""
      },
      {
        "level": 6,
        "name": "The World, A Journey in Passing",
        "description": ""
      }
    ],
    "recommendedWeapons": [
      {
        "name": "Signature 5★ Weapon",
        "rarity": 5,
        "reason": "Optimal scaling for core abilities and elemental multipliers."
      },
      {
        "name": "Favonius Sword",
        "rarity": 4,
        "reason": "High energy recharge and particle generation for team rotations."
      },
      {
        "name": "Sacrificial Sword",
        "rarity": 4,
        "reason": "Skill cooldown reset and consistency."
      }
    ],
    "recommendedArtifacts": [
      {
        "name": "Obsidian Codex",
        "pieces": 4,
        "mainStats": {
          "sands": "ATK% / HP%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate / CRIT DMG"
        }
      },
      {
        "name": "Scroll of the Hero of Cinder City",
        "pieces": 4,
        "mainStats": {
          "sands": "ER% / DEF%",
          "goblet": "Geo DMG Bonus",
          "circlet": "CRIT Rate"
        }
      }
    ],
    "synergies": [
      "Furina",
      "Xilonen",
      "Kazuha",
      "Zhongli",
      "Bennett"
    ],
    "ascensionMaterials": {
      "gem": "Geo Sliver / Chunk",
      "bossMat": "Mora",
      "localSpecialty": "Prithiva Topaz Sliver",
      "commonDrop": "Glaze Lily",
      "talentBook": "Teachings of Conflict / Guide",
      "weeklyBossMat": "Trounce Remnant"
    }
  }
];
export const CHARACTERS_DATA: Character[] = sortByReleaseDesc(RAW_CHARACTERS);
