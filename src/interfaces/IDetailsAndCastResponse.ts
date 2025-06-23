import { IMovie } from "./IMovie";
import { ICast } from "./ICast";
import { ICrew } from "./ICrew";
export interface IDetailsAndCastResponse extends IMovie {
  credits: {
    cast: ICast[];
    crew: ICrew[];
  };
} 