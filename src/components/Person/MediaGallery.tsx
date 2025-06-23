import { Card } from "../../core/Card";
import { SwitchTab } from "../../core/SwitchTab";
import { MediaGallerySkeleton } from "../Skeleton/Person/MediaGallerySkeleton";
import OptionsSelect from "../../core/OptionsSelect";
import { useTranslation } from "react-i18next";
import { useMediaGallery } from "./hooks/useMediaGallery";

export const MediaGallery = () => {
  const { t } = useTranslation();
  const {
    isLoading,
    showSkeleton,
    data,
    selectMovies,
    visibleMovies,
    setVisibleMovies,
    disabled,
    optionDepartments,
    departmentSelected,
    selectedIndex,
    onTabChange,
    onDepartmentOptionChange
  } = useMediaGallery();

  if (isLoading || showSkeleton) return <MediaGallerySkeleton/>;
  if (!data) return null;

  return (
    <>
      <SwitchTab
        options={["Movies", "Tv Show"]}
        onTabChange={onTabChange}
        className="flex justify-center py-10"
        selectedIndex={selectedIndex}
      />
      <div className="flex justify-end gap-6 mb-8">
        <OptionsSelect 
          options={optionDepartments} 
          style={{width: '10rem'}} 
          value={departmentSelected} 
          onOptionChange={onDepartmentOptionChange} 
          getOptionLabel={(option: any) => option}
          getOptionValue={(option: any) => option}
        />
      </div>
      <div>
        {selectMovies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {selectMovies.slice(0, visibleMovies).map((item, index) => (
              <Card movie={item} style={{ width: "100%" }} key={index} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-full min-h-[20vh]">
            <p className="text-2xl font-bold">{t('noMoviesOrTvShows')}</p>
          </div>
        )}
        <div className="flex justify-center">
          <button 
            disabled={disabled} 
            className={`border-2 rounded-xl p-4 mt-4 text-white ${disabled ? 'hidden' : 'bg-red-700 cursor-pointer'}`} 
            onClick={() => setVisibleMovies((prev) => prev + 20)}
          >
            {t('loadMore')}
          </button>
        </div>
      </div>
    </>
  );
};


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