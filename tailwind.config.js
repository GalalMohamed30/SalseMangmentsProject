/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Bg-Main-color': '#171821',
        'Main-color': '#21222D',
        'Primary-color': '#20AEF3',
        'Table-bg': '#111827ab'
      },
    },

  },
  plugins: [],
}