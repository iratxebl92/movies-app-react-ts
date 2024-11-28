import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './Card';

export const Slider = () => {
  return (
    <Swiper
    className='mySwiper'
      spaceBetween={20}  
      slidesPerView="auto"
    >
      {[...Array(24)].map((_, index) => (
        <SwiperSlide key={index} className='flex flex-col w-36'>
          <Card />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Card } from "./Card";

// export const Slider = () => {
//   return (
//     <Swiper
//       spaceBetween={20} // Espacio entre los slides
//       slidesPerView="auto" // Calcula automáticamente las slides visibles
//       loop={true} // Activa el modo continuo
//       freeMode={true} // Permite el desplazamiento libre sin restricciones
//       className="w-auto"
//     >
//       {/* Renderiza las tarjetas */}
//       {[...Array(24)].map((_, index) => (
//         <SwiperSlide key={index} className="w-36">
//           <Card />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

