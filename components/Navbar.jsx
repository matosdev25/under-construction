'use client';

import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/50761912312?text=Hola%20MatosDev%2C%20vi%20que%20el%20sitio%20est%C3%A1%20en%20construcci%C3%B3n%20y%20quiero%20cotizar%20una%20web.';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="https://matosdev.es" 
          className="text-white font-bold text-xl tracking-wider hover:text-rose-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          aria-label="MatosDev - Ir al sitio principal"
        >
          MATOSDEV
        </a>
        
        {/* CTA Button */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm hover:bg-white/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-4 h-4 group-hover:text-rose-400 transition-colors" aria-hidden="true" />
          <span className="hidden sm:inline">Hablemos</span>
        </a>
      </div>
    </nav>
  );
}
