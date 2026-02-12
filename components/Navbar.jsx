'use client';

import { MessageCircle } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

export default function Navbar({ lang, onLanguageChange, translations, whatsappLink }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a 
          href="https://matosdev25.github.io/portfolio/" 
          className="text-white font-bold text-lg sm:text-xl tracking-wider hover:text-rose-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          aria-label="MatosDev - Ir al sitio principal / Go to main site"
        >
          MATOSDEV
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Toggle */}
          <LanguageToggle 
            currentLang={lang} 
            onLanguageChange={onLanguageChange} 
          />
          
          {/* CTA Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label={lang === 'es' ? 'Contactar por WhatsApp' : 'Contact on WhatsApp'}
          >
            <MessageCircle className="w-4 h-4 group-hover:text-rose-400 transition-colors" aria-hidden="true" />
            <span className="hidden sm:inline">{translations.navbarCta}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
