/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'dashCol': 'minmax(0,2fr) minmax(0,8fr)',
        'mainCol': 'minmax(0,5fr) minmax(0,2fr)',
        'projCol': 'repeat(auto-fit, minmax(380px, 1fr))',
      },
      gridTemplateRows: {
        'dashRow': 'minmax(0, 1fr) minmax(0,9fr)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

