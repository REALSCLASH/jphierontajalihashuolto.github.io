/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: '#FFEFFC',
        theme: '#DECBB7',
        nc: '#2d2926',
       
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
