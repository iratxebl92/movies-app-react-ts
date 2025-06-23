export interface IVideo {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string; // Ej: "YouTube"
    size: number;
    type: string; // Ej: "Trailer", "Teaser", etc.
  }
  
  export interface IVideoResponse {
    id: number;
    results: IVideo[];
  }