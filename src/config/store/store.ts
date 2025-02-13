

import { create } from 'zustand';
type ContentType = 'movie' | 'tv';
interface MoviesStore {
  theme: 'light' | 'dark';
  topRatedSelected: ContentType;
  popularSelected: ContentType;
  trendingSelected: 'week' | 'day';
  topRatedOption: (content: 'movie' | 'tv') => void;
  trendingOption: (content: 'week' | 'day') => void;
  popularOption: (content: 'movie' | 'tv') => void;
  toggleTheme: () => void;
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  trendingSelected: 'week',
  topRatedSelected: 'movie',
  popularSelected: 'movie',
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
