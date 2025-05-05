import { useEffect, useMemo, useState } from "react";
import { useMoviesStore } from "../../config/store/store";
import { usePersonMovies } from "../../hooks/useMovies";
import { Card } from "../Card";
import { useParams } from "react-router-dom";
import { SortSelector } from "../SortSelector";
import { sortDepartaments, sortOptions } from "../../utils/filters";
import { SwitchTab } from "../SwitchTab";

export const MediaGallery = () => {
  const {id} = useParams()
  const { personContentSelected, filterDepartments, filterOptions, personContentOption } = useMoviesStore();
  const { data, status, isLoading } = usePersonMovies(personContentSelected, id);
  console.log(isLoading, "isLoading person")
  const [visibleMovies, setVisibleMovies] = useState(20); // Mostramos inicialmente las peliculas o series que decidamos
  const gallery = filterDepartments === "acting" ? data?.cast :  [...(data?.cast || []), ...(data?.crew || [])]; //Unimos ambos arrays con spread operator
  const disabled = useMemo(() => visibleMovies >= gallery?.length, [visibleMovies, gallery?.length]); //Añadimos gallery.length a la dependencia para que cuando estén los datos de la API cargados lo recalcule, sino siempre será mayor viibleMovies ya que de primeras gallery.length será 0 

  const idsUnicos = new Set(); //Esto servirá para guardar los id de las películas/series que ya hemos agregado, para evitar duplicados.
  if (!gallery) return null; // Si no traer los datos de la API, no renderizamos nada
  const prueba = gallery
  .sort((a, b) => {
    const isDesc = filterOptions.includes('.desc'); // Verifica si debe ser descendente
    const key = filterOptions.replace('.desc', '').replace('.asc', ''); // Extrae la clave real

    if (typeof a[key] === "string") {
      // Si es una cadena, ordenamos alfabéticamente
      return isDesc ? b[key].localeCompare(a[key]) : a[key].localeCompare(b[key]);
    }

    // Si es un número, ordenamos de forma numérica
    return isDesc ? b[key] - a[key] : a[key] - b[key];
  })
  .filter(item => {
    if (!idsUnicos.has(item.id)) {
      idsUnicos.add(item.id);
      return true;
    }
    return false;
  });
  const onTabChange = (tab: string) => {
    personContentOption(
      tab === "Películas" || tab === "Movies" ? "movie" : "tv"
    );
  };
   const selectedIndex = personContentSelected === "movie" ? 0 : 1;
  return (
    <>
          <SwitchTab
        options={["Movies", "Tv Show"]}
        onTabChange={onTabChange}
        className="flex justify-center py-10"
        selectedIndex={selectedIndex}
        
      />
          <div className="flex justify-end gap-6 mb-8">
        <SortSelector options={sortOptions} id="options"  />
        <SortSelector options={sortDepartaments} id="departaments" />
      </div>
    <div>
      {
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 overflow-hidden ">
          {prueba.slice(0, visibleMovies).map((item, index) => (
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
      </>
  );
};
//TODO: Hacer el type de data bien hecho
{
  /* <img className="rounded-xl w-full h-full" src={`https://www.themoviedb.org/t/p/original//gakVVTn9QDupSHvgXm6XHNdmRJf.jpg`} alt="" /> */
}


/*
¿Para qué sirve  const idsUnicos = new Set(); 
  Es un registro de los IDs que ya hemos agregado a prueba.
  Nos ayuda a decidir qué elementos incluir y cuáles descartar.
  Evita que revisemos manualmente el array en cada iteración (lo que haría el código más lento).
  Cada vez que recorremos gallery, verificamos si el id del elemento ya está en idsUnicos.
  Si el id no está, significa que es la primera vez que lo vemos → lo agregamos al Set y lo dejamos pasar.
  Si el id ya está en idsUnicos, significa que es un duplicado → lo ignoramos.
¿Por qué no lo usamos directamente en la salida?
  Porque idsUnicos solo es un registro de los IDs únicos, no la lista de películas final.
  El array filtrado final es prueba.
  idsUnicos solo nos ayuda a controlar qué entra en prueba.

*/

/*
como funciona .sort --> En cada paso de la función de comparación, JavaScript selecciona dos elementos consecutivos del array para compararlos. 
JavaScript ejecuta la función de comparación sobre todos los pares de elementos en el array gallery, como:
  a = gallery[0], b = gallery[1]
  Luego, a = gallery[1], b = gallery[2]

Y así sucesivamente hasta que todos los elementos estén ordenados según el criterio definido (por ejemplo, por nombre o edad, en orden ascendente o descendente).

La clave key se determina por filterOptions y dice qué propiedad del objeto gallery se va a comparar. Si filterOptions es "nombre.desc", entonces la clave será "nombre", y se compararán las propiedades nombre de los objetos de gallery.
localeCompare se usa para comparar las propiedades de tipo cadena, 
*/