import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from "react-query";
import 'swiper/css';
import { Card } from './Card';
import  apiClient from '../services/apiClient';

export const Slider = () => {

  const { data, status } = useQuery("movies", 
    async () => {
      return await apiClient.findTrendingMovies()
    }

  );

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

