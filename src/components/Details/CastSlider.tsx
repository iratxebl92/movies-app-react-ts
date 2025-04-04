import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Cast } from "./Cast";
import { ICast } from "../../interfaces/ICast";
import { ICrew } from "../../interfaces/ICrew";
import { CastModal } from "./CastModal";
import { useMoviesStore } from "../../config/store/store";
import { useTranslation } from "react-i18next";

type CastSliderProps = {
  castData?: {
    cast: ICast[];
    crew: ICrew[];
  };
  status?: 'loading' | 'error' | 'success' | 'pending';
};

export const CastSlider = ({ castData, status = 'success' }: CastSliderProps) => {
  const { t } = useTranslation();
  const { openCastModal, setOpenCastModal } = useMoviesStore();

  const skeletonSlides = Array.from({ length: 5 });

  if (status === 'error') {
    return (
      <div className="flex items-center justify-center h-60 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-red-500">Error loading cast</p>
      </div>
    );
  }

  const isLoading = status === 'loading' || status === 'pending';

  return (
    <>
      <div className="max-w-[1920px] mx-auto mb-10">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold dark:text-white">
            {t("topCast")}
            <button
              className="text-slate-600 font-normal text-sm ml-2 dark:text-textDark hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              onClick={() => setOpenCastModal(true)}
            >
              {t("cast")}
            </button>
          </h2>
        </div>
        <Swiper 
          className="mySwiper" 
          spaceBetween={15} 
          slidesPerView="auto"
         
        >
          {isLoading ? (
            skeletonSlides.map((_, index) => (
              <SwiperSlide key={index} className="flex flex-col w-40 lg:w-48">
                <div className="flex flex-col gap-3 h-60">
                  <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                  <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            castData?.cast?.slice(0, 10).map((cast: ICast) => (
              <SwiperSlide key={cast.id} className="flex flex-col w-40 lg:w-48">
                <Cast cast={cast} />
              </SwiperSlide>
            )) || null
          )}
        </Swiper>
      </div>
      {openCastModal && <CastModal castData={castData} />}
    </>
  );
};
