import React, { useState } from 'react';
import { Flame, Search, MapPin, AlertCircle } from 'lucide-react';
import { ENEMIES_DATA } from '../data/enemies';
import { SafeImage } from '../components/SafeImage';

export const EnemiesBossesView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Weekly Boss' | 'World Boss'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEnemies = ENEMIES_DATA.filter(enemy => {
    const matchesCategory = selectedCategory === 'All' || enemy.category === selectedCategory;
    const matchesSearch = enemy.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          enemy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          enemy.combatTips.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-slate-800 flex items-center gap-2.5">
            <Flame className="w-6 h-6 text-rose-700" />
            Bosses & Weekly Trounce Encounters
          </h1>
          <p className="text-xs text-slate-600">
            Field guide to World Bosses, weekly trounce domains, drop tables, and survival strategies.
          </p>
        </div>
      </div>

      {/* Filter and Search */}
      <div className="glass-panel rounded-2xl p-4 border border-[#d2c0a8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex gap-2">
          {(['All', 'Weekly Boss', 'World Boss'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                  : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search bosses by name or tips..."
            className="w-full pl-8 pr-3 py-1.5 bg-[#faf8f3] rounded-lg border border-[#d2c0a8] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-600"
          />
        </div>
      </div>

      {/* Boss Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEnemies.map(enemy => (
          <div
            key={enemy.id}
            className="glass-panel rounded-2xl p-6 border border-[#d2c0a8] space-y-4 relative overflow-hidden"
          >
            <div className="flex items-start gap-4">
              <SafeImage
                src={enemy.icon}
                alt={enemy.name}
                entityType="enemy"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-rose-600/40 shadow bg-[#f0e8db]"
              />
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-rose-100 text-rose-800 border border-rose-200 px-2 py-0.5 rounded">
                  {enemy.category} • {enemy.region}
                </span>
                <h3 className="font-cinzel font-bold text-lg text-slate-800">
                  {enemy.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>{enemy.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed italic">
              "{enemy.description}"
            </p>

            {/* Combat Tips */}
            <div className="p-3.5 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] text-xs space-y-1">
              <div className="font-bold text-[#8a621c] flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-[#ca963a]" />
                <span>Tactical Combat Tips:</span>
              </div>
              <p className="text-slate-700 leading-relaxed">{enemy.combatTips}</p>
            </div>

            {/* Drop Items */}
            <div className="pt-2 border-t border-[#e2d5c5] text-xs space-y-1.5">
              <span className="text-[11px] text-slate-600 uppercase font-bold block">Notable Drops:</span>
              <div className="flex flex-wrap gap-1.5">
                {enemy.drops.map((drop, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#f0e8db] text-slate-800 border border-[#d5c7b3] text-[11px] font-medium">
                    ✦ {drop}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
