import React, { useState, useMemo } from 'react';
import { 
  Trophy, Search, Sparkles, Eye, Award, Filter, X, 
  Coins, BookOpen, Layers
} from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import { Achievement } from '../types';

export const AchievementsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [typeFilter, setTypeFilter] = useState<'all' | 'secret' | 'standard'>('all');
  const [versionFilter, setVersionFilter] = useState<string>('all');

  // Extract unique categories and counts
  const categoriesWithCounts = useMemo(() => {
    const map = new Map<string, number>();
    ACHIEVEMENTS_DATA.forEach(a => {
      map.set(a.category, (map.get(a.category) || 0) + 1);
    });
    return Array.from(map.entries());
  }, []);

  const filteredAchievements = useMemo(() => {
    return ACHIEVEMENTS_DATA.filter(ach => {
      // Category match
      const matchesCat = selectedCategory === 'All' || ach.category === selectedCategory;

      // Type match (secret vs standard)
      let matchesType = true;
      if (typeFilter === 'secret') matchesType = !!ach.isSecret;
      if (typeFilter === 'standard') matchesType = !ach.isSecret;

      // Version match
      let matchesVersion = true;
      if (versionFilter !== 'all' && ach.version) {
        matchesVersion = ach.version.startsWith(versionFilter);
      }

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        ach.name.toLowerCase().includes(q) ||
        ach.description.toLowerCase().includes(q) ||
        (ach.requirements && ach.requirements.toLowerCase().includes(q)) ||
        ach.category.toLowerCase().includes(q);

      return matchesCat && matchesType && matchesVersion && matchesSearch;
    });
  }, [selectedCategory, typeFilter, versionFilter, searchQuery]);

  // Overall statistics
  const totalAvailable = ACHIEVEMENTS_DATA.length;
  const totalPrimogems = useMemo(() => {
    return ACHIEVEMENTS_DATA.reduce((acc, curr) => acc + curr.primogems, 0);
  }, []);

  const secretCount = useMemo(() => {
    return ACHIEVEMENTS_DATA.filter(a => a.isSecret).length;
  }, []);

  const standardCount = totalAvailable - secretCount;

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || typeFilter !== 'all' || versionFilter !== 'all';

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setTypeFilter('all');
    setVersionFilter('all');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Header & Compendium Overview */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-slate-800 flex items-center gap-2.5">
            <Trophy className="w-7 h-7 text-amber-600" />
            Wonders of Teyvat & Achievements Compendium
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Complete database of official in-game milestones across all versions through Natlan. Browse unlock criteria, version releases, secret milestones, and Primogem rewards.
          </p>
        </div>

        {/* Global Catalog Statistics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-[#faf8f3] border border-[#d2c0a8] rounded-xl p-3 flex flex-col justify-between shadow-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Total Milestones</span>
            <div className="text-lg font-bold text-slate-800 font-cinzel mt-1">
              {totalAvailable}
            </div>
            <span className="text-[10px] text-slate-500 mt-0.5">Cataloged Entries</span>
          </div>

          <div className="bg-[#faf8f3] border border-[#d2c0a8] rounded-xl p-3 flex flex-col justify-between shadow-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Total Yield</span>
            <div className="text-lg font-bold text-amber-700 font-cinzel mt-1">
              {totalPrimogems.toLocaleString()} ✦
            </div>
            <span className="text-[10px] text-amber-800 mt-0.5 font-medium">Primogems Available</span>
          </div>

          <div className="bg-[#faf8f3] border border-[#d2c0a8] rounded-xl p-3 flex flex-col justify-between shadow-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Secret Milestones</span>
            <div className="text-lg font-bold text-purple-700 font-cinzel mt-1">
              {secretCount}
            </div>
            <span className="text-[10px] text-purple-800 mt-0.5 font-medium">Hidden Criteria</span>
          </div>

          <div className="bg-[#faf8f3] border border-[#d2c0a8] rounded-xl p-3 flex flex-col justify-between shadow-xs">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Official Series</span>
            <div className="text-lg font-bold text-emerald-700 font-cinzel mt-1">
              {categoriesWithCounts.length}
            </div>
            <span className="text-[10px] text-emerald-800 mt-0.5 font-medium">Distinct Categories</span>
          </div>
        </div>
      </div>

      {/* Control Panel: Search & Filters */}
      <div className="glass-panel rounded-2xl p-5 border border-[#d2c0a8] space-y-4">
        {/* Top search & Type selector */}
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-amber-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by achievement name, description, criteria, or category..."
              className="w-full pl-10 pr-9 py-2.5 bg-[#f5efe2] rounded-xl border border-[#d2c0a8] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500"
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

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 text-xs bg-[#f0e8db] p-1 rounded-xl border border-[#d2c0a8] overflow-x-auto">
            <button
              onClick={() => setTypeFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                typeFilter === 'all' ? 'bg-[#eddcb8] text-[#7a5719] shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Types ({totalAvailable})
            </button>
            <button
              onClick={() => setTypeFilter('secret')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                typeFilter === 'secret' ? 'bg-purple-600 text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Secret Only ({secretCount})</span>
            </button>
            <button
              onClick={() => setTypeFilter('standard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                typeFilter === 'standard' ? 'bg-emerald-600 text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Standard ({standardCount})</span>
            </button>
          </div>
        </div>

        {/* Version Pills */}
        <div className="flex items-center gap-2 flex-wrap text-xs pt-1 border-t border-[#e2d5c5]">
          <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Version Release:</span>
          {['all', '5.', '4.', '3.', '2.', '1.'].map(v => (
            <button
              key={v}
              onClick={() => setVersionFilter(v)}
              className={`px-2.5 py-1 rounded-md text-[11px] transition-all ${
                versionFilter === v
                  ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c2a160]'
                  : 'bg-[#f0e8db] text-slate-600 hover:text-slate-900 border border-transparent'
              }`}
            >
              {v === 'all' ? 'All Versions' : `v${v}x`}
            </button>
          ))}

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="ml-auto text-[11px] text-amber-700 hover:text-amber-900 transition-colors px-2 py-0.5 rounded hover:bg-[#e8decb] flex items-center gap-1 font-semibold"
            >
              <X className="w-3 h-3" />
              Clear Filters
            </button>
          )}
        </div>

        {/* Category horizontal scrolling bar */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs pt-1 border-t border-[#e2d5c5]">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1.5 rounded-lg text-[11px] whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-[#eddcb8] text-[#7a5719] font-bold shadow-xs'
                : 'bg-[#f0e8db] text-slate-600 hover:bg-[#e8decb]'
            }`}
          >
            All Categories ({totalAvailable})
          </button>
          {categoriesWithCounts.map(([cat, count]) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-[11px] whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#eddcb8] text-[#7a5719] font-bold shadow-xs'
                  : 'bg-[#f0e8db] text-slate-600 hover:bg-[#e8decb]'
              }`}
            >
              {cat} ({count})
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>
          Showing <strong className="text-slate-800">{filteredAchievements.length}</strong> matching entries
        </span>
        <span className="text-slate-500 text-[11px]">
          Sorted by Release Order (Newest First)
        </span>
      </div>

      {/* Achievements List */}
      <div className="space-y-3">
        {filteredAchievements.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center border border-[#d2c0a8] space-y-2">
            <Trophy className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="font-cinzel text-base text-slate-700">No achievements found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search criteria, category selection, or filters.
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="mt-3 px-3 py-1.5 bg-[#eddcb8] hover:bg-[#e2ceaa] text-[#7a5719] text-xs rounded-xl font-bold inline-flex items-center gap-1.5 border border-[#c2a160]"
              >
                Reset All Filters
              </button>
            )}
          </div>
        ) : (
          filteredAchievements.map((ach) => {
            return (
              <div
                key={ach.id}
                className="glass-panel rounded-2xl p-4 sm:p-5 border border-[#d2c0a8] hover:border-[#c2a160] bg-[#faf8f3] transition-all flex items-start gap-4 shadow-xs"
              >
                {/* Decorative Icon Badge */}
                <div className={`mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  ach.isSecret 
                    ? 'bg-purple-100 border border-purple-300 text-purple-700' 
                    : 'bg-amber-100 border border-amber-300 text-amber-700'
                }`}>
                  <Trophy className="w-4 h-4" />
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-[#f0e8db] px-2 py-0.5 rounded border border-[#d2c0a8]">
                      {ach.category}
                    </span>
                    {ach.version && (
                      <span className="text-[10px] text-slate-600 bg-[#f0e8db] px-1.5 py-0.5 rounded border border-[#d2c0a8]">
                        v{ach.version}
                      </span>
                    )}
                    {ach.isSecret && (
                      <span className="text-[10px] font-semibold text-purple-800 bg-purple-100 border border-purple-300 px-2 py-0.5 rounded flex items-center gap-1">
                        <Eye className="w-3 h-3" /> Secret Milestone
                      </span>
                    )}
                  </div>

                  <h3 className="font-cinzel font-bold text-base text-slate-800">
                    {ach.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ach.description}
                  </p>

                  {ach.requirements && (
                    <div className="text-[11px] text-amber-900 pt-1 flex items-start gap-1.5 bg-amber-50/80 border border-amber-200 px-2.5 py-1.5 rounded-lg mt-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-amber-800">Unlock Criteria:</strong> {ach.requirements}</span>
                    </div>
                  )}
                </div>

                {/* Reward Pill */}
                <div className="flex-shrink-0 text-right flex flex-col items-end">
                  <div className="text-xs font-bold text-[#7a5719] font-cinzel bg-[#eddcb8] border border-[#c2a160] px-2.5 py-1 rounded-lg whitespace-nowrap shadow-2xs">
                    +{ach.primogems} ✦
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 font-medium">Primogems</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
