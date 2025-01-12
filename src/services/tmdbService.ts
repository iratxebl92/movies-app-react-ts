

// tmdbService.ts
export const getTrendingWeekFilms = (language: string, content:string) => `/trending/${content}/week?language=${language}`;
export const getTopRated = (language: string) => `/movie/top_rated?language=${language}`;



