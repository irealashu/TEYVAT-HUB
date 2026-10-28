export interface FactionMember {
  name: string;
  role: string;
  element?: string;
  status: 'Active' | 'Deceased' | 'Defected' | 'Unknown' | 'Ascended' | 'Dormant';
  note?: string;
}

export interface Faction {
  id: string;
  name: string;
  title: string;
  region: string;
  badge: string;
  desc: string;
  ideology: string;
  members: FactionMember[];
}

export interface TimelineEpoch {
  era: string;
  period: string;
  title: string;
  summary: string;
  keyEvents: string[];
  impact: string;
}

export interface LoreBook {
  title: string;
  origin: string;
  classification: 'Celestia' | 'Khaenri\'ah' | 'Abyss' | 'Sovereign Dragons' | 'Forbidden Knowledge';
  summary: string;
  significance: string;
  excerpt: string;
}

export const FACTIONS_DATA: Faction[] = [
  {
    id: 'seven-archons',
    name: 'The Seven Archons',
    title: 'Divine Rulers of Teyvat',
    region: 'Teyvat',
    badge: 'Seven Thrones',
    desc: 'The seven divine beings crowned after the devastating Archon War (~2,000 years ago). Bestowed with divine Gnoses by the Heavenly Principles, each presides over an element, a mortal nation, and an overarching divine ideal.',
    ideology: 'Preserve their mortal realms while balancing or resisting the scrutiny of the Heavenly Principles.',
    members: [
      { name: 'Barbatos (Venti)', role: 'God of Freedom', element: 'Anemo', status: 'Active', note: 'Wanders as a free bard; Gnosis taken by Signora in Mondstadt.' },
      { name: 'Morax / Rex Lapis (Zhongli)', role: 'God of Contracts', element: 'Geo', status: 'Active', note: 'Retired to human life; traded Geo Gnosis to the Tsaritsa via the "Contract to End All Contracts".' },
      { name: 'Raiden Ei / Beelzebul', role: 'God of Eternity', element: 'Electro', status: 'Active', note: 'Rules Inazuma directly alongside the Shogun puppet; gave Gnosis to Yae Miko, later traded to Scaramouche.' },
      { name: 'Lesser Lord Kusanali (Nahida)', role: 'God of Wisdom', element: 'Dendro', status: 'Active', note: 'Reborn from Irminsul; traded Dendro and Electro Gnoses to Il Dottore for secret truths of the false sky.' },
      { name: 'Focalors (Furina / Neuvillette)', role: 'God of Justice', element: 'Hydro', status: 'Ascended', note: 'Focalors executed her divine throne to restore Dragon Sovereign authority to Neuvillette. Furina lives as a human.' },
      { name: 'Mavuika', role: 'God of War', element: 'Pyro', status: 'Active', note: 'Mortal-born Archon who forged the Pilgrimage and ancient names to wage a 500-year defense against the Abyss.' },
      { name: 'The Tsaritsa', role: 'God of Love / Cryo', element: 'Cryo', status: 'Active', note: 'Ruler of Snezhnaya; commands the Fatui Harbingers to seize all seven Gnoses to challenge Celestia.' }
    ]
  },
  {
    id: 'fatui-harbingers',
    name: 'The Eleven Fatui Harbingers',
    title: 'Executive Officers of Snezhnaya',
    region: 'Snezhnaya',
    badge: 'Zapolyarny Palace',
    desc: 'The supreme executive commanders of the Fatui, handpicked by the Tsaritsa and Director Pierro. Granted Delusions and superhuman authority, the top three possess combat strength equal to or exceeding gods.',
    ideology: 'Collect all seven Gnoses, burn away the old world order, and overturn the Heavenly Principles.',
    members: [
      { name: 'No. 1: Pierro "The Jester"', role: 'Director of the Fatui', element: 'Cryo / Abyssal', status: 'Active', note: 'Former Royal Mage of Khaenri\'ah; first Harbinger who swore vengeance against the heavens.' },
      { name: 'No. 2: Il Dottore "The Doctor"', role: 'Supreme Researcher', element: 'Cryo / Technology', status: 'Active', note: 'Expelled Sumeru scholar who created clones of himself at different ages; outsmarted the Akademiya.' },
      { name: 'No. 3: Columbina "Damselette"', role: 'Seraphic Executor', element: 'Unknown', status: 'Active', note: 'Eerily serene angelic figure; possesses ancient supernatural power ranking above mortal comprehension.' },
      { name: 'No. 4: Arlecchino "The Knave"', role: 'Head of House of the Hearth', element: 'Pyro', status: 'Active', note: 'Descendant of the Crimson Moon Dynasty of Khaenri\'ah; wields Balemoon bloodline flame.' },
      { name: 'No. 5: Pulcinella "The Rooster"', role: 'Mayor of Snezhnaya', element: 'Unknown', status: 'Active', note: 'Shrewd political strategist who brought Tartaglia into the Fatui ranks.' },
      { name: 'No. 6: Scaramouche "The Balladeer"', role: 'Prototype Puppet', element: 'Electro', status: 'Defected', note: 'Raiden Ei\'s original puppet; attained godhood as Shouki no Kami, later erased his past to become the Wanderer.' },
      { name: 'No. 7: Sandrone "Marionette"', role: 'Automaton Engineer', element: 'Unknown', status: 'Active', note: 'Accompanied by a colossal modified Ruin machine; obsessively researches Khaenri\'ahn robotics.' },
      { name: 'No. 8: La Signora (Rosalyne-Kruzchka)', role: 'Crimson Witch of Flames', element: 'Cryo / Pyro', status: 'Deceased', note: 'Mondstadt maiden consumed by rage during the Cataclysm; slain by Raiden Shogun at Tenshukaku.' },
      { name: 'No. 9: Pantalone "Regrator"', role: 'Chief Financial Officer', element: 'Unknown', status: 'Active', note: 'Wealthiest individual in Teyvat; controls the Northland Bank and global commerce.' },
      { name: 'No. 10: Il Capitano "The Captain"', role: 'Supreme Commander', element: 'Cryo', status: 'Active', note: 'Renowned for peerless honor and sheer physical martial might; duels Mavuika in Natlan.' },
      { name: 'No. 11: Tartaglia "Childe"', role: 'Vanguard Warrior', element: 'Hydro', status: 'Active', note: 'Youngest Harbinger; plunged into the Abyss at age 14 and learned the Foul Legacy from Skirk.' }
    ]
  },
  {
    id: 'hexenzirkel',
    name: 'Hexenzirkel (Witches\' Coven)',
    title: 'Mage Coven of Teyvat',
    region: 'Teyvat',
    badge: 'Tea Party Table',
    desc: 'An ancient sorcerous assembly composed of extraordinary human mages, scholars, and seers. Rather than warring with Barbatos, they settled disputes over tea party gatherings and monitor the fundamental laws of Irminsul and outer cosmos.',
    ideology: 'Unravel cosmic truths, safeguard fairytales, and pass sacred wisdom across generations.',
    members: [
      { name: 'Alice (Codename "A")', role: 'Elder of the Hexenzirkel', element: 'Pyro', status: 'Active', note: 'Mother of Klee, author of Teyvat Travel Guide; omnipotent world-traveler who repairs planetary boundary tears.' },
      { name: 'Barbeloth (Codename "B")', role: 'Astrological Diviner', element: 'Hydro', status: 'Active', note: 'Master of Mona Megistus; peerless practitioner of Hydromancy and cosmic scrying.' },
      { name: 'Rhinedottir (Codename "R" / Gold)', role: 'Great Alchemist of Khemia', element: 'Geo', status: 'Active', note: 'One of the Five Sinners of Khaenri\'ah; creator of Albedo, Durin, and the Rifthound swarms.' },
      { name: 'Nicole Reihn (Codename "N")', role: 'Voice of the World', element: 'Unknown', status: 'Active', note: 'A prophetess whose voice echoes in the minds of travelers when world history is rewritten.' },
      { name: 'Andersdotter (Codename "M")', role: 'Author of Fairytales', element: 'Unknown', status: 'Deceased', note: 'Mortal author of The Boar Princess; recorded true world histories encoded within children\'s legends.' },
      { name: 'I. Ivanovna N. (Codename "J")', role: 'Snezhnayan Witch', element: 'Unknown', status: 'Deceased', note: 'Left the coven to marry her mortal lover; succeeded by her adopted successor Scarlett.' }
    ]
  },
  {
    id: 'abyss-order',
    name: 'The Abyss Order & Sinners of Khaenri\'ah',
    title: 'Shadow of the Eclipse',
    region: 'Khaenri\'ah / The Abyss',
    badge: 'Inverted Spire',
    desc: 'Born from the catastrophic destruction of Khaenri\'ah 500 years ago. Its citizens were transformed into Hilichurls and Abyss monsters under Celestia\'s curse, while their leaders pursue "The Loom of Fate" to reweave planetary destiny.',
    ideology: 'Overthrow the celestial order, destroy the Seven Nations, and restore Khaenri\'ah\'s glory.',
    members: [
      { name: 'The Prince / Princess (The Twin)', role: 'Leader of the Abyss Order', element: 'Primordial', status: 'Active', note: 'Woke 500 years prior; allied with Khaenri\'ah and commands the heralds and abyss mages.' },
      { name: 'Dainsleif "The Twilight Sword"', role: 'Bough Keeper & Former Royal Guard', element: 'Unknown', status: 'Active', note: 'Refuses to let Khaenri\'ah be forgotten while opposing the Abyss Order\'s reckless madness.' },
      { name: 'Chlothar Alberich', role: 'Founder of the Abyss Order', element: 'Khaenri\'ahn', status: 'Deceased', note: 'Noble of Khaenri\'ah who founded the order after witnessing his mutated son Caribert.' },
      { name: 'Caribert Alberich', role: 'Weaver of the Loom of Fate', element: 'Abyssal', status: 'Ascended', note: 'His fractured consciousness served as the core matrix to complete the Loom of Fate.' },
      { name: 'The Five Sinners', role: 'Corrupters of Khaenri\'ah', element: 'Abyssal Void', status: 'Active', note: 'Hroptatyr, Surtalogi, Rhinedottir, Vedrfolnir, and Rerir who seized god-like abyssal power.' }
    ]
  },
  {
    id: 'dragon-sovereigns',
    name: 'The Seven Sovereign Dragons',
    title: 'Ancient Lords of the Elements',
    region: 'Teyvat',
    badge: 'Dragon Heart',
    desc: 'The original supreme rulers of Teyvat before the arrival of the Primordial One (Phanes). Wielding absolute authority over the seven elements, they were defeated during the Great War of Heaven, and their authorities were split to forge the Archon Gnoses.',
    ideology: 'Reclaim their elemental authority and restore the primordial balance of dragons.',
    members: [
      { name: 'Nibelung', role: 'The Dragon King', element: 'All Elements', status: 'Unknown', note: 'Leader of the Seven Sovereigns who acquired Forbidden Knowledge from the Dark Sea to battle Celestia.' },
      { name: 'Neuvillette', role: 'Hydro Sovereign', element: 'Hydro', status: 'Active', note: 'Reborn in human form; reclaimed 100% of Hydro Sovereign Authority following Focalors\' execution.' },
      { name: 'Apep', role: 'Dendro Sovereign', element: 'Dendro', status: 'Active', note: 'Colossal dragon residing beneath Sumeru\'s desert sands; survived the divine nails and cataclysms.' },
      { name: 'Azhdaha', role: 'Lord of Geovishaps', element: 'Geo', status: 'Dormant', note: 'Ancient subterranean Geo sovereign/lord carved by Morax; sealed beneath the Dragon-Queller tree.' },
      { name: 'Dvalin', role: 'Dragon of the East', element: 'Anemo', status: 'Active', note: 'Lesser sovereign / dragon vassal of Mondstadt; cleansed by the Traveler and Venti.' },
      { name: 'Scylla', role: 'Prince of the Vishaps', element: 'Hydro', status: 'Ascended', note: 'Allied with King Remus during Remuria; freed by the Traveler in the Sea of Bygone Eras.' },
      { name: 'Xbalanque Pact Sovereign', role: 'Pyro Sovereign', element: 'Pyro', status: 'Dormant', note: 'Ancient dragon sovereign who forged the eternal flame pact with Xbalanque in prehistoric Natlan.' }
    ]
  },
  {
    id: 'favonius',
    name: 'Knights & Church of Favonius',
    title: 'Defenders of Mondstadt',
    region: 'Mondstadt',
    badge: 'Favonius Crest',
    desc: 'Established by Vennessa following the overthrow of the corrupt Mondstadt Aristocracy 1,000 years ago. Dedicated to preserving freedom and order without encroaching on individual liberties.',
    ideology: 'For Mondstadt, as always! Protect the freedom and smiles of the city of wind.',
    members: [
      { name: 'Varka', role: 'Grand Master & Knight of Boreas', element: 'Anemo / Physical', status: 'Active', note: 'Leading an elite expedition into the northern frontier beyond Mondstadt.' },
      { name: 'Jean Gunnhildr', role: 'Acting Grand Master', element: 'Anemo', status: 'Active', note: 'The tireless heart of Mondstadt, working day and night to maintain peace and civil security.' },
      { name: 'Kaeya Alberich', role: 'Cavalry Captain', element: 'Cryo', status: 'Active', note: 'Adopted son of the Ragnvindr family; secret royal bloodline descendant of Khaenri\'ah.' },
      { name: 'Albedo', role: 'Chief Alchemist & Captain', element: 'Geo', status: 'Active', note: 'Synthetic human created via Khemia by Rhinedottir; researches the secrets of life and chalk.' },
      { name: 'Lisa Minci', role: 'Librarian & Witch of Purple Rose', element: 'Electro', status: 'Active', note: 'Top genius graduate of the Sumeru Akademiya in 200 years who chose a tranquil life in Mondstadt.' },
      { name: 'Eula Lawrence', role: 'Reconnaissance Captain', element: 'Cryo', status: 'Active', note: 'Scion of the reviled Lawrence Clan who carves her own path of chivalric virtue.' }
    ]
  },
  {
    id: 'liyue-qixing',
    name: 'Liyue Qixing & The Illuminated Adepti',
    title: 'Guardians of the Harbor of Stone',
    region: 'Liyue',
    badge: 'Glaze Lily & Stone Halberd',
    desc: 'A joint council governing Liyue: the Qixing, seven mortal merchant-rulers managing commerce and law, and the Illuminated Adepti, ancient enlightened beasts who swore contracts to protect Liyue with Rex Lapis.',
    ideology: 'Contracts stand unyielding; transition the prosperity of Liyue from gods to mortal hands.',
    members: [
      { name: 'Ningguang', role: 'Tianquan of the Qixing', element: 'Geo', status: 'Active', note: 'Architect of the floating Jade Chamber; master of economics and law in Teyvat.' },
      { name: 'Keqing', role: 'Yuheng of the Qixing', element: 'Electro', status: 'Active', note: 'Visionary who pioneered humanity\'s independence from divine oversight.' },
      { name: 'Ganyu', role: 'General Secretary', element: 'Cryo', status: 'Active', note: 'Half-human, half-Qilin who has served the Qixing for thousands of years since the Archon War.' },
      { name: 'Xiao (Alatus)', role: 'The Conqueror of Demons', element: 'Anemo', status: 'Active', note: 'The sole remaining active member of the Five Foremost Yakshas who cleanses karmic filth.' },
      { name: 'Xianyun (Cloud Retainer)', role: 'Illuminated Adeptus & Inventor', element: 'Anemo', status: 'Active', note: 'Master mechanic and foster mother to Ganyu and Shenhe; resides in Mt. Aocang and Liyue Harbor.' }
    ]
  },
  {
    id: 'tri-commission',
    name: 'Inazuma Tri-Commission & Watatsumi',
    title: 'Administrative Pillars of the Shogunate',
    region: 'Inazuma',
    badge: 'Mitsudomoe Crest',
    desc: 'The administrative structure managing Inazuma under the Raiden Shogun: the Yashiro (cultural & festival affairs), Tenryou (military & police), and K勘定 (finance & foreign customs), alongside the autonomous Watatsumi Island.',
    ideology: 'Uphold the eternal governance of Her Excellency and safeguard the traditions of the archipelago.',
    members: [
      { name: 'Kamisato Ayato & Ayaka', role: 'Yashiro Commission Leaders', element: 'Hydro / Cryo', status: 'Active', note: 'Shrewd political heads of the Kamisato Clan who protected citizens during the Vision Hunt.' },
      { name: 'Kujou Sara', role: 'Tenryou Commission General', element: 'Electro', status: 'Active', note: 'Loyal Tengu general who commands the Shogunate Army with unwavering integrity.' },
      { name: 'Yae Miko', role: 'Guuji of Grand Narukami Shrine', element: 'Electro', status: 'Active', note: 'Chief Kitsune shrine maiden, editor of Yae Publishing House, and lifelong confidante of Raiden Ei.' },
      { name: 'Sangonomiya Kokomi', role: 'Divine Priestess of Watatsumi', element: 'Hydro', status: 'Active', note: 'Brilliant military strategist and descendant of Orobashi\'s worshipers.' }
    ]
  },
  {
    id: 'six-darshans',
    name: 'Sumeru Akademiya: The Six Darshans',
    title: 'Sanctuary of Universal Knowledge',
    region: 'Sumeru',
    badge: 'Lotus of Wisdom',
    desc: 'The greatest academic institution in Teyvat, comprising six major faculties (Darshans) dedicated to mastering the arts, sciences, languages, biology, elements, and cosmos.',
    ideology: 'Pursue boundless knowledge, eradicate ignorance, and protect the world tree Irminsul.',
    members: [
      { name: 'Amurta (Biology & Ecology)', role: 'Represented by Tighnari', element: 'Dendro', status: 'Active', note: 'Studies flora, fauna, botany, and the ecology of rainforest and desert.' },
      { name: 'Rtawahist (Astronomy & Astrology)', role: 'Represented by Layla', element: 'Cryo', status: 'Active', note: 'Studies starry skies, constellations, and celestial navigation.' },
      { name: 'Spantamad (Elementalism & Leylines)', role: 'Represented by Cyno', element: 'Electro', status: 'Active', note: 'Studies ley lines, elements, and alchemy; produces General Mahamatras.' },
      { name: 'Haravatat (Semiotics & Linguistics)', role: 'Represented by Alhaitham', element: 'Dendro', status: 'Active', note: 'Studies ancient languages, runes, grammar, and historical inscriptions.' },
      { name: 'Vahumana (Aetiology & History)', role: 'Represented by Wanderer', element: 'Anemo', status: 'Active', note: 'Investigates the genesis of civilizations and historical causality.' },
      { name: 'Kshahrewar (Architecture & Mechanics)', role: 'Represented by Kaveh', element: 'Dendro', status: 'Active', note: 'Studies structural engineering, mechanical robotics, and aesthetic architecture.' }
    ]
  },
  {
    id: 'natlan-tribes',
    name: 'The Six Tribes of Natlan',
    title: 'Keepers of the Saurian Pacts',
    region: 'Natlan',
    badge: 'Sacred Flame & Dragon Claws',
    desc: 'The six ancestral human communities of Natlan, each coexisting harmoniously with a distinct species of Saurian. For centuries, their greatest warriors have united under the Pyro Archon to fend off the Night Kingdom Abyss.',
    ideology: 'Ignite the Ancient Names, defend the Sacred Flame, and ensure resurrection for the fallen.',
    members: [
      { name: 'Children of Echoes', role: 'Tepetlisaur Companions', element: 'Geo', status: 'Active', note: 'Master miners and canyon excavators; includes Kachina and artisan Xilonen.' },
      { name: 'Scions of the Canopy', role: 'Yumkasaur Companions', element: 'Dendro', status: 'Active', note: 'Agile cliff-jumpers and grapple-masters of the high trees; includes Kinich & Ajaw.' },
      { name: 'People of the Springs', role: 'Koholasaur Companions', element: 'Hydro', status: 'Active', note: 'Lover of hot springs, surfboards, and volcanic pools; includes guide Mualani.' },
      { name: 'Masters of the Night-Wind', role: 'Iktomisaur Companions', element: 'Cryo / Electro', status: 'Active', note: 'Shamans and spirit seers connected to the Night Kingdom; includes Citlali & Ororon.' },
      { name: 'Flower-Feather Clan', role: 'Qucusaurs Companions', element: 'Anemo', status: 'Active', note: 'Aerial gunners and sky-patrollers; includes peacekeeper Chasca.' },
      { name: 'Collective of Plenty', role: 'Tatankasaur Companions', element: 'Pyro / Physical', status: 'Active', note: 'Sturdy volcanic herdsmen who maintain immense agriculture and strength.' }
    ]
  }
];

export const TIMELINE_DATA: TimelineEpoch[] = [
  {
    era: 'Primordial Era',
    period: 'Before Sun and Moon (~Unknown Era)',
    title: 'The Great War of Heaven & The Unified Civilization',
    summary: 'The Seven Sovereign Dragons ruled the primordial world until the arrival of the Primordial One (Phanes) and four shining shades. Following a forty-year cosmic war, the dragons were vanquished, the skies were raised, and humanity flourished under a unified worldwide civilization.',
    keyEvents: [
      'The Primordial One and Four Shades conquer the Seven Dragon Sovereigns',
      'Terraforming of Teyvat: skies, soil, oceans, and living creatures created',
      'The unified human civilization communicates directly with emissaries of Heaven',
      'Humanity enjoys endless bounty with no sorrow or separation from the divine'
    ],
    impact: 'Established the foundation of Teyvat\'s mortal realm and planetary boundary.'
  },
  {
    era: 'The Second Coming & The Fall',
    period: '~Several Thousand Years Ago',
    title: 'The Arrival of the Second Throne & The Seelie Curse',
    summary: 'The Second Who Came arrived from the dark cosmos, sparking a war that broke heaven and earth. During the catastrophe, Byakuyakoku (Enkanomiya) plunged into the depths of the ocean, celestial nails plummeted into leylines, and the ancient Seelie race withered into mindless spirits.',
    keyEvents: [
      'Celestial clash between the Primordial One and the Second Who Came',
      'Byakuyakoku sinks into the abyssal oceanic trench, cutting off contact with heaven',
      'Divine Celestial Nails dropped onto Dragonspine, The Chasm, and Sumeru Desert to suppress Abyssal ruptures',
      'Seelie race cursed for falling in love with a mortal outlander, degenerating into wisps'
    ],
    impact: 'Severed humanity from direct divine communion; introduced celestial nail suppression.'
  },
  {
    era: 'The Age of Gods & The Archon War',
    period: '~3,700 to 2,000 Years Ago',
    title: 'The Seven Divine Thrones Declared',
    summary: 'Celestia opened seven divine seats, inciting an era of brutal warfare among gods across all seven lands. In Mondstadt, tyrant Decarabian fell to a rebellion led by Venti and the Nameless Bard. In Liyue, Morax and Guizhong defended mortals before Guizhong perished in the Guili Plains. In Inazuma, Ei cleaved Orobashi with the Musou no Hitotachi.',
    keyEvents: [
      'Battle of Guili Plains: Goddess of Dust Guizhong falls defending her people',
      'Morax slays ancient gods with stone spears, subduing Osial and Chi',
      'Mondstadt rebellion: The Nameless Bard, Amos, and Venti topple Decarabian at Old Mondstadt',
      'King Deshret sacrifices his kingdom to purge forbidden knowledge; Rukkhadevata shields the rainforest',
      'The Seven Archons are crowned and bestowed Gnoses by the Heavenly Principles'
    ],
    impact: 'Formed the Seven Nations of Teyvat, ending the chaotic rule of roving warlord gods.'
  },
  {
    era: 'The Era of Mortal Governance',
    period: '~2,000 to 500 Years Ago',
    title: 'Rise of Cities, Contracts, and Chivalric Orders',
    summary: 'With divine thrones established, the Seven Nations flourished. In Mondstadt, the hero Vennessa led the rebellion against the decadent Lawrence aristocracy, founding the Knights of Favonius. In Fontaine, Remuria fell and Egeria nurtured the Oceanid people. In Liyue, the Qixing established world-spanning commerce.',
    keyEvents: [
      'Vennessa ascends to Celestia at the great oak tree of Windrise after overthrowing the Lawrence clan',
      'King Remus\' Remuria empire is swallowed by the waves; Egeria takes the Hydro throne',
      'Liyue Harbor develops into the premier commercial port of Teyvat through contracts',
      'Khaenri\'ah builds an underground godless nation powered by Khemia and automaton engines'
    ],
    impact: 'Defined the modern cultural and legal structures of the mortal nations.'
  },
  {
    era: 'The Cataclysm of Khaenri\'ah',
    period: '500 Years Ago',
    title: 'The Fall of the Eclipse Dynasty & The Black Sun',
    summary: 'King Irmin and the Five Sinners unleashed the Abyss to conquer heaven. The corruption exploded across Teyvat. Gold (Rhinedottir) created legions of Abyssal monsters. Celestia descended in fury, razing Khaenri\'ah and inflicting the Curse of Immortality and the Curse of the Wilderness. Archons were summoned to fight; several sacrificed their lives.',
    keyEvents: [
      'The Five Sinners divide abyssal power; Khaenri\'ah\'s Eclipse Dynasty is completely obliterated',
      'Celestia casts the double curse: pure-blooded Khaenri\'ahns cannot die; commoners mutate into Hilichurls',
      'Raiden Makoto falls in Khaenri\'ah; Raiden Ei builds the Shogun automaton and retreats to Euthymia',
      'Greater Lord Rukkhadevata expends her divine power cleansing Irminsul, creating Nahida as a pure sprout',
      'Hydro Archon Egeria dies in Tunigi Hollow; her body transforms into the Harvisptokhm tree of Amrita',
      'The dragon Durin invades Mondstadt; Dvalin and Venti slay it over Dragonspine'
    ],
    impact: 'Fundamentally scarred Teyvat, sparked the Tsaritsa\'s rebellion, and birthed the Abyss Order.'
  },
  {
    era: 'The Contemporary Epoch',
    period: 'Version 1.0 to Present Day (v5.x - v7.1)',
    title: 'The Awakening of the Traveler & The Loom of Fate',
    summary: 'The Outlander twin awakens in Mondstadt, beginning a continent-spanning journey to find the lost sibling and discover the false sky. Over five nations, the Traveler purges Dvalin\'s corruption, defends Liyue Harbor, ends Inazuma\'s isolation, frees Nahida, assists in Focalors\' execution that restores the Hydro Sovereign, and rekindles the Sacred Flame in Natlan.',
    keyEvents: [
      'Traveler cleanses Dvalin; Signora takes Barbatos\' Gnosis in Mondstadt',
      'Overlord Osial defeated at Guyun; Morax signs the contract to surrender his Gnosis',
      'Traveler shatters the Vision Hunt Decree; Raiden Ei opens Inazuma to the world',
      'Akademiya coup foiled; Nahida purges Greater Lord Rukkhadevata\'s memory from Irminsul',
      'Focalors sacrifices her divinity; Neuvillette regains Hydro Sovereign authority and pardons Fontaine',
      'Caribert Alberich weaves the Loom of Fate; Traveler meets their Sibling face-to-face',
      'Mavuika and the Traveler unite the Six Tribes to vanquish the Abyssal Core in the Night Kingdom'
    ],
    impact: 'Paves the final path toward Snezhnaya, Celestia, and the confrontation with the Heavenly Principles.'
  }
];

export const ANCIENT_MYTHOS_DATA: LoreBook[] = [
  {
    title: 'Before Sun and Moon',
    origin: 'Enkanomiya (Byakuyakoku)',
    classification: 'Forbidden Knowledge',
    summary: 'The forbidden historical scripture recorded by the royal scribes of Byakuyakoku. It documents the creation of Teyvat by the Primordial One (Phanes), the four shining shades, and the subjugation of the Seven Sovereigns before the sky cracked open.',
    significance: 'Orobashi was condemned to death by Celestia merely for reading this volume, forced to sacrifice his life to the Raiden Shogun to ensure Watatsumi Island\'s survival.',
    excerpt: '"When the Doves Held Branches: When the eternal throne of the heavens came, the world was made anew. Then the true lord, the Primordial One, did battle with the seven sovereign dragons for forty autumns..."'
  },
  {
    title: 'The Five Sinners of Khaenri\'ah',
    origin: 'Khaenri\'ah Archives & Dainsleif Memoirs',
    classification: 'Khaenri\'ah',
    summary: 'Five legendary savants and warriors of Khaenri\'ah who succumbed to the allure of abyssal power during the eclipse dynasty. Instead of defending their people, they divided the abyssal power among themselves, forsaking their nation to cosmic ruin.',
    significance: 'They include "The Wise" Hroptatyr, "The Foul" Surtalogi (master of Skirk), "Gold" Rhinedottir (Albedo\'s creator), "The Visionary" Vedrfolnir (the voice of the Sinner in Caribert), and "The Hunter" Rerir.',
    excerpt: '"When the black sun set, five who held the strength to save our homeland turned their gaze outward toward the infinite dark. Each claimed a portion of world-destroying authority, and Khaenri\'ah burned."'
  },
  {
    title: 'The Loom of Fate Operation',
    origin: 'Abyss Order Classified Rituals',
    classification: 'Abyss',
    summary: 'A secret project conceived by Chlothar Alberich and finalized through Caribert Alberich. By transplanting the consciousness of a cursed soul into an artificial leyline weave, the Abyss Order constructed a machine capable of weaving new leylines and rewriting memories independent of Irminsul.',
    significance: 'Grants the Abyss Order the power to alter reality without Celestia or Irminsul noticing, laying the groundwork for re-establishing Khaenri\'ah.',
    excerpt: '"Let the threads of sorrow be twisted into new warp and weft. If the heavens will not give us a place to weep, then we shall weave our own heaven."'
  },
  {
    title: 'The Pale Princess and the Six Pygmies',
    origin: 'Forbidden Fairy Tale',
    classification: 'Forbidden Knowledge',
    summary: 'A set of seven volumes containing allegorical records of the true history of Teyvat, disguised as a children\'s bedtime story. It details the Night Mother, the Moonlight Forest, the Pale Princess, and the Light Prince who was poisoned by five jealous pygmies.',
    significance: 'Lisa Minci refused to lend the final volume from the Favonius Library because the Abyss Order and Fatui have actively hunted down every remaining copy.',
    excerpt: '"The Night Mother was the source of all sins. She hated beauty and life. She wrapped the land in eternal shadow and devoured the light with freezing malice."'
  }
];
