import { IEpisode } from "./IEpisode";

export interface ISeason {
    air_date?: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
    episodes?: IEpisode[];
  }