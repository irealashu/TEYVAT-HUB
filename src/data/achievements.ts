import { Achievement } from '../types';
import { sortByReleaseDesc } from '../utils/versionSort';

const RAW_ACHIEVEMENTS: Achievement[] = [
  // ==========================================
  // WONDERS OF THE WORLD - ARCHON QUESTS & STORY
  // ==========================================
  {
    id: 'wotw-01',
    name: '...Or a New Storm?',
    category: 'Wonders of the World',
    description: 'Banish the dragon threatening the city of wind and complete the defense of Mondstadt.',
    primogems: 5,
    version: '1.0',
    isSecret: true,
    requirements: 'Complete "Song of the Dragon and Freedom"'
  },
  {
    id: 'wotw-02',
    name: 'Of Mountains High',
    category: 'Wonders of the World',
    description: 'Attain the power of Geo from the Statue of The Seven in Liyue.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Resonate with Geo for the first time'
  },
  {
    id: 'wotw-03',
    name: 'The Outlander Who Caught the Wind',
    category: 'Wonders of the World',
    description: 'Complete the prologue Archon Quest in Mondstadt.',
    primogems: 10,
    version: '1.0',
    isSecret: false,
    requirements: 'Finish Prologue: Act III'
  },
  {
    id: 'wotw-04',
    name: 'Farewell, Archaic Lord',
    category: 'Wonders of the World',
    description: 'Complete the preparations for the Rite of Parting in Liyue.',
    primogems: 10,
    version: '1.0',
    isSecret: false,
    requirements: 'Complete Chapter I: Act II'
  },
  {
    id: 'wotw-05',
    name: 'Icing on the Slime',
    category: 'Wonders of the World',
    description: 'Defeat the Overlord of the Vortex Osial with the united force of Liyue\'s Adepti and Qixing.',
    primogems: 10,
    version: '1.1',
    isSecret: true,
    requirements: 'Complete Chapter I: Act III'
  },
  {
    id: 'wotw-06',
    name: 'We Will Be Reunited',
    category: 'Wonders of the World',
    description: 'Discover the Defiled Statue and meet your lost sibling beside Dainsleif.',
    primogems: 10,
    version: '1.4',
    isSecret: true,
    requirements: 'Complete Chapter I: Act IV'
  },
  {
    id: 'wotw-07',
    name: 'The Immovable God and the Eternal Euthymia',
    category: 'Wonders of the World',
    description: 'Arrive in Inazuma and overcome the tribulations of the Sakoku Decree.',
    primogems: 10,
    version: '2.0',
    isSecret: false,
    requirements: 'Complete Chapter II: Act I'
  },
  {
    id: 'wotw-08',
    name: 'Their Wishes',
    category: 'Wonders of the World',
    description: 'Witness the boundless ambitions of the people in the Plane of Euthymia and defeat the Raiden Shogun.',
    primogems: 10,
    version: '2.1',
    isSecret: true,
    requirements: 'Complete Chapter II: Act III'
  },
  {
    id: 'wotw-09',
    name: 'The Crane Returns on the Wind',
    category: 'Wonders of the World',
    description: 'Help rebuild the Jade Chamber and repel Beisht with Shenhe.',
    primogems: 10,
    version: '2.4',
    isSecret: false,
    requirements: 'Complete Interlude Chapter: Act I'
  },
  {
    id: 'wotw-10',
    name: 'No Way Home',
    category: 'Wonders of the World',
    description: 'Escape the mysterious realm beneath The Chasm with Xiao, Yelan, and your companions.',
    primogems: 10,
    version: '2.7',
    isSecret: true,
    requirements: 'Complete Interlude Chapter: Act II'
  },
  {
    id: 'wotw-11',
    name: 'The Morn a Thousand Roses Brings',
    category: 'Wonders of the World',
    description: 'Break free from the Akasha dream samsara during the Sabzeruz Festival.',
    primogems: 10,
    version: '3.0',
    isSecret: true,
    requirements: 'Complete Chapter III: Act II'
  },
  {
    id: 'wotw-12',
    name: 'Akasha Pulses, the Kalpa Flame Rises',
    category: 'Wonders of the World',
    description: 'Rescue Lesser Lord Kusanali from Surasthana and purge the memory of Greater Lord Rukkhadevata from Irminsul.',
    primogems: 20,
    version: '3.2',
    isSecret: true,
    requirements: 'Complete Chapter III: Act V'
  },
  {
    id: 'wotw-13',
    name: 'Inversion of Genesis',
    category: 'Wonders of the World',
    description: 'Witness the rebirth of the Wanderer and grant him a new name.',
    primogems: 10,
    version: '3.3',
    isSecret: true,
    requirements: 'Complete Interlude Chapter: Act III'
  },
  {
    id: 'wotw-14',
    name: 'Caribert',
    category: 'Wonders of the World',
    description: 'Witness the memories of the Sinner and the birth of the Abyss Order.',
    primogems: 10,
    version: '3.5',
    isSecret: true,
    requirements: 'Complete Chapter III: Act VI'
  },
  {
    id: 'wotw-15',
    name: 'Prelude of Blancheur and Noirceur',
    category: 'Wonders of the World',
    description: 'Serve as attorney at the Opera Epiclese and defend Lyney against the charges.',
    primogems: 10,
    version: '4.0',
    isSecret: false,
    requirements: 'Complete Chapter IV: Act I'
  },
  {
    id: 'wotw-16',
    name: 'Masquerade of the Guilty',
    category: 'Wonders of the World',
    description: 'Witness Focalors\' divine judgment, Neuvillette\'s reclamation of dragon authority, and the salvation of Fontaine.',
    primogems: 20,
    version: '4.2',
    isSecret: true,
    requirements: 'Complete Chapter IV: Act V'
  },
  {
    id: 'wotw-17',
    name: 'Bedtime Story',
    category: 'Wonders of the World',
    description: 'Face the completed Loom of Fate and have an intimate memory exchange with your twin.',
    primogems: 10,
    version: '4.7',
    isSecret: true,
    requirements: 'Complete Chapter IV: Act VI'
  },
  {
    id: 'wotw-18',
    name: 'Flowers Resplendent on the Sun-Drenched Track',
    category: 'Wonders of the World',
    description: 'Arrive in Natlan, form a bond with a young Saurian, and enter the pilgrimage of the Return of the Sacred Flame.',
    primogems: 10,
    version: '5.0',
    isSecret: false,
    requirements: 'Complete Chapter V: Act I'
  },
  {
    id: 'wotw-19',
    name: 'Black Stone Buried in White Sand',
    category: 'Wonders of the World',
    description: 'Rescue Kachina from the Night Kingdom and witness the battle between Mavuika and Il Capitano.',
    primogems: 10,
    version: '5.0',
    isSecret: true,
    requirements: 'Complete Chapter V: Act II'
  },
  {
    id: 'wotw-20',
    name: 'The Rainbow Destined to Burn',
    category: 'Wonders of the World',
    description: 'Defend the Stadium of the Sacred Flame against the abyssal onslaught across all six tribes.',
    primogems: 10,
    version: '5.1',
    isSecret: true,
    requirements: 'Complete Chapter V: Act IV'
  },
  {
    id: 'wotw-21',
    name: 'All Fires Fuel the Flame',
    category: 'Wonders of the World',
    description: 'Unite all six Ancient Names, rekindle the eternal flame, and vanquish the Abyssal Core in the Night Kingdom.',
    primogems: 20,
    version: '5.3',
    isSecret: true,
    requirements: 'Complete Chapter V: Act V'
  },

  // ==========================================
  // WONDERS OF THE WORLD - EXPLORATION & SECRET DISCOVERIES
  // ==========================================
  {
    id: 'wotw-exp-01',
    name: 'Bon Appétit',
    category: 'Wonders of the World',
    description: 'Feed 4 party members to maximum fullness at the same time.',
    primogems: 5,
    version: '1.0',
    isSecret: true,
    requirements: 'Eat food until all 4 members reach 100% fullness'
  },
  {
    id: 'wotw-exp-02',
    name: 'Boar/Drifter',
    category: 'Wonders of the World',
    description: 'Be defeated by a wild forest boar.',
    primogems: 5,
    version: '1.0',
    isSecret: true,
    requirements: 'Have a low-HP character struck down by a charging wild boar'
  },
  {
    id: 'wotw-exp-03',
    name: 'Gold Glider',
    category: 'Wonders of the World',
    description: 'Glide continuously for more than 80 seconds.',
    primogems: 10,
    version: '1.0',
    isSecret: false,
    requirements: 'Glide from high peak like Qingyun Peak or Starsnatch Cliff'
  },
  {
    id: 'wotw-exp-04',
    name: 'Wrath of the Gods',
    category: 'Wonders of the World',
    description: 'Get struck down by lightning from the sky.',
    primogems: 5,
    version: '1.0',
    isSecret: true,
    requirements: 'Stand on a blue glowing lightning strike marker in stormy weather'
  },
  {
    id: 'wotw-exp-05',
    name: 'Unswerving',
    category: 'Wonders of the World',
    description: 'Open the chest in the middle of the heart-shaped rock formation in Guyun Stone Forest with another player.',
    primogems: 5,
    version: '1.0',
    isSecret: true,
    requirements: 'Stand in the heart island with a co-op partner'
  },
  {
    id: 'wotw-exp-06',
    name: 'Seeds of Stories, Brought By the Wind...',
    category: 'Wonders of the World',
    description: 'Reach the uninhabited time island far east of Mondstadt.',
    primogems: 5,
    version: '1.0',
    isSecret: true,
    requirements: 'Fly or ice-bridge across to the secret nameless island'
  },
  {
    id: 'wotw-exp-07',
    name: 'Towering Achievement',
    category: 'Wonders of the World',
    description: 'Reach the highest point in Dragonspine atop the Skyfrost Nail.',
    primogems: 5,
    version: '1.2',
    isSecret: true,
    requirements: 'Climb to the very tip of the levitating pillar above Vindagnyr'
  },
  {
    id: 'wotw-exp-08',
    name: 'Hanachirusato',
    category: 'Wonders of the World',
    description: 'Complete the Sacred Sakura Cleansing Ritual on Narukami Island.',
    primogems: 10,
    version: '2.0',
    isSecret: true,
    requirements: 'Defeat the Miasmic Tumor and claim the Mask of Memories'
  },
  {
    id: 'wotw-exp-09',
    name: 'Step for Seven Thousand',
    category: 'Wonders of the World',
    description: 'Climb to the Grand Narukami Shrine for the first time.',
    primogems: 5,
    version: '2.0',
    isSecret: false,
    requirements: 'Ascend Mt. Yougou to the shrine'
  },
  {
    id: 'wotw-exp-10',
    name: '...And I Would Walk 3,000 More',
    category: 'Wonders of the World',
    description: 'Find Chouji on Yashiori Island, then in Tatarasuna, Narukami Island, and Liyue.',
    primogems: 5,
    version: '2.0',
    isSecret: true,
    requirements: 'Follow Chouji\'s journey across Inazuma and Liyue'
  },
  {
    id: 'wotw-exp-11',
    name: 'What a Day for a Fish to Dream',
    category: 'Wonders of the World',
    description: 'Find all 5 lost murals in Byakuyakoku (Enkanomiya).',
    primogems: 5,
    version: '2.4',
    isSecret: true,
    requirements: 'Photograph all ancient mural paintings in the deep ruins'
  },
  {
    id: 'wotw-exp-12',
    name: 'Glaze Me a River',
    category: 'Wonders of the World',
    description: 'Fully upgrade the Lumenstone Adjuvant in The Chasm underground mines to rank 10.',
    primogems: 10,
    version: '2.6',
    isSecret: false,
    requirements: 'Collect 80 Lumenspars and 3 Lumenstone Ores'
  },
  {
    id: 'wotw-exp-13',
    name: 'A Walnut Tree in the Desert',
    category: 'Wonders of the World',
    description: 'Find the oasis in the Great Red Sand desert and witness its blooming sanctuary.',
    primogems: 5,
    version: '3.1',
    isSecret: true,
    requirements: 'Discover the hidden underground spring of Sobek'
  },
  {
    id: 'wotw-exp-14',
    name: 'Narzissenkreuz Notes',
    category: 'Wonders of the World',
    description: 'Discover the secret base of the Narzissenkreuz Ordo in the underwater Institute of Natural Philosophy.',
    primogems: 5,
    version: '4.0',
    isSecret: true,
    requirements: 'Read the ancient book in the flooded chamber'
  },
  {
    id: 'wotw-exp-15',
    name: 'Like Water Dissolving in Water',
    category: 'Wonders of the World',
    description: 'Explore the forbidden laboratory of the Primordial Sea beneath Fontaine.',
    primogems: 5,
    version: '4.1',
    isSecret: true,
    requirements: 'Discover Vacher\'s hidden synthesis room'
  },
  {
    id: 'wotw-exp-16',
    name: 'The Sound of the Cliff',
    category: 'Wonders of the World',
    description: 'Skate along canyon cliffs in the Children of Echoes territory for 15 consecutive seconds.',
    primogems: 5,
    version: '5.0',
    isSecret: true,
    requirements: 'Use a Tepetlisaur or Xilonen to traverse sheer vertical walls'
  },
  {
    id: 'wotw-exp-17',
    name: 'Flight of the Qucusaurs',
    category: 'Wonders of the World',
    description: 'Glide through 10 wind rings over the Flower-Feather Clan mountains without landing.',
    primogems: 5,
    version: '5.2',
    isSecret: true,
    requirements: 'Perform high-altitude gliding challenges in Natlan'
  },

  // ==========================================
  // CHALLENGER SERIES (BOSSES & COMBAT FEATS)
  // ==========================================
  {
    id: 'chal-01',
    name: 'The Prism Program',
    category: 'Challenger: Series II',
    description: 'Break all Electro prisms created by the Electro Hypostasis before it can revive.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Destroy the 3 revival prisms with Pyro or Cryo attacks'
  },
  {
    id: 'chal-02',
    name: 'None Shall Pass',
    category: 'Challenger: Series II',
    description: 'Defeat the Cryo Regisvine without destroying its corolla weak point.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Defeat the boss while attacking only its body and root'
  },
  {
    id: 'chal-03',
    name: 'Geronimo!',
    category: 'Challenger: Series II',
    description: 'Hit an opponent with a Plunging Attack after plunging continuously for more than 5 seconds.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Plunge from a high summit like Qingyun Peak and hit an enemy below'
  },
  {
    id: 'chal-04',
    name: 'Dip, Duck, Dive, Dodge, Defeat',
    category: 'Challenger: Series III',
    description: 'Defeat the Oceanid without being hit by water mimics with water-bomb explosions.',
    primogems: 5,
    version: '1.4',
    isSecret: false,
    requirements: 'Avoid dying frog and sparrow blast waves'
  },
  {
    id: 'chal-05',
    name: 'My Territory, My Rules',
    category: 'Challenger: Series IV',
    description: 'Defeat Azhdaha without having any character suffer damage from the elemental mark.',
    primogems: 10,
    version: '1.5',
    isSecret: false,
    requirements: 'Use strong shields (e.g., Zhongli) to absorb all infused elemental strikes'
  },
  {
    id: 'chal-06',
    name: 'Thunder Fall',
    category: 'Challenger: Series V',
    description: 'Bring down the Thunder Manifestation while it is flying.',
    primogems: 5,
    version: '2.1',
    isSecret: false,
    requirements: 'Break its lock-on phase mid-air'
  },
  {
    id: 'chal-07',
    name: 'Inugami\'s End',
    category: 'Challenger: Series V',
    description: 'Destroy 2 Rifthound Skulls in a short period using Geo attacks during the Golden Wolflord fight.',
    primogems: 5,
    version: '2.3',
    isSecret: false,
    requirements: 'Break shield skulls with Ningguang, Zhongli, or Yun Jin'
  },
  {
    id: 'chal-08',
    name: 'I Can\'t Take It Anymore!',
    category: 'Challenger: Series VI',
    description: 'Defeat the Jadeplume Terrorshroom after it finishes its rampaging activation phase.',
    primogems: 5,
    version: '3.0',
    isSecret: false,
    requirements: 'Infuse Terrorshroom with Electro until it rampages, then defeat it when stunned'
  },
  {
    id: 'chal-09',
    name: 'He Who Controls the Spice...',
    category: 'Challenger: Series VII',
    description: 'Use Windbite Bullets to trigger Swirl reactions twice and bring down the Setekh Wenut.',
    primogems: 5,
    version: '3.4',
    isSecret: false,
    requirements: 'Shoot Wenut floating anemo spheres with matching element bow'
  },
  {
    id: 'chal-10',
    name: 'The Distance of the Moon',
    category: 'Challenger: Series VIII',
    description: 'Perform 11 Plunging Attacks in a single Gravity Reduction Field against the Experimental Field Generator.',
    primogems: 5,
    version: '4.1',
    isSecret: false,
    requirements: 'Leap and plunge continuously during the Fontaine boss low-gravity field'
  },
  {
    id: 'chal-11',
    name: 'A Long Day\'s Journey Into Night',
    category: 'Challenger: Series IX',
    description: 'Break the shield of the All-Devouring Narwhal and interrupt its abyssal strike.',
    primogems: 5,
    version: '4.2',
    isSecret: false,
    requirements: 'Use Ousia/Pneuma or rapid attacks inside the cosmic stomach realm'
  },
  {
    id: 'chal-12',
    name: 'Flame of the Gold-Flame Qucusaur',
    category: 'Challenger: Series X',
    description: 'Extinguish the fiery crown of the Gold-Flame Qucusaur Tyrant before it can launch its meteor shower.',
    primogems: 5,
    version: '5.0',
    isSecret: false,
    requirements: 'Use Hydro or Cryo aerial attacks in Natlan'
  },

  // ==========================================
  // DUELIST SERIES (LOCAL LEGENDS)
  // ==========================================
  {
    id: 'duel-01',
    name: 'Vivianne of the Lake',
    category: 'Duelist: Series I',
    description: 'Defeat the local legend Vivianne of the Lake in Fontaine without letting any character faint.',
    primogems: 5,
    version: '4.0',
    isSecret: true,
    requirements: 'Defeat the super-charged Tainted Hydro Phantasm with 3M+ HP'
  },
  {
    id: 'duel-02',
    name: 'Ninianne of the Lake',
    category: 'Duelist: Series I',
    description: 'Defeat the local legend Ninianne of the Lake in Beryl Region.',
    primogems: 5,
    version: '4.0',
    isSecret: true,
    requirements: 'Overcome Ninianne\'s endless water vaporizing strikes'
  },
  {
    id: 'duel-03',
    name: 'The Iron Viscount',
    category: 'Duelist: Series I',
    description: 'Defeat the colossal Armored Crab local legend in the boiling lake cave of Fontaine.',
    primogems: 5,
    version: '4.0',
    isSecret: true,
    requirements: 'Parry spinning boulder attacks using the Xenochromatic Crab ability'
  },
  {
    id: 'duel-04',
    name: 'He Never Dies',
    category: 'Duelist: Series I',
    description: 'Defeat the massive Capybara local legend "He Never Dies" in the Ancestral Basin of Natlan.',
    primogems: 5,
    version: '5.0',
    isSecret: true,
    requirements: 'Dodge its lethal charge attack and stagger it during its feeding state'
  },
  {
    id: 'duel-05',
    name: 'Polychrome Tri-Stars',
    category: 'Duelist: Series I',
    description: 'Defeat all three Fatui local legends of the Polychrome Tri-Stars within 10 seconds of each other.',
    primogems: 10,
    version: '5.0',
    isSecret: true,
    requirements: 'Equalize HP between the Cryo Gunner, Electro Skirmisher, and Pyro Agent'
  },
  {
    id: 'duel-06',
    name: 'Cautious Balachko',
    category: 'Duelist: Series I',
    description: 'Defeat the phantom blade assassin Balachko without being deceived by his shadows.',
    primogems: 5,
    version: '5.0',
    isSecret: true,
    requirements: 'Detect the real assassin through water footprints and flame shadows'
  },

  // ==========================================
  // MORTAL TRAVAILS (LORE & BOOK COLLECTIONS)
  // ==========================================
  {
    id: 'mort-01',
    name: 'The Voice of Flowing Water',
    category: 'Mortal Travails: Series I',
    description: 'Collect the entire "Heart of Clear Springs" book collection in Mondstadt.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Find all 4 volumes in Springvale and Mondstadt city'
  },
  {
    id: 'mort-02',
    name: 'The Drunkard and the Wolf',
    category: 'Mortal Travails: Series I',
    description: 'Collect the entire "A Drunkard\'s Tale" collection.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Gather 4 volumes in Dawn Winery and the Favonius Library'
  },
  {
    id: 'mort-03',
    name: 'Spring, White Horse and Moonlight',
    category: 'Mortal Travails: Series I',
    description: 'Collect the entire "Moonlit Bamboo Forest" collection.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Collect 4 volumes in Qingce Village and Wanwen Bookhouse'
  },
  {
    id: 'mort-04',
    name: 'The Transcendent Chew',
    category: 'Mortal Travails: Series II',
    description: 'Collect the entire "Legend of the Shattered Halberd" collection in Liyue.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Find all 6 volumes across Liyue Harbor'
  },
  {
    id: 'mort-05',
    name: 'Reminiscence of Seirai',
    category: 'Mortal Travails: Series III',
    description: 'Collect all ancient photo records of Seirai Island.',
    primogems: 5,
    version: '2.1',
    isSecret: false,
    requirements: 'Photograph 4 historical vantage points around the crater'
  },
  {
    id: 'mort-06',
    name: 'Fontaine Folklore: Volume Complete',
    category: 'Mortal Travails: Series IV',
    description: 'Collect the complete volumes of "The History of the Decline and Fall of Remuria".',
    primogems: 5,
    version: '4.0',
    isSecret: false,
    requirements: 'Acquire 3 volumes in Court of Fontaine bookshops'
  },

  // ==========================================
  // REGIONAL EXPLORATION SERIES
  // ==========================================
  {
    id: 'reg-mon-01',
    name: 'Continental Explorer: Mondstadt',
    category: 'Mondstadt: The City of Wind and Song',
    description: 'Light up all Statues of The Seven in Mondstadt.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Unlock all 5 Statues in Starfell, Galesong, and Brightcrown'
  },
  {
    id: 'reg-mon-02',
    name: 'Wind-Chasing Treasure Hunter',
    category: 'Mondstadt: The City of Wind and Song',
    description: 'Open 400 chests in Mondstadt.',
    primogems: 20,
    version: '1.0',
    isSecret: false,
    requirements: 'Find and open 400 treasure chests across the region'
  },
  {
    id: 'reg-liy-01',
    name: 'Continental Explorer: Liyue',
    category: 'Liyue: The Harbor of Stone and Contracts',
    description: 'Light up all Statues of The Seven in Liyue.',
    primogems: 5,
    version: '1.0',
    isSecret: false,
    requirements: 'Unlock all 6 Statues across Bishui, Minlin, and Sea of Clouds'
  },
  {
    id: 'reg-liy-02',
    name: 'Rock-Steady Treasure Hunter',
    category: 'Liyue: The Harbor of Stone and Contracts',
    description: 'Open 800 chests in Liyue.',
    primogems: 20,
    version: '1.0',
    isSecret: false,
    requirements: 'Find and open 800 treasure chests in Liyue'
  },
  {
    id: 'reg-ina-01',
    name: 'Continental Explorer: Inazuma',
    category: 'Inazuma: The Islands of Thunder and Eternity',
    description: 'Light up all Statues of The Seven across Narukami, Kannazuka, Yashiori, Watatsumi, Seirai, and Tsurumi.',
    primogems: 5,
    version: '2.0',
    isSecret: false,
    requirements: 'Unlock all 6 island Statues'
  },
  {
    id: 'reg-ina-02',
    name: 'Sacred Sakura\'s Favor',
    category: 'Inazuma: The Islands of Thunder and Eternity',
    description: 'Reach Level 50 at the Sacred Sakura in Grand Narukami Shrine.',
    primogems: 20,
    version: '2.4',
    isSecret: false,
    requirements: 'Offer 1,250 Electro Sigils to the Sacred Sakura'
  },
  {
    id: 'reg-sum-01',
    name: 'Continental Explorer: Sumeru',
    category: 'Sumeru: The Rainforest of Lore',
    description: 'Light up all Statues of The Seven across Sumeru\'s rainforest and the Gilded Desert.',
    primogems: 5,
    version: '3.0',
    isSecret: false,
    requirements: 'Unlock all regional Statues'
  },
  {
    id: 'reg-sum-02',
    name: 'The Tree of Dreams',
    category: 'Sumeru: The Rainforest of Lore',
    description: 'Upgrade the Tree of Dreams in Vanarana to Level 50.',
    primogems: 20,
    version: '3.6',
    isSecret: false,
    requirements: 'Offer 1,750 Dendro Sigils to the onion tree in dream Vanarana'
  },
  {
    id: 'reg-fon-01',
    name: 'Continental Explorer: Fontaine',
    category: 'Fontaine: Dance of the Dew-White Springs',
    description: 'Light up all Statues of The Seven across Belleau, Beryl, Court of Fontaine, and the Sea of Bygone Eras.',
    primogems: 5,
    version: '4.0',
    isSecret: false,
    requirements: 'Unlock all Fontaine Statues'
  },
  {
    id: 'reg-fon-02',
    name: 'Fountain of Lucine\'s Harmony',
    category: 'Fontaine: Dance of the Dew-White Springs',
    description: 'Raise the Fountain of Lucine to its maximum level of 50.',
    primogems: 20,
    version: '4.6',
    isSecret: false,
    requirements: 'Offer 1,500 Hydro Sigils outside the Opera Epiclese'
  },
  {
    id: 'reg-nat-01',
    name: 'Continental Explorer: Natlan',
    category: 'Natlan: Land of Fire and Competition',
    description: 'Light up all Statues of The Seven across the Six Tribes of Natlan.',
    primogems: 5,
    version: '5.0',
    isSecret: false,
    requirements: 'Unlock all 6 tribal Statues of The Seven'
  },
  {
    id: 'reg-nat-02',
    name: 'Tablet of Tona\'s Flame',
    category: 'Natlan: Land of Fire and Competition',
    description: 'Offer Pyro Sigils to the Tablet of Tona and reach Level 50.',
    primogems: 20,
    version: '5.2',
    isSecret: false,
    requirements: 'Max out the sacred flame offering tablet at the Stadium'
  },

  // ==========================================
  // SERENITEA POT & A REALM BEYOND
  // ==========================================
  {
    id: 'tea-01',
    name: 'A Realm Beyond: Trust Rank 10',
    category: 'A Realm Beyond: Series I',
    description: 'Reach Trust Rank 10 with Tubby in the Serenitea Pot.',
    primogems: 20,
    version: '1.5',
    isSecret: false,
    requirements: 'Craft diverse blueprints and accumulate trust points'
  },
  {
    id: 'tea-02',
    name: 'My... Precious...',
    category: 'A Realm Beyond: Series II',
    description: 'Accumulate 20,000 Realm Currency in the Serenitea Pot.',
    primogems: 10,
    version: '1.5',
    isSecret: false,
    requirements: 'Harvest currency from Tubby over time'
  },
  {
    id: 'tea-03',
    name: 'Green Finger',
    category: 'A Realm Beyond: Series III',
    description: 'Harvest 800 items from the gardening fields in the Serenitea Pot.',
    primogems: 20,
    version: '2.0',
    isSecret: false,
    requirements: 'Plant and harvest seeds in aquatic, meadow, and jade plots'
  },

  // ==========================================
  // MEMORIES OF THE HEART (HANGOUTS)
  // ==========================================
  {
    id: 'han-01',
    name: 'Lines of Destiny',
    category: 'Memories of the Heart',
    description: 'Unlock all 6 endings in Bennett\'s Hangout Event "Fantastic Voyage".',
    primogems: 20,
    version: '1.4',
    isSecret: false,
    requirements: 'Explore all story branches with Bennett'
  },
  {
    id: 'han-02',
    name: 'An Unshakable Duty',
    category: 'Memories of the Heart',
    description: 'Unlock all endings in Noelle\'s Hangout Event Acts I and II.',
    primogems: 20,
    version: '1.4',
    isSecret: false,
    requirements: 'Complete all maid knight training routes'
  },
  {
    id: 'han-03',
    name: 'General of Watatsumi',
    category: 'Memories of the Heart',
    description: 'Unlock all 5 endings in Gorou\'s Hangout Event.',
    primogems: 20,
    version: '2.3',
    isSecret: false,
    requirements: 'Assist Ms. Hina and Gorou in all routes'
  },
  {
    id: 'han-04',
    name: 'Architect of Light',
    category: 'Memories of the Heart',
    description: 'Unlock all endings in Kaveh\'s Hangout Event.',
    primogems: 20,
    version: '3.7',
    isSecret: false,
    requirements: 'Help Kaveh balance his architectural dreams and debts'
  },
  {
    id: 'han-05',
    name: 'The Spark Knight\'s Day Out',
    category: 'Memories of the Heart',
    description: 'Complete all story branches in Faruzan and Lynette\'s hangout chronicles.',
    primogems: 20,
    version: '4.5',
    isSecret: false,
    requirements: 'Solve all puzzles and mechanical riddles'
  },

  // ==========================================
  // MEETINGS IN OUTREALM (CO-OP FEATS)
  // ==========================================
  {
    id: 'coop-01',
    name: 'Meetings in Outrealm: Series I',
    category: 'Meetings in Outrealm: Series I',
    description: 'Defeat an Anemo Hypostasis in Co-Op Mode with at least one other player.',
    primogems: 10,
    version: '1.1',
    isSecret: false,
    requirements: 'Clear boss fight in multiplayer'
  },
  {
    id: 'coop-02',
    name: 'Hydro Vortex Synergy',
    category: 'Meetings in Outrealm: Series II',
    description: 'Defeat Rhodeia of Loch in Co-Op Mode with another player.',
    primogems: 10,
    version: '1.6',
    isSecret: false,
    requirements: 'Co-op victory against the Oceanid'
  },
  {
    id: 'coop-03',
    name: 'Tears of the Shogun',
    category: 'Meetings in Outrealm: Series III',
    description: 'Defeat the Magatsu Mitake Narukami no Mikoto (Raiden Weekly Boss) in Co-Op Mode.',
    primogems: 10,
    version: '2.5',
    isSecret: false,
    requirements: 'Defeat weekly boss alongside friends'
  },
  {
    id: 'coop-04',
    name: 'Echoes of the Gilded King',
    category: 'Meetings in Outrealm: Series IV',
    description: 'Defeat Shouki no Kami, the Prodigal in Co-Op Mode with another player.',
    primogems: 10,
    version: '3.6',
    isSecret: false,
    requirements: 'Defeat Scaramouche weekly boss in multiplayer'
  },
  {
    id: 'coop-05',
    name: 'Shadows of the Deep Sea',
    category: 'Meetings in Outrealm: Series V',
    description: 'Defeat the All-Devouring Narwhal in Co-Op Mode with another player.',
    primogems: 10,
    version: '4.4',
    isSecret: false,
    requirements: 'Clear Fontaine whale weekly boss in multiplayer'
  }
];
export const ACHIEVEMENTS_DATA: Achievement[] = sortByReleaseDesc(RAW_ACHIEVEMENTS);
