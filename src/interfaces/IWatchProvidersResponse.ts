export interface IWatchProvider {
  display_priority: number;
  logo_path: string;
  provider_id: number;
  provider_name: string;
}

export interface IWatchProvidersResponse {
  id: number;
  results: {
    [country: string]: {
      link: string;
      flatrate?: IWatchProvider[];
      rent?: IWatchProvider[];
      buy?: IWatchProvider[];
    };
  };
} 