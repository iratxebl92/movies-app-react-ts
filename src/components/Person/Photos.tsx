import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { usePersonImages } from "../../hooks/useMovies";
import { useParams } from "react-router-dom";


export const Photos = () => {
  const {id} = useParams()
  const {data}:any = usePersonImages(id)
  return (
    <>
    <div>
 
      <Swiper className="mySwiper" spaceBetween={15} slidesPerView="auto">
        {data?.profiles?.map((image:any, index:number) => (
          <SwiperSlide key={index}  className="flex flex-col !w-auto"> 
          {/* Usamos !w-auto para que el swiper slide sea de tamaño auto y fuerza la especificacion de width: auto; en el css por encima de la clase .swiper-slide */}
            <div className="mb-2 dark:text-white ">
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image.file_path}`} alt="" className="rounded-lg" />
            </div>


          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        </>
  )
}
