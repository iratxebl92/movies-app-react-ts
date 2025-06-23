import { IMovie } from "./IMovie";
export interface IUpcomingMoviesResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
} 