import { useEffect, useState } from "react";
import { useMoviesStore } from "../../../../config/store/store";
import { useDetailsAndCast, useSeasonDetails } from "../../../../hooks/useMovies";

export const useSeason = (id: number, type: string) => {
  const { language } = useMoviesStore();
  const { data } = useDetailsAndCast(type, id, language);
  // Usar el primer season_number disponible como default
  const seasons = data?.seasons || [];
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]?.season_number || 1);
  const { data: seasonData } = useSeasonDetails(id, selectedSeason, language);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSeasonChange = (season: any) => {
    setSelectedSeason(season.season_number);
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
  