import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";


export const Photos = () => {


    const images = [
        'https://image.tmdb.org/t/p/h632/ts9l18VkDSooRGDWIeQegNVHciC.jpg', 
        'https://image.tmdb.org/t/p/h632/zwxeqY7AV9VS2J0nTXp3onRErBg.jpg', 
        'https://image.tmdb.org/t/p/h632/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
        'https://image.tmdb.org/t/p/h632/ts9l18VkDSooRGDWIeQegNVHciC.jpg', 
        'https://image.tmdb.org/t/p/h632/zwxeqY7AV9VS2J0nTXp3onRErBg.jpg', 
        'https://image.tmdb.org/t/p/h632/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg'
    ]


  return (
    <>
    <div>
 
      <Swiper className="mySwiper ml-4" spaceBetween={15} slidesPerView="auto">
        {images.map((image: any) => (
          <SwiperSlide className="flex flex-col w-40 lg:w-56">
            <div className="mb-2 dark:text-white ">
                <img src={image} alt="" className="rounded-lg" />
            </div>


          </SwiperSlide>
        ))}
      </Swiper>
    </div>


        </>
  )
}
