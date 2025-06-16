import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./Header/Header";
import MovieSkeletonList from "../Skeleton/MovieSkeletonList";
import { Footer } from "./Footer";
import { SearchModal } from '../../core/SearchModal';
import { useMoviesStore } from "../../config/store/store";


export const MoviesApp = () => {
  const {searchModal} = useMoviesStore()

  return (
    <div className="dark:bg-dark dark:text-white bg-light min-h-screen relative ">
      <Header />
     
        <Suspense fallback={<MovieSkeletonList />}>
          <div className="max-w-[1550px] content-center m-auto lg:w-320 min-h-[calc(100vh-160px)]">
          <Outlet />
          </div>
        </Suspense>
        { searchModal &&
          <SearchModal/>
        }
      <Footer />
    </div>
  );
};
