
import axios, { AxiosInstance } from "axios";
import { BASE_URL } from "./constants";
import { topRated, trendingWeekFilms } from "./tmdbService";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQyNTEwOTFkMDg5MmQzMWI2NTk4YzcyMDI2NDA3MiIsIm5iZiI6MTY0NzAyMDE5MS42MTMsInN1YiI6IjYyMmI4ODlmNTMyYWNiMDA2Yzc5ODE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.APN2znN3b6fwwbwqmA5-i3Sx1PwCvbI9MNOhoLAvbzE';


export const apiBase:AxiosInstance = axios.create({
        
      baseURL :BASE_URL,
      headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
})

const findTrendingMovies = async () => {
  const response = await apiBase.get(trendingWeekFilms);
  return response.data;
}

const findTopRated = async () => {
  const response = await apiBase.get(topRated)
  return response.data;

}


const apiClient = {
  findTrendingMovies,
  findTopRated
}

export default apiClient




