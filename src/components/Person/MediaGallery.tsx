import { useMoviesStore } from "../../config/store/store";
import { usePersonMovies } from "../../hooks/useMovies";
import { Card } from "../Card";



export const MediaGallery = () => {
  const { personContentSelected } = useMoviesStore();
  const { data, status } = usePersonMovies(personContentSelected, 1);

  const gallery = [...(data?.cast || []), ...(data?.crew || [])]; //Unimos ambos arrays con spread operator

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 overflow-hidden ">
      {gallery.map((item, index) => (
        <Card movie={item} style={{ width: "85%" }} key={index} />
      ))}
    </div>
  );
};
//TODO: Hacer el type de data bien hecho
{
  /* <img className="rounded-xl w-full h-full" src={`https://www.themoviedb.org/t/p/original/${item.poster_path}`} alt="" /> */
}
