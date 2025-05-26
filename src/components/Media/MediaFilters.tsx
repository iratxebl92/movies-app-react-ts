import { useState } from "react";
import { UserRange } from "./Filters/UserRange";
import { UserVotesRange } from "./Filters/UserVotesRange";
import { RuntimesRange } from "./Filters/RuntimesRange";
import { GenreList } from "./Filters/GenreList";
import { SortBy } from "./Filters/SortBy";
import { ReleaseData } from "./Filters/ReleaseData";

type FiltersType = {
  releaseDate: string[];
  voteAverage: number[];
  minVoteCount: number;
  runtime: number[];
  sortBy: string;
  language: null;
  genres: never[];
  originCountry: null;
};

const DEFAULT_FILTERS: FiltersType = {
  releaseDate: ["", `${new Date().getFullYear()}-12-31`],
  voteAverage: [0, 10],
  minVoteCount: 0,
  runtime: [0, 300],
  sortBy: "popularity.desc",
  language: null,
  genres: [],
  originCountry: null,
};
export const MediaFilters = () => {


  const [filtersParams, setFiltersParams] =
    useState<FiltersType>(DEFAULT_FILTERS);

  return (
    <div className="h-auto border-2 border-gray-500 w-full pb-36">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Filters</p>
        <button className="bg-gray-500 border-2 border-gray-500 rounded-md p-2">
          Clear All
        </button>
      </div>
      <div>
        <SortBy/>
      </div>
      <div>
       
      </div>
      <div>
      <ReleaseData/>
      </div>
      <div className="mt-10">
        <UserRange />
      </div>
      <div className="mt-10">
        <UserVotesRange />
      </div>
      <div className="mt-10">
        <RuntimesRange />
      </div>

      <div className="mt-10">
        <GenreList/>
      </div>
    </div>
  );
};
