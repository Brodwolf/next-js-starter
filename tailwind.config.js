/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purple-full': '#8B13F4',
        'dark-1000': '#121511',
        'dark-800': '#1B1E1A',
        'dark-600': '#242724',
        'dark-400': '#2F312E',
        'dark-200': '#383B37',
        'dark-000': '#3D3F3C',
        'blue-1000': '#006DD1',
        'blue-800': '#338ADA',
        'blue-600': '#66A7E3',
        'blue-400': '#99C4ED',
        'blue-200': '#CCE2F6',
        'blue-000': '#F2F7FC',
        'secundaria-1000': '#122D47',
        'secundaria-800': '#41576C',
        'secundaria-600': '#718191',
        'secundaria-400': '#A0ABB5',
        'secundaria-200': '#D0D5DA',
        'secundaria-000': '#F3F4F6',
      },
    },
  },
  plugins: [],
}
