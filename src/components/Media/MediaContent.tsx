import { useEffect, useState } from "react";
import { useMovies } from "../../hooks/useMovies";
import MovieSkeletonList from "../Skeleton/MovieSkeletonList";
import { Card } from "../../core/Card";
import { IMovie } from "../../interfaces/IMovie";
import { AnimatePresence, motion } from "motion/react";
import { MediaPagination } from "./MediaPagination";
import { MediaFilters } from "./MediaFilters";

export const MediaContent = () => {
  const [page, setPage] = useState(1); // Estado para la página actual
  const [type, setType] = useState(""); // Estado para saber si es "movie" o "tv"

  // Detecta si la ruta actual contiene "movies" para decidir el tipo
  useEffect(() => {
    location.pathname.includes("/movies") ? setType("movie") : setType("tv");
  }, [location.pathname]);

  // Hook personalizado para obtener películas o series desde la API
  const {
    isLoading,
    data,
    isError,
    error,
    isFetching,
  } = useMovies(type, "es", page);

  const results = data?.results; // Lista de películas/series
console.log(results)
  // Si se está cargando por primera vez, mostrar skeleton
  if (isLoading) {
    return <MovieSkeletonList />;
  }

  // Si hubo un error en la llamada a la API, mostrar mensaje de error
  if (isError) {
    return <h1>{error.message}</h1>;
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
    <>
    <div className="flex justify-center">
      <div className="hidden lg:block w-[20rem]">
      <MediaFilters/>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page} // Clave para re-renderizar con animación al cambiar de página
          {...opacityMotionTransition}
          
          className=""
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-4">
            {isFetching || isLoading ? (
              // Si se está haciendo fetch entre páginas, mostrar skeleton encima
              <div className="h-full w-full p-2">
                <MovieSkeletonList />
              </div>
            ) : (
              // Renderiza cada tarjeta de película
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
      </div>
      {/* Renderizado del componente de paginación */}
      <div className="flex justify-center py-11 ">

      <MediaPagination
        handlePageClick={handleChangePage} // Función para manejar cambio de página
        page={page} // Página actual
        pageCount={Math.min(data?.total_pages || 0, 500)} // Límite de 500 páginas por limitación de TMDb
        />
        </div>
    </>
  );
};
