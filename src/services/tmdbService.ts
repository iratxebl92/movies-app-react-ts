

// tmdbService.ts
export const getTrending = (content:string,  language:string) => `/trending/all/${content}?language=${language}`;
export const getTopRated = (content: string, language:string) => `/${content}/top_rated?language=${language}`;
export const getPopular = (content: string, language:string) => `/${content}/popular?language=${language}`;
export const getDetailsAndCast = (content: string, id: number, language: string) =>`/${content}/${id}?language=${language}&append_to_response=credits`; // 'append_to_response' añade el reparto
  
export const getImages = (content: string, id: number) => `/movie/674/images`;
export const getVideo = (content: string, id: number) => `/${content}/${id}/videos`;
export const getRecommendations = (content: string, id: number) => `/movie/674/recommendations`;
export const getSimmilar = (content: string, id: number) => `/movie/674/similar`;
export const getPersonContent = (content: string, id: number) => `/person/${id}/${content}_credits`;
export const getPersonImages = (id:number) => `https://api.themoviedb.org/3/person/${id}/images`;
export const getPersonInformation = (id: number, language: string) => `https://api.themoviedb.org/3/person/${id}?language=${language}`;
export const getPersonSocialMedia = (id:number) => `https://api.themoviedb.org/3/person/${id}/external_ids`;
export const getKeywords = (content: string,id: number) => `https://api.themoviedb.org/3/${content}/${id}/keywords`;
export const getContentKeywords = (content: string, id: string) => `https://api.themoviedb.org/3/discover/${content}?with_keywords=${id}`;
export const getMovies = (content: string,  language: string, page: number) => `https://api.themoviedb.org/3/discover/${content}?include_adult=false&include_video=false&page=${page}&sort_by=popularity.desc&9659c14f30068211d6925230b38cb5d5=&language=${language}`;
export const getUpcomingMovies = () => `https://api.themoviedb.org/3/movie/upcoming`;
export const getGenresList = (content: string) => `https://api.themoviedb.org/3/genre/${content}/list`;
export const getReviews = (content: string, id: number) => `/${content}/${id}/reviews`;
export const getWatchProviders = (content: string, id: number) => `/${content}/${id}/watch/providers`;

