import React, { useState } from 'react';
import { Shield, Search, MapPin, Users } from 'lucide-react';
import { ARTIFACTS_DATA } from '../data/artifacts';
import { Region } from '../types';
import { SafeImage } from '../components/SafeImage';

export const ArtifactsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');

  const filteredArtifacts = ARTIFACTS_DATA.filter(art => {
    const matchesSearch = art.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.twoPieceBonus.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.fourPieceBonus.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'All' || art.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-cinzel text-slate-800 flex items-center gap-2.5">
            <Shield className="w-6 h-6 text-[#38761d]" />
            Artifact Relics & Sets
          </h1>
          <p className="text-xs text-slate-600">
            Database of 5★ artifact sets with verified 2-piece and 4-piece set bonuses, domains, and optimal character pairings.
          </p>
        </div>
        <div className="text-xs text-[#7a5719] bg-[#eddcb8]/80 px-3 py-1.5 rounded-xl border border-[#c29f60] font-semibold shadow-sm">
          Showing {filteredArtifacts.length} Sets
        </div>
      </div>

      {/* Filter and Search */}
      <div className="glass-panel rounded-2xl p-4 border border-[#d2c0a8] space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#b88e4c] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search artifact sets by name or bonus effect..."
            className="w-full pl-10 pr-4 py-2 bg-[#faf8f3] rounded-xl border border-[#d2c0a8] text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#b88e4c]"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 text-xs">
          {(['All', 'Natlan', 'Fontaine', 'Sumeru', 'Inazuma', 'Mondstadt'] as const).map(reg => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3 py-1 rounded-md text-[11px] font-medium transition-all ${
                selectedRegion === reg
                  ? 'bg-[#eddcb8] text-[#7a5719] font-bold border border-[#c29f60] shadow-sm'
                  : 'bg-[#f0e8db] text-slate-700 hover:bg-[#e6dccb]'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* Artifact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArtifacts.map(artifact => (
          <div
            key={artifact.id}
            className="glass-panel rounded-2xl p-6 border border-[#d2c0a8] space-y-4 relative overflow-hidden"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3.5">
                <SafeImage
                  src={artifact.icon}
                  alt={artifact.name}
                  entityType="artifact"
                  rarity={artifact.maxRarity}
                  className="w-14 h-14 rounded-xl object-cover border border-[#c2a160] bg-[#f0e8db] shrink-0 shadow-sm"
                />
                <div>
                  <h3 className="font-cinzel font-bold text-lg text-slate-800 flex items-center gap-2">
                    <span>{artifact.name}</span>
                    <span className="text-[#ca963a] text-xs">{'★'.repeat(artifact.maxRarity)}</span>
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#38761d]" />
                    <span>{artifact.domain} ({artifact.region})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Set Bonuses */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] space-y-1">
                <span className="font-bold text-sky-800 uppercase text-[11px] block">2-Piece Set Bonus:</span>
                <p className="text-slate-700 leading-relaxed">{artifact.twoPieceBonus}</p>
              </div>

              <div className="p-3 rounded-xl bg-[#f4efe4] border border-[#d5c7b3] space-y-1">
                <span className="font-bold text-[#8a621c] uppercase text-[11px] block">4-Piece Set Bonus:</span>
                <p className="text-slate-700 leading-relaxed">{artifact.fourPieceBonus}</p>
              </div>
            </div>

            {/* Recommended Characters */}
            <div className="pt-2 border-t border-[#e2d5c5] text-xs space-y-2">
              <span className="text-[11px] text-slate-600 uppercase font-bold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#a37626]" />
                Recommended Characters:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {artifact.recommendedFor.map((rec, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-lg bg-[#f0e8db] text-slate-800 border border-[#d5c7b3] text-[11px] font-medium">
                    {rec}
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
