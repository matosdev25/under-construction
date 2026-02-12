'use client';

import { MessageCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Badge from '@/components/Badge';
import Button from '@/components/Button';

const WHATSAPP_LINK = 'https://wa.me/50761912312?text=Hola%20MatosDev%2C%20vi%20que%20el%20sitio%20est%C3%A1%20en%20construcci%C3%B3n%20y%20quiero%20cotizar%20una%20web.';
const MAIN_SITE = 'https://matosdev.es';

export default function UnderConstruction() {
  return (
    <div className="noise-bg min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-zinc-950 to-purple-950/30 -z-10" />
      
      {/* Blur Orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-rose-600/20 rounded-full blur-[128px] -z-10" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[150px] -z-10" />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="opacity-0 animate-fade-in-up animation-delay-100">
            <Badge>Desarrollo Web & UI/UX con Next.js</Badge>
          </div>
          
          {/* Title */}
          <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-none opacity-0 animate-fade-in-up animation-delay-200">
            En Construcción
          </h1>
          
          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-xl md:text-2xl font-bold text-rose-500 uppercase tracking-wide opacity-0 animate-fade-in-up animation-delay-300">
            Estamos trabajando en este sitio
          </p>
          
          {/* Supporting Text */}
          <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
            El sitio que intentas ver todavía no está listo. Si necesitas una web o soporte, contáctame.
          </p>
          
          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-500">
            <Button 
              variant="primary" 
              href={WHATSAPP_LINK}
              icon={MessageCircle}
              className="w-full sm:w-auto"
              aria-label="Contactar a MatosDev por WhatsApp"
            >
              Contactar por WhatsApp
            </Button>
            
            <Button 
              variant="secondary" 
              href={MAIN_SITE}
              icon={ArrowRight}
              className="w-full sm:w-auto"
              aria-label="Ir al sitio principal de MatosDev"
            >
              Ir a mi sitio principal
            </Button>
          </div>
        </div>
        
        {/* Footer hint */}
        <footer className="absolute bottom-6 text-center text-zinc-600 text-sm opacity-0 animate-fade-in-up animation-delay-500">
          © {new Date().getFullYear()} MatosDev. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  );
}
