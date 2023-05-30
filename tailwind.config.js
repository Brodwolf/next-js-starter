/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
          'purple-full': '#8B13F4',
          'light-100': '#FFFFFF',
          'light-200': '#FFFAF1',
          'light-300': '#E1E1E6',
          'light-400': '#C4C4CC',
          'light-500': '#7C7C8A',
          'dark-100': '#000405',
          'dark-200': '#00070A',
          'dark-300': '#000204',
          'dark-400': '#000a0F',
          'dark-500': '#000c12',
          'dark-600': '#00111A',
          'dark-700': '#001119',
          'dark-800': '#0D161B',
          'dark-900': '#0D1D25',
          'dark-1000': '#192227'
      }
    },
  },
  plugins: [],
}
