// tmdbService.ts
export const getTrending = (content:string,  language:string) => `/trending/all/${content}?language=${language}`;
export const getTopRated = (content: string, language:string) => `/${content}/top_rated?language=${language}`;
export const getPopular = (content: string, language:string) => `/${content}/popular?language=${language}`;
export const getDetails= (content: string, id: number, language: string) =>`/${content}/${id}?language=${language}&append_to_response=credits`; // 'append_to_response' añade el reparto
export const getImages = (content: string, id: number) => `/${content}/${id}/images`;
export const getVideo = (content: string, id: number) => `/${content}/${id}/videos`;
export const getPersonContent = (content: string, id: number) => `/person/${id}/${content}_credits`;
export const getPersonImages = (id:number) => `https://api.themoviedb.org/3/person/${id}/images`;
export const getPersonInformation = (id: number, language: string) => `https://api.themoviedb.org/3/person/${id}?language=${language}`;
export const getPersonSocialMedia = (id:number) => `https://api.themoviedb.org/3/person/${id}/external_ids`;
export const getKeywords = (content: string,id: number) => `https://api.themoviedb.org/3/${content}/${id}/keywords`;
export const getContentKeywords = (content: string, id: string, language: string) => `https://api.themoviedb.org/3/discover/${content}?with_keywords=${id}&language=${language}`;
export const getUpcomingMovies = (language: string) => `https://api.themoviedb.org/3/movie/upcoming?language=${language}`;
export const getGenresList = (content: string) => `https://api.themoviedb.org/3/genre/${content}/list`;
export const getReviews = (content: string, id: number, language: string) => `/${content}/${id}/reviews?language=${language}`;
export const getWatchProviders = (content: string, id: number) => `/${content}/${id}/watch/providers`;
export const getSeasonDetails = (id: number, seasonNumber: number, language: string) => `/tv/${id}/season/${seasonNumber}?language=${language}`;
export const getRecommendations = (content: string, id: number, language: string) => `/${content}/${id}/recommendations?language=${language}`;
export const getLanguages = () => `https://api.themoviedb.org/3/configuration/languages`;
export const getCredits = (content: string) => `${content}`;
export const getSearch = (query: string, language: string) => `/search/multi?query=${query}&language=${language}`;
export const getMovies = (content: string,  language: string, page: number,  genres: string[]) => `https://api.themoviedb.org/3/discover/${content}?include_adult=false&page=${page}&language=${language}${genres.length > 0 ? `&with_genres=${genres.join(',')}` : ''}`;
