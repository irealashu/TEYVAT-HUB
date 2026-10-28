import React, { useState, useEffect } from 'react';
import { 
  Search, X, Users, Sword, Shield, Clock, BookOpen, ChevronRight, 
  Trophy, Flame, Package
} from 'lucide-react';
import { CHARACTERS_DATA } from '../data/characters';
import { WEAPONS_DATA } from '../data/weapons';
import { ARTIFACTS_DATA } from '../data/artifacts';
import { ENEMIES_DATA } from '../data/enemies';
import { DOMAINS_DATA } from '../data/domains';
import { MATERIALS_DATA } from '../data/materials';
import { QUESTS_DATA } from '../data/quests';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import { SafeImage } from './SafeImage';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string, itemId?: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  // Search filter across all Teyvat database modules
  const characterResults = q ? CHARACTERS_DATA.filter(c => 
    c.name.toLowerCase().includes(q) || 
    c.element.toLowerCase().includes(q) ||
    c.weaponType.toLowerCase().includes(q) ||
    c.region.toLowerCase().includes(q) ||
    (c.title && c.title.toLowerCase().includes(q))
  ).slice(0, 4) : [];

  const weaponResults = q ? WEAPONS_DATA.filter(w => 
    w.name.toLowerCase().includes(q) || 
    w.type.toLowerCase().includes(q) ||
    (w.subStatType && w.subStatType.toLowerCase().includes(q)) ||
    (w.passiveName && w.passiveName.toLowerCase().includes(q)) ||
    (w.passiveDesc && w.passiveDesc.toLowerCase().includes(q))
  ).slice(0, 4) : [];

  const artifactResults = q ? ARTIFACTS_DATA.filter(a => 
    a.name.toLowerCase().includes(q) ||
    a.domain.toLowerCase().includes(q) ||
    a.region.toLowerCase().includes(q) ||
    a.twoPieceBonus.toLowerCase().includes(q) ||
    a.fourPieceBonus.toLowerCase().includes(q)
  ).slice(0, 4) : [];

  const enemyResults = q ? ENEMIES_DATA.filter(e => 
    e.name.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q) ||
    e.region.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.drops.some(drop => drop.toLowerCase().includes(q))
  ).slice(0, 4) : [];

  const domainResults = q ? DOMAINS_DATA.filter(d => 
    d.name.toLowerCase().includes(q) ||
    d.region.toLowerCase().includes(q) ||
    d.location.toLowerCase().includes(q) ||
    d.type.toLowerCase().includes(q) ||
    Object.values(d.schedule).some(drops => drops && drops.some(drop => drop.toLowerCase().includes(q)))
  ).slice(0, 4) : [];

  const materialResults = q ? MATERIALS_DATA.filter(m => 
    m.name.toLowerCase().includes(q) ||
    m.category.toLowerCase().includes(q) ||
    m.region.toLowerCase().includes(q) ||
    m.sources.some(src => src.toLowerCase().includes(q)) ||
    (m.usedByCharacters && m.usedByCharacters.some(ch => ch.toLowerCase().includes(q)))
  ).slice(0, 4) : [];

  const questResults = q ? QUESTS_DATA.filter(quest => 
    quest.title.toLowerCase().includes(q) || 
    quest.chapter.toLowerCase().includes(q) ||
    quest.act.toLowerCase().includes(q) ||
    quest.region.toLowerCase().includes(q) ||
    quest.summary.toLowerCase().includes(q) ||
    (quest.keyCharacters && quest.keyCharacters.some(kc => kc.toLowerCase().includes(q)))
  ).slice(0, 4) : [];

  const achievementResults = q ? ACHIEVEMENTS_DATA.filter(ach => 
    ach.name.toLowerCase().includes(q) || 
    ach.category.toLowerCase().includes(q) ||
    ach.description.toLowerCase().includes(q) ||
    (ach.requirements && ach.requirements.toLowerCase().includes(q))
  ).slice(0, 4) : [];

  const totalResultsCount = 
    characterResults.length + 
    weaponResults.length + 
    artifactResults.length + 
    enemyResults.length + 
    domainResults.length + 
    materialResults.length + 
    questResults.length + 
    achievementResults.length;

  return (
    <div 
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-start justify-center pt-10 sm:pt-20 px-4 transition-opacity"
      onClick={onClose}
    >
      <div 
        className="bg-[#faf8f3] border border-[#c2a160] rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[85vh] p-5 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-amber-700 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search characters, weapons, artifacts, bosses, domains, materials, lore, achievements..."
              className="w-full pl-12 pr-10 py-3 bg-[#f0e8db] rounded-2xl border border-[#d2c0a8] text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600 shadow-inner"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-1"
                title="Clear query"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-2xl bg-[#f0e8db] hover:bg-[#e4d7c3] border border-[#d2c0a8] text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center flex-shrink-0"
            title="Close modal (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="overflow-y-auto space-y-4 pr-1 text-xs flex-1">
          {!q && (
            <div className="text-center py-10 text-slate-500 space-y-2">
              <p className="font-cinzel text-slate-800 text-base font-bold">Global Teyvat Encyclopedia Search</p>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Instant search across all modules: Characters, Weapons, Artifacts, Bosses, Domains, Materials, Lore, and Achievements.
              </p>
              <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-600 flex-wrap">
                <span className="px-2 py-0.5 bg-[#f0e8db] rounded border border-[#d2c0a8]">Mavuika</span>
                <span className="px-2 py-0.5 bg-[#f0e8db] rounded border border-[#d2c0a8]">Furina</span>
                <span className="px-2 py-0.5 bg-[#f0e8db] rounded border border-[#d2c0a8]">Surf's Up</span>
                <span className="px-2 py-0.5 bg-[#f0e8db] rounded border border-[#d2c0a8]">Arlecchino</span>
              </div>
            </div>
          )}

          {q && totalResultsCount === 0 && (
            <div className="text-center py-12 text-slate-500 space-y-1">
              <p className="font-cinzel font-bold text-slate-700">No matching records found</p>
              <p className="text-xs text-slate-500">No results found for "{query}". Try checking your spelling or searching by region/element.</p>
            </div>
          )}

          {/* 1. Characters Results */}
          {characterResults.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-[#7a5719] uppercase tracking-wider px-2 flex items-center gap-1">
                <Users className="w-3 h-3" /> Characters ({characterResults.length})
              </span>
              {characterResults.map(c => (
                <div
                  key={c.id}
                  onClick={() => {
                    onNavigate('characters', c.id);
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#f5efe2] hover:bg-[#ebd9bd] border border-[#d2c0a8] flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <SafeImage 
                      src={c.avatar} 
                      alt={c.name} 
                      entityType="character"
                      element={c.element}
                      className="w-9 h-9 rounded-lg object-cover bg-white border border-[#c2a160]" 
                    />
                    <div>
                      <strong className="text-slate-800 text-xs font-semibold">{c.name}</strong>
                      <span className="text-slate-500 text-[11px] block">{c.element} • {c.weaponType} ({c.region})</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}

          {/* 2. Weapons Results */}
          {weaponResults.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-rose-800 uppercase tracking-wider px-2 flex items-center gap-1">
                <Sword className="w-3 h-3" /> Weapons ({weaponResults.length})
              </span>
              {weaponResults.map(w => (
                <div
                  key={w.id}
                  onClick={() => {
                    onNavigate('weapons');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#f5efe2] hover:bg-[#ebd9bd] border border-[#d2c0a8] flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <SafeImage
                      src={w.icon}
                      alt={w.name}
                      entityType="weapon"
                      weaponType={w.type}
                      className="w-9 h-9 rounded-lg object-cover bg-white border border-[#d2c0a8]"
                    />
                    <div>
                      <strong className="text-slate-800 text-xs font-semibold">{w.name}</strong>
                      <span className="text-slate-500 text-[11px] block">{w.rarity}★ {w.type} • {w.subStatType || 'Base ATK'}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}

          {/* 3. Artifacts Results */}
          {artifactResults.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider px-2 flex items-center gap-1">
                <Shield className="w-3 h-3" /> Artifacts ({artifactResults.length})
              </span>
              {artifactResults.map(a => (
                <div
                  key={a.id}
                  onClick={() => {
                    onNavigate('artifacts');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#f5efe2] hover:bg-[#ebd9bd] border border-[#d2c0a8] flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <SafeImage
                      src={a.icon}
                      alt={a.name}
                      entityType="artifact"
                      className="w-9 h-9 rounded-lg object-cover bg-white border border-[#d2c0a8]"
                    />
                    <div>
                      <strong className="text-slate-800 text-xs font-semibold">{a.name}</strong>
                      <span className="text-slate-500 text-[11px] block">{a.domain} ({a.region})</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}

          {/* 4. Bosses & Enemies Results */}
          {enemyResults.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider px-2 flex items-center gap-1">
                <Flame className="w-3 h-3" /> Bosses & Enemies ({enemyResults.length})
              </span>
              {enemyResults.map(e => (
                <div
                  key={e.id}
                  onClick={() => {
                    onNavigate('enemies');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#f5efe2] hover:bg-[#ebd9bd] border border-[#d2c0a8] flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 flex-shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-800 text-xs font-semibold">{e.name}</strong>
                      <span className="text-slate-500 text-[11px] block">{e.category} ({e.region})</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}

          {/* 5. Domains & Materials Rotation Results */}
          {domainResults.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-purple-800 uppercase tracking-wider px-2 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Domain Rotations ({domainResults.length})
              </span>
              {domainResults.map(d => (
                <div
                  key={d.id}
                  onClick={() => {
                    onNavigate('domains');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#f5efe2] hover:bg-[#ebd9bd] border border-[#d2c0a8] flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-purple-100 border border-purple-300 flex items-center justify-center text-purple-800 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-800 text-xs font-semibold">{d.name}</strong>
                      <span className="text-slate-500 text-[11px] block">{d.type} • {d.location} ({d.region})</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}

          {/* 6. Local & Boss Materials Results */}
          {materialResults.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider px-2 flex items-center gap-1">
                <Package className="w-3 h-3" /> Specialties & Materials ({materialResults.length})
              </span>
              {materialResults.map(m => (
                <div
                  key={m.id}
                  onClick={() => {
                    onNavigate('domains');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#f5efe2] hover:bg-[#ebd9bd] border border-[#d2c0a8] flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <SafeImage
                      src={m.icon}
                      alt={m.name}
                      entityType="artifact"
                      className="w-9 h-9 rounded-lg object-cover bg-white border border-[#d2c0a8]"
                    />
                    <div>
                      <strong className="text-slate-800 text-xs font-semibold">{m.name}</strong>
                      <span className="text-slate-500 text-[11px] block">{m.category} ({m.region}) • {m.sources[0]}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}

          {/* 7. Lore & Quests Results */}
          {questResults.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider px-2 flex items-center gap-1">
                <BookOpen className="w-3 h-3" /> Lore & Quests ({questResults.length})
              </span>
              {questResults.map(qItem => (
                <div
                  key={qItem.id}
                  onClick={() => {
                    onNavigate('lore');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#f5efe2] hover:bg-[#ebd9bd] border border-[#d2c0a8] flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 flex-shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-800 text-xs font-semibold">{qItem.title}</strong>
                      <span className="text-slate-500 text-[11px] block">{qItem.chapter} • {qItem.act} ({qItem.region})</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}

          {/* 8. Achievements Results */}
          {achievementResults.length > 0 && (
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider px-2 flex items-center gap-1">
                <Trophy className="w-3 h-3" /> Achievements ({achievementResults.length})
              </span>
              {achievementResults.map(ach => (
                <div
                  key={ach.id}
                  onClick={() => {
                    onNavigate('achievements');
                    onClose();
                  }}
                  className="p-2.5 rounded-xl bg-[#f5efe2] hover:bg-[#ebd9bd] border border-[#d2c0a8] flex items-center justify-between cursor-pointer transition-colors shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 flex-shrink-0">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-slate-800 text-xs font-semibold">{ach.name}</strong>
                      <span className="text-slate-500 text-[11px] block">{ach.category} • +{ach.primogems} ✦ Primogems</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer Tip */}
        <div className="pt-2 border-t border-[#e2d5c5] flex items-center justify-between text-[11px] text-slate-500 flex-shrink-0">
          <span>Press <kbd className="px-1.5 py-0.5 bg-[#f0e8db] rounded border border-[#d2c0a8] font-mono text-[10px]">Esc</kbd> or click outside to exit</span>
          <span className="hidden sm:inline">Use <kbd className="px-1.5 py-0.5 bg-[#f0e8db] rounded border border-[#d2c0a8] font-mono text-[10px]">⌘K</kbd> anytime to toggle</span>
        </div>
      </div>
    </div>
  );
};
