/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  "darkMode": 'class',
  theme: {
    
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      }, 
      colors: {

       "dark":"#2C3E50",
        "text-dark": "#fff",
        "details": "#bcacdb",
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'], 
        sans: ['Montserrat', 'sans-serif'],     // Fuente para el texto general
      },
      textDecorationThickness: {
        3: '3px',
      },
      backgroundImage: {
        "search-bg": "url('https://image.tmdb.org/t/p/original/p9uplKCEPJq4xGJPJJV46KW1dsA.jpg')"
      },
      height: {
        "320": "20rem"
      },
      width: {
        "100": "6.25rem",
        "200": "12.5rem",
        "300": "18.75rem",
        "500": "31.25rem",
      }
    },
  },
  plugins: [],
}

