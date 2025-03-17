

// tmdbService.ts
export const getTrending = (content:string,  language:string) => `/trending/movie/${content}?language=${language}`;
export const getTopRated = (content: string, language:string) => `/${content}/top_rated?language=${language}`;
export const getPopular = (content: string, language:string) => `/${content}/popular?language=${language}`;
export const getDetails = (content: string, id: number, language:string) => `/movie/674?language=es-ES`;
export const getCast = (content: string, id: number) => `/movie/674/credits`;
export const getImages = (content: string, id: number) => `/movie/674/images`;
export const getVideo = (content: string, id: number) => `/movie/674/videos`;
export const getRecommendations = (content: string, id: number) => `/movie/674/recommendations`;
export const getSimmilar = (content: string, id: number) => `/movie/674/similar`;
export const getPersonContent = (content: string, id: number) => `/person/6193/${content}_credits`;
export const getPersonImages = (id:number) => `https://api.themoviedb.org/3/person/6193/images`;

