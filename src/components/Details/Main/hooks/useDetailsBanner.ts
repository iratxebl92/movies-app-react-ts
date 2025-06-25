import { useState, useEffect } from 'react';
import { useVideos } from "../../../../hooks/useMovies";
import { useMoviesStore } from "../../../../config/store/store";
import { IMovie } from "../../../../interfaces/IMovie";

export const useDetailsBanner = (data: IMovie, type: string, isLoading: boolean) => {
  const { openVideoModal, selectedVideoKey } = useMoviesStore();
  const { data: videos } = useVideos(type, data?.id);
  const trailer = videos?.results.find((video: { type: string }) => video.type === "Trailer");
  const rate = data?.vote_average?.toString().substring(0, 3);
  const date = data?.release_date?.substring(0, 4);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isLoading]);

  return {
    openVideoModal,
    trailer,
    rate,
    date,
    showSkeleton,
    isLoading,
    selectedVideoKey
  };
};
