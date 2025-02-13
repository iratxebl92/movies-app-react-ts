import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../utils/constants";
import { getTrendingWeekFilms, getTopRated, getPopular } from "./tmdbService";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQyNTEwOTFkMDg5MmQzMWI2NTk4YzcyMDI2NDA3MiIsIm5iZiI6MTY0NzAyMDE5MS42MTMsInN1YiI6IjYyMmI4ODlmNTMyYWNiMDA2Yzc5ODE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.APN2znN3b6fwwbwqmA5-i3Sx1PwCvbI9MNOhoLAvbzE';

export const apiBase: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const findTrendingMovies = async (content:string) => {
  const response = await apiBase.get(getTrendingWeekFilms( content));
  return response.data;
};

const findTopRated = async (content:string) => {
  const response = await apiBase.get(getTopRated(content));
  return response.data;
};
const findPopular = async (content:string) => { 
  const response = await apiBase.get(getPopular(content));
  return response.data;
};

const apiClient = {
  findTrendingMovies,
  findTopRated,
  findPopular
};

export default apiClient;
