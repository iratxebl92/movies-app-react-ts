import { useTrendingMovies } from '../hooks/useMovies';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './Card';


export const Slider = () => {

  const { data, status } = useTrendingMovies()

  console.log(data, "DATA")

  if (status === "loading") {
    return <p>Recuperando los productos...</p>;
  }
  if (status === "error") {
    return <p>Error</p>;
  }
  console.log(data?.results,"RESUUUL");

  return (
    <Swiper
    className='mySwiper'
      spaceBetween={15}  
      slidesPerView="auto"
    >
      {data?.results.map((movie:any) => (
      <SwiperSlide key={movie.id} className='flex flex-col w-40'>
          <Card movie={movie} />
        </SwiperSlide>
        ))}
    </Swiper>
  );
};

//TODO: Mirar para hacer este componente reutilizable, de manera que luego tenga otro que sea TrendingMovies y ahi utilice este Slider