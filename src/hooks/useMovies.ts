import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import { MoviesContext } from "../context/MoviesContext";

export const useTrendingMovies = (content: string) => {
//content es movie o tv
  return useQuery({
    queryKey: ["trendingMovies", content],
    queryFn: () => apiClient.findTrendingMovies( content),
  });
};

export const useTopRatedMovies = (content: string) => {
  return useQuery({
    queryKey: ["topRatedMovies", content],
    queryFn: () => apiClient.findTopRated(content),
  });
};