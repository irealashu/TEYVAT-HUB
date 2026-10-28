import React, { useState } from 'react';
import { Sword, Search, Shield, X, Sparkles, ChevronRight } from 'lucide-react';
import { WEAPONS_DATA } from '../data/weapons';
import { Weapon, WeaponType } from '../types';
import { SafeImage } from '../components/SafeImage';
import { WeaponTypeIcon } from '../components/GenshinIcons';

export const WeaponsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<WeaponType | 'All'>('All');
  const [selectedRarity, setSelectedRarity] = useState<number | 'All'>('All');
  const [activeWeapon, setActiveWeapon] = useState<Weapon | null>(null);
  const [refinementRank, setRefinementRank] = useState<number>(1);

  const filteredWeapons = WEAPONS_DATA.filter(w => {
    const matchesSearch = w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          w.passiveName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All' || w.type === selectedType;
    const matchesRarity = selectedRarity === 'All' || w.rarity === selectedRarity;
    return matchesSearch && matchesType && matchesRarity;
  });

  const weaponTypes: (WeaponType | 'All')[] = ['All', 'Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-slate-800 flex items-center gap-2.5">
            <Sword className="w-6 h-6 text-[#a37626]" />
            Weapon Arsenal
          </h1>
          <p className="text-xs text-slate-600">
            Database of 5★, 4★, and 3★ weaponry with base attack stats, sub-stats, and refinement passives.
          </p>
        </div>
        <div className="text-xs text-[#7a5719] bg-[#eddcb8]/80 px-3 py-1.5 rounded-xl border border-[#c29f60] font-semibold shadow-sm">
          Showing {filteredWeapons.length} Weapons
        </div>
      </div>

      {/* Filters */}
      <div className="glass-panel rounded-2xl p-4 border border-[#d2c0a8] space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#b88e4c] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search weapons by name or passive effect..."
            className="w-full pl-10 pr-4 py-2 bg-[#faf8f3] rounded-xl border border-[#d2c0a8] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#b88e4c]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap gap-1">
            {weaponTypes.map(t => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3 py-1 rounded-md text-[11px] transition-all ${
                  selectedType === t
                    ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                    : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex gap-1.5">
            {(['All', 5, 4, 3] as const).map(r => (
              <button
                key={r}
                onClick={() => setSelectedRarity(r)}
                className={`px-3 py-1 rounded-md text-[11px] transition-all ${
                  selectedRarity === r
                    ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                    : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
                }`}
              >
                {r === 'All' ? 'All' : `${r}★`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Weapons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredWeapons.map((weapon, idx) => (
          <div
            key={`${weapon.id}-${idx}`}
            onClick={() => {
              setActiveWeapon(weapon);
              setRefinementRank(1);
            }}
            className="glass-panel glass-panel-hover rounded-2xl p-5 border border-[#d2c0a8] cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-3">
                <SafeImage
                  src={weapon.icon}
                  alt={weapon.name}
                  entityType="weapon"
                  weaponType={weapon.type}
                  rarity={weapon.rarity}
                  className="w-14 h-14 rounded-xl object-cover border border-[#c2a160] shadow bg-[#f0e8db]"
                />
                <div>
                  <h3 className="font-cinzel font-bold text-slate-800 text-sm group-hover:text-[#8a621c] transition-colors">
                    {weapon.name}
                  </h3>
                  <div className="text-[#ca963a] text-xs mt-0.5">{'★'.repeat(weapon.rarity)}</div>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1 mt-0.5 font-medium">
                    <WeaponTypeIcon type={weapon.type} className="w-3 h-3 text-[#b88e4c]" />
                    {weapon.type}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 pt-3 border-t border-[#e2d5c5]">
                <div className="flex justify-between">
                  <span>Base ATK (Lv90):</span>
                  <strong className="text-rose-700 font-bold">{weapon.baseAtkLvl90}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Substat:</span>
                  <strong className="text-[#8a621c] font-bold">{weapon.subStatType} +{weapon.subStatValueLvl90}</strong>
                </div>
                <div className="pt-1 text-[11px] text-slate-600 line-clamp-2">
                  <strong className="text-slate-800">{weapon.passiveName}: </strong>
                  {weapon.passiveDesc}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 flex items-center justify-between text-xs font-bold text-[#8a621c] group-hover:text-[#694810] border-t border-[#e2d5c5]">
              <span>Inspect Refinements</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Weapon Detail Modal */}
      {activeWeapon && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#faf8f3] border border-[#c2a160] rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between pb-3 border-b border-[#e2d5c5]">
              <div className="flex items-center gap-3">
                <SafeImage
                  src={activeWeapon.icon}
                  alt={activeWeapon.name}
                  entityType="weapon"
                  weaponType={activeWeapon.type}
                  rarity={activeWeapon.rarity}
                  className="w-14 h-14 rounded-xl object-cover border border-[#c2a160] bg-[#f0e8db]"
                />
                <div>
                  <h3 className="font-cinzel font-bold text-lg text-gold-gradient">
                    {activeWeapon.name}
                  </h3>
                  <div className="text-[#ca963a] text-xs">{'★'.repeat(activeWeapon.rarity)}</div>
                  <p className="text-xs text-slate-500 font-medium">{activeWeapon.type} • Introduced v{activeWeapon.introducedVersion}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveWeapon(null)}
                className="p-1 rounded-md text-slate-500 hover:text-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">Base ATK at Lv.90</span>
                <strong className="text-base font-bold text-rose-700 font-cinzel">{activeWeapon.baseAtkLvl90}</strong>
              </div>
              <div className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3]">
                <span className="text-[10px] text-slate-500 font-bold uppercase block">{activeWeapon.subStatType} at Lv.90</span>
                <strong className="text-base font-bold text-[#8a621c] font-cinzel">+{activeWeapon.subStatValueLvl90}</strong>
              </div>
            </div>

            {/* Refinement Rank Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-slate-700 uppercase tracking-wider text-[11px]">
                  Refinement Rank (R{refinementRank})
                </span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(r => (
                    <button
                      key={r}
                      onClick={() => setRefinementRank(r)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        refinementRank === r
                          ? 'bg-[#eddcb8] text-[#7a5719] border border-[#c29f60] shadow-sm'
                          : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
                      }`}
                    >
                      R{r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] text-xs space-y-2">
                <strong className="text-[#8a621c] block text-sm">{activeWeapon.passiveName}</strong>
                <p className="text-slate-700 leading-relaxed">
                  {activeWeapon.refinements[refinementRank - 1] || activeWeapon.passiveDesc}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#e2d5c5] text-xs text-slate-600 flex justify-between">
              <span>Ascension Material:</span>
              <strong className="text-slate-800">{activeWeapon.ascensionMaterial}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
