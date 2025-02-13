

// tmdbService.ts
export const getTrendingWeekFilms = (content:string) => `/trending/${content}/week?language=es-ES`;
export const getTopRated = (content: string) => `/movie/top_rated?language=es-ES`;



