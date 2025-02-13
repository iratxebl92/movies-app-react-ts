

import { create } from 'zustand';

interface MoviesStore {
  theme: 'light' | 'dark';
  contentSelected: 'movie' | 'tv';
  contentTypes: string[];
  timePeriods: string[];
  setContentSelected: (content: 'movie' | 'tv') => void;
  toggleTheme: () => void;
}

export const useMoviesStore = create<MoviesStore>((set) => ({
  theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  contentSelected: 'movie',
  contentTypes: ['movie', 'tv'],
  timePeriods: ['week', 'day'],
  setContentSelected: (content) => set({ contentSelected: content }),
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
