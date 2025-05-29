import { useLocation } from "react-router-dom";
import { useGenresList } from "../../../hooks/useMovies";
import { useEffect, useState } from "react";
import { useMoviesStore } from "../../../config/store/store";


type  GenreListType = {
  id: number;
  name: string;
  selected?: boolean
}

export const GenreList = () => {

  const location = useLocation();
  const type = location.pathname.includes("movies") ? "movie" : "tv";
  const { data: genreList } = useGenresList(type);
  const [genres, setGenres] = useState<any>([]); // all genres
  const { setFilterParams } = useMoviesStore()

  useEffect(() => {
  
    if (genreList?.genres) {
      const initializedGenres = genreList.genres.map((genre: GenreListType) => ({
        ...genre,
        selected: false,
      }));
      setGenres(initializedGenres); //actualizamos los genres con la propiedad selected
    }
    
  }, [genreList])
  useEffect(() => {
    const selectedGenres = genres.filter((genre: GenreListType) => genre.selected === true)
    setFilterParams({ genres: selectedGenres.map((genre: GenreListType) => genre.id)})
  }, [genres])


  const handleGenres = (clickedGenre: GenreListType) => {
    const updatedGenres = genres.map((genre: GenreListType) =>
      genre.id === clickedGenre.id
        ? { ...genre, selected: !genre.selected }
        : genre
    );
    setGenres(updatedGenres); 
  };

  if (!genreList) return null;

  return (
    <div>
      <p className="mb-2">Genres</p>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre: { id: number; name: string, selected: boolean }) => (
          <button onClick={() => handleGenres(genre)} className={` ${genre.selected? 'bg-red-500' : ''} text-white border-2 rounded-full w-fit p-2 text-sm hover:scale-105 hover:cursor-pointer`}>
            {" "}
            {genre.name}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};
