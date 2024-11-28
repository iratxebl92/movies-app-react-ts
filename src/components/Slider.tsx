import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './Card';

export const Slider = () => {
  return (
    <Swiper
    className='mySwiper'
      spaceBetween={15}  
      slidesPerView="auto"
    >
      {[...Array(24)].map((_, index) => (
        <SwiperSlide key={index} className='flex flex-col w-40'>
          <Card />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

