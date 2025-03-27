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
export const useDetails = (content: string, id: number, language: string) => {
  return useQuery({
    queryKey: ["details", content, id, language],
    queryFn: () => apiClient.findDetails(content, id, language),
  });
}
export const useCast = (content: string, id: number) => {
  return useQuery({
    queryKey: ["cast", content, id],
    queryFn: () => apiClient.findCast(content, id),
  });
}
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


