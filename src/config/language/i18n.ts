import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { run } from 'node:test';

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)  // Permite que React use i18n
  .init({
    resources: {
      en: {
        translation: {
          theme: "Theme",
          trending: "Trending",
          topRated: "Top Rated",
          popular: "Popular",
          home: "Home",
          movies: "Movies",
          tv: "TV Shows",
          cast: "(See all)",
          topCast: "Top Cast",
          status: "Status:",
          releaseDate: "Release Date:",
          runtime: "Runtime:",
          director: "Director:",
          writer: "Writer:",
          female: "Female",
          male: "Male",
          info: "Information",
          videos: "Videos",
          reviews: "Reviews",
          images: "Images",
          recommendations: "Recommendations",
          similar: "Similar",
          watchTrailer: "Watch Trailer",
          watchMore: "Watch More",
          watchLess: "Watch Less",
          watchAll: "Watch All",
          watchLatest: "Watch Latest",
          watchOldest: "Watch Oldest",
          keywords: "Keywords",
          resultsKeywordsTitle: "Results matching:",
          

        },
      },
      es: {
        translation: {
          theme: "Tema",
          trending: "Tendencias",
          topRated: "Mejor Valorados",
          popular: "Populares",
          home:  "Inicio",
          movies: "Películas",
          tv: "Series",
          cast: "(Ver completo)",
          topCast: "Reparto Principal",
          status: "Estado:",
          releaseDate: "Fecha de Estreno:",
          runtime: "Duración:",
          director: "Dirección:",
          writer: "Guionista:",
          female: "Mujer",
          male: "Hombre",
          info: "Información",
          videos: "Videos",
          reviews: "Reseñas",
          images: "Imágenes",
          recommendations: "Recomendaciones",
          similar: "Similares",
          watchTrailer: "Ver Trailer",
          watchMore: "Ver Más",
          watchLess: "Ver Menos",
          watchAll: "Ver Todo",
          watchLatest: "Ver Último",
          watchOldest: "Ver Antiguo",
          keywords: "Palabras clave",
          resultsKeywordsTitle: "Resultados que coinciden con:",

          
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
