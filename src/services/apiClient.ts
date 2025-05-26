import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "../utils/constants";
import { getTrending, getTopRated, getPopular, getImages, getPersonContent, getPersonImages, getPersonInformation, getPersonSocialMedia,  getVideo, getKeywords, getContentKeywords, getMovies, getUpcomingMovies, getGenresList, getReviews, getWatchProviders, getSeasonDetails, getRecommendations, getLanguages, getDetails, getCredits } from "./tmdbService";

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
const findDetails = async (content: string, id: number, language: string) => {

  const response = await apiBase.get(getDetails(content, id, language));
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
const findVideos = async(content:string, id: number) => {
  const response = await apiBase.get(getVideo(content, id));
  return response.data;
}
const findKeywords = async(content:string, id: number) => {
  const response = await apiBase.get(getKeywords(content, id));
  return response.data;
}
const findContentKeywords = async(content:string, id: string, language: string) => {
  const response = await apiBase.get(getContentKeywords(content, id, language));
  return response.data;
}
const findMovies = async(content:string, language: string, page: number) => {
  const response = await apiBase.get(getMovies(content, language, page));
  return response.data;
}
const findUpComingMovies = async(language: string) => {
  const response = await apiBase.get(getUpcomingMovies(language))
  return response.data
} 
const findGenresList = async(content:string) => {
  const response = await apiBase.get(getGenresList(content))
  return response.data
}

const findReviews = async(content:string, id:number) => {
  const response = await apiBase.get(getReviews(content, id))
  return response.data
}
const findWatchProviders = async(content:string, id:number) => {
  const response = await apiBase.get(getWatchProviders(content, id))
  return response.data
}
const findSeasonDetails = async(id: number, seasonNumber: number, language: string) => {
  const response = await apiBase.get(getSeasonDetails(id, seasonNumber, language))
  return response.data
}
const findRecommendations = async(content:string, id:number, language:string) => {
  const response = await apiBase.get(getRecommendations(content, id, language))
  return response.data
}
const findLanguages = async() => {
  const response = await apiBase.get(getLanguages())
  return response.data
}

const findCredits = async(content:string) => {
  const response = await apiBase.get(getCredits(content))
  return response.data
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
  findDetails,
  findVideos,
  findKeywords,
  findContentKeywords,
  findMovies,
  findUpComingMovies,
  findGenresList,
  findReviews,
  findWatchProviders,
  findSeasonDetails,
  findRecommendations,
  findLanguages,
  findCredits,
};

export default apiClient;
