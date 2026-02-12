import './globals.css';

export const metadata = {
  title: 'Sitio en construcción | MatosDev',
  description: 'Este sitio está en construcción. Visita matosdev.es o contáctame por WhatsApp.',
  keywords: 'desarrollo web, UI/UX, Next.js, MatosDev, diseño web, web development',
  authors: [{ name: 'MatosDev' }],
  openGraph: {
    title: 'Sitio en construcción | MatosDev',
    description: 'Este sitio está en construcción. Visita matosdev.es o contáctame por WhatsApp.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
