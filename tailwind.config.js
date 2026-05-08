/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#0a0e27',
          100: '#0f1538',
          200: '#1a1f4a',
          300: '#252a5c',
          400: '#30356e',
          500: '#3b4080',
          600: '#464b92',
          700: '#5156a4',
          800: '#5c61b6',
          900: '#676cc8',
        },
        secondary: {
          50: '#050714',
          100: '#0a0e27',
          200: '#0f1538',
          300: '#1a1f4a',
          400: '#252a5c',
          500: '#30356e',
          600: '#3b4080',
          700: '#464b92',
          800: '#5156a4',
          900: '#5c61b6',
        },
        accent: {
          50: '#e8eaf6',
          100: '#c5cbe9',
          200: '#a3a8dc',
          300: '#8185cf',
          400: '#5f62c2',
          500: '#3d3fb5',
          600: '#2b2ca8',
          700: '#19199b',
          800: '#07068e',
          900: '#000080',
        },
        navy: {
          50: '#000080',
          100: '#000066',
          200: '#00004d',
          300: '#000033',
          400: '#00001a',
          500: '#000000',
          600: '#0a0e27',
          700: '#1a1f4a',
          800: '#2a305e',
          900: '#3a4172',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-right': 'fadeInRight 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 50%': { borderColor: 'white' },
          '51%, 100%': { borderColor: 'transparent' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
