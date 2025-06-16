import { useMoviesStore } from "../../../config/store/store";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  useGenresList,
  usePopularMovies,
  useReviews,
  useTopRatedMovies,
  useTrendingMovies,
  useUpcomingMovies,
  useVideos,
} from "../../../hooks/useMovies";
import { ContentSectionConfig, SectionConfigs, SectionType, TimeSectionConfig } from "../../../interfaces/IHome";



export const useHome = () => {
  const [heroMovie, setHeroMovie] = useState<number | null>(null);
  const { language, popularOption, popularSelected, topRatedOption, topRatedSelected, trendingOption, trendingSelected } = useMoviesStore();
  const { t } = useTranslation();
  const location = useLocation();

  // Hero Banner data
  const { data: upcoming } = useUpcomingMovies(language);
  const results = (upcoming?.results && heroMovie !== null) && upcoming.results[heroMovie] || 0;
  const resultsGenresId = results?.genre_ids;
  const { data: videos } = useVideos("movie", results.id);
  const trailer = videos?.results.find(
    (video: { type: string }) => video.type === "Trailer"
  );
  const rate = results?.vote_average?.toString().substring(0, 3);
  const { data: genresList } = useGenresList("movie");
  const { data: reviewsData } = useReviews("movie", results.id);

  // Section configurations
  const sectionConfigs: SectionConfigs = {
    popular: {
      selected: popularSelected,
      option: popularOption,
      useData: usePopularMovies,
      getOptions: (t: (key: string) => string) => [t('movies'), t('tv')],
      getSelectedIndex: (selected: string) => selected === "movie" ? 0 : 1
    },
    topRated: {
      selected: topRatedSelected,
      option: topRatedOption,
      useData: useTopRatedMovies,
      getOptions: (t: (key: string) => string) => [t('movies'), t('tv')],
      getSelectedIndex: (selected: string) => selected === "movie" ? 0 : 1
    },
    trending: {
      selected: trendingSelected,
      option: trendingOption,
      useData: useTrendingMovies,
      getOptions: (t: (key: string) => string) => [t('week'), t('day')],
      getSelectedIndex: (selected: string) => selected === "week" ? 0 : 1
    }
  };

  // Hero Banner effect
  useEffect(() => {
    const randomNumber = upcoming && upcoming.results ? Math.floor(Math.random() * upcoming.results?.length) : 0;
    setHeroMovie(randomNumber);
  }, [location.pathname]);

  // Helper functions
  const getGenres = () => {
    if (!resultsGenresId || !genresList) return [];
    return genresList.genres.filter((genre: { id: number }) =>
      resultsGenresId.includes(genre.id)
    );
  };

  const handleTabChange = (section: SectionType, tab: string) => {
    const config = sectionConfigs[section];
    if (section === "trending") {
      (config as TimeSectionConfig).option(tab === "Semana" || tab === "Week" ? "week" : "day");
    } else {
      (config as ContentSectionConfig).option(tab === "Películas" || tab === "Movies" ? "movie" : "tv");
    }
  };

  const getSectionData = (section: SectionType) => {
    const config = sectionConfigs[section];
    const { data, status } = config.useData(config.selected, language);
    return {
      data,
      status,
      options: config.getOptions(t),
      selectedIndex: config.getSelectedIndex(config.selected)
    };
  };

  return {
    // Hero Banner
    heroData: {
      results,
      trailer,
      rate,
      reviewsData,
      genres: getGenres(),
      isLoading: !resultsGenresId || !genresList || !reviewsData || !videos
    },
    // Sections
    getSectionData,
    handleTabChange
  };
};
