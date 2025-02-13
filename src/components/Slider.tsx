import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './Card';
import { IMovie } from '../interfaces/IMovie';

type SliderProps = {
  data: {
    results: IMovie[]; 
  };
  status: string;  // Asegúrate de incluir `status` como prop también
};

export const Slider = ({ data, status }: SliderProps) => {
  const skeletonSlides = Array.from({ length: 5 }); 

  return (
    <Swiper
      className='mySwiper'
      spaceBetween={15}  
      slidesPerView="auto"
    >
      {status === "loading" ? (
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
        data?.results.map((movie: any) => (
          <SwiperSlide key={movie.id} className="flex flex-col w-40 lg:w-48">
            <Card movie={movie} />
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};
