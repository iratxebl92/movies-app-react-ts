import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './Card';

export const Slider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      // className='w-75'
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className=' bg-blue-300'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-green-400'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-orange-200'> <Card/> </SwiperSlide>
      <SwiperSlide className=' bg-red-800'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-blue-300'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-green-400'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-blue-300'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-green-400'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-orange-200'> <Card/> </SwiperSlide>
      <SwiperSlide className=' bg-red-800'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-blue-300'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-green-400'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-blue-300'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-green-400'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-orange-200'> <Card/> </SwiperSlide>
      <SwiperSlide className=' bg-red-800'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-blue-300'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-green-400'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-blue-300'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-green-400'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-orange-200'> <Card/> </SwiperSlide>
      <SwiperSlide className=' bg-red-800'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-blue-300'><Card/></SwiperSlide>
      <SwiperSlide className=' bg-green-400'><Card/></SwiperSlide>
    </Swiper>
  )
}
