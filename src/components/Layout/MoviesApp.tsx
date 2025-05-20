import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./Header/Header";
import MovieSkeletonList from "../Skeleton/MovieSkeletonList";
import { Footer } from "./Footer";

export const MoviesApp = () => {
 
  return (
    <div className="dark:bg-dark dark:text-white bg-light min-h-screen">
      <Header />
     
        <Suspense fallback={<MovieSkeletonList />}>
          <div className="max-w-[1550px] content-center m-auto lg:w-320">
          <Outlet />
          </div>
        </Suspense>
      <Footer />
    </div>
  );
};
