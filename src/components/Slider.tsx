import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from "react-query";
import 'swiper/css';
import { Card } from './Card';

export const Slider = () => {

  const getMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQyNTEwOTFkMDg5MmQzMWI2NTk4YzcyMDI2NDA3MiIsIm5iZiI6MTY0NzAyMDE5MS42MTMsInN1YiI6IjYyMmI4ODlmNTMyYWNiMDA2Yzc5ODE5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.APN2znN3b6fwwbwqmA5-i3Sx1PwCvbI9MNOhoLAvbzE",
      },
    };

    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=es-ES",
      options
    );

    return response.json();
  };

  
  const { data, status } = useQuery("movies", getMovies);

  if (status === "loading") {
    return <p>Recuperando los productos...</p>;
  }
  if (status === "error") {
    return <p>Error</p>;
  }
  console.log(data.results,"RESUUUL");

  return (
    <Swiper
    className='mySwiper'
      spaceBetween={15}  
      slidesPerView="auto"
    >
      {data.results.map((movie:any) => (
      <SwiperSlide key={movie.id} className='flex flex-col w-40'>
          <Card movie={movie} />
        </SwiperSlide>
        ))}
    </Swiper>
  );
};

