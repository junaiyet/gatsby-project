/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1320px',
      }
    },
    colors:{
      'primary':'#F46B5B',
      'range-primary':'#F46B5B',
      'old-gray':'#A7A7A7',
      'black':'#383838',
      'gray':'#d0d0d261',
      'white':'#FAFAFA',
   },

  },
  plugins: [],
}

