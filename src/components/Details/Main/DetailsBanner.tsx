import clsx from "clsx";
import { CircleRating } from "../../../core/components/Icons/CircleRating";
import { IMovie } from "../../../interfaces/IMovie";
import { useInitialScroll } from "../../../hooks/useInitialScroll";
import { ModalVideo } from "../Modals/ModalVideo";
import { ButtonWatchTrailer } from "../../../core/ButtonWatchTrailer";
import { DetailsBannerSkeleton } from "../../Skeleton/Details/DetailsBannerSkeleton";
import { useDetailsBanner } from "./hooks/useDetailsBanner";

type DetailsBannerProps = {
  data: IMovie;
  type: string;
  isLoading: boolean;
};

export const DetailsBanner = ({ data, type, isLoading }: DetailsBannerProps) => {
  useInitialScroll();
  const { openVideoModal, rate, date, showSkeleton, selectedVideoKey } = useDetailsBanner(data, type, isLoading);

  if (isLoading || showSkeleton) {
    return <DetailsBannerSkeleton />;
  }
    
  if(!data) return null;

  return (
    <div className="relative w-full">
      {/* Hero Banner Section */}
      <div 
          className={`
            after:content-['']
            after:bg-gradient-to-t after:from-light/100 after:via-light/50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2  dark:after:from-dark/100 dark:after:via-dark/50
            relative w-full h-screen min-h-[925px] transition-opacity duration-500`}
        >
          {
        data?.backdrop_path &&
        <img
          className="w-full h-full object-cover object-center"
          src={ `https://www.themoviedb.org/t/p/original/${data?.backdrop_path}`}
          alt={data?.title}
        />
          }
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/50" /> 
        <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-16">
          <div className="z-10 flex flex-col xl:flex-row gap-4 md:gap-8 items-center max-w-[1920px] mx-auto w-full">
            <div className="w-[12rem] h-[18rem] md:w-[19rem] md:h-[27rem] lg:w-[20rem] xl:w-[29rem] xl:h-[42rem] rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 flex-shrink-0">
              <img
                className={clsx("w-full h-full", {
                  "": !data.poster_path
                })}
                src={data?.poster_path ? `https://www.themoviedb.org/t/p/original/${data?.poster_path}` : '/images/image-icono.jpg'}
                alt={data?.title}
              />
            </div>
            <div className="text-white flex flex-col gap-2 md:gap-4 text-start">
              <p className="text-3xl md:text-4xl lg:text-6xl font-bold">{data?.title ? data?.title : data?.name}</p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 italic">
                {data?.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2 md:gap-4">
                  <CircleRating rating={rate} />
                  <span className="text-base md:text-xl">{date}</span>
                  {
                    data?.runtime || data?.number_of_episodes ? 
                    <>
                    <span>•</span>
                    <span className="text-base md:text-xl">{data?.runtime ? `${data?.runtime} min` : `${data?.number_of_episodes} episodes`}</span>
                    </>
                    : ''
                  }
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 items-center">
                  {data?.genres?.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-1 md:px-2 py-1 md:py-2 rounded-md dark:bg-gray-500 bg-gray-900/50 text-white text-xs h-fit"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-white dark:text-gray-300 leading-relaxed max-w-5xl text-start">
                {data?.overview}
              </p>
              {
                data?.video ? 
              <div>
                <ButtonWatchTrailer/>
              </div>
              : ''
              }
              {
                openVideoModal && (
                  <ModalVideo
                    selectedVideoKey={selectedVideoKey}
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
useInitialScroll():
Asegura que la página empiece desde arriba
Se ejecuta antes de que el contenido se muestre
useIntersectionObserver:
Configurado con threshold: 0.5 (se dispara cuando el 50% del elemento es visible)
Controla la visibilidad del banner para las animaciones
Suspense:
Componente de React para manejar estados de carga
Muestra el LoadingSpinner mientras el contenido se carga
Estilos y clases:
h-[100vh]: Altura completa del viewport
min-h-[600px]: Altura mínima para evitar que se haga muy pequeño
transition-opacity: Transición suave para la opacidad
scrollMarginTop: '0px': Ayuda a prevenir el scroll automático


*/