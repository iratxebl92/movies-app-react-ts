import { useParams } from "react-router-dom";
import { useCredits } from "../hooks/useMovies";
import { ICast } from "../interfaces/ICast";
import { Cast } from "../components/Details/Cast/Cast";
import { ChangeEvent, useEffect, useState } from "react";
import { t } from "i18next";

export const CastPage = () => {
  const [search, setSearch] = useState("");
  const { type, idAndName } = useParams();
  if (!idAndName) return null;
  const [id, ...rest] = idAndName.split("-");
  console.log(rest);

  const { data: credits } = useCredits(
    type === "tv" ? `/tv/${id}/aggregate_credits` : `/movie/${id}/credits`
  );
  const [newCast, setNewCast] = useState([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  console.log(search, "search");

  //TODO: Mirar bien lo del Search para filtrar por lo que busque

  useEffect(() => {
    if (credits) {
      setNewCast(credits?.cast);
    }
  }, [credits]);

  useEffect(() => {
    //Boolean([]) === true si al filter añadimos || [] aunque no cumpla y sea false se va a convertir en true, por eso devolveria siempre todo el cast
    const prueba = credits?.cast?.filter(
      (cast: ICast) =>
         cast.character?.toLowerCase().includes(search.toLowerCase()) ||
        cast.name?.toLowerCase().includes(search.toLowerCase())
    );
    console.log(prueba, "prueba");
    setNewCast(prueba);
  }, [search]);

  if (!credits) return null;
  return (
    <div className="max-w-1920 mx-10 min-h-[calc(100vh-160px)]">
      <p className="text-2xl sm:text-3xl text-center">{rest.join(" ")}</p>
      <div className="flex flex-col sm:flex-row justify-start mt-5 sm:mt-10 max-w-[1550px] mx-auto">
        <p className="text-xl sm:text-2xl text-center mb-4 sm:mb-0 font-semibold mr-10">
          Cast ({credits?.cast.length})
        </p>
        <input
          type="search"
          placeholder="Search cast"
          className="rounded-lg placeholder:p-4 h-9 w-[187px] md:w-[250px] text-black p-4 "
          value={search}
          onChange={handleSearch}
        />
      </div>
     
        {newCast && newCast.length > 0 ? (
                <div className="grid grid-cols-2 sm:flex gap-5 sm:flex-wrap sm:justify-center mt-10 last-of-type:justify-start max-w-[1550px] mx-auto">

         { newCast.map((cast: ICast) =>( <Cast cast={cast} key={cast.id} />))}
          </div>
          
        ) : (
          <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
            <p className="text-2xl">{t("castNoAvalible")}</p>
          </div>
        )}
      </div>
  
  );
};
