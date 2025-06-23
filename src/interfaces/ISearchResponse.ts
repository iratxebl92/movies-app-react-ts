import { ISearch } from "./ISearch";
export interface ISearchResponse {
  page: number;
  results: ISearch[];
  total_pages: number;
  total_results: number;
} 