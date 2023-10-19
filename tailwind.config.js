/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary : "Heebo, sans-serif"
    },
    extend: {
      screens: {
        'sm': '480px',   
        'md': '680px',     
        'lg': '1024px',    
        'xl': '1280px',
      },
      backgroundImage: {
        hero : "url('./assets/bg_hero.svg')",
      },
      boxShadow: {
        primary: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}