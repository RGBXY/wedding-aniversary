/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#f7ecde',
        'primary-color': '#6b4f61',
        'secondary-color': '#867d65',
      },
      fontFamily: {
        montserrat: 'Montserrat',
        waterfall: 'Waterfall',
        petit: 'Petit Formal Script',
        average: 'Average',
        cinzel: 'Cinzel',
        yeseva: 'Yeseva One',
      },
    },
  },
  plugins: [],
}
