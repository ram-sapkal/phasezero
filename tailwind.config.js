/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        oswald:["Oswald", "sans-serif"],
        worksSans:["Work Sans", 'sans-serif'],
      },
      backgroundImage: {
        'lines-pattern':'repeating-linear-gradient(to bottom, white, white 2px, #f5f5f5 5px , #f5f5f5 50px)',
      },
    },
  },
  plugins: [],
}