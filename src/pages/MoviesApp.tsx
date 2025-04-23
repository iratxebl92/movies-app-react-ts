import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import MovieSkeletonList from "../components/MovieSkeletonList";
import { LoadingSpinner } from "../core/LoadingSpinner";

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
console.log(location.pathname)
  return (
    <div className="dark:bg-dark dark:text-white bg-light min-h-screen">
      <Header />
      {isLoading && !location.pathname.includes("/details") ? (
        <LoadingSpinner />
      ) : (
        <Suspense fallback={<MovieSkeletonList />}>
          <Outlet />
        </Suspense>
      )}
    </div>
  );
};
