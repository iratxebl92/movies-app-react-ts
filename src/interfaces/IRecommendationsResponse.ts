import { IMovie } from "./IMovie";
export interface IRecommendationsResponse {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
} 