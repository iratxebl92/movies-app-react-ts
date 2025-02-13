

// tmdbService.ts
export const getTrendingWeekFilms = (content:string) => `/trending/movie/${content}?language=es-ES`;
export const getTopRated = (content: string) => `/${content}/top_rated?language=es-ES`;
export const getPopular = (content: string) => `/${content}/popular?language=es-ES`;



