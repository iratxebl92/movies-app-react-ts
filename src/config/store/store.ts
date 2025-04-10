import { create } from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware'
import i18n from '../language/i18n';


type ContentType = 'movie' | 'tv';

interface MoviesStore {
  theme: 'light' | 'dark';
  language: string;
  topRatedSelected: ContentType;
  popularSelected: ContentType;
  trendingSelected: 'week' | 'day';
  personContentSelected: 'movie' | 'tv',
  filterDepartments: string,
  filterOptions: string,
  setLanguage: (lang: string) => void;
  topRatedOption: (content: ContentType) => void;
  trendingOption: (content: 'week' | 'day') => void;
  popularOption: (content: ContentType) => void;
  personContentOption: (content: ContentType) => void;
  toggleTheme: () => void;
  openCastModal: boolean;
  openVideoModal: boolean;
  setOpenCastModal: (open: boolean) => void;
  openBackdropModal: boolean;
  setOpenBackdropModal: (open: boolean) => void;
  setDepartments: (value: string) => void;
  setOptions: (value: string) => void;
  setOpenVideoModal: (open: boolean) => void;
  

}

export const useMoviesStore = create<MoviesStore>()(
  persist(
    (set) => ({
      theme: typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
      language: i18n.language, // Inicializamos con el idioma actual
      trendingSelected: 'week',
      topRatedSelected: 'movie',
      popularSelected: 'movie',
      personContentSelected: 'movie',
      filterDepartments: 'all',
      filterOptions: 'vote_count.desc',
      setLanguage: (lang) => {
        i18n.changeLanguage(lang); // Cambiamos el idioma en i18n
        set({ language: lang }); // Actualizamos el estado global
      },
      topRatedOption: (content) => set({ topRatedSelected: content }),
      popularOption: (content) => set({ popularSelected: content }),
      trendingOption: (content) => set({ trendingSelected: content }),
      personContentOption: (content) => set({ personContentSelected: content }),
      toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        if (newTheme === 'dark') {
          document.querySelector('html')?.classList.add('dark');
        } else {
          document.querySelector('html')?.classList.remove('dark');
        }
        return { theme: newTheme };
      }),
      openCastModal: false,
      openVideoModal: false,
      setOpenCastModal: (open: boolean) => set({ openCastModal: open }),
      setOpenVideoModal: (open: boolean) => set({ openVideoModal: open }),
      openBackdropModal: false,
      setOpenBackdropModal: (open: boolean) => set({ openBackdropModal: open }),
      setDepartments: (value) => set({ filterDepartments: value }),
      setOptions: (value) => set({ filterOptions: value }),
    }),
    {
      name: 'movies-store', // Nombre del localStorage
      storage: createJSONStorage(() => localStorage), // Configura el almacenamiento para usar localStorage
    }
  )
);
