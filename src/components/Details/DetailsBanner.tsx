import { useTranslation } from "react-i18next";
import { CircleRating } from "../../core/components/Icons/CircleRating";
import { PlayIcon } from "../../core/components/Icons/PlayIcon";
import { ICrew } from "../../interfaces/ICrew";
import { IMovie } from "../../interfaces/IMovie";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Suspense } from 'react';
import { LoadingSpinner } from "../../core/LoadingSpinner";
import { useInitialScroll } from "../../hooks/useInitialScroll";
type DetailsBannerProps = {
  data: IMovie;
};

export const DetailsBanner = ({ data }: DetailsBannerProps) => {
  useInitialScroll();
  const [bannerRef, isBannerVisible] = useIntersectionObserver({
    threshold: 0.5
  });
 
  const { t } = useTranslation();
  const date = data?.release_date?.substring(0, 4);
  const newDate = data?.release_date?.split("-").reverse().join("-");
  const rate = data?.vote_average?.toString().substring(0, 3);
  const director = data?.credits?.crew?.filter(
    (crew) => crew.job === "Director"
  );
  const writer = data?.credits?.crew?.filter(
    (crew) => crew.job === "Screenplay"
  );



  // Extraemos los nombres del director y escritor
  const directorNames = director?.map((crew) => crew.name).join(", ");
  const writerNames = writer?.map((crew) => crew.name).join(", ");



  return (
    <Suspense fallback={<LoadingSpinner />}>
    <div ref={bannerRef}  className="relative w-full">
      {/* Hero Banner Section */}
      <div 
          className={`
            after:content-['']
            after:bg-gradient-to-t after:from-light/100 after:via-light/50 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1/2  dark:after:from-dark/100 dark:after:via-dark/50
            relative w-full h-[100vh] min-h-[600px] transition-opacity duration-500 ${
            isBannerVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
        <img
          className="w-full h-full object-cover object-center"
          src={`https://www.themoviedb.org/t/p/original/${data?.backdrop_path}`}
          alt={data?.title}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark/50" /> 
        <div className="absolute inset-0 z-20 flex items-center px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center max-w-[1920px] mx-auto w-full">
            <div className="w-48 md:w-64 lg:w-96 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                className="w-full h-full object-cover"
                src={`https://www.themoviedb.org/t/p/original/${data?.poster_path}`}
                alt={data?.title}
              />
            </div>
            <div className="text-white flex flex-col gap-2 md:gap-4 text-start">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">{data?.title}</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 italic">
                {data?.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2 md:gap-4">
                  <CircleRating rating={rate} />
                  <span className="text-base md:text-xl">{date}</span>
                  <span>•</span>
                  <span className="text-base md:text-xl">{data?.runtime ? `${data?.runtime} min` : `${data?.number_of_episodes} episodes`}</span>
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
              <div className="mt-4 md:mt-9">
                <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-xl">
                  <PlayIcon />
                  <span className="text-sm text-white/80">Watch Trailer</span>
                </button>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      {/* <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 max-w-[1920px]">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          <div>
            <div className="text-start text-base leading-10">
              <div className="flex flex-row mt-6 gap-4">
                <p>
                  <span className="font-bold dark:text-textDark">
                    {t("status")}
                  </span>{" "}
                  <span className="text-gray-500 dark:text-gray-300">
                    {data?.status}
                  </span>
                </p>
                <p>
                  <span className="font-bold dark:text-textDark">
                    {t("releaseDate")}
                  </span>{" "}
                  <span className="text-gray-500 dark:text-gray-300">
                    {newDate}
                  </span>
                </p>
                <p>
                  <span className="font-bold dark:text-textDark">
                    {t("runtime")}
                  </span>{" "}
                  <span className="text-gray-500 dark:text-gray-300">
                    {data?.runtime} min
                  </span>
                </p>
              </div>
              <hr className="lg:mr-20" />
              <p>
                <span className="font-bold dark:text-textDark">
                  {t("director")}
                </span>{" "}
                <span className="text-gray-500 dark:text-gray-300">
                  {directorNames || "N/A"}
                </span>
              </p>
              <hr className="lg:mr-20" />
              <p>
                <span className="font-bold dark:text-textDark">
                  {t("writer")}
                </span>{" "}
                <span className="text-gray-500 dark:text-gray-300">
                  {writerNames || "N/A"}
                </span>
              </p>
              <hr className="lg:mr-20" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
    </Suspense>
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