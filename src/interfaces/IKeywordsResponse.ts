export interface IKeyword {
  id: number;
  name: string;
}
export interface IKeywordsResponse {
  id: number;
  keywords?: IKeyword[];
  results?: IKeyword[];
} 