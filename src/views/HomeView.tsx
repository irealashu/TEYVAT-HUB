import React from 'react';
import { 
  Sparkles, 
  Users, 
  Sword, 
  Shield, 
  ArrowRight
} from 'lucide-react';
import { CHARACTERS_DATA } from '../data/characters';
import { WEAPONS_DATA } from '../data/weapons';
import { ARTIFACTS_DATA } from '../data/artifacts';
import { QUESTS_DATA } from '../data/quests';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  onSelectCharacter?: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setCurrentTab }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative rounded-3xl overflow-hidden border border-[#c2a160] shadow-md flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#faf8f3] via-[#f5efe2] to-[#eae1ce]">
        {/* Subtle Genshin lattice grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#d2c0a8_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf8f3]/90 backdrop-blur-md border border-[#d2c0a8] text-[#8a621c] text-xs font-semibold tracking-wide shadow">
            <Sparkles className="w-4 h-4 text-[#ca963a]" />
            <span>VERSION 7.1 COMPANION & ENCYCLOPEDIA</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-cinzel tracking-wider text-slate-800">
              WELCOME, <span className="text-[#8a621c]">TRAVELER.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#7a5719] font-medium">
              Everything in Teyvat, all in one place.
            </p>
          </div>

          <p className="text-sm text-slate-600 max-w-2xl leading-relaxed font-normal">
            Your definitive anime gaming companion. Explore character ascension stats, weapon arsenals, artifact set passives, domain schedules, bosses, and Archon quests through Version 7.1.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setCurrentTab('characters')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#d3b07b] via-[#e5c793] to-[#b88e4c] hover:from-[#c29f6a] hover:to-[#a77d3b] text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-102 cursor-pointer border border-[#f3dfb7]"
            >
              <Users className="w-4 h-4" />
              <span>Explore Characters</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentTab('weapons')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#faf8f3]/90 hover:bg-[#f0e8db] text-slate-800 border border-[#d2c0a8] text-sm font-bold backdrop-blur-md transition-all cursor-pointer shadow"
            >
              <Sword className="w-4 h-4 text-[#a37626]" />
              <span>Weapons Arsenal</span>
            </button>

            <button
              onClick={() => setCurrentTab('artifacts')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#faf8f3]/90 hover:bg-[#f0e8db] text-slate-800 border border-[#d2c0a8] text-sm font-bold backdrop-blur-md transition-all cursor-pointer shadow"
            >
              <Shield className="w-4 h-4 text-[#38761d]" />
              <span>Artifact Sets</span>
            </button>
          </div>
        </div>

        {/* Live Database Count Badges */}
        <div className="relative z-10 mt-8 pt-6 border-t border-amber-200/30 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="bg-[#faf8f3]/90 backdrop-blur-md rounded-xl p-3 border border-[#d2c0a8] shadow-sm">
            <div className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold">Playable Characters</div>
            <div className="text-xl font-bold text-[#8a621c] font-cinzel">{CHARACTERS_DATA.length}+ Verified</div>
          </div>
          <div className="bg-[#faf8f3]/90 backdrop-blur-md rounded-xl p-3 border border-[#d2c0a8] shadow-sm">
            <div className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold">Arsenal Weapons</div>
            <div className="text-xl font-bold text-[#8a621c] font-cinzel">{WEAPONS_DATA.length}+ Verified</div>
          </div>
          <div className="bg-[#faf8f3]/90 backdrop-blur-md rounded-xl p-3 border border-[#d2c0a8] shadow-sm">
            <div className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold">Artifact Sets</div>
            <div className="text-xl font-bold text-[#8a621c] font-cinzel">{ARTIFACTS_DATA.length} Complete</div>
          </div>
          <div className="bg-[#faf8f3]/90 backdrop-blur-md rounded-xl p-3 border border-[#d2c0a8] shadow-sm">
            <div className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold">Teyvat Nations</div>
            <div className="text-xl font-bold text-sky-800 font-cinzel">6 Regions</div>
          </div>
          <div className="bg-[#faf8f3]/90 backdrop-blur-md rounded-xl p-3 border border-[#d2c0a8] shadow-sm">
            <div className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold">Archon Quests</div>
            <div className="text-xl font-bold text-emerald-800 font-cinzel">{QUESTS_DATA.length} Chapters</div>
          </div>
          <div className="bg-[#faf8f3]/90 backdrop-blur-md rounded-xl p-3 border border-[#d2c0a8] shadow-sm">
            <div className="text-[11px] text-slate-600 uppercase tracking-wider font-semibold">Cutoff Release</div>
            <div className="text-xl font-bold text-rose-800 font-cinzel">v7.1 / 2026</div>
          </div>
        </div>
      </section>
    </div>
  );
};
