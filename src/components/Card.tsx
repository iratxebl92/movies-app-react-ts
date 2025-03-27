import * as motion from "motion/react-client"
import { StarIcon } from "../core/components/Icons/StarIcon";
import { NavLink, useNavigate } from "react-router-dom";

type MoviesProps = {
  movie: any;
  containerClassName?: string;
  style?: React.CSSProperties; // Solo permite estilos específicos
};

export const Card = ({
  movie,
  style = {},
}: MoviesProps) => {
  const navigate = useNavigate()

  const movieVoteAverage = movie?.vote_average.toString().substr(0,3);
  const prueba =  (id:number, movie_type: any) => {
    const type = movie_type ? movie_type : "tv"
    console.log(type, "TYPE")
   navigate(`/details/${type}/${id}`)
  }
 

  return (
    <motion.div whileHover={{ scale: 1.016}} whileTap={{ scale: 1.1 }} >
      <div className="flex flex-col cursor-pointer w-40 lg:w-48 mb-10 dark:text-white bg"style={style} onClick={() => prueba(movie.id, movie.media_type)}>
        <div className="">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt=""
            className=" rounded-t-lg w-full"
          />
        </div>
        <div className="px-2 pb-2 bg-slate-300 dark:bg-slate-500 rounded-b-lg">

        <p className="font-semibold text-sm leading-7 line-clamp-1">
          {movie.title ? movie.title : movie.name}
        </p>
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
