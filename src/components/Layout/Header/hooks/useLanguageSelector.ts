import { useMoviesStore } from '../../../../config/store/store';
import { useTranslation } from 'react-i18next';

// Definición de los idiomas disponibles en la aplicación
export const languages = [
  { name: 'ES', value: 'es' },
  { name: 'EN', value: 'en' },
] as const;

// Tipo TypeScript que representa un idioma del array languages
export type Language = typeof languages[number];

export const useLanguageSelector = (closeMenu?: (() => void) | undefined) => {
  const { language, setLanguage } = useMoviesStore();
  const { i18n } = useTranslation();
  
  // Encontramos el idioma actual en el array de idiomas disponibles
  // Si no se encuentra, usamos el primero como valor por defecto
  const currentLanguage = languages.find(lang => lang.value === language) || languages[0];

  // Función que maneja el cambio de idioma
  // Actualiza tanto el store global como la configuración de i18n
  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage.value);
    i18n.changeLanguage(newLanguage.value);
    if (closeMenu) {
      closeMenu();
    }
  };

  return {
    currentLanguage,
    handleLanguageChange
  };
};
