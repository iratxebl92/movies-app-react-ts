import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";



export const useTrendingMovies = (content: string, language: string) => {

//content es movie o tv
  return useQuery({
    queryKey: ["trendingMovies", content, language],
    queryFn: () => apiClient.findTrendingMovies( content, language),
  });
};

export const useTopRatedMovies = (content: string, language: string) => {
  return useQuery({
    queryKey: ["topRatedMovies", content, language],
    queryFn: () => apiClient.findTopRated(content, language),
  });
};

export const usePopularMovies = (content: string, language: string) => {
  return useQuery({
    queryKey: ["popularMovies", content, language],
    queryFn: () => apiClient.findPopular(content, language),
  });
}
export const useDetailsAndCast = (content: string, id: number, language: string) => {

  return useQuery({
    queryKey: ["detailsAndCast", content, id, language], // Clave única para caché
    queryFn: () => apiClient.findDetailsAndCast(content, id, language), // Llamada combinada
  });
};
export const useImages = (content: string, id: number) => {
  return useQuery({
    queryKey: ["images", content, id],
    queryFn: () => apiClient.findImages(content, id),
  });
}

export const usePersonMovies = (content: string, id: number) => {
  return useQuery({
    queryKey: ["personMovies", content, id],
    queryFn: () => apiClient.findPersonContent(content, id),
  });
}
export const usePersonImages = ( id: number) => {
  return useQuery({
    queryKey: ["personImages",  id],
    queryFn: () => apiClient.findPersonImages(id),
  });
}
export const usePersonInformation = ( id: number, language: string) => {
  return useQuery({
    queryKey: ["personInformation",  id, language],
    queryFn: () => apiClient.findPersonInformation(id, language),
  });
}

export const usePersonSocialMedia = ( id: number) => {
  return useQuery({
    queryKey: ["personSocialMedia",  id],
    queryFn: () => apiClient.findPersonSocialMedia(id),
  });
}

export const useVideos = (content:string, id: number) => {
  return useQuery({
    queryKey: ["videos", content, id],
    queryFn: () => apiClient.findVideos(content, id),
  });
}

export const useKeywords = (content:string, id: number) => {
  return useQuery({
    queryKey: ["keywords", content, id],
    queryFn: () => apiClient.findKeywords(content, id),
  });
}
export const useContentKeywords = (content:string, id: string) => {
  return useQuery({
    queryKey: ["contentKeywords", content, id],
    queryFn: () => apiClient.findContentKeywords(content, id),
  });
}

