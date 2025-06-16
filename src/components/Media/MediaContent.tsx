import { useEffect, useState } from "react";
import { useMoviesStore } from "../../config/store/store";
import { useMovies } from "../../hooks/useMovies";
import MovieSkeletonList from "../Skeleton/MovieSkeletonList";
import { Card } from "../../core/Card";
import { IMovie } from "../../interfaces/IMovie";
import { AnimatePresence, motion } from "motion/react";
import { MediaPagination } from "./MediaPagination";
import { useLocation } from "react-router-dom";
import { NotFound } from "../../core/NotFound";
import { GenreList } from "./Filters/GenreList";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

export const MediaContent = () => {
  const location = useLocation();
  const [page, setPage] = useState(1); // Estado para la página actual
  const [type, setType] = useState(""); // Estado para saber si es "movie" o "tv"
  const { filterParams, language } = useMoviesStore();
  const { t } = useTranslation();

  // Detecta si la ruta actual contiene "movies" para decidir el tipo
  useEffect(() => {
    location.pathname.includes("/movies") ? setType("movie") : setType("tv");
  }, [location.pathname]);

  // Hook personalizado para obtener películas o series desde la API
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

  const results = data?.results; // Lista de películas/series

  // Si se está cargando por primera vez, mostrar skeleton
  if (isLoading) {
    return <MovieSkeletonList />;
  }

  // Si hubo un error en la llamada a la API, mostrar mensaje de error
  if (isError) {
    return <NotFound/>
  }

  // Maneja el cambio de página desde la paginación
  const handleChangePage = ({ selected }: { selected: number }) => {
    setPage(selected + 1); // ReactPaginate empieza en 0, por eso sumamos 1
  };

  // Configuración de la animación para el cambio de página
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
    <div className="min-h-screen">
      <GenreList/>
      <div className={clsx("flex justify-center min-h-[calc(100vh-246px)]",{
        "items-center": !results || results.length === 0
      })}>
        {!results || results.length === 0 ? (
          <div className="flex justify-center items-center h-full" aria-label={t('noResults')}>
            <p className="text-2xl font-bold text-center text-neutral-500 ">{t('noResults')}</p>
          </div>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              {...opacityMotionTransition}
              className=""
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-4">
                {isFetching || isLoading ? (
                  <MovieSkeletonList />
                ) : (
                  results?.map((result: IMovie) => (
                    <Card
                      key={result.id}
                      movie={result}
                    />
                  ))
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      {/* Renderizado del componente de paginación */}
      {results && results.length > 0 && (
        <div className="flex justify-center py-11">
          <MediaPagination
            handlePageClick={handleChangePage}
            page={page}
            pageCount={Math.min(data?.total_pages || 0, 500)}
          />
        </div>
      )}
    </div>
  );
};
