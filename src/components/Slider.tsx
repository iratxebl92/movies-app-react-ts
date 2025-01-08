import { useTrendingMovies } from '../hooks/useMovies';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './Card';
import { IMovie } from '../interfaces/IMovie';

type SliderProps = {
  data: {
    results: IMovie[]; 
  };
}
export const Slider = ({data}: SliderProps) => {

  return (
    <Swiper
    className='mySwiper'
      spaceBetween={15}  
      slidesPerView="auto"
    >
      {data?.results.map((movie:any) => (
      <SwiperSlide key={movie.id} className='flex flex-col w-40 lg:w-48'>
          <Card movie={movie} />
        </SwiperSlide>
        ))}
    </Swiper>
  );
};

