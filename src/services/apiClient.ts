import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../utils/constants";
import { getTrending, getTopRated, getPopular, getDetails, getCast, getImages, getPersonContent, getPersonImages, getPersonInformation, getPersonSocialMedia, getDetailsAndCast } from "./tmdbService";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQyNTEwOTFkMDg5MmQzMWI2NTk4YzcyMDI2NDA3MiIsIm5iZiI6MTY0NzAyMDE5MS42MTMsInN1YiI6IjYyMmI4ODlmNTMyYWNiMDA2Yzc5ODE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.APN2znN3b6fwwbwqmA5-i3Sx1PwCvbI9MNOhoLAvbzE';

export const apiBase: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const findTrendingMovies = async (content:string, language: string) => {
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
const findDetailsAndCast = async (content: string, id: number, language: string) => {

  const response = await apiBase.get(getDetailsAndCast(content, id, language));
  return response.data;
}

const findImages = async(content:string, id: number) => {
  const response = await apiBase.get(getImages(content, id));
  return response.data;
}
const findPersonContent = async(content:string, id: number) => {
  const response = await apiBase.get(getPersonContent(content, id));
  return response.data;
}
const findPersonImages = async( id: number) => {
  const response = await apiBase.get(getPersonImages( id));
  return response.data;
}
const findPersonInformation = async( id: number, language: string) => {
  const response = await apiBase.get(getPersonInformation( id, language));
  return response.data;
}
const findPersonSocialMedia = async( id: number) => {
  const response = await apiBase.get(getPersonSocialMedia( id));
  return response.data;
}


const apiClient = {
  findTrendingMovies,
  findTopRated,
  findPopular,
  findImages, 
  findPersonContent,
  findPersonImages,
  findPersonInformation,
  findPersonSocialMedia,
  findDetailsAndCast,
};

export default apiClient;
