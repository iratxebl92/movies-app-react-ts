import { SwiperSlide, Swiper } from "swiper/react"
import 'swiper/css';
import { Cast } from "./Cast"
import { ICast } from "../../interfaces/ICast"
import { ICrew } from '../../interfaces/ICrew';

type CastSliderProps = {
  castData: {
    cast: ICast[]
    crew: ICrew[]
  }
}
export const CastSlider = ({castData}:CastSliderProps) => {

  return (
  
    <Swiper 
    className='mySwiper'
    spaceBetween={15}  
    slidesPerView="auto"
    >
        {
            castData?.cast.slice(0,10).map((cast:ICast) => (
                
                <SwiperSlide key={cast.id} className="flex flex-col w-40 lg:w-48">
                    <Cast cast={cast} />
                </SwiperSlide>
            
            ))
        }
    </Swiper>
   

  )
}
