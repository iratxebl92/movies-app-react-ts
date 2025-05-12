import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IMovie } from "../../interfaces/IMovie";
import { useKeywords, useWatchProviders } from "../../hooks/useMovies";
import { useNavigate } from "react-router-dom";
import { Card } from "../Card";
import { Cast } from "./Cast";
import { useEffect, useState } from "react";

type DetailsInformationProps = {
  data: IMovie;
  type: string;
};

export const DetailsInformation = ({ data, type }: DetailsInformationProps) => {
  const [providersResults, setProvidersResults] = useState<any[]>([]);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: keywords } = useKeywords(type, data?.id);
  const { data: watchProviders } = useWatchProviders(type, data?.id);
  console.log(watchProviders)
  // Unifica los posibles arrays de keywords
  const allKeywords = [
    ...(keywords?.results || []),
    ...(keywords?.keywords || [])
  ];
 
  const providers =  [
    { provider_name: "Netflix", logo_path: "/t2yyOv40HZeVlLjYsCsPHnWLk4W.jpg" },
    { provider_name: "Max", logo_path: "/aS2zvJWn9mwiCOeaaCkIh4wleZS.jpg" },
    { provider_name: "Apple TV+", logo_path: "/6uhKBfmtzFqOcLousHwZuzcrScK.jpg" },
    { provider_name: "Amazon Video", logo_path: "/5NyLm42TmCqCMOZFvH4fcoSNKEW.jpg" },
    { provider_name: "Disney Plus", logo_path: "/6WzXs9WwbKXyYQY0Y8YZkRJ4Y8YZkRJ4.jpg" },
    {provider_name: "Movistar Plus+ Ficción Total ", logo_path: '/6WzXs9WwbKXyYQY0Y8YZkRJ4Y8YZkRJ4.jpg'}
  ]

  useEffect(() => {
    if (watchProviders) {
      const selectedProviders = watchProviders?.results?.ES?.flatrate?.filter(
        (provider: any) =>
          providers.map((p) => p.provider_name).includes(provider.provider_name)
      );
      setProvidersResults(selectedProviders)
    }

  }, [watchProviders])


  if (!data || !keywords) return null;

  const director = data?.credits?.crew?.filter((crew) => crew.job === "Director");
  const writer = data?.credits?.crew?.filter((crew) => crew.job === "Screenplay");
  const directorNames = director?.map((crew) => crew.name).join(", ");
  const writerNames = writer?.map((crew) => crew.name).join(", ");


  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Columna izquierda - Información */}
      <div className="lg:w-1/3 max-w-sm md:max-w-md mx-auto lg:mx-0 w-full">
        <div className="bg-neutral-800/50 rounded-lg p-3 md:p-6 space-y-4 md:space-y-6">
          {/* Información General */}
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold">Información General</h2>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div>
                <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">{t("title")}</h3>
                <p className="text-xs md:text-sm text-neutral-300 line-clamp-2">{data?.name || data?.title}</p>
              </div>
              <div>
                <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">{t("language")}</h3>
                <p className="text-xs md:text-sm text-neutral-300">{data?.original_language?.toUpperCase()}</p>
              </div>
              <div>
                <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">{t("status")}</h3>
                <p className="text-xs md:text-sm text-neutral-300">{data?.status}</p>
              </div>
              <div>
                <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">{t("studios")}</h3>
                <p className="text-xs md:text-sm text-neutral-300 line-clamp-1">{data?.production_companies?.[0]?.name || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Detalles Específicos */}
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold">Detalles</h2>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {type === "movie" ? (
                <>
                  <div>
                    <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">{t("runtime")}</h3>
                    <p className="text-xs md:text-sm text-neutral-300">{data?.runtime} min</p>
                  </div>
                  <div>
                    <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">Budget</h3>
                    <p className="text-xs md:text-sm text-neutral-300">N/A</p>
                  </div>
                  <div>
                    <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">Revenue</h3>
                    <p className="text-xs md:text-sm text-neutral-300">N/A</p>
                  </div>
                  <div>
                    <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">Release Date</h3>
                    <p className="text-xs md:text-sm text-neutral-300">{data?.release_date}</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">{t("firstAirDate")}</h3>
                    <p className="text-xs md:text-sm text-neutral-300">{data?.first_air_date}</p>
                  </div>
                  <div>
                    <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">Type</h3>
                    <p className="text-xs md:text-sm text-neutral-300">TV Series</p>
                  </div>
                  <div>
                    <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">Seasons</h3>
                    <p className="text-xs md:text-sm text-neutral-300">{data?.number_of_seasons}</p>
                  </div>
                  <div>
                    <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">Episodes</h3>
                    <p className="text-xs md:text-sm text-neutral-300">{data?.number_of_episodes}</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Crew */}
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold">Crew</h2>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <div>
                <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">{t("director")}</h3>
                <p className="text-xs md:text-sm text-neutral-300 line-clamp-1">{directorNames || "N/A"}</p>
              </div>
              <div>
                <h3 className="text-[11px] md:text-sm font-medium text-neutral-400">{t("writer")}</h3>
                <p className="text-xs md:text-sm text-neutral-300 line-clamp-1">{writerNames || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Providers Section */}
            
            {/* Streaming */}
            {providersResults && (
          <div className="space-y-2 md:space-y-3">
            <h2 className="text-base md:text-lg lg:text-xl font-semibold">Dónde ver</h2>
              <div className="space-y-1.5 md:space-y-2">

                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {providersResults.map((provider) => (
                    <div key={provider.provider_name} className="flex items-center gap-1.5 md:gap-2 bg-neutral-700/50 px-2 py-1 md:py-1.5 rounded-lg">
                      <img
                        src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                        alt={provider.provider_name}
                        className="w-4 h-4 md:w-5 md:h-5 object-contain"
                      />
                      <span className="text-[11px] md:text-sm text-neutral-300">{provider.provider_name}</span>
                    </div>
                  ))}
                </div>
              </div>

          </div>
            )}

          {/* Keywords Section */}
          {allKeywords.length > 0 && (
            <div className="space-y-2 md:space-y-3">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold">{t("keywords")}</h2>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {allKeywords.map(({ name, id }: { name: string; id: string }) => (
                  <Link
                    key={id}
                    to={`/keywords/${id}-${name.replace(/\s+/g, "-")}`}
                    className="px-2 py-0.5 md:py-1 text-[11px] md:text-sm rounded-full bg-neutral-700 hover:bg-neutral-600 transition-colors"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Columna derecha - Cast */}
      <div className="lg:w-2/3">
        <div className="bg-neutral-800/50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Cast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {data?.credits?.cast?.slice(0, 12).map((cast) => (
              <Cast key={cast.id} cast={cast} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
