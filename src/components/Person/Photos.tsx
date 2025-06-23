import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { PhotosSkeleton } from "../Skeleton/Person/PhotosSkeleton";
import { usePhotos } from "./hooks/usePhotos";

export const Photos = () => {
  const photosData = usePhotos();

  if (!photosData) return null;
  
  const { data, isLoading, showSkeleton } = photosData;

  if (isLoading || showSkeleton) {
    return <PhotosSkeleton />;
  }

  if (!data) return null;

  return (
    <div className="px-8">
      <Swiper className="mySwiper" spaceBetween={15} slidesPerView="auto">
        {data?.profiles?.map((image: any, index: number) => (
          <SwiperSlide key={index} className="flex flex-col !w-auto">
            <div className="mb-2 dark:text-white">
              <img 
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${image.file_path}`} 
                alt={`Foto de la persona ${index + 1}`} 
                className="rounded-lg" 
                role="img"
                aria-label={`Foto de la persona ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
