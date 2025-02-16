import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";


export const useTrendingMovies = (content: string, language: string) => {

  console.log(language, "idioma")
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