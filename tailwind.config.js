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
        "customGray": "#82858a",
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'], 
        sans: ['Montserrat', 'sans-serif'],    
      },
      textDecorationThickness: {
        3: '3px',
      },
      backgroundImage: {
        "search-bg": "url('/images/popcorn.jpg')"
      },
      height: {
        "15": "15rem",
        "17.5": "17.5rem",
        "320": "20rem",
        "600": "600px"
      },
      width: {
        "43": "43rem",
        "75": "75rem",
        "100": "6.25rem",
        "200": "12.5rem",
        "300": "18.75rem",
        "500": "31.25rem",
      },
      maxWidth: {
        '1920': '120rem',
      },
    },
  },
  plugins: [],
}

