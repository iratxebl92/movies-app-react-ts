import { useQuery, keepPreviousData } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import {
  IVideoResponse,
  IDetailsAndCastResponse,
  IImagesResponse,
  IPersonMoviesResponse,
  IPersonImagesResponse,
  IPersonInformation,
  IPersonSocialMedia,
  IKeywordsResponse,
  IDiscoverMoviesResponse,
  IPopularMoviesResponse,
  ITopRatedMoviesResponse,
  IUpcomingMoviesResponse,
  IRecommendationsResponse,
  IGenresListResponse,
  IWatchProvidersResponse,
  ILanguagesResponse,
  ICreditsResponse,
  ISearchResponse,
  ReviewsApiResponse,
  ISeason
} from "../interfaces";

export const useTrendingMovies = (content: string, language: string) => {
  return useQuery<IDiscoverMoviesResponse>({
    queryKey: ["trendingMovies", content, language],
    queryFn: () => apiClient.findTrendingMovies(content, language),
  });
};

export const useTopRatedMovies = (content: string, language: string) => {
  return useQuery<ITopRatedMoviesResponse>({
    queryKey: ["topRatedMovies", content, language],
    queryFn: () => apiClient.findTopRated(content, language),
  });
};

export const usePopularMovies = (content: string, language: string) => {
  return useQuery<IPopularMoviesResponse>({
    queryKey: ["popularMovies", content, language],
    queryFn: () => apiClient.findPopular(content, language),
  });
};
export const useDetailsAndCast = (content: string, id: number, language: string) => {
  return useQuery<IDetailsAndCastResponse>({
    queryKey: ["detailsAndCast", content, id, language],
    queryFn: () => apiClient.findDetails(content, id, language),
  });
};
export const useImages = (content: string, id: number) => {
  return useQuery<IImagesResponse>({
    queryKey: ["images", content, id],
    queryFn: () => apiClient.findImages(content, id),
  });
};
export const usePersonMovies = (content: string, id: number) => {
  return useQuery<IPersonMoviesResponse>({
    queryKey: ["personMovies", content, id],
    queryFn: () => apiClient.findPersonContent(content, id),
  });
};
export const usePersonImages = (id: number) => {
  return useQuery<IPersonImagesResponse>({
    queryKey: ["personImages", id],
    queryFn: () => apiClient.findPersonImages(id),
  });
};
export const usePersonInformation = (id: number, language: string) => {
  return useQuery<IPersonInformation>({
    queryKey: ["personInformation", id, language],
    queryFn: () => apiClient.findPersonInformation(id, language),
  });
};
export const usePersonSocialMedia = (id: number) => {
  return useQuery<IPersonSocialMedia>({
    queryKey: ["personSocialMedia", id],
    queryFn: () => apiClient.findPersonSocialMedia(id),
  });
};
export const useVideos = (content: string, id: number) => {
  return useQuery<IVideoResponse>({
    queryKey: ["videos", content, id],
    queryFn: () => apiClient.findVideos(content, id),
  });
};
export const useKeywords = (content: string, id: number) => {
  return useQuery<IKeywordsResponse>({
    queryKey: ["keywords", content, id],
    queryFn: () => apiClient.findKeywords(content, id),
  });
};
export const useContentKeywords = (content: string, id: string, language: string) => {
  return useQuery<IDiscoverMoviesResponse>({
    queryKey: ["contentKeywords", content, id, language],
    queryFn: () => apiClient.findContentKeywords(content, id, language),
  });
};
export const useMovies = (content: string, language: string, page: number, genres: string[]) => {
  return useQuery<IDiscoverMoviesResponse>({
    queryKey: ["movies", content, language, page, genres],
    queryFn: () => apiClient.findMovies(content, language, page, genres),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });
};
export const useUpcomingMovies = (language: string) => {
  return useQuery<IUpcomingMoviesResponse>({
    queryKey: ["upcoming", language],
    queryFn: () => apiClient.findUpComingMovies(language),
  });
};
export const useGenresList = (content: string) => {
  return useQuery<IGenresListResponse>({
    queryKey: ["genresList", content],
    queryFn: () => apiClient.findGenresList(content),
  });
};
export const useReviews = (content: string, id: number) => {
  return useQuery<ReviewsApiResponse>({
    queryKey: ["reviews"],
    queryFn: () => apiClient.findReviews(content, id),
  });
};
export const useWatchProviders = (content: string, id: number) => {
  return useQuery<IWatchProvidersResponse>({
    queryKey: ["watchProviders"],
    queryFn: () => apiClient.findWatchProviders(content, id),
  });
};
export const useSeasonDetails = (id: number, seasonNumber: number, language: string) => {
  return useQuery<ISeason>({
    queryKey: ["seasonDetails", id, seasonNumber, language],
    queryFn: () => apiClient.findSeasonDetails(id, seasonNumber, language),
  });
};
export const useRecommendations = (content: string, id: number, language: string) => {
  return useQuery<IRecommendationsResponse>({
    queryKey: ["recommendations", content, id, language],
    queryFn: () => apiClient.findRecommendations(content, id, language),
  });
};
export const useLanguages = () => {
  return useQuery<ILanguagesResponse>({
    queryKey: ["languages"],
    queryFn: () => apiClient.findLanguages(),
  });
};
export const useTvCredits = (id: string) => {
  return useQuery<ICreditsResponse>({
    queryKey: ["tvCredits", id],
    queryFn: () => apiClient.findCredits(id),
  });
};
export const useCredits = (content: string) => {
  return useQuery<ICreditsResponse>({
    queryKey: ["credits", content],
    queryFn: () => apiClient.findCredits(content),
  });
};
export const useSearch = (query: string, language: string) => {
  return useQuery<ISearchResponse>({
    queryKey: ["search", query, language],
    queryFn: () => apiClient.findSearch(query, language),
  });
};




/*
La queryKey es como el "ID" de los datos que estás pidiendo. React Query la usa para:

Saber si ya tiene esos datos en caché.

Decidir si necesita hacer una nueva petición o no.

Controlar actualizaciones, revalidaciones, etc.


Cada vez que page cambia (por ejemplo, al hacer setPage(prev => prev + 1)):

React vuelve a renderizar tu componente.

En esa nueva renderización, useQuery se ejecuta de nuevo.

Como la queryKey ahora es diferente (por ejemplo, ["movies", "es", 2] en vez de ["movies", "es", 1]), React Query la considera una query nueva.

Como esa combinación no está en caché, React Query dispara queryFn (tu apiClient.findMovies(...)) para traer los datos de esa página.
*/