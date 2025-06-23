export type IEpisode = {
    id: number;
    name: string;
    overview: string;
    air_date: string | null;
    episode_number: number;
    runtime: number;
    vote_average: number;
    still_path: string | null;
  };