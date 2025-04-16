import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { IMovie } from "../../interfaces/IMovie"
import { useKeywords } from "../../hooks/useMovies"
import { useNavigate } from "react-router-dom"

type DetailsInformationProps = {
  data: IMovie
  type: string
}

export const DetailsInformation = ({data, type}: DetailsInformationProps) => {
  const navigate = useNavigate()

  const {t} = useTranslation()
  const {data: keywords} = useKeywords(type, data?.id)

  if(!data || !keywords) return;
 
  const date = data?.release_date?.substring(0, 4);
  const newDate = data?.release_date?.split("-").reverse().join("-");

  const director = data?.credits?.crew?.filter(
    (crew) => crew.job === "Director"
  );
  const writer = data?.credits?.crew?.filter(
    (crew) => crew.job === "Screenplay"
  );


  // Extraemos los nombres del director y escritor
  const directorNames = director?.map((crew) => crew.name).join(", "); //Devuelve array con los nombres y los separa con un especio después de cada coma.
  const writerNames = writer?.map((crew) => crew.name).join(", ");
  return (
    <>
          {/* Details Section */}
          {/* Title, Release Date, Status, Runtime, Language, Budget, Revenue, Studios, Technical Details */}
     <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12 max-w-[1920px]">
        <div className="grid grid-cols-1 gap-8 md:gap-12">
          <div>
            <div className="text-start text-base leading-10">
              <div className="flex flex-row mt-6 gap-4">
                <p>
                  <span className="font-bold dark:text-textDark">
                    {t("status")}
                  </span>{" "}
                  <span className="text-gray-500 dark:text-gray-300">
                    {data?.status}
                  </span>
                </p>
                <p>
                  <span className="font-bold dark:text-textDark">
                    {t("releaseDate")}
                  </span>{" "}
                  <span className="text-gray-500 dark:text-gray-300">
                    {newDate}
                  </span>
                </p>
                <p>
                  <span className="font-bold dark:text-textDark">
                    {t("runtime")}
                  </span>{" "}
                  <span className="text-gray-500 dark:text-gray-300">
                    {data?.runtime} min
                  </span>
                </p>
              </div>
              
              <p>
                <span className="font-bold dark:text-textDark">
                  {t("director")}
                </span>{" "}
                <span className="text-gray-500 dark:text-gray-300">
                  {directorNames || "N/A"}
                </span>
              </p>
              
              <p>
                <span className="font-bold dark:text-textDark">
                  {t("writer")}
                </span>{" "}
                <span className="text-gray-500 dark:text-gray-300">
                  {writerNames || "N/A"}
                </span>
              </p>
              
            </div>
          </div>
        </div>
      </div> 
      <div>
        {/* Keywords */}
        <p className="text-start">{t("keywords")}</p>
        <div className="flex flex-wrap">
          {
            keywords.keywords.map(({name, id}: {name: string, id: string}) => (
              <Link key={id}  to={`/keywords/${id}-${name.replace(/\s+/g, "-")}`} className="rounded-lg border-[1px] border-gray-700 p-1 text-[.75rem] m-1 bg-slate-200 hover:bg-slate-300 text-black dark:bg-gray-500 dark:text-white dark:hover:bg-gray-600">
                 {name}
              </Link>
            ))
          } 
        </div>
      </div>
      <div>
        {/* Redes sociales */}
      </div>
      </>
  )
}
/*
Mejor usas <a></a> para las keyword que usar button por esto:
  Accesibilidad: Los enlaces son elementos semánticos que indican navegación, lo cual es bueno para lectores de pantalla y accesibilidad en general.

  SEO: Los enlaces mejoran el rastreo y el indexado por motores de búsqueda.

  Comportamiento esperado: El usuario espera que al hacer clic en una palabra clave se lo lleve a otra página (no a ejecutar lógica arbitraria).

  SSR/SSG (Next.js): Si estás usando Next.js, usar <Link href="/keywords/[id]"> permite una navegación más rápida gracias al precargado de rutas.

Cuándo NO usar <a>:
  Si vas a abrir un modal.

  Si la acción no es navegación (por ejemplo, ejecutar una animación, abrir un panel lateral, etc).

  Si estás usando lógica extra antes de navegar (aunque en esos casos puedes combinar ambas cosas).


 Ventajas de usar <Link to="..."> en React Router:
  No recarga la página.

  Mantiene el estado de tu SPA (Single Page App).

  Más rápido.

  Mejor experiencia de usuario.

  Compatible con el sistema de rutas internas.
*/
/*
to={`/keywords/${id}-${name.replace(/\s+/g, "-")}`} --> esto sustituye todos los espacios en blanco por - asi en la url el nombre no sale por ejemplo political20%thriller sale political-thriller
*/