import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Cast } from "./Cast";
import { ICast } from "../../../interfaces/ICast";
import { ICrew } from "../../../interfaces/ICrew";
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
            >
              {t("cast")}
            </button>
          </h2>
        </div>
        <Swiper 
          className="mySwiper" 
          spaceBetween={10} 
          slidesPerView="auto"
         
        >
          {isLoading ? (
            skeletonSlides.map((_, index) => (
              <SwiperSlide key={index} className="flex flex-col w-auto">
                <div className="flex flex-col gap-3 h-60">
                  <div className="w-full h-44 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <div className="w-full h-full bg-shimmer dark:bg-shimmer-dark bg-[length:200%_100%] animate-shimmer"></div>
                  </div>
                  <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
                    <div className="w-full h-full bg-shimmer dark:bg-shimmer-dark bg-[length:200%_100%] animate-shimmer"></div>
                  </div>
                  <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
                    <div className="w-full h-full bg-shimmer dark:bg-shimmer-dark bg-[length:200%_100%] animate-shimmer"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            castData?.cast?.slice(0, 10).map((cast: ICast) => (
              <SwiperSlide key={cast.id} className="flex flex-col !w-auto">
                  {/* Usamos !w-auto para que el swiper slide sea de tamaño auto y fuerza la especificacion de width: auto; en el css por encima de la clase .swiper-slide */}
                <Cast cast={cast} />
              </SwiperSlide>
            )) || null
          )}
        </Swiper>
      </div>
    </>
  );
};
