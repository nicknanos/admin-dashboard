/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'dashCol': '2fr 8fr',
        'mainCol': '8fr 2fr'
      },
      gridTemplateRows: {
        'dashRow': '1fr 9fr',
      }
    },
  },
  plugins: [],
}

