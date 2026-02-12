export const translations = {
  es: {
    navbarCta: 'Hablemos',
    title: 'EN CONSTRUCCIÓN',
    subtitle: 'ESTAMOS TRABAJANDO EN ESTE SITIO',
    description: 'El sitio que intentas ver todavía no está listo. Si necesitas una web o soporte, contáctame.',
    badge: 'Desarrollo Web & UI/UX con Next.js',
    primaryButton: 'Contactar por WhatsApp',
    secondaryButton: 'Ir a mi sitio principal',
    whatsappMessage: 'Hola MatosDev, vi que el sitio está en construcción y quiero cotizar una web.',
    pageTitle: 'Sitio en construcción | MatosDev',
    pageDescription: 'Este sitio está en construcción. Visita matosdev.es o contáctame por WhatsApp.',
    footer: 'Todos los derechos reservados.',
  },
  en: {
    navbarCta: "Let's talk",
    title: 'UNDER CONSTRUCTION',
    subtitle: "WE'RE WORKING ON THIS SITE",
    description: "The site you're trying to view isn't ready yet. If you need a website or support, contact me.",
    badge: 'Web Development & UI/UX with Next.js',
    primaryButton: 'Contact on WhatsApp',
    secondaryButton: 'Go to my main website',
    whatsappMessage: "Hi MatosDev, I saw the site is under construction and I'd like to get a quote for a website.",
    pageTitle: 'Under construction | MatosDev',
    pageDescription: 'This site is under construction. Visit matosdev.es or contact me on WhatsApp.',
    footer: 'All rights reserved.',
  },
};

export const SUPPORTED_LANGUAGES = ['es', 'en'];
export const DEFAULT_LANGUAGE = 'es';

export function detectLanguage() {
  // Check if we're in browser environment
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  // 1. Check localStorage first
  const storedLang = localStorage.getItem('lang');
  if (storedLang && SUPPORTED_LANGUAGES.includes(storedLang)) {
    return storedLang;
  }

  // 2. Check navigator.languages (array ordered by preference)
  const browserLanguages = navigator.languages || [navigator.language];
  
  for (const lang of browserLanguages) {
    // Extract base language (e.g., 'es-ES' -> 'es', 'en-US' -> 'en')
    const baseLang = lang.split('-')[0].toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(baseLang)) {
      return baseLang;
    }
  }

  // 3. Fallback to default
  return DEFAULT_LANGUAGE;
}

export function getWhatsAppLink(lang) {
  const message = translations[lang]?.whatsappMessage || translations.es.whatsappMessage;
  return `https://wa.me/50761912312?text=${encodeURIComponent(message)}`;
}
