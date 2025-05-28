/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sansation: ['Sansation', 'sans-serif'],
        robotoslab: ['Roboto Slab', 'serif'],   // Add Roboto Slab
      },
      fontSize: {
        '25px': '25px',      // Custom font size 25px
      },
      lineHeight: {
        '35px': '35px',      // Custom line height 35px
      },
      fontWeight: {
        normal: 400,
      }
    },
  },
  plugins: [],
}
