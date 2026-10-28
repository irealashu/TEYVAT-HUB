import { Enemy } from '../types';
import { sortByReleaseDesc } from '../utils/versionSort';

const RAW_ENEMIES: Enemy[] = [
  {
    id: 'the-knave-boss',
    name: 'The Knave (Arlecchino)',
    category: 'Weekly Boss',
    elementalAffinity: ['Pyro'],
    region: 'Fontaine',
    location: 'Scattered Ruins, Mont Esus East, Fontaine',
    drops: ['Fading Candle', 'Silken Feather', 'Denial and Judgment', 'Billets', 'Dream Solvent'],
    description: 'The Fourth of the Fatui Harbingers. In battle, she brandishes crimson scythes and wings of the Balemoon, imposing lethal Blood-Debt Directives and Bonds of Life upon challengers.',
    combatTips: 'Clear the Bond of Life inflicted by her crimson slashes using dedicated healers to unlock Blood-Debt clearance and stun her during phase transitions.',
    icon: '/images/characters/UI_AvatarIcon_Arlecchino.png'
  },
  {
    id: 'all-devouring-narwhal',
    name: 'All-Devouring Narwhal',
    category: 'Weekly Boss',
    elementalAffinity: ['Hydro'],
    region: 'Fontaine',
    location: 'Shadow of Another World, Salacia Plain, Fontaine',
    drops: ['Lightless Silk String', 'Lightless Eye of the Maelstrom', 'Lightless Mass', 'Dream Solvent'],
    description: 'A terrifying cosmic leviathan that swims through the Primordial Sea, possessing a belly that swallows galaxies and champions of shadow.',
    combatTips: 'Build hostility to be swallowed into the abyssal belly. Defeat the Shadowy Husk within using Pneuma or Ousia arkhe attacks to stagger the Narwhal upon return.',
    icon: '/images/enemies/UI_ItemIcon_113050.png'
  },
  {
    id: 'goldflame-qucusaur-tyrant',
    name: 'Goldflame Qucusaur Tyrant',
    category: 'World Boss',
    elementalAffinity: ['Pyro'],
    region: 'Natlan',
    location: 'Huitztli Hill, Natlan',
    drops: ['Goldflame Qucusaur Feathers', 'Agnidus Agate Gemstones'],
    description: 'A mutated ancient avian Saurian that commands intense volcanic plumes, soaring high into the thermals.',
    combatTips: 'Bring Hydro or Cryo ranged attackers (or Chasca / Neuvillette) to break its flaming shield while airborne and cause it to plummet.',
    icon: '/images/enemies/UI_ItemIcon_113067.png'
  },
  {
    id: 'secret-source-constructor',
    name: 'Secret Source Constructor',
    category: 'World Boss',
    elementalAffinity: ['Geo'],
    region: 'Natlan',
    location: 'Toyac Springs, Natlan',
    drops: ['Secret Source Core', 'Prithiva Topaz Gemstones'],
    description: 'An enigmatic ancient automaton left behind by the civilization of the Night Kingdom, utilizing solid phlogiston pillars.',
    combatTips: 'Utilize Nightsoul attacks or climbing abilities (Xilonen, Kachina) to destroy its elevated energy pillars and disrupt its beam attacks.',
    icon: '/images/enemies/UI_ItemIcon_113067.png'
  },
  {
    id: 'raiden-boss',
    name: 'Magatsu Mitake Narukami no Mikoto',
    category: 'Weekly Boss',
    elementalAffinity: ['Electro'],
    region: 'Inazuma',
    location: 'End of the Oneiric Euthymia, Narukami Island',
    drops: ['Mudra of the Malefic General', 'Tears of the Calamitous God', 'The Meaning of Aeons'],
    description: 'The puppet custodian of the Raiden Shogun empowered by the perpetual will of Eternity, wielding the giant Musou no Hitotachi.',
    combatTips: 'Use Electro characters to charge the Flowers of Remembrance and survive the Final Calamity strike during her Baleful Shadowlord transformation.',
    icon: '/images/characters/UI_AvatarIcon_Shougun.png'
  },
  {
    id: 'azhdaha',
    name: 'Azhdaha, Lord of Vishaps',
    category: 'Weekly Boss',
    elementalAffinity: ['Geo', 'Pyro', 'Hydro', 'Cryo', 'Electro'],
    region: 'Liyue',
    location: 'Beneath the Dragon-Queller, Nantianmen, Liyue',
    drops: ['Dragon Lord\'s Crown', 'Bloodjade Branch', 'Gilded Scale'],
    description: 'An ancient dragon sovereign carved from the bedrock by Rex Lapis, whose memory erosion drove him to blind fury.',
    combatTips: 'A dedicated shielder (Zhongli, Layla, Kirara) is essential to protect characters from the periodic elemental corruption mark.',
    icon: '/images/enemies/UI_ItemIcon_113017.png'
  }
];
export const ENEMIES_DATA: Enemy[] = sortByReleaseDesc(RAW_ENEMIES);
