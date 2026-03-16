import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // El azul profundo de tu logo Festa
        'festa-navy': '#121B4A', 
        // El fondo crema para el toque minimalista y cálido
        'festa-cream': '#FDFBF7',
        // Un azul grisáceo para textos secundarios
        'festa-slate': '#5E6B8E',
        // Líneas y bordes sutiles
        'festa-border': '#E5E1DA',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Playfair Display', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
      }
    },
  },
  plugins: [],
} satisfies Config;