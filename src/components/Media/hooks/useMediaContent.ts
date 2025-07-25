import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMoviesStore } from "../../../config/store/store";
import { useMovies } from "../../../hooks/useMovies";


export const useMediaContent = () => {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const { filterParams, language } = useMoviesStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

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

 
  return {
    isLoading,
    isError,
    isFetching,
    results,
    page,
    handleChangePage,
    totalPages: Math.min(data?.total_pages || 0, 500),
    loading
  };
};
