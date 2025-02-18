import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../utils/constants";
import { getTrending, getTopRated, getPopular, getDetails, getCast } from "./tmdbService";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQyNTEwOTFkMDg5MmQzMWI2NTk4YzcyMDI2NDA3MiIsIm5iZiI6MTY0NzAyMDE5MS42MTMsInN1YiI6IjYyMmI4ODlmNTMyYWNiMDA2Yzc5ODE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.APN2znN3b6fwwbwqmA5-i3Sx1PwCvbI9MNOhoLAvbzE';

export const apiBase: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const findTrendingMovies = async (content:string, language: string) => {
  console.log(language, "dentro")
  const response = await apiBase.get(getTrending( content,  language));
  return response.data;
};

const findTopRated = async (content:string, language: string) => {
  const response = await apiBase.get(getTopRated(content, language));
  return response.data;
};
const findPopular = async (content:string, language: string) => { 
  const response = await apiBase.get(getPopular(content, language));
  return response.data;
};
const findDetails = async (content:string, id: number, language: string) => {
  const response = await apiBase.get(getDetails(content, id, language));
  return response.data;
}
const findCast = async (content:string, id: number) => {
  const response = await apiBase.get(getCast(content, id));
  console.log(response, "response")
  return response.data;
}

const apiClient = {
  findTrendingMovies,
  findTopRated,
  findPopular,
  findDetails,
  findCast
};

export default apiClient;
