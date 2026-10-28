import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  Shield, 
  Sword, 
  Layers, 
  ChevronRight, 
  X, 
  BookOpen
} from 'lucide-react';
import { CHARACTERS_DATA } from '../data/characters';
import { Character, ElementType, Region, WeaponType } from '../types';
import { SafeImage } from '../components/SafeImage';
import { ElementIcon, WeaponTypeIcon } from '../components/GenshinIcons';

interface CharactersViewProps {
  selectedCharacterId?: string;
  onSelectCharacter: (id: string) => void;
}

export const CharactersView: React.FC<CharactersViewProps> = ({ 
  selectedCharacterId, 
  onSelectCharacter 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState<ElementType | 'All'>('All');
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponType | 'All'>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedRarity, setSelectedRarity] = useState<number | 'All'>('All');
  
  // Modal state
  const activeChar = CHARACTERS_DATA.find(c => c.id === selectedCharacterId) || null;
  const [activeTab, setActiveTab] = useState<'profile' | 'talents' | 'constellations' | 'builds' | 'materials'>('profile');
  const [sliderLevel, setSliderLevel] = useState<number>(90);

  // Filters
  const filteredCharacters = CHARACTERS_DATA.filter(char => {
    const matchesSearch = char.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          char.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesElement = selectedElement === 'All' || char.element === selectedElement;
    const matchesWeapon = selectedWeapon === 'All' || char.weaponType === selectedWeapon;
    const matchesRegion = selectedRegion === 'All' || char.region === selectedRegion;
    const matchesRarity = selectedRarity === 'All' || char.rarity === selectedRarity;
    return matchesSearch && matchesElement && matchesWeapon && matchesRegion && matchesRarity;
  });

  const elements: (ElementType | 'All')[] = ['All', 'Pyro', 'Hydro', 'Anemo', 'Electro', 'Dendro', 'Cryo', 'Geo'];
  const weaponTypes: (WeaponType | 'All')[] = ['All', 'Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'];
  const regions: string[] = ['All', 'Natlan', 'Fontaine', 'Sumeru', 'Inazuma', 'Liyue', 'Mondstadt', 'Snezhnaya', 'Nod-Krai'];

  // Level slider interpolated stats
  const getInterpolatedStat = (char: Character, lvl: number) => {
    const ratio = lvl / 90;
    const baseHp = Math.round(char.baseStatsLvl90.hp * (0.2 + 0.8 * ratio));
    const baseAtk = Math.round(char.baseStatsLvl90.atk * (0.2 + 0.8 * ratio));
    const baseDef = Math.round(char.baseStatsLvl90.def * (0.2 + 0.8 * ratio));
    return { hp: baseHp, atk: baseAtk, def: baseDef };
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-slate-800 flex items-center gap-2.5">
            <Sparkles className="w-6 h-6 text-[#ca963a]" />
            Character Encyclopedia
          </h1>
          <p className="text-xs text-slate-600">
            Complete database of verified playable characters through Version 7.1 with base stats, talents, and synergies.
          </p>
        </div>
        <div className="text-xs text-[#7a5719] bg-[#eddcb8]/80 px-3 py-1.5 rounded-xl border border-[#c29f60] flex items-center gap-2 font-semibold shadow-sm">
          <Shield className="w-4 h-4 text-[#a37626]" />
          <span>Showing {filteredCharacters.length} of {CHARACTERS_DATA.length} Characters</span>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="glass-panel rounded-2xl p-5 border border-[#d2c0a8] space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-[#b88e4c] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search characters by name, title, or affiliation..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#faf8f3] rounded-xl border border-[#d2c0a8] text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#b88e4c] transition-colors shadow-inner"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          {/* Element Filter */}
          <div>
            <label className="block text-slate-600 text-[11px] uppercase tracking-wider mb-1.5 font-bold">Element</label>
            <div className="flex flex-wrap gap-1">
              {elements.map(elem => (
                <button
                  key={elem}
                  onClick={() => setSelectedElement(elem)}
                  className={`px-2 py-1 rounded-md transition-all text-[11px] ${
                    selectedElement === elem
                      ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                      : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
                  }`}
                >
                  {elem}
                </button>
              ))}
            </div>
          </div>

          {/* Weapon Type Filter */}
          <div>
            <label className="block text-slate-600 text-[11px] uppercase tracking-wider mb-1.5 font-bold">Weapon</label>
            <div className="flex flex-wrap gap-1">
              {weaponTypes.map(w => (
                <button
                  key={w}
                  onClick={() => setSelectedWeapon(w)}
                  className={`px-2 py-1 rounded-md transition-all text-[11px] ${
                    selectedWeapon === w
                      ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                      : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Region Filter */}
          <div>
            <label className="block text-slate-600 text-[11px] uppercase tracking-wider mb-1.5 font-bold">Region</label>
            <div className="flex flex-wrap gap-1">
              {regions.map(r => (
                <button
                  key={r}
                  onClick={() => setSelectedRegion(r)}
                  className={`px-2 py-1 rounded-md transition-all text-[11px] ${
                    selectedRegion === r
                      ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                      : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Rarity Filter */}
          <div>
            <label className="block text-slate-600 text-[11px] uppercase tracking-wider mb-1.5 font-bold">Rarity</label>
            <div className="flex gap-1.5">
              {(['All', 5, 4] as const).map(rar => (
                <button
                  key={rar}
                  onClick={() => setSelectedRarity(rar)}
                  className={`px-3 py-1 rounded-md transition-all text-[11px] ${
                    selectedRarity === rar
                      ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                      : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
                  }`}
                >
                  {rar === 'All' ? 'All' : `${rar} ★`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Characters Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredCharacters.map((char) => (
          <div
            key={char.id}
            onClick={() => onSelectCharacter(char.id)}
            className="glass-panel glass-panel-hover rounded-2xl p-5 border border-[#d2c0a8] cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-3">
                <SafeImage
                  src={char.avatar}
                  alt={char.name}
                  entityType="character"
                  element={char.element}
                  rarity={char.rarity}
                  className="w-16 h-16 rounded-xl object-cover border-2 border-[#c2a160] group-hover:border-[#8a621c] transition-colors shadow bg-[#f0e8db]"
                />
                <div>
                  <h3 className="font-cinzel font-bold text-slate-800 text-base group-hover:text-[#8a621c] transition-colors">
                    {char.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1">{char.title}</p>
                  <div className="flex items-center gap-1 text-[#ca963a] text-xs mt-1">
                    {'★'.repeat(char.rarity)}
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 pt-3 border-t border-[#e2d5c5]">
                <div className="flex justify-between">
                  <span>Element:</span>
                  <span className="font-semibold text-slate-800">{char.element}</span>
                </div>
                <div className="flex justify-between">
                  <span>Weapon:</span>
                  <span className="font-semibold text-slate-800">{char.weaponType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nation:</span>
                  <span className="font-semibold text-slate-800">{char.region}</span>
                </div>
                <div className="flex justify-between">
                  <span>Base HP (Lv90):</span>
                  <span className="font-bold text-emerald-700">{char.baseStatsLvl90.hp.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 flex items-center justify-between text-xs font-bold text-[#8a621c] group-hover:text-[#694810] border-t border-[#e2d5c5]">
              <span>View Dossier</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <div className="text-center py-16 bg-[#faf8f3] rounded-2xl border border-[#d2c0a8] space-y-3 shadow-sm">
          <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-lg font-cinzel text-slate-700">No Characters Found</h3>
          <p className="text-xs text-slate-500">Try adjusting your element, weapon, or search query filter.</p>
        </div>
      )}

      {/* Detailed Character Modal / Drawer */}
      {activeChar && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-[#faf8f3] border border-[#c2a160] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#faf8f3]/95 backdrop-blur-md border-b border-[#e2d5c5] p-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <SafeImage
                  src={activeChar.avatar}
                  alt={activeChar.name}
                  entityType="character"
                  element={activeChar.element}
                  rarity={activeChar.rarity}
                  className="w-12 h-12 rounded-xl object-cover border border-[#c2a160] bg-[#f0e8db]"
                />
                <div>
                  <h2 className="font-cinzel font-bold text-xl text-gold-gradient">
                    {activeChar.name}
                  </h2>
                  <p className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                    <span>{activeChar.title}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#8a621c] font-bold">
                      <ElementIcon element={activeChar.element} className="w-3.5 h-3.5" />
                      {activeChar.element}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <WeaponTypeIcon type={activeChar.weaponType} className="w-3.5 h-3.5 text-slate-500" />
                      {activeChar.weaponType}
                    </span>
                    <span>•</span>
                    <span>{activeChar.region}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectCharacter('')}
                  className="p-2 rounded-lg bg-[#f0e8db] hover:bg-[#e6dccb] text-slate-600 hover:text-slate-900 border border-[#d5c7b3]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-[#e2d5c5] px-5 pt-3 gap-2 overflow-x-auto text-xs bg-[#f4efe4]">
              {[
                { id: 'profile', label: 'Overview & Stats', icon: BookOpen },
                { id: 'talents', label: 'Talents & Multipliers', icon: Sword },
                { id: 'constellations', label: 'Constellations', icon: Sparkles },
                { id: 'builds', label: 'Best Weapons & Artifacts', icon: Shield },
                { id: 'materials', label: 'Ascension Materials', icon: Layers },
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-1.5 px-3.5 py-2 font-bold border-b-2 transition-all whitespace-nowrap ${
                      isActive 
                        ? 'border-[#8a621c] text-[#7a5719] bg-[#faf8f3]' 
                        : 'border-transparent text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Modal Tab Content */}
            <div className="p-6 space-y-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  {/* Hero Splash Art & Lore Banner */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#d2c0a8] bg-gradient-to-b from-[#f4efe4] via-[#faf8f3] to-[#faf8f3] p-4 sm:p-6 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                    <div className="w-full md:w-1/2 flex justify-center">
                      <SafeImage
                        src={activeChar.splashArt || activeChar.avatar}
                        alt={`${activeChar.name} Splash Art`}
                        fallbackSrc={activeChar.avatar}
                        entityType="character"
                        element={activeChar.element}
                        rarity={activeChar.rarity}
                        className="max-h-64 object-contain drop-shadow-md"
                      />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#eddcb8] border border-[#c29f60] text-[#7a5719] text-xs font-bold shadow-sm">
                        <span>★ {activeChar.rarity}-Star {activeChar.role}</span>
                        <span>•</span>
                        <span>{activeChar.affiliation}</span>
                      </div>
                      <h3 className="font-cinzel text-xl font-bold text-slate-800">
                        {activeChar.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-[#c29f60] pl-3">
                        "{activeChar.description}"
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Level Slider */}
                  <div className="p-5 rounded-2xl bg-[#f4efe4] border border-[#d5c7b3] space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-xs font-bold text-slate-700">
                        Character Level Progression
                      </div>
                      <div className="text-sm font-bold text-[#8a621c] font-cinzel">
                        Level {sliderLevel} / 90
                      </div>
                    </div>

                    <input
                      type="range"
                      min={1}
                      max={90}
                      value={sliderLevel}
                      onChange={(e) => setSliderLevel(Number(e.target.value))}
                      className="w-full accent-[#b88e4c] h-2 bg-[#e2d5c5] rounded-lg cursor-pointer"
                    />

                    {/* Calculated Base Stats at slider level */}
                    {(() => {
                      const stats = getInterpolatedStat(activeChar, sliderLevel);
                      return (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                          <div className="p-3 rounded-xl bg-[#faf8f3] border border-[#d2c0a8] shadow-sm">
                            <div className="text-[10px] text-slate-500 font-bold uppercase">Base HP</div>
                            <div className="text-base font-bold text-emerald-700">{stats.hp.toLocaleString()}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-[#faf8f3] border border-[#d2c0a8] shadow-sm">
                            <div className="text-[10px] text-slate-500 font-bold uppercase">Base ATK</div>
                            <div className="text-base font-bold text-rose-700">{stats.atk}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-[#faf8f3] border border-[#d2c0a8] shadow-sm">
                            <div className="text-[10px] text-slate-500 font-bold uppercase">Base DEF</div>
                            <div className="text-base font-bold text-sky-700">{stats.def}</div>
                          </div>
                          <div className="p-3 rounded-xl bg-[#faf8f3] border border-[#d2c0a8] shadow-sm">
                            <div className="text-[10px] text-slate-500 font-bold uppercase">{activeChar.baseStatsLvl90.ascensionStat}</div>
                            <div className="text-base font-bold text-[#8a621c]">{activeChar.baseStatsLvl90.ascensionValue}</div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Quick Profile Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                      <span className="text-slate-500 font-bold block text-[11px]">Affiliation</span>
                      <span className="font-semibold text-slate-800">{activeChar.affiliation}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                      <span className="text-slate-500 font-bold block text-[11px]">Primary Role</span>
                      <span className="font-bold text-[#8a621c]">{activeChar.role}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                      <span className="text-slate-500 font-bold block text-[11px]">Release Version</span>
                      <span className="font-semibold text-slate-800">v{activeChar.version} ({activeChar.releaseDate})</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'talents' && (
                <div className="space-y-4">
                  {activeChar.talents.map((t, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-800 text-sm text-gold-gradient">{t.name}</h4>
                        <span className="px-2 py-0.5 rounded bg-[#e2d5c5] text-slate-700 text-[10px] uppercase font-bold">
                          {t.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{t.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'constellations' && (
                <div className="space-y-3">
                  {activeChar.constellations.map(c => (
                    <div key={c.level} className="p-4 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#eddcb8] border border-[#c29f60] text-[#7a5719] font-cinzel font-bold text-xs flex items-center justify-center shrink-0">
                        C{c.level}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-800 text-xs text-[#8a621c]">{c.name}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{c.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'builds' && (
                <div className="space-y-5">
                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Sword className="w-4 h-4 text-[#8a621c]" />
                      Recommended Weapons
                    </h4>
                    <div className="space-y-2">
                      {activeChar.recommendedWeapons.map((w, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] flex items-center justify-between text-xs">
                          <div>
                            <span className="font-bold text-slate-800">{w.name} ({w.rarity}★)</span>
                            <p className="text-[11px] text-slate-600">{w.reason}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-sky-700" />
                      Recommended Artifact Sets
                    </h4>
                    <div className="space-y-2">
                      {activeChar.recommendedArtifacts.map((a, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] text-xs space-y-1">
                          <div className="flex justify-between font-bold text-slate-800">
                            <span>{a.name} ({a.pieces}-Piece)</span>
                          </div>
                          <div className="text-[11px] text-slate-600">
                            Sands: <strong className="text-slate-800">{a.mainStats.sands}</strong> • 
                            Goblet: <strong className="text-slate-800"> {a.mainStats.goblet}</strong> • 
                            Circlet: <strong className="text-slate-800"> {a.mainStats.circlet}</strong>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'materials' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                    <span className="text-[11px] text-slate-500 font-bold block uppercase">Ascension Gemstone</span>
                    <strong className="text-slate-800 text-sm">{activeChar.ascensionMaterials.gem}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                    <span className="text-[11px] text-slate-500 font-bold block uppercase">Normal Boss Drop</span>
                    <strong className="text-slate-800 text-sm">{activeChar.ascensionMaterials.bossMat}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                    <span className="text-[11px] text-slate-500 font-bold block uppercase">Local Specialty</span>
                    <strong className="text-slate-800 text-sm">{activeChar.ascensionMaterials.localSpecialty}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                    <span className="text-[11px] text-slate-500 font-bold block uppercase">Talent Books</span>
                    <strong className="text-slate-800 text-sm">{activeChar.ascensionMaterials.talentBook}</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] sm:col-span-2">
                    <span className="text-[11px] text-slate-500 font-bold block uppercase">Weekly Trounce Boss Material</span>
                    <strong className="text-[#8a621c] text-sm">{activeChar.ascensionMaterials.weeklyBossMat}</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
