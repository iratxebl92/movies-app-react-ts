import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import MovieSkeletonList from "../components/Skeleton/MovieSkeletonList";
import { LoadingSpinner } from "../core/LoadingSpinner";
import { Footer } from "../components/Footer";

export const MoviesApp = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cada vez que cambia la ruta, mostramos el loader
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 400); // duración del spinner, ajústalo a tu gusto

    return () => clearTimeout(timeout);
  }, [location.pathname]);
  return (
    <div className="dark:bg-dark dark:text-white bg-light min-h-screen">
      <Header />
      {isLoading && !location.pathname.includes("/details") ? (
        <LoadingSpinner />
      ) : (
        <Suspense fallback={<MovieSkeletonList />}>
          <div className="max-w-[1550px] content-center m-auto lg:w-320">
          <Outlet />
          </div>
            
        </Suspense>
      )}
      <Footer />
    </div>
  );
};
