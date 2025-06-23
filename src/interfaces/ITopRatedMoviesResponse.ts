import { IMovie } from "./IMovie";
export interface ITopRatedMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
} 