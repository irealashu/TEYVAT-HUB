import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalSearchModal } from './components/GlobalSearchModal';

import { HomeView } from './views/HomeView';
import { CharactersView } from './views/CharactersView';
import { WeaponsView } from './views/WeaponsView';
import { ArtifactsView } from './views/ArtifactsView';
import { DomainsScheduleView } from './views/DomainsScheduleView';
import { EnemiesBossesView } from './views/EnemiesBossesView';
import { LoreQuestsView } from './views/LoreQuestsView';
import { AchievementsView } from './views/AchievementsView';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Global Cmd+K / Ctrl+K shortcut listener
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleGlobalNavigate = (tab: string, itemId?: string) => {
    if (tab) setCurrentTab(tab);
    if (itemId) setSelectedCharacterId(itemId);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f3efe6] text-slate-800 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-900">
      {/* Navigation Header */}
      <Navbar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        onOpenSearch={() => setIsSearchOpen(true)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 pt-8 w-full">
        {currentTab === 'home' && (
          <HomeView 
            setCurrentTab={setCurrentTab} 
            onSelectCharacter={(id) => {
              setSelectedCharacterId(id);
              setCurrentTab('characters');
            }} 
          />
        )}

        {currentTab === 'characters' && (
          <CharactersView
            selectedCharacterId={selectedCharacterId}
            onSelectCharacter={setSelectedCharacterId}
          />
        )}

        {currentTab === 'weapons' && <WeaponsView />}

        {currentTab === 'artifacts' && <ArtifactsView />}

        {currentTab === 'domains' && <DomainsScheduleView />}

        {currentTab === 'enemies' && <EnemiesBossesView />}

        {currentTab === 'lore' && <LoreQuestsView />}

        {currentTab === 'achievements' && <AchievementsView />}
      </main>

      {/* Global Quick Search (Cmd+K) Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleGlobalNavigate}
      />

      {/* Footer */}
      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}

export default App;
