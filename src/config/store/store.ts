
import { create } from 'zustand';
import i18n from '../language/i18n';


type ContentType = 'movie' | 'tv';

interface MoviesStore {
  theme: 'light' | 'dark';
  language: string;
  topRatedSelected: ContentType;
  popularSelected: ContentType;
  trendingSelected: 'week' | 'day';
  setLanguage: (lang: string) => void;
  topRatedOption: (content: ContentType) => void;
  trendingOption: (content: 'week' | 'day') => void;
  popularOption: (content: ContentType) => void;
  toggleTheme: () => void;
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  language: i18n.language, // Inicializamos con el idioma actual
  trendingSelected: 'week',
  topRatedSelected: 'movie',
  popularSelected: 'movie',
  setLanguage: (lang) => {
    i18n.changeLanguage(lang); // Cambiamos el idioma en i18n
    set({ language: lang }); // Actualizamos el estado global
  },
  topRatedOption: (content) => set({ topRatedSelected: content }),
  popularOption: (content) => set({ popularSelected: content }),
  trendingOption: (content) => set({ trendingSelected: content }),
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    if (newTheme === 'dark') {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
    return { theme: newTheme };
  }),
}));
