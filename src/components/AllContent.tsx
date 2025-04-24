import { useEffect, useState } from "react";
import { useMovies } from "../hooks/useMovies";
import MovieSkeletonList from "./MovieSkeletonList";
import { Card } from "./Card";
import { IMovie } from "../interfaces/IMovie";
import { AnimatePresence, motion } from "motion/react";
import { Pagination } from "./Pagination";

export const AllContent = () => {
  const [page, setPage] = useState(1); // Estado para la página actual
  const [type, setType] = useState(""); // Estado para saber si es "movie" o "tv"
  const [showSkeleton, setShowSkeleton] = useState(true); // Controla si se muestra el skeleton loader

  // Detecta si la ruta actual contiene "movies" para decidir el tipo
  useEffect(() => {
    location.pathname.includes("/movies") ? setType("movie") : setType("tv");
  }, [location.pathname]);

  // Simula una carga inicial breve (usado para mostrar skeleton un momento)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 200);

    return () => clearTimeout(timer); // Limpia el timeout si el componente se desmonta
  }, []);

  // Hook personalizado para obtener películas o series desde la API
  const {
    status,
    isLoading,
    data,
    isError,
    error,
    isFetching,
    isPlaceholderData,
  } = useMovies(type, "es", page);

  const results = data?.results; // Lista de películas/series

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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={page} // Clave para re-renderizar con animación al cambiar de página
          {...opacityMotionTransition}
          
          className=""
        >
          <div className="flex flex-wrap ml-24">
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
                  style={{ width: "200px", margin: "20px" }}
                />
              ))
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Renderizado del componente de paginación */}
      <div className="flex justify-center py-11 ">

      <Pagination
        handlePageClick={handleChangePage} // Función para manejar cambio de página
        page={page} // Página actual
        pageCount={Math.min(data?.total_pages || 0, 500)} // Límite de 500 páginas por limitación de TMDb
        />
        </div>
    </>
  );
};


 {/* <div className="flex justify-center ml-4 mt-4 pb-10">
    <button
      className="p-4 bg-slate-500"
      onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
      disabled={page === 1 || isFetching}
    >
      <span> Previous </span>
    </button>
    <p className="p-2 mx-2 border-2 border-red-700 rounded-xl" >{page}</p>
   {
    Array.from({length: page === data?.total_pages ? page : 5}).map((_, index) => (
      <p className="p-2 mx-2 border-2 border-red-700 rounded-xl" >{index + 1}</p>

    ))
   }
    <button
      className="p-4 bg-slate-500"
      onClick={() => setPage((prev) => prev + 1)}
      disabled={isFetching || page === data?.total_pages}
    >
      <span> Next </span>
    </button>
  </div> */}