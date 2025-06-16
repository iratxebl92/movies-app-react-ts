import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMoviesStore } from "../../../config/store/store";
import { useMovies } from "../../../hooks/useMovies";
import { IMovie } from "../../../interfaces/IMovie";

export const useMediaContent = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const { filterParams, language } = useMoviesStore();

  useEffect(() => {
    location.pathname.includes("/movies") ? setType("movie") : setType("tv");
  }, [location.pathname]);

  const {
    isLoading,
    data,
    isError,
    isFetching,
  } = useMovies(
    type,
    language,
    page,
    filterParams.genres || [],
  );

  const results = data?.results;

  const handleChangePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const opacityMotionTransition = {
    variants: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    transition: { duration: 0.2 },
  } as const;

  return {
    isLoading,
    isError,
    isFetching,
    results,
    page,
    handleChangePage,
    opacityMotionTransition,
    totalPages: Math.min(data?.total_pages || 0, 500)
  };
};
