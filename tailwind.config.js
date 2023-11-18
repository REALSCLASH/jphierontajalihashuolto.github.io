/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        body: '',
        theme: '#DECBB7',
        nc: '#2f2a27',
        harmaa: '#333333',
       
      },
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
        'libre': ['Red Hat Display', 'sans-serif']
      }
    },
  },
  plugins: [
],
}
