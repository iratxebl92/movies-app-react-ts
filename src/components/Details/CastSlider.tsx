import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { Cast } from "./Cast";
import { ICast } from "../../interfaces/ICast";
import { ICrew } from "../../interfaces/ICrew";
import { CastModal } from "./CastModal";
import { useMoviesStore } from "../../config/store/store";

type CastSliderProps = {
  castData: {
    cast: ICast[];
    crew: ICrew[];
  };
};
export const CastSlider = ({ castData }: CastSliderProps) => {

  const {openModal, setOpenModal} = useMoviesStore();
  return (
    <>
    <div>
      <p className="flex items-center text-start font-bold text-2xl mb-2">
        Top Cast
       
          <button 
            className="text-slate-600 font-normal text-sm ml-2"
            onClick={() => {
             setOpenModal(true)
            }}
            >
          (See all)
          </button>

      </p>
      <Swiper className="mySwiper" spaceBetween={15} slidesPerView="auto">
        {castData?.cast.slice(0, 10).map((cast: ICast) => (
          <SwiperSlide key={cast.id} className="flex flex-col w-40 lg:w-48">
            <Cast cast={cast} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {
      openModal && <CastModal castData={castData} />
    }

        </>
  );
};
