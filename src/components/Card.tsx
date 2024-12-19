
import { StarIcon } from "../core/components/Icons/StarIcon";

type MoviesProps = {
  movie: any
}

export const Card = ({movie}: MoviesProps ) => {
  
  console.log(movie)



  return (
    

    <div className="flex flex-col w-40 mb-10 dark:text-white">
      <div className="rounded-lg">
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt=""
          className="rounded-lg"
        />
      </div>
      <p className="font-normal text-sm leading-7 line-clamp-1">
        {movie.title}
      </p>
      <div className="flex justify-between text-sm leading-5">
        <p> {movie.release_date} </p>
        <div className="flex flex-row text-sm ">
          <p>
            {" "}
            <StarIcon />{" "}
          </p>
          <p> {movie.vote_average} </p>
        </div>
      </div>
    </div>

  );
};
