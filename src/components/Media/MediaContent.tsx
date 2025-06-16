import { useMediaContent } from "./hooks/useMediaContent";
import MovieSkeletonList from "../Skeleton/MovieSkeletonList";
import { Card } from "../../core/Card";
import { IMovie } from "../../interfaces/IMovie";
import { AnimatePresence, motion } from "motion/react";
import { MediaPagination } from "./MediaPagination";
import { NotFound } from "../../core/NotFound";
import { GenreList } from "./Filters/GenreList";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

export const MediaContent = () => {
  const { t } = useTranslation();
  const {
    isLoading,
    isError,
    isFetching,
    results,
    page,
    handleChangePage,
    opacityMotionTransition,
    totalPages
  } = useMediaContent();

  if (isLoading) {
    return <MovieSkeletonList />;
  }

  if (isError) {
    return <NotFound/>;
  }

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
      {results && results.length > 0 && (
        <div className="flex justify-center py-11">
          <MediaPagination
            handlePageClick={handleChangePage}
            page={page}
            pageCount={totalPages}
          />
        </div>
      )}
    </div>
  );
};
