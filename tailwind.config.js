/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sci: {
          black: '#020617',
          dark: '#0f172a',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          purple: '#a855f7',
          green: '#22c55e',
          gold: '#eab308',
          border: 'rgba(6, 182, 212, 0.2)',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'orbit': 'orbit 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.5)' },
        },
        scan: {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
