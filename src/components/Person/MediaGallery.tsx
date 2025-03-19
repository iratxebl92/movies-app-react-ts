import { useMemo, useState } from "react";
import { useMoviesStore } from "../../config/store/store";
import { usePersonMovies } from "../../hooks/useMovies";
import { Card } from "../Card";

export const MediaGallery = () => {
  const { personContentSelected } = useMoviesStore();
  const { data, status } = usePersonMovies(personContentSelected, 1);
  const [visibleMovies, setVisibleMovies] = useState(20); // Mostramos inicialmente las peliculas o series que decidamos

  
  const gallery = [...(data?.cast || []), ...(data?.crew || [])]; //Unimos ambos arrays con spread operator
  const disabled = useMemo(() => visibleMovies >= gallery.length, [visibleMovies, gallery.length]); //Añadimos gallery.length a la dependencia para que cuando estén los datos de la API cargados lo recalcule, sino siempre será mayor viibleMovies ya que de primeras gallery.length será 0 

  return (
    <div>
      {
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 overflow-hidden ">
          {gallery.slice(0, visibleMovies).map((item, index) => (
            <Card movie={item} style={{ width: "85%" }} key={index} />
          ))}
        </div>
      }
      <div className="flex justify-center">
      {/* Al hacer click en Load More, añadimos el nº de pelis/series que decidamos a visibleMovies */}
      <button disabled={disabled} className={`border-2 rounded-xl p-4 mb-4 text-white  ${disabled ? 'bg-gray-500 cursor-no-drop' : 'bg-red-700 cursor-pointer' }`} onClick={() => setVisibleMovies((prev) => prev + 20)}>
        Load More
      </button>
      </div>
    </div>
  );
};
//TODO: Hacer el type de data bien hecho
{
  /* <img className="rounded-xl w-full h-full" src={`https://www.themoviedb.org/t/p/original//gakVVTn9QDupSHvgXm6XHNdmRJf.jpg`} alt="" /> */
}
