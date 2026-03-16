import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
  
});

export const metadata: Metadata = {
  title: 'Festa — Invitaciones Digitales de Autor',
  description: 'Diseño elegante y minimalista para tu Boda o 15 Años. Listo para compartir en 3 días.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {/* Aquí irá el <Header /> una vez que lo creemos */}
        
        {/* Agregamos un div contenedor para manejar el espaciado global */}
        <div className="relative flex min-h-screen flex-col">
          {children}
        </div>
<Header />
        <Analytics />
      </body>
    </html>
  )
}