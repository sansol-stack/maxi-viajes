/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // El azul se transforma en una escala de negros profundos y grafito
        primary: {
          DEFAULT: '#121212', // Negro mate premium de fondo principal
          light: '#1e1e1e',   // Gris oscuro para tarjetas y elevaciones
          dark: '#0a0a0a',    // Negro absoluto para secciones puras
        },
        // El naranja pasa a ser un dorado sofisticado (Champagne / Gold)
        secondary: {
          DEFAULT: '#d4af37', // Dorado clásico metálico equilibrado
          light: '#f3e5ab',   // Dorado suave/crema para contrastes legibles
          dark: '#aa7c11',    // Dorado bronce para estados hover o bordes
        },
        // El amarillo viejo pasa a ser un dorado viejo/platino para detalles sutiles
        accent: {
          DEFAULT: '#b39247', // Dorado apagado, muy elegante para subtítulos
          light: '#ebd091',   // Brillo sutil
          dark: '#85641c',    // Sombra dorada
        },
        // El bloque dark refuerza la profundidad del sitio
        dark: {
          DEFAULT: '#000000', // Negro absoluto para el Navbar o Footer
          lighter: '#1a1a1a', // Gris carbón
        },
        // Bloque light adaptado para mantener un fondo limpio si hay secciones claras, usando tizas y marfiles
        light: {
          DEFAULT: '#faf9f6', // Blanco roto / Marfil (más premium que el blanco puro)
          dark: '#e3e1da',    // Gris tiza para bordes sutiles
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        // Degradados sutiles que simulan un acabado satinado o metalizado oscuro
        'gradient-hero': 'linear-gradient(135deg, #000000 0%, #121212 50%, #1e1e1e 100%)',
        'gradient-cta': 'linear-gradient(135deg, #121212 0%, #0a0a0a 100%)',
        'gradient-card': 'linear-gradient(154deg, #4b4b4bff 0%, #121212 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        // Sombras suaves y oscuras que no ensucian el fondo negro, y un resplandor dorado sutil
        'card': '0 4px 30px rgba(0, 0, 0, 0.5)',
        'card-hover': '0 10px 40px rgba(212, 175, 55, 0.08)', // Leve resplandor dorado al pasar el cursor
        'orange': '0 4px 20px rgba(212, 175, 55, 0.25)',     // Ahora es un resplandor dorado para botones principales
      },
    },
  },
  plugins: [],
}