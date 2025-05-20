import { useEffect, useMemo, useState } from "react";
import { useMoviesStore } from "../../config/store/store";
import { usePersonMovies } from "../../hooks/useMovies";
import { Card } from "../../core/Card";
import { useParams } from "react-router-dom";
import { SwitchTab } from "../../core/SwitchTab";
import { MediaGallerySkeleton } from "../Skeleton/Person/MediaGallerySkeleton";
import OptionsSelect from "../../core/OptionsSelect";

export const MediaGallery = () => {
  const { idAndName } = useParams() as { idAndName: string }; // Solo usar si sabemos seguro que viene en la url y es string
 
  const [id] = idAndName.split("-");

  const { personContentSelected, personContentOption } = useMoviesStore();

 
  const { data, isLoading } = usePersonMovies(personContentSelected, Number(id));
  const [visibleMovies, setVisibleMovies] = useState(20); // Mostramos inicialmente las peliculas o series que decidamos
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [departmentSelected, setDepartmentSelected] = useState('All')
 
  const idUnicos = new Set(); //evitar duplicados
  const departments = (data?.crew ?? []) 
    .filter((movie: { department: string }) => {
      if (idUnicos.has(movie.department)) return false; //si cumple no se añade y no sigue ejecutando el código
      idUnicos.add(movie.department); //si no cumple se añade y se sigue ejecutando el código y se añade el departamento
      return true;
    })
    .map((movie: { department: string }) => movie.department); //se añade el departamento a la lista de departamentos

  const departmentsUnicos = ["Acting", ...departments]
  const optionDepartments = departmentsUnicos.length > 1 ? ["All", ...departmentsUnicos] : departmentsUnicos
  
 const selectMovies: string[] = departmentSelected === 'Acting' ? data?.cast : departmentSelected === 'All' ? [...(data?.cast ?? []), ...(data?.crew ?? [])] : data?.crew.filter((movie: { department: string }) => movie.department === departmentSelected) 
 const disabled = useMemo(() => visibleMovies >= selectMovies?.length - 20, [visibleMovies, selectMovies?.length]); //Añadimos gallery.length a la dependencia para que cuando estén los datos de la API cargados lo recalcule, sino siempre será mayor viibleMovies ya que de primeras gallery.length será 0 

useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowSkeleton(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (isLoading || showSkeleton) return <MediaGallerySkeleton/>;

  if (!data) return null; // Si no traer los datos de la API, no renderizamos nada
 
  const onTabChange = (tab: string) => {
    personContentOption(
      tab === "Películas" || tab === "Movies" ? "movie" : "tv"
    );
  };
   const selectedIndex = personContentSelected === "movie" ? 0 : 1;

   const opnDepartmentOptionChange = (option: string) => {
    setDepartmentSelected(option)

   }
   console.log(selectMovies)
  return (
    <>
          <SwitchTab
        options={["Movies", "Tv Show"]}
        onTabChange={onTabChange}
        className="flex justify-center py-10"
        selectedIndex={selectedIndex}
        
      />
          <div className="flex justify-end gap-6 mb-8">
            <OptionsSelect options={optionDepartments} style={{width: '10rem'}} value={departmentSelected} onOptionChange={opnDepartmentOptionChange} />
      </div>
    <div>
      {
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {selectMovies.slice(0, visibleMovies).map((item, index) => (
            <Card movie={item} style={{ width: "100%" }} key={index} />
          ))}
        </div>
      }
      <div className="flex justify-center">
      {/* Al hacer click en Load More, añadimos el nº de pelis/series que decidamos a visibleMovies */}
      <button disabled={disabled} className={`border-2 rounded-xl p-4 mt-4 text-white  ${disabled ? 'hidden' : 'bg-red-700 cursor-pointer' }`} onClick={() => setVisibleMovies((prev) => prev + 20)}>
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