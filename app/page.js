'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Badge from '@/components/Badge';
import Button from '@/components/Button';
import { translations, detectLanguage, getWhatsAppLink } from '@/lib/translations';

const MAIN_SITE = 'https://matosdev25.github.io/portfolio/';

export default function UnderConstruction() {
  const [lang, setLang] = useState('es');
  const [mounted, setMounted] = useState(false);

  // Detect language on mount
  useEffect(() => {
    const detectedLang = detectLanguage();
    setLang(detectedLang);
    setMounted(true);
  }, []);

  // Handle language change
  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem('lang', newLang);
    // Update document language
    document.documentElement.lang = newLang;
  };

  // Update document metadata when language changes
  useEffect(() => {
    if (mounted) {
      document.title = t.pageTitle;
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', t.pageDescription);
      }
      // Update html lang attribute
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const t = translations[lang];
  const whatsappLink = getWhatsAppLink(lang);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="noise-bg min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-purple-950/30 -z-10" />
      </div>
    );
  }

  return (
    <div className="noise-bg min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-purple-950/30 -z-10" />
      
      {/* Blur Orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-rose-600/20 rounded-full blur-[128px] -z-10" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[150px] -z-10" />
      
      {/* Navbar */}
      <Navbar 
        lang={lang} 
        onLanguageChange={handleLanguageChange} 
        translations={t}
        whatsappLink={whatsappLink}
      />
      
      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="opacity-0 animate-fade-in-up animation-delay-100">
            <Badge>{t.badge}</Badge>
          </div>
          
          {/* Title */}
          <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none opacity-0 animate-fade-in-up animation-delay-200">
            {t.title}
          </h1>
          
          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-xl md:text-2xl font-bold text-rose-500 uppercase tracking-wide opacity-0 animate-fade-in-up animation-delay-300">
            {t.subtitle}
          </p>
          
          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
            {t.description}
          </p>
          
          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-500">
            <Button 
              variant="primary" 
              href={whatsappLink}
              icon={MessageCircle}
              className="w-full sm:w-auto"
              aria-label={t.primaryButton}
            >
              {t.primaryButton}
            </Button>
            
            <Button 
              variant="secondary" 
              href={MAIN_SITE}
              icon={ArrowRight}
              className="w-full sm:w-auto"
              aria-label={t.secondaryButton}
            >
              {t.secondaryButton}
            </Button>
          </div>
        </div>
        
        {/* Footer hint */}
        <footer className="absolute bottom-6 text-center text-zinc-600 text-sm opacity-0 animate-fade-in-up animation-delay-500">
          © {new Date().getFullYear()} MatosDev. {t.footer}
        </footer>
      </main>
    </div>
  );
}
