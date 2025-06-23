import { useEffect, useState } from "react";
import { useMoviesStore } from "../../../../config/store/store";
import { useDetailsAndCast, useSeasonDetails } from "../../../../hooks/useMovies";
import { ISeason } from "../../../../interfaces/ISeason";

export const useSeason = (id: number, type: string) => {
  const { language } = useMoviesStore();
  const { data } = useDetailsAndCast(type, id, language);
  const seasons = data?.seasons || [];
  const [selectedSeason, setSelectedSeason] = useState(0);
  const { data: seasonData } = useSeasonDetails(id, seasons[selectedSeason]?.season_number ?? 1, language);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSeasonChange = (season: ISeason) => {
    const index = seasons.findIndex(s => s.id === season.id);
    if (index !== -1) setSelectedSeason(index);
  };

  return {
    selectedSeason,
    seasonData,
    seasons,
    handleSeasonChange,
    language,
    loading
  };
};
  