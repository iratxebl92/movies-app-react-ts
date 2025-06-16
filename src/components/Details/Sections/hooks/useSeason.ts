import { useState } from "react";
import { useMoviesStore } from "../../../../config/store/store";
import { useDetailsAndCast, useSeasonDetails } from "../../../../hooks/useMovies";

export const useSeason = (id: number, type: string) => {
  const [selectedSeason, setSelectedSeason] = useState(0);
  const { language } = useMoviesStore();
  const { data } = useDetailsAndCast(type, id, language);
  const { data: seasonData } = useSeasonDetails(id, selectedSeason, language);

  const seasons: string[] = data?.seasons.map((season: any) => season.name) || [];

  const handleSeasonChange = (season: string) => {
    const seasonInfo = data?.seasons.find((s: any) => s.name === season);
    setSelectedSeason(seasonInfo?.season_number);
  };

  return {
    selectedSeason,
    seasonData,
    seasons,
    handleSeasonChange,
    language
  };
};
  