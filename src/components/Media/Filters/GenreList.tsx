import { useLocation } from "react-router-dom";
import { useGenresList } from "../../../hooks/useMovies";

export const GenreList = () => {
  const location = useLocation();
  const type = location.pathname.includes("movies") ? "movie" : "tv";
  const { data: genreList } = useGenresList(type);
  if (!genreList) return null;
  console.log(genreList.genres);
  return (
    <div>
      <p className="mb-2">Genres</p>
      <div className="flex flex-wrap gap-2">
        {genreList.genres.map((genre: { id: number; name: string }) => (
          <p onClick={() => console.log(genre)} className="text-white border-2 rounded-full w-fit p-2 text-sm hover:bg-slate-400 hover:cursor-pointer">
            {" "}
            {genre.name}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};
