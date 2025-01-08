

// tmdbService.ts
export const getTrendingWeekFilms = (language: string) => `/trending/movie/week?language=${language}`;
export const getTopRated = (language: string) => `/movie/top_rated?language=${language}`;



