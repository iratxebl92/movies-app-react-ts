import { useQuery } from "react-query";
import apiClient from "../services/apiClient";

export const useTrendingMovies = () => {
  return useQuery("trendingMovies", apiClient.findTrendingMovies);
};

export const useTopRatedMovies = () => {
  return useQuery("topRatedMovies", apiClient.findTopRated)
}

