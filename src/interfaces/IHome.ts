export type SectionType = "popular" | "topRated" | "trending";
export type ContentType = "movie" | "tv";
export type TimeWindow = "week" | "day";

export interface BaseSectionConfig {
  selected: string;
  useData: (type: string, language: string) => any;
  getOptions: (t: (key: string) => string) => string[];
  getSelectedIndex: (selected: string) => number;
}

export interface ContentSectionConfig extends BaseSectionConfig {
  option: (value: ContentType) => void;
}

export interface TimeSectionConfig extends BaseSectionConfig {
  option: (value: TimeWindow) => void;
}

export type SectionConfigs = {
  popular: ContentSectionConfig;
  topRated: ContentSectionConfig;
  trending: TimeSectionConfig;
}