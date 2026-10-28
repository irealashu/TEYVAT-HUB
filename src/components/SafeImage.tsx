import React, { useState, useEffect } from 'react';
import { ElementIcon, WeaponTypeIcon, PrimogemLogo } from './GenshinIcons';
import { Shield, Flame, Package } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  entityType?: 'character' | 'weapon' | 'artifact' | 'enemy' | 'material' | 'general';
  element?: string;
  weaponType?: string;
  rarity?: number;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  entityType = 'general',
  element,
  weaponType,
  rarity = 5,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);
  const [attempt, setAttempt] = useState<number>(0);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setAttempt(0);
  }, [src]);

  const handleError = () => {
    // Attempt 1: If URL is from upload-os-bbs, try enka.network
    if (attempt === 0 && currentSrc.includes('upload-os-bbs.mihoyo.com')) {
      const filename = currentSrc.split('/').pop();
      if (filename) {
        setAttempt(1);
        setCurrentSrc(`https://enka.network/ui/${filename}`);
        return;
      }
    }

    // Attempt 2: If secondary fallbackSrc provided
    if (attempt < 2 && fallbackSrc && fallbackSrc !== currentSrc) {
      setAttempt(2);
      setCurrentSrc(fallbackSrc);
      return;
    }

    // Otherwise show authentic vector placeholder
    setHasError(true);
  };

  if (hasError) {
    const elementGradients: Record<string, string> = {
      Pyro: 'from-red-900/60 to-orange-950/80 border-red-500/40 text-red-400',
      Hydro: 'from-sky-900/60 to-blue-950/80 border-sky-500/40 text-sky-400',
      Anemo: 'from-teal-900/60 to-emerald-950/80 border-teal-500/40 text-teal-400',
      Electro: 'from-purple-900/60 to-violet-950/80 border-purple-500/40 text-purple-400',
      Dendro: 'from-emerald-900/60 to-green-950/80 border-emerald-500/40 text-emerald-400',
      Cryo: 'from-cyan-900/60 to-blue-950/80 border-cyan-500/40 text-cyan-400',
      Geo: 'from-amber-900/60 to-yellow-950/80 border-amber-500/40 text-amber-400',
    };

    const gradientClass = element ? (elementGradients[element] || 'from-slate-900 to-slate-950 border-amber-500/30 text-amber-300') : 'from-slate-900 to-slate-950 border-slate-700 text-amber-300';

    return (
      <div 
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br ${gradientClass} ${className}`}
      >
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

        {entityType === 'character' && (
          <div className="relative z-10 flex flex-col items-center justify-center p-1 text-center">
            {element ? (
              <ElementIcon element={element} className="w-6 h-6 mb-1 opacity-90 drop-shadow" />
            ) : (
              <PrimogemLogo className="w-6 h-6 mb-1" />
            )}
            <span className="text-[10px] font-cinzel font-bold leading-tight line-clamp-1 px-1">
              {alt.split(' ')[0]}
            </span>
          </div>
        )}

        {entityType === 'weapon' && (
          <div className="relative z-10 flex flex-col items-center justify-center p-1 text-center text-amber-300">
            {weaponType ? (
              <WeaponTypeIcon type={weaponType} className="w-6 h-6 mb-1" />
            ) : (
              <PrimogemLogo className="w-5 h-5 mb-1" />
            )}
            <span className="text-[9px] font-cinzel font-bold leading-tight line-clamp-1 px-1 text-slate-200">
              {alt.split(' ')[0]}
            </span>
          </div>
        )}

        {entityType === 'artifact' && (
          <div className="relative z-10 flex flex-col items-center justify-center p-1 text-center text-amber-400">
            <Shield className="w-6 h-6 mb-1 opacity-80" />
            <span className="text-[9px] font-cinzel font-bold leading-tight line-clamp-1 px-1 text-slate-200">
              {alt.split(' ')[0]}
            </span>
          </div>
        )}

        {entityType === 'enemy' && (
          <div className="relative z-10 flex flex-col items-center justify-center p-1 text-center text-rose-400">
            <Flame className="w-6 h-6 mb-1" />
            <span className="text-[9px] font-cinzel font-bold leading-tight line-clamp-1 px-1 text-slate-200">
              {alt.split(' ')[0]}
            </span>
          </div>
        )}

        {entityType === 'material' && (
          <div className="relative z-10 flex flex-col items-center justify-center p-1 text-center text-amber-300">
            <Package className="w-6 h-6 mb-1 opacity-85" />
            <span className="text-[9px] font-medium leading-tight line-clamp-1 px-1 text-slate-300">
              {alt.split(' ')[0]}
            </span>
          </div>
        )}

        {entityType === 'general' && (
          <div className="relative z-10 flex items-center justify-center">
            <PrimogemLogo className="w-6 h-6" />
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={handleError}
      loading="lazy"
      className={className}
      {...props}
    />
  );
};
