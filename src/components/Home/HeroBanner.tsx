import { useMoviesStore } from "../../config/store/store";
import {
  useGenresList,
  useReviews,
  useUpcomingMovies,
  useVideos,
} from "../../hooks/useMovies";


import { LoadingSpinner } from "../../core/LoadingSpinner";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ModalVideo } from "../Details/Modals/ModalVideo";
import { ButtonWatchTrailer } from "../../core/ButtonWatchTrailer";
import { useEffect, useState } from "react";

export const HeroBanner = () => {
  const [heroMovie, setHeroMovie] = useState<number | null>(null)
  const {language} = useMoviesStore()
  const { t } = useTranslation();
  const { data: upcoming } = useUpcomingMovies(language);
  const { openVideoModal } = useMoviesStore();
  const location = useLocation()


  useEffect(() => {
    const randomNumber = upcoming && upcoming.results ? Math.floor(Math.random() * upcoming.results?.length) : 0
setHeroMovie(randomNumber)
  }, [location.pathname]);

  const results = heroMovie && upcoming?.results[heroMovie] || [];
  const resultsGenresId = results?.genre_ids;
  const { data: videos } = useVideos("movie", results.id);
  const trailer = videos?.results.find(
    (video: { type: string }) => video.type === "Trailer"
  );
  const rate = results?.vote_average?.toString().substring(0, 3);
  const { data: genresList } = useGenresList("movie");
  const { data: reviewsData } = useReviews("movie", results.id);

  if (!resultsGenresId || !genresList || !reviewsData || !videos) {
    return <LoadingSpinner />;
  }
  
  const genres = genresList.genres.filter((genre: { id: number }) =>
    resultsGenresId.includes(genre.id)
  );
 


  return (
    <section className="relative">
      <div
        className="flex justify-end relative inset-0 opacity-100 
          before:absolute before:left-0 before:bg-gradient-to-r before:from-dark before:to-transparent before:z-12 before:content-[''] before:w-96 before:h-full
          after:absolute after:bottom-0 after:bg-gradient-to-t after:from-dark after:to-transparent after:z-12 after:content-[''] after:w-full after:h-72"
      >
        <img
          className="w-full h-[400px] md:h-[800px] object-cover"
          src={`https://image.tmdb.org/t/p/original//${results.backdrop_path}`}
          alt=""
        />
      </div>

      <div className="md:absolute md:bottom-10 md:w-2/4 md:ml-7 text-gray-100 p-4 font-semibold rounded-3xl ">
        <p className="text-3xl text-black dark:text-gray-300 md:text-gray-300 ">{results.title}</p>
        <p className="text-black dark:text-gray-300 dark:opacity-100 opacity-70 md:opacity-100 md:text-gray-300 md:text-lg">{results.overview}</p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-4 items-center">
            {genres.map((genre: { id: number; name: string }) => (
              <span
                key={genre.id}
                className="py-1 px-2 rounded-md dark:bg-gray-500/65 bg-gray-900/50  text-white text-xs h-fit"
              >
                {genre.name}
              </span>
            ))}
          </div>
            <div className="flex items-center gap-2 mb-4">
             
              <p className="text-xs dark:bg-gray-500 bg-gray-900/50 p-2 rounded-md flex">
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
                {rate}
              </p>
              {reviewsData?.total_results  ?(
                <>
                  <span className="w-1 h-1  bg-gray-500 rounded-full "></span>
                  <Link
                    to={`/details/movie/${results.id}#reviews`}
                    className="text-xs hover:underline dark:bg-gray-500 bg-gray-900/50 p-2 rounded-md"
                  >
                    <span className=" px-1 py-1 rounded-md text-white">{reviewsData.total_results} {t("reviews")}</span>{" "}
                
                  </Link>
                </>
              )
            : null
            }
          <ButtonWatchTrailer className="h-12 text-sm" />
            </div>
        </div>
        {openVideoModal && <ModalVideo selectedVideoKey={trailer?.key} />}
      </div>
    </section>
  );
};

