import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { usePersonImages } from "../../hooks/useMovies";
import { useParams } from "react-router-dom";
import { PhotosSkeleton } from "../Skeleton/Person/PhotosSkeleton";
import { useEffect, useState } from "react";

export const Photos = () => {
  const { idAndName } = useParams();
  if (!idAndName) return null;
  const [id] = idAndName.split("-");
  const { data, isLoading } = usePersonImages(Number(id));
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Añadimos un delay de 1.5 segundos después de que los datos estén cargados
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isLoading]);

  if (isLoading || showSkeleton) {
    return <PhotosSkeleton />;
  }

  return (
    <div>
      <Swiper className="mySwiper" spaceBetween={15} slidesPerView="auto">
        {data?.profiles?.map((image: any, index: number) => (
          <SwiperSlide key={index} className="flex flex-col !w-auto">
            <div className="mb-2 dark:text-white">
              <img 
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image.file_path}`} 
                alt={`Person photo ${index + 1}`} 
                className="rounded-lg" 
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
