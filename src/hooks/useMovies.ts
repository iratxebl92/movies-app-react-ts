import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import apiClient from "../services/apiClient";
import { MoviesContext } from "../context/MoviesContext";

export const useTrendingMovies = (content: string) => {
  const { i18n }: any = useContext(MoviesContext); 
  return useQuery({
    queryKey: ["trendingMovies", i18n.language, content],
    queryFn: () => apiClient.findTrendingMovies(i18n.language, content),
  });
};

export const useTopRatedMovies = () => {
  const { i18n }: any = useContext(MoviesContext); 
  return useQuery({
    queryKey: ["topRatedMovies", i18n.language],
    queryFn: () => apiClient.findTopRated(i18n.language),
  });
};