import * as motion from "motion/react-client"
import { StarIcon } from "../core/components/Icons/StarIcon";

type MoviesProps = {
  movie: any;
  containerClassName?: string;
  style?: React.CSSProperties; // Solo permite estilos específicos
};

export const Card = ({
  movie,
  containerClassName = "flex flex-col w-40 lg:w-48 mb-10 dark:text-white",
  style = {},
}: MoviesProps) => {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 1.1 }}>
      <div className={containerClassName} style={style}>
        <div className="rounded-lg">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
            alt=""
            className="rounded-lg w-full"
          />
        </div>
        <p className="font-normal text-sm leading-7 line-clamp-1">
          {movie.title ? movie.title : movie.name}
        </p>
        <div className="flex justify-between text-sm leading-5">
          <p>{movie.release_date ? movie.release_date : movie.first_air_date}</p>
          <div className="flex flex-row text-sm">
            <p><StarIcon /></p>
            <p>{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
