/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        poornima: {
          50: '#edf5ff',
          100: '#d7e7fe',
          200: '#b5d3fd',
          300: '#83b6fb',
          400: '#4a90f7',
          500: '#216ff2',
          600: '#0e55e5',
          700: '#05488B', // Brand Poornima Blue
          800: '#073a72',
          900: '#03254d',
          dark: '#051933',
          gold: '#FFC107', // Brand Poornima Gold
          goldHover: '#e5ac06',
          goldLight: '#fff8e1',
        },
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC05',
          green: '#34A853',
          grey: '#5F6368',
          dark: '#202124',
          surface: '#F8F9FA',
        }
      },
      fontFamily: {
        sans: ['"Google Sans"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Google Sans Display"', '"Outfit"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'google': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        'google-hover': '0 2px 6px 2px rgba(60,64,67,0.15), 0 8px 12px 4px rgba(60,64,67,0.15)',
        'pu-glow': '0 0 25px -5px rgba(5, 72, 139, 0.4)',
        'gold-glow': '0 0 25px -5px rgba(255, 193, 7, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
