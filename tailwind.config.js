export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
          700: '#05488B',
          800: '#073a72',
          900: '#03254d',
          gold: '#FFC107',
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
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
