import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Cast } from "./Cast";
import { ICast } from "../../interfaces/ICast";
import { ICrew } from "../../interfaces/ICrew";
import { CastModal } from "./CastModal";
import { useMoviesStore } from "../../config/store/store";
import { useTranslation } from "react-i18next";

type CastSliderProps = {
  castData: {
    cast: ICast[];
    crew: ICrew[];
  };
};
export const CastSlider = ({ castData }: CastSliderProps) => {
  const { t } = useTranslation();
  const { openCastModal, setOpenCastModal } = useMoviesStore();
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <p className="flex items-center text-start font-bold text-2xl mb-2">
          {t("topCast")}

          <button
            className="text-slate-600 font-normal text-sm ml-2 dark:text-textDark"
            onClick={() => {
              setOpenCastModal(true);
            }}
          >
            {t("cast")}
          </button>
        </p>
        <Swiper className="mySwiper" spaceBetween={15} slidesPerView="auto">
          {castData?.cast.slice(0, 10).map((cast: ICast) => (
            <SwiperSlide key={cast.id} className="flex flex-col w-40 lg:w-48">

                <Cast cast={cast}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {openCastModal && <CastModal castData={castData} />}
    </>
  );
};
