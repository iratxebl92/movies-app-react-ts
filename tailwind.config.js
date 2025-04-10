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

       "dark":"#282C34",
       "light":"#EDEFF4",
        "textDark": "#D1D5DB",
        "details": "#bcacdb",
        "customGray": "#82858a",
        "customColorTex": "rgb(199, 208, 224)",
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
        "24": "24rem",
        "30": "30rem",
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
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite'
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)',
        'shimmer-dark': 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0) 100%)'
      }
    },
  },
  plugins: [],
}

// posible dark --> "#2C3E50"
/*
     "dark":"#121212",
       "light":"#FAFAFA",
*/ 