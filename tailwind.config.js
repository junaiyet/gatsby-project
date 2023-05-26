/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1604px',
      }
    },
    colors:{
      'primary':'#F46B5B',
      'old-gray':'#A7A7A7',
      'black':'#383838',
      'gray':'#D0D0D2',
   },

  },
  plugins: [],
}

