import React, { useState } from 'react';
import { BookOpen, Compass, Users, Scroll, Search, Eye, Globe } from 'lucide-react';
import { QUESTS_DATA } from '../data/quests';
import { FACTIONS_DATA, TIMELINE_DATA, ANCIENT_MYTHOS_DATA } from '../data/lore';

export const LoreQuestsView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'quests' | 'factions' | 'timeline' | 'mythos'>('quests');
  const [questRegionFilter, setQuestRegionFilter] = useState<string>('All');
  const [questSearch, setQuestSearch] = useState<string>('');
  const [selectedFactionId, setSelectedFactionId] = useState<string>('seven-archons');

  const filteredQuests = QUESTS_DATA.filter(q => {
    const matchesRegion = questRegionFilter === 'All' || q.region === questRegionFilter || (questRegionFilter === 'World Quests' && q.type === 'World Quest');
    const matchesSearch = q.title.toLowerCase().includes(questSearch.toLowerCase()) ||
                          q.chapter.toLowerCase().includes(questSearch.toLowerCase()) ||
                          q.summary.toLowerCase().includes(questSearch.toLowerCase()) ||
                          (q.keyCharacters && q.keyCharacters.some(c => c.toLowerCase().includes(questSearch.toLowerCase())));
    return matchesRegion && matchesSearch;
  });

  const activeFaction = FACTIONS_DATA.find(f => f.id === selectedFactionId) || FACTIONS_DATA[0];

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-slate-800 flex items-center gap-2.5">
            <BookOpen className="w-7 h-7 text-emerald-700" />
            Lore Library & Archon Chronicles
          </h1>
          <p className="text-xs text-slate-600 mt-1">
            Complete chronicles of Teyvat: Archon Quests through Natlan, Major World Sagas, Faction dossiers, the Timeline of Epochs, and Forbidden Mythos.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-[#f0e8db] border border-[#d5c7b3] font-semibold rounded-xl px-4 py-2 text-slate-700 shadow-sm">
          <Globe className="w-4 h-4 text-emerald-700" />
          <span>7 Nations • 10 Factions • Pre-History to Present</span>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex gap-2 border-b border-[#e2d5c5] pb-2 text-xs overflow-x-auto">
        <button
          onClick={() => setActiveCategory('quests')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
            activeCategory === 'quests'
              ? 'bg-[#eddcb8] text-[#7a5719] border border-[#c29f60] shadow-sm'
              : 'text-slate-700 hover:bg-[#f0e8db]'
          }`}
        >
          <Scroll className="w-4 h-4" />
          <span>Archon & World Quests</span>
        </button>
        <button
          onClick={() => setActiveCategory('factions')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
            activeCategory === 'factions'
              ? 'bg-[#eddcb8] text-[#7a5719] border border-[#c29f60] shadow-sm'
              : 'text-slate-700 hover:bg-[#f0e8db]'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Factions of Teyvat</span>
        </button>
        <button
          onClick={() => setActiveCategory('timeline')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
            activeCategory === 'timeline'
              ? 'bg-[#eddcb8] text-[#7a5719] border border-[#c29f60] shadow-sm'
              : 'text-slate-700 hover:bg-[#f0e8db]'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Historical Timeline</span>
        </button>
        <button
          onClick={() => setActiveCategory('mythos')}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
            activeCategory === 'mythos'
              ? 'bg-[#eddcb8] text-[#7a5719] border border-[#c29f60] shadow-sm'
              : 'text-slate-700 hover:bg-[#f0e8db]'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>Ancient Mythos & Forbidden Lore</span>
        </button>
      </div>

      {/* Quests View */}
      {activeCategory === 'quests' && (
        <div className="space-y-6">
          {/* Quest Filters & Search */}
          <div className="glass-panel rounded-2xl p-4 border border-[#d2c0a8] space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-emerald-700 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={questSearch}
                onChange={(e) => setQuestSearch(e.target.value)}
                placeholder="Search quest acts, titles, summaries, or characters..."
                className="w-full pl-9 pr-3 py-2 bg-[#faf8f3] rounded-lg border border-[#d2c0a8] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600"
              />
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-1 text-xs">
              {['All', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'Natlan', 'World Quests'].map(reg => (
                <button
                  key={reg}
                  onClick={() => setQuestRegionFilter(reg)}
                  className={`px-3 py-1 rounded-md text-[11px] whitespace-nowrap transition-all ${
                    questRegionFilter === reg
                      ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                      : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Quests List */}
          <div className="space-y-4">
            {filteredQuests.map((quest) => (
              <div
                key={quest.id}
                className="glass-panel rounded-2xl p-6 border border-[#d2c0a8] space-y-3 relative overflow-hidden transition-all hover:border-[#b88e4c]"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded">
                      {quest.chapter} • {quest.act}
                    </span>
                    <span className="text-[10px] bg-[#f0e8db] border border-[#d5c7b3] text-slate-700 px-2 py-0.5 rounded font-medium">
                      {quest.region}
                    </span>
                    <span className="text-[10px] bg-[#f0e8db] border border-[#d5c7b3] text-slate-700 px-2 py-0.5 rounded font-medium">
                      v{quest.version}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-[#8a621c] font-cinzel">
                    ✦ {quest.rewards.primogems} Primogems
                  </div>
                </div>

                <h3 className="font-cinzel font-bold text-lg text-slate-800">
                  {quest.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {quest.summary}
                </p>

                {quest.keyCharacters && quest.keyCharacters.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap text-xs pt-1">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Key Figures:</span>
                    {quest.keyCharacters.map((char, cIdx) => (
                      <span key={cIdx} className="text-[11px] bg-[#f0e8db] border border-[#d5c7b3] px-2 py-0.5 rounded text-emerald-800 font-semibold">
                        {char}
                      </span>
                    ))}
                  </div>
                )}

                <div className="pt-2 border-t border-[#e2d5c5] text-[11px] text-slate-600 flex flex-wrap items-center justify-between gap-2">
                  <span>Prerequisite: {quest.prerequisites || 'None'}</span>
                  <div className="flex items-center gap-2">
                    {quest.rewards.mora && <span>{quest.rewards.mora.toLocaleString()} Mora</span>}
                    {quest.rewards.items && quest.rewards.items.map((it, itIdx) => (
                      <span key={itIdx} className="text-[#8a621c] font-medium">• {it}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Factions View */}
      {activeCategory === 'factions' && (
        <div className="space-y-6">
          {/* Faction selector chips */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {FACTIONS_DATA.map((fac) => (
              <button
                key={fac.id}
                onClick={() => setSelectedFactionId(fac.id)}
                className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap border transition-all ${
                  selectedFactionId === fac.id
                    ? 'bg-[#eddcb8] text-[#7a5719] font-bold border-[#c29f60] shadow-md'
                    : 'bg-[#f0e8db] text-slate-700 border-[#d5c7b3] hover:bg-[#e6dccb]'
                }`}
              >
                {fac.name}
              </button>
            ))}
          </div>

          {/* Active Faction Profile */}
          <div className="glass-panel rounded-2xl p-6 border border-[#d2c0a8] space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[#e2d5c5] pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded">
                  {activeFaction.title} • {activeFaction.region}
                </span>
                <h2 className="text-2xl font-bold font-cinzel text-slate-800 mt-1">
                  {activeFaction.name}
                </h2>
              </div>
              <div className="text-xs text-slate-700 bg-[#f4efe4] border border-[#d5c7b3] px-3 py-1.5 rounded-lg max-w-md">
                <span className="text-[#8a621c] font-bold block text-[10px] uppercase">Ideology & Mission:</span>
                {activeFaction.ideology}
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {activeFaction.desc}
            </p>

            {/* Members Roster */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-emerald-700" />
                Roster & Command Hierarchy ({activeFaction.members.length} Recognized Figures)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeFaction.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f4efe4] border border-[#d5c7b3] rounded-xl p-3 space-y-1.5 hover:border-[#b88e4c] transition-all shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                        <span>{member.name}</span>
                        {member.element && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#e2d5c5] text-[#8a621c] font-bold border border-[#c29f60]">
                            {member.element}
                          </span>
                        )}
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                        member.status === 'Active' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                        member.status === 'Deceased' ? 'bg-red-100 text-red-800 border border-red-200' :
                        member.status === 'Defected' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                        member.status === 'Ascended' ? 'bg-cyan-100 text-cyan-800 border border-cyan-200' :
                        'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}>
                        {member.status}
                      </span>
                    </div>

                    <div className="text-[11px] text-emerald-800 font-cinzel font-bold">
                      {member.role}
                    </div>

                    {member.note && (
                      <p className="text-[11px] text-slate-600 leading-normal">
                        {member.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Historical Timeline View */}
      {activeCategory === 'timeline' && (
        <div className="glass-panel rounded-2xl p-6 border border-[#d2c0a8] space-y-8">
          <div>
            <h2 className="text-xl font-bold font-cinzel text-slate-800 flex items-center gap-2">
              <Compass className="w-5 h-5 text-emerald-700" />
              Chronology of Teyvat Civilizations
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              From the primordial dragon sovereignty before sun and moon to the cosmic aftermath of the Cataclysm and modern Archon liberation.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-600/30 pl-6 ml-3 space-y-8">
            {TIMELINE_DATA.map((epoch, idx) => (
              <div key={idx} className="relative space-y-2">
                <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-[#faf8f3] ring-4 ring-emerald-600/20" />
                
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-emerald-800 font-cinzel">
                    {epoch.era}
                  </span>
                  <span className="text-[10px] bg-[#f0e8db] border border-[#d5c7b3] text-slate-700 px-2 py-0.5 rounded font-semibold">
                    {epoch.period}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-800 font-cinzel">
                  {epoch.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {epoch.summary}
                </p>

                <div className="bg-[#f4efe4] border border-[#d5c7b3] rounded-xl p-3 space-y-1.5">
                  <div className="text-[10px] uppercase font-bold text-[#8a621c] tracking-wider">Crucial Milestones:</div>
                  <ul className="space-y-1">
                    {epoch.keyEvents.map((ev, eIdx) => (
                      <li key={eIdx} className="text-[11px] text-slate-700 flex items-start gap-1.5">
                        <span className="text-emerald-700 mt-0.5">•</span>
                        <span>{ev}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-[11px] text-slate-600 italic">
                  <strong className="text-slate-800 not-italic font-bold">Cosmic Impact: </strong>
                  {epoch.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Ancient Mythos & Forbidden Books */}
      {activeCategory === 'mythos' && (
        <div className="space-y-6">
          <div className="glass-panel rounded-2xl p-6 border border-[#d2c0a8]">
            <h2 className="text-xl font-bold font-cinzel text-slate-800 flex items-center gap-2">
              <Eye className="w-5 h-5 text-emerald-700" />
              Forbidden Knowledge & Sacred Tomes
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Ancient texts, suppressed records, and cosmic secrets that Celestia, the Akademiya, and the Fatui have sought to control or erase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ANCIENT_MYTHOS_DATA.map((book, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-[#d2c0a8] space-y-4 hover:border-[#b88e4c] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#eddcb8] text-[#7a5719] border border-[#c29f60]">
                      {book.classification}
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">
                      Origin: {book.origin}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg font-cinzel text-slate-800">
                    {book.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {book.summary}
                  </p>

                  <div className="text-xs bg-[#f4efe4] border border-[#d5c7b3] rounded-xl p-3 text-slate-700">
                    <strong className="text-emerald-800 block text-[10px] uppercase tracking-wider mb-1 font-bold">Significance:</strong>
                    {book.significance}
                  </div>
                </div>

                <div className="border-t border-[#e2d5c5] pt-3 text-[11px] italic text-slate-600 bg-[#f0e8db]/60 p-3 rounded-lg border">
                  {book.excerpt}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
