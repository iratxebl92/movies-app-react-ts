import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import i18n from "../language/i18n";
import { ISearch } from "../../interfaces/ISearch";

type ContentType = "movie" | "tv";

interface MoviesStore {
  theme: "light" | "dark";
  language: string;
  topRatedSelected: ContentType;
  popularSelected: ContentType;
  keywordsSelected: ContentType;
  trendingSelected: "week" | "day";
  personContentSelected: "movie" | "tv";
  videos: any;
  videosType: string;
  imagesType: string;
  setImagesType: (type: string) => void;
  setVideosType: (type: string) => void;
  setTheme: (theme: any | undefined) => void;
  setLanguage: (lang: string) => void;
  topRatedOption: (content: ContentType) => void;
  trendingOption: (content: "week" | "day") => void;
  popularOption: (content: ContentType) => void;
  keywordsOption: (content: ContentType) => void;
  personContentOption: (content: ContentType) => void;
  toggleTheme: (content: any) => void;
  openCastModal: boolean;
  openVideoModal: boolean;
  setOpenCastModal: (open: boolean) => void;
  openBackdropModal: boolean;
  setOpenBackdropModal: (open: boolean) => void;
  setOpenVideoModal: (open: boolean) => void;
  currentVideoIndex: number;
  setCurrentVideoIndex: (index: number) => void;
  selectedVideoKey: string;
  setSelectedVideoKey: (key: string) => void;
  setVideos: (videos: any) => void;
  isWatchTrailerButton: boolean;
  setIsWatchTrailerButton: (value: boolean) => void;
  filterParams: {
    genres: string[] | undefined;
  };
  setFilterParams: (params: Partial<MoviesStore['filterParams']>) => void;
  searchModal: boolean, 
  setSearchModal: (option: boolean) => void,
  searchHistory: ISearch[],
  setSearchHistory: (search: ISearch[]) => void
// Explicación del tipado:
// 1. MoviesStore['filterParams'] -> Accede al tipo de la propiedad filterParams del store
// 2. Partial<T> -> Hace que todas las propiedades sean opcionales
// 3. (params: ...) => void -> Función que recibe params y no devuelve nada
// 
// Ejemplos de uso:
// setFilterParams({ release_date_max: "2024-12-31" }) // ✅ Solo una propiedad
// setFilterParams({ release_date_min: "2024-01-01", vote_average_min: 5 }) // ✅ Varias propiedades
// setFilterParams({ invalidProperty: "value" }) // ❌ Error: propiedad no existe
}

export const useMoviesStore = create<MoviesStore>()(
  persist(
    (set) => ({
      theme: "dark",
      language: i18n.language, // Inicializamos con el idioma actual
      trendingSelected: "week",
      topRatedSelected: "movie",
      popularSelected: "movie",
      keywordsSelected: "movie",
      personContentSelected: "movie",
      videos: null,
      videosType: "trailer",
      imagesType: "backdrops",
      setImagesType: (type: string) => set({ imagesType: type }),
      setVideosType: (type: string) => set({ videosType: type }),
      setVideos: (videos: any) => set({ videos: videos }),
      setTheme: (theme) => set({ theme }),
      setLanguage: (lang) => {
        i18n.changeLanguage(lang); // Cambiamos el idioma en i18n
        set({ language: lang }); // Actualizamos el estado global
      },
      topRatedOption: (content) => set({ topRatedSelected: content }),
      popularOption: (content) => set({ popularSelected: content }),
      keywordsOption: (content) => set({ keywordsSelected: content }),
      trendingOption: (content) => set({ trendingSelected: content }),
      personContentOption: (content) => set({ personContentSelected: content }),
      toggleTheme: (content) => set({ theme: content }),
      openCastModal: false,
      openVideoModal: false,
      setOpenCastModal: (open: boolean) => set({ openCastModal: open }),
      setOpenVideoModal: (open: boolean) => set({ openVideoModal: open }),
      openBackdropModal: false,
      setOpenBackdropModal: (open: boolean) => set({ openBackdropModal: open }),
      currentVideoIndex: 0,
      setCurrentVideoIndex: (index: number) =>
        set({ currentVideoIndex: index }),
      selectedVideoKey: "",
      setSelectedVideoKey: (key: string) => set({ selectedVideoKey: key }),
      isWatchTrailerButton: false,
      setIsWatchTrailerButton: (value: boolean) => set({ isWatchTrailerButton: value }),
      filterParams: {
        genres: [],
      },
      setFilterParams: (params) => set((state) => ({
        filterParams: {
          ...state.filterParams, // Mantiene los valores existentes
          ...params, // Actualiza los valores nuevos
        }
      })),
      searchModal: false,
      setSearchModal: (option) => set({
      searchModal: option
      }),
      searchHistory: [],
      setSearchHistory: (search) => set({
        searchHistory: search
      })
    }),

    {
      name: "movies-store", // Nombre del localStorage
      storage: createJSONStorage(() => localStorage), // Configura el almacenamiento para usar localStorage
    }
  )
);
