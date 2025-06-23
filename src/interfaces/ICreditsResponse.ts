import { ICast } from "./ICast";
import { ICrew } from "./ICrew";
export interface ICreditsResponse {
  id: number;
  cast: ICast[];
  crew: ICrew[];
} 