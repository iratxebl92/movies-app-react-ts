import { useTranslation } from "react-i18next";
import { useImages } from "../../hooks/useMovies";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMoviesStore } from "../../config/store/store";
import { BackdropModal } from "./BackdropModal";

export const Backdrops = () => {
  const { data } = useImages("hola", 5);
  const { t } = useTranslation();
  const { openBackdropModal, setOpenBackdropModal } = useMoviesStore();
 

  return (
    <>
      <div className="flex align-center text-center content-center">
        <p className=" font-bold text-2xl ">Backdrops</p>
        <button className="text-slate-600 font-normal text-sm ml-2 dark:text-textDark"
          onClick={() => setOpenBackdropModal(true)}
        >
          {t("cast")}
        </button>
      </div>
      <div className="flex flex-wrap ">
        <Swiper className="mySwiper" spaceBetween={15} slidesPerView="auto">
          {data?.backdrops.slice(0, 10).map((backdrop: any) => {
            return (
              <SwiperSlide
                key={backdrop.id}
                className="flex flex-col w-24"
              >
                <img
                  className="inline  w-24"
                  src={`https://www.themoviedb.org/t/p/original/${backdrop.file_path}`}
                  alt=""
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {
        openBackdropModal && <BackdropModal backdrops={data?.backdrops} />
      }
    </>
  );
};
