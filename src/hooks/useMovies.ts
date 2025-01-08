
import { useQuery } from "react-query";
import { useContext } from "react";
import apiClient from "../services/apiClient";
import { MoviesContext } from "../context/MoviesContext";

export const useTrendingMovies = () => {
  const { i18n }:any = useContext(MoviesContext); 
  return useQuery(["trendingMovies", i18n.language], () => apiClient.findTrendingMovies(i18n.language));
};

export const useTopRatedMovies = () => {
  const { i18n }:any = useContext(MoviesContext); 
  return useQuery(["topRatedMovies", i18n.language], () => apiClient.findTopRated(i18n.language));
};

