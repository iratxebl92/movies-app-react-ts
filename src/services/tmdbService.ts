

// tmdbService.ts
export const getTrending = (content:string,  language:string) => `/trending/movie/${content}?language=${language}`;
export const getTopRated = (content: string, language:string) => `/${content}/top_rated?language=${language}`;
export const getPopular = (content: string, language:string) => `/${content}/popular?language=${language}`;
export const getDetails = (content: string, id: number, language:string) => `/movie/114?language=es-ES`;
export const getCast = (content: string, id: number) => `/movie/114/credits`;


