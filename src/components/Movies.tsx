import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { QueryClient } from "@tanstack/react-query";
import apiClient from "../services/apiClient";
import MovieSkeletonList from "./MovieSkeletonList";
import { Card } from "./Card";
import { IMovie } from "../interfaces/IMovie";
import { LoadingSpinner } from "../core/LoadingSpinner";
import { AnimatePresence, motion } from "motion/react";

export const Movies = () => {
  const [page, setPage] = useState(1);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 200); // 400ms por ejemplo

    return () => clearTimeout(timer);
  }, []);

  const {
    status,
    isLoading,
    data,
    isError,
    error,
    isFetching,
    isPlaceholderData,
  } = useMovies("movies", "es", page);
  const results = data?.results;

  if (isLoading) {
    return <MovieSkeletonList />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
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

  return (
<>
  <AnimatePresence mode="wait" initial={true}>
    <motion.div key={page} {...opacityMotionTransition} style={{ minHeight: "600px" }}>
      <div className="flex flex-wrap ml-24 relative">
        {isFetching || isLoading ? (
          <div className="absolute top-0 right-0 p-2">
            <MovieSkeletonList />
          </div>
        ) : (
          results?.map((result: IMovie) => (
            <Card
              key={result.id}
              movie={result}
              style={{ width: "200px", margin: "20px" }}
            />
          ))
        )}
      </div>
    </motion.div>
  </AnimatePresence>

  {/* ✅ Botones fuera del bloque animado */}
  <div className="flex ml-4 mt-4">
    <button
      className="p-4 bg-slate-500 mr-4"
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1 || isFetching}
    >
      <span> Previous </span>
    </button>
    <button
      className="p-4 bg-slate-500"
      onClick={() => setPage((prev) => prev + 1)}
      disabled={isFetching || page === data?.total_pages}
    >
      <span> Next </span>
    </button>
  </div>
</>

  );
};
