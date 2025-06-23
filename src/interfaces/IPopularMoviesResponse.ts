import { IMovie } from "./IMovie";
export interface IPopularMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
} 