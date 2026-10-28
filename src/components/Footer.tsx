import React from 'react';
import { PaimonLogo } from './GenshinIcons';

interface FooterProps {
  setCurrentTab?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#f0e8db]/80 border-t border-[#e2d5c5] relative overflow-hidden py-8 mt-16 text-center text-sm text-slate-600">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-amber-500/10 blur-2xl pointer-events-none rounded-full" />

      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <PaimonLogo size={24} />
          <span className="font-bold font-cinzel text-xs tracking-wider text-[#7a5719] uppercase">
            Teyvat Hub • Companion Database
          </span>
        </div>
        <p className="font-medium tracking-wide text-xs text-slate-600">
          Made with ❤️ for all the Travelers. Emergency food approved!
        </p>
      </div>
    </footer>
  );
};

