import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Sword, 
  Shield, 
  BookOpen, 
  Trophy, 
  Compass, 
  Flame, 
  Search, 
  Menu, 
  X, 
  Clock,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { PaimonLogo } from './GenshinIcons';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, onOpenSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navCategories = [
    {
      category: 'Core Database',
      items: [
        { id: 'home', label: 'Home', subtitle: 'Overview & Highlights', icon: Compass },
        { id: 'characters', label: 'Characters', subtitle: 'Heroes, Visions & Builds', icon: Users },
        { id: 'weapons', label: 'Weapons', subtitle: 'Armory & Weapon Stats', icon: Sword },
        { id: 'artifacts', label: 'Artifacts', subtitle: 'Artifact Sets & Bonuses', icon: Shield },
      ]
    },
    {
      category: 'World & Guides',
      items: [
        { id: 'domains', label: 'Domains', subtitle: 'Daily Rotations & Materials', icon: Clock },
        { id: 'enemies', label: 'Bosses & Enemies', subtitle: 'Elite Bosses & Drops', icon: Flame },
        { id: 'lore', label: 'Lore & Quests', subtitle: 'Archon Quests & World Stories', icon: BookOpen },
        { id: 'achievements', label: 'Achievements', subtitle: 'Wonders of the World', icon: Trophy },
      ]
    }
  ];

  const handleNavClick = (id: string) => {
    setCurrentTab(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#faf8f3]/95 backdrop-blur-md border-b border-[#e2d5c5] shadow-sm shadow-amber-900/5">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left transition-transform hover:scale-102"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f4e6c3] via-[#e8d5a7] to-[#cbb077] p-1 border border-[#c2a160] shadow-sm flex items-center justify-center group-hover:border-amber-600 transition-colors shrink-0">
              <PaimonLogo size={32} className="transition-transform group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-wider font-cinzel text-gold-gradient">
                  TEYVAT HUB
                </span>
              </div>
              <p className="text-[10px] text-slate-500 tracking-wider uppercase font-medium">
                Explore • Discover • Build • Conquer
              </p>
            </div>
          </button>

          {/* Header Action Tools: Search + Right Collapsible Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#f0e8db] hover:bg-[#e6dccb] border border-[#d5c7b3] text-xs text-slate-700 hover:text-slate-900 transition-all shadow-sm"
              title="Global Teyvat Search (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-[#b88e4c]" />
              <span className="hidden sm:inline font-medium">Search Teyvat...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-[#e4d7c3] text-slate-600 rounded border border-[#cbbaa3]">⌘K</kbd>
            </button>

            {/* Collapsible Right Menu Trigger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#eddcb8] to-[#e4cd9e] hover:from-[#e8d2a6] hover:to-[#dac18f] border border-[#c29f60] text-xs font-bold text-[#5c4010] shadow-sm transition-all hover:scale-102 active:scale-98"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4 text-[#7a5719]" />
              <span className="font-semibold tracking-wide">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Collapsible Right Drawer Menu */}
      <aside 
        className={`fixed inset-y-0 right-0 z-50 w-80 sm:w-96 max-w-[88vw] bg-[#faf8f3] border-l border-[#dccaa0] shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Side Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#e2d5c5] bg-[#f4ebd9]/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f4e6c3] to-[#cbb077] border border-[#c2a160] flex items-center justify-center shrink-0">
              <PaimonLogo size={24} />
            </div>
            <div>
              <h2 className="text-sm font-bold font-cinzel text-[#5c4010] tracking-wider uppercase">
                Adventurer's Handbook
              </h2>
              <p className="text-[11px] text-slate-500">Navigation Directory</p>
            </div>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-1.5 rounded-lg bg-[#e8dcc8] hover:bg-[#decfae] text-slate-700 hover:text-slate-900 transition-colors border border-[#d5c5a8]"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Search Shortcut inside Drawer */}
        <div className="p-4 border-b border-[#e8dcc8] bg-[#f7f2e7]">
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#ece3d2] hover:bg-[#e4d8c3] border border-[#d5c7b3] text-xs text-slate-700 transition-all text-left group"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#b88e4c] group-hover:scale-110 transition-transform" />
              <span className="font-medium text-slate-800">Search database...</span>
            </div>
            <span className="px-1.5 py-0.5 text-[10px] bg-[#dcd0bc] text-slate-600 rounded border border-[#caa972] font-mono">⌘K</span>
          </button>
        </div>

        {/* Drawer Navigation List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {navCategories.map((cat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="px-2 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-[#8c6721] uppercase font-cinzel">
                  {cat.category}
                </span>
                <span className="h-px flex-1 bg-[#e2d5c5] ml-3" />
              </div>

              <div className="space-y-1">
                {cat.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all group ${
                        isActive
                          ? 'bg-gradient-to-r from-[#eddcb8] to-[#f5ebcb] border border-[#c29f60] text-[#5c4010] shadow-sm'
                          : 'hover:bg-[#f0e7d6] text-slate-700 hover:text-slate-900 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                          isActive 
                            ? 'bg-[#d8be8a] text-[#5c4010] border border-[#b89855]' 
                            : 'bg-[#ebe2d0] text-slate-600 group-hover:bg-[#e4d8c2] group-hover:text-amber-800'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className={`text-xs font-bold truncate ${isActive ? 'text-[#5c4010]' : 'text-slate-800 group-hover:text-amber-900'}`}>
                            {item.label}
                          </div>
                          <div className="text-[10px] text-slate-500 truncate mt-0.5">
                            {item.subtitle}
                          </div>
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                        isActive ? 'text-[#a37626] translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5 group-hover:text-slate-600'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-[#e2d5c5] bg-[#f4ebd9]/60 text-center text-xs text-slate-500">
          <div className="flex items-center justify-center gap-2 text-[#7a5719] font-medium text-[11px] mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#c29f60]" />
            <span>Teyvat Adventurer Guild</span>
          </div>
          <p className="text-[10px] text-slate-400">Version 5.x Genshin Impact Companion</p>
        </div>
      </aside>
    </>
  );
};

