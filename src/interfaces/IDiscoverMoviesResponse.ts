import { IMovie } from "./IMovie";
export interface IDiscoverMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
} 