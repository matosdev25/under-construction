'use client';

export default function LanguageToggle({ currentLang, onLanguageChange }) {
  const isEs = currentLang === 'es';
  const isEn = currentLang === 'en';

  return (
    <div 
      className="flex items-center rounded-full bg-white/10 border border-white/20 p-1 backdrop-blur-sm"
      role="tablist"
      aria-label="Selector de idioma / Language selector"
    >
      <button
        role="tab"
        aria-selected={isEs}
        aria-label="Español"
        onClick={() => onLanguageChange('es')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
          isEs
            ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/25'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        ES
      </button>
      <button
        role="tab"
        aria-selected={isEn}
        aria-label="English"
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 ${
          isEn
            ? 'bg-rose-600 text-white shadow-lg shadow-rose-500/25'
            : 'text-white/70 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}
