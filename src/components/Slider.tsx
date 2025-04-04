import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Card } from './Card';
import { IMovie } from '../interfaces/IMovie';

// Definición de tipos para las props del componente
// data?: objeto opcional que contiene un array de resultados (películas)
// status: estado actual de la carga de datos
type SliderProps = {
  data?: {
    results: IMovie[];
  };
  status: 'loading' | 'error' | 'success' | 'pending';
};

export const Slider = ({ data, status }: SliderProps) => {
  // Crea un array de 5 elementos para el skeleton loading
  const skeletonSlides = Array.from({ length: 5 });

  // Muestra un mensaje de error si el estado es 'error'
  if (status === 'error') {
    return (
      <div className="flex items-center justify-center h-60 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-red-500">Error loading content</p>
      </div>
    );
  }

  // Determina si está cargando basado en el estado
  const isLoading = status === 'loading' || status === 'pending';

  return (
    // Contenedor relativo para el slider
    <div className="relative w-full">
      {/* Componente Swiper con configuración base */}
      <Swiper
        className="mySwiper"
        spaceBetween={16} // Espacio consistente entre slides
        slidesPerView="auto" // Permite que el número de slides se ajuste automáticamente
        style={{
          padding: '1px' // Pequeño padding para evitar problemas de recorte
        }}
      >
        {isLoading ? (
          // Renderiza skeleton loading mientras carga
          skeletonSlides.map((_, index) => (
            <SwiperSlide 
              key={index}
              className="!w-[160px] sm:!w-[180px] md:!w-[200px] lg:!w-[220px]"
            >
              <div className="flex flex-col gap-3">
                {/* Contenedor con aspect ratio 2:3 para el skeleton */}
                <div className="relative pb-[150%] w-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse" />
                </div>
                {/* Skeleton para el título y la información adicional */}
                <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          // Renderiza las cards con los datos reales
          data?.results?.map((movie: IMovie) => (
            <SwiperSlide 
              key={movie.id}
              className="!w-[160px] sm:!w-[180px] md:!w-[200px] lg:!w-[220px]" //* !w es para sobreescribir el width por defecto de swiper
            >
              <Card movie={movie} />
            </SwiperSlide>
          )) || null
        )}
      </Swiper>
    </div>
  );
};
