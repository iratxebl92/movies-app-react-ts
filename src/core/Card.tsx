import * as motion from "motion/react-client"
import { StarIcon } from "./components/Icons/StarIcon";
import { useNavigate } from "react-router-dom";

// Definición de tipos para las props del componente
// movie: contiene toda la información de la película
// containerClassName: permite añadir clases adicionales al contenedor (opcional)
// style: permite añadir estilos inline adicionales (opcional)
type MoviesProps = {
  movie: any;
  containerClassName?: string;
  style?: React.CSSProperties;
  className?: string;
};

export const Card = ({
  movie,
  style = {},
  className = "",
}: MoviesProps) => {
  const navigate = useNavigate()

  // Formatea el promedio de votos a 3 caracteres (ej: 7.89)
  const movieVoteAverage = movie?.vote_average.toString().substr(0,3);
  
  // Función para navegar a la página de detalles
  // Determina si es una película o serie TV basado en first_air_date
  const prueba = (id:number, first_air_date: any, name: string) => {
    console.log(name)
    const type = first_air_date ? 'tv' : 'movie'
    navigate(`/details/${type}/${id}-${name.replace(/\s+/g, "-")}`)

  }

  return (
    // Contenedor con animación al hover y tap
    // h-full asegura que el card ocupe todo el alto disponible
    <motion.div 
      whileHover={{ scale: 1.016}} 
      whileTap={{ scale: 1.1 }}
      className="h-full"
    >
      {/* Contenedor principal del card */}
      <div 
        className={`flex flex-col cursor-pointer h-full dark:text-white ${className}`}
        style={style} 
        onClick={() => prueba(movie.id, movie.first_air_date, movie.name? movie.name : movie.title)}
      >
        {/* Contenedor de la imagen con aspect ratio 2:3 (usando padding-bottom) */}
        <div className="relative pb-[150%] w-full">
          {/* Imagen del poster que se ajusta al contenedor manteniendo proporciones */}
          {movie.poster_path ?
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
          />
          :
          <div className="absolute top-0 left-0 w-full h-full bg-gray-500 rounded-t-lg">
            <img src="/images/icono-img.png" alt="" />
          </div>
          }
        </div>
        {/* Contenedor de la información con fondo y bordes redondeados */}
        <div className="px-2 pb-2 bg-slate-300 dark:bg-slate-500 rounded-b-lg flex-1">
          {/* Título de la película/serie con truncamiento a 1 línea */}
          <p className="font-semibold text-sm leading-7 line-clamp-1">
            {movie.title ? movie.title : movie.name}
          </p>
          {/* Contenedor de fecha y puntuación */}
          <div className="flex justify-between text-sm leading-5">
            <p>{movie.release_date ? movie.release_date : movie.first_air_date}</p>
            <div className="flex flex-row text-sm">
              <p><StarIcon /></p>
              <p>{movieVoteAverage}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
