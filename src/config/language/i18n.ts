import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)
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
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
