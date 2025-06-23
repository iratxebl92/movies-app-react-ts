import { IMovie } from "./IMovie";
export interface IPersonMoviesResponse {
  cast: IMovie[];
  crew: IMovie[];
  id: number;
} 