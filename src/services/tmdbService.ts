

// tmdbService.ts
export const getTrendingWeekFilms = (content:string) => `/trending/${content}/week?language=es`;
export const getTopRated = (content: string) => `/movie/top_rated?language=es`;



