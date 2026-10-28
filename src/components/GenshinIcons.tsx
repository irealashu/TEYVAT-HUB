import React from 'react';

/**
 * Authentic SVG Vector Icons for Genshin Impact:
 * - Paimon Brand Logo & Primogem
 * - 7 Elements (Pyro, Hydro, Anemo, Electro, Dendro, Cryo, Geo)
 * - 5 Weapon Types (Sword, Claymore, Polearm, Bow, Catalyst)
 * - Nation Emblems
 */

export const PaimonLogo: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-8 h-8", 
  size = 32 
}) => {
  const [imgError, setImgError] = React.useState(false);

  if (!imgError) {
    return (
      <img
        src="/images/paimon_official_dp.png"
        alt="Official Paimon DP"
        style={{ width: size, height: size }}
        className={`object-contain rounded-full drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] ${className}`}
        onError={() => setImgError(true)}
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size} 
      className={`drop-shadow-[0_0_10px_rgba(234,179,8,0.4)] ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="paimon-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff3d1" />
          <stop offset="35%" stopColor="#f3d077" />
          <stop offset="70%" stopColor="#d8a332" />
          <stop offset="100%" stopColor="#966712" />
        </linearGradient>
        <linearGradient id="paimon-halo" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d8a332" />
          <stop offset="50%" stopColor="#fff8e7" />
          <stop offset="100%" stopColor="#d8a332" />
        </linearGradient>
        <linearGradient id="paimon-clip" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="50%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="paimon-eye" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="60%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <radialGradient id="paimon-glow-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fde68a" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="48" fill="url(#paimon-glow-bg)" />
      <ellipse cx="50" cy="24" rx="34" ry="10" stroke="url(#paimon-halo)" strokeWidth="3" fill="none" />
      <path d="M16 24 L20 20 L24 24 L20 28 Z" fill="#ffd700" />
      <path d="M76 24 L80 20 L84 24 L80 28 Z" fill="#ffd700" />
      <path d="M22 62 C16 48 24 32 40 28 C46 22 54 22 60 28 C76 32 84 48 78 62 C82 72 74 86 64 88 C54 90 46 90 36 88 C26 86 18 72 22 62 Z" fill="#fdfbf7" stroke="#e5d8be" strokeWidth="2" />
      <path d="M32 46 C32 68 40 76 50 76 C60 76 68 68 68 46 C68 38 60 36 50 36 C40 36 32 38 32 46 Z" fill="#ffedd5" />
      <ellipse cx="42" cy="54" rx="4" ry="6.5" fill="url(#paimon-eye)" />
      <ellipse cx="58" cy="54" rx="4" ry="6.5" fill="url(#paimon-eye)" />
      <circle cx="43.5" cy="51.5" r="1.5" fill="#ffffff" />
      <circle cx="59.5" cy="51.5" r="1.5" fill="#ffffff" />
      <path d="M46 63 Q50 67 54 63" stroke="#9a3412" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M32 40 C38 48 46 48 50 42 C54 48 62 48 68 40 C62 34 38 34 32 40 Z" fill="#ffffff" stroke="#e5d8be" strokeWidth="1" />
      <path d="M30 26 C42 18 58 18 70 26 L66 33 C56 28 44 28 34 33 Z" fill="url(#paimon-clip)" stroke="url(#paimon-gold)" strokeWidth="1.5" />
      <path d="M50 18 L53 25 L60 25 L54 29 L56 36 L50 31 L44 36 L46 29 L40 25 L47 25 Z" fill="url(#paimon-gold)" stroke="#78350f" strokeWidth="0.5" />
    </svg>
  );
};



export const PrimogemLogo: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-8 h-8", 
  size = 32 
}) => (
  <svg 
    viewBox="0 0 100 100" 
    width={size} 
    height={size} 
    className={`drop-shadow-[0_0_12px_rgba(245,158,11,0.5)] ${className}`}
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="primo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="35%" stopColor="#ffb833" />
        <stop offset="70%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
      <linearGradient id="primo-grad-core" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="40%" stopColor="#fed7aa" />
        <stop offset="80%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#78350f" />
      </linearGradient>
      <linearGradient id="primo-blue" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="50%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#c084fc" />
      </linearGradient>
      <radialGradient id="primo-glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background Glow */}
    <circle cx="50" cy="50" r="46" fill="url(#primo-glow)" />

    {/* Outer 4-pointed Star */}
    <path 
      d="M50 4 Q50 35 15 50 Q50 65 50 96 Q50 65 85 50 Q50 35 50 4 Z" 
      fill="url(#primo-blue)" 
      stroke="#fed7aa" 
      strokeWidth="1.5"
    />

    {/* Facet Cuts */}
    <path d="M50 4 L50 96" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
    <path d="M15 50 L85 50" stroke="#ffffff" strokeWidth="0.8" opacity="0.6" />
    <path d="M50 18 L68 50 L50 82 L32 50 Z" fill="url(#primo-grad-1)" opacity="0.95" />
    
    {/* Inner Diamond Core */}
    <polygon points="50,28 62,50 50,72 38,50" fill="url(#primo-grad-core)" />
    
    {/* Highlight Flare */}
    <circle cx="50" cy="50" r="3.5" fill="#ffffff" />
    <polygon points="50,42 52,50 50,58 48,50" fill="#ffffff" />
    <polygon points="42,50 50,52 58,50 50,48" fill="#ffffff" />
  </svg>
);

export const ElementIcon: React.FC<{ 
  element: string; 
  className?: string; 
  size?: number 
}> = ({ 
  element, 
  className = "w-4 h-4", 
  size = 16 
}) => {
  const norm = (element || '').toLowerCase();

  if (norm.includes('pyro')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d="M12 2C9.5 6 7 8 7 12c0 3.3 2.2 6 5 6s5-2.7 5-6c0-1.5-.5-3-1.5-4.5C14.5 9 13.5 10 12 10c0-2.5 1-4.5 0-8z M12 15c-1.1 0-2-.9-2-2 0-.8.5-1.5 1-2 .5.5 1 1.2 1 2 0-1 .5-1.5 1-2 .5.7 1 1.2 1 2 0 1.1-.9 2-2 2z" />
      </svg>
    );
  }
  if (norm.includes('hydro')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d="M12 2.5C12 2.5 6 10 6 15c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5-6-12.5-6-12.5zm0 15.5c-1.7 0-3-1.3-3-3 0-1.2 1-2.5 2-4 .3.8.8 1.5 1.5 2 0-1 .5-1.8 1-2.5.7 1.3 1.5 2.7 1.5 4.5 0 1.7-1.3 3-3 3z" />
      </svg>
    );
  }
  if (norm.includes('anemo')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d="M12 3c-4.5 0-8 3.5-8 7.5 0 2.5 1.3 4.5 3.3 5.7-.3-.7-.3-1.5-.3-2.2 0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.7-.7 3.2-1.8 4.2.8.5 1.8.8 2.8.8 2.8 0 5-2.2 5-5C25 7 19.5 3 12 3zm-1 8c-1.7 0-3 1.3-3 3 0 1.5 1.2 2.8 2.8 3 .1-.3.2-.7.2-1 0-1.1.9-2 2-2 .8 0 1.5.5 1.8 1.2.6-.7 1.2-1.7 1.2-2.7 0-1.7-1.3-3-3-3s-2 .5-2 1.5z" />
      </svg>
    );
  }
  if (norm.includes('electro')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d="M13 2L4 13.5h6L8.5 22 19 9.5h-6.5L13 2z" />
      </svg>
    );
  }
  if (norm.includes('dendro')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d="M17 3c-5.5 0-10 4-11 9 1-1 3-2 5-2 1 0 2 .3 3 .8C11 12 9 14.5 9 17.5c0 2 1.5 3.5 3.5 3.5 4 0 7.5-3.5 7.5-8.5 0-4-1.5-7.5-3-9.5zm-3 12.5c-.8 0-1.5-.7-1.5-1.5 0-1.5 1.5-3 3-4-.5 2-1 5.5-1.5 5.5z" />
      </svg>
    );
  }
  if (norm.includes('cryo')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d="M12 2l1.5 4.5h4.5L14.5 9l1.5 4.5-4-3-4 3 1.5-4.5L6 6.5h4.5L12 2zm0 10l2 6h-4l2-6zm-7-2l5 1-3.5 3.5-1.5-4.5zm14 0l-1.5 4.5-3.5-3.5 5-1z" />
      </svg>
    );
  }
  if (norm.includes('geo')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
        <path d="M12 2L3 8.5v7L12 22l9-6.5v-7L12 2zm0 3.5l5.5 4-5.5 4-5.5-4 5.5-4zm-6.5 6.2l5 3.6v5.2l-5-3.6v-5.2zm13 0v5.2l-5 3.6v-5.2l5-3.6z" />
      </svg>
    );
  }

  // Default star
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5L12 2z" />
    </svg>
  );
};

export const WeaponTypeIcon: React.FC<{ 
  type: string; 
  className?: string; 
  size?: number 
}> = ({ 
  type, 
  className = "w-4 h-4", 
  size = 16 
}) => {
  const norm = (type || '').toLowerCase();

  if (norm.includes('sword') && !norm.includes('claymore')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
        <line x1="13" y1="19" x2="19" y2="13" />
        <line x1="16" y1="16" x2="20" y2="20" />
        <line x1="19" y1="21" x2="21" y2="19" />
      </svg>
    );
  }
  if (norm.includes('claymore')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 17.5L4 7V3h4l10.5 10.5" />
        <path d="M12 19l8-8" />
        <line x1="16" y1="16" x2="21" y2="21" />
        <rect x="18" y="18" width="4" height="4" rx="1" fill="currentColor" opacity="0.3" />
      </svg>
    );
  }
  if (norm.includes('polearm')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="21" x2="19" y2="5" />
        <polygon points="19,5 21,3 22,7 20,9" fill="currentColor" />
        <path d="M15 9l2 2" />
        <path d="M13 7l2 2" />
      </svg>
    );
  }
  if (norm.includes('bow')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20C4 11 11 4 20 4" />
        <line x1="4" y1="20" x2="20" y2="4" />
        <polyline points="15 4 20 4 20 9" />
      </svg>
    );
  }
  if (norm.includes('catalyst')) {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="7" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor">
      <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5L12 2z" />
    </svg>
  );
};
