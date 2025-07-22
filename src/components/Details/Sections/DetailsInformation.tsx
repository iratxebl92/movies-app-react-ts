import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Cast } from "../Cast/Cast";
import { IoTicketOutline, IoCalendarOutline, IoLanguageOutline, IoFilmOutline, IoTimeOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { IMovie } from '../../../interfaces/IMovie';
import { useDetailsInformation } from './hooks/useDetailsInformation';
import { ICast } from '../../../interfaces/ICast';
import { IKeyword } from '../../../interfaces';

type DetailsInformationProps = {
  data: IMovie;
  type: string;
};

export const DetailsInformation = ({ data, type }: DetailsInformationProps) => {
  const navigate = useNavigate();
  const { 
    providersResults, 
    allKeywords, 
    credits, 
    directorNames, 
    writerNames, 
    actualLanguage, 
    title,
    t 
  } = useDetailsInformation(data, type);

  if (!data) return null;

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 min-h-[600px]">
        {/* Columna izquierda - Info general */}
        <div className="lg:col-span-1 h-full">
          <div className="bg-gradient-to-br from-white/90 to-gray-100/60 dark:from-neutral-900/90 dark:to-neutral-800/60 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl backdrop-blur-sm border border-gray-200/30 dark:border-neutral-700/30 h-full">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-6 flex items-center gap-2">
              <IoFilmOutline className="text-blue-600 dark:text-blue-400" />
              <span>{t("infoDetails")}</span>
            </h2>
            
            <div className="space-y-3 md:space-y-6">
              {/* Tarjeta de titulo, language, status, studio*/}
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-start gap-3 bg-gray-100/50 dark:bg-neutral-800/50 rounded-lg p-3 flex-1">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <IoTicketOutline size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 dark:text-neutral-400 mb-0.5">{t("title")}</h3>
                    <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white line-clamp-2">{data?.name || data?.title}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-100/50 dark:bg-neutral-800/50 rounded-lg p-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <IoLanguageOutline size={20} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 dark:text-neutral-400 mb-0.5">{t("language")}</h3>
                    <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white">{actualLanguage?.name}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-100/50 dark:bg-neutral-800/50 rounded-lg p-3 flex-1">
                  <div className="p-2 bg-yellow-500/20 rounded-lg">
                    <IoCalendarOutline size={20} className="text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 dark:text-neutral-400 mb-0.5">{t("status")}</h3>
                    <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white">{data?.status}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-gray-100/50 dark:bg-neutral-800/50 rounded-lg p-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <IoFilmOutline size={20} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-gray-500 dark:text-neutral-400 mb-0.5">{t("studios")}</h3>
                    <p className="text-sm md:text-base font-medium text-gray-900 dark:text-white line-clamp-1">{data?.production_companies?.[0]?.name || "N/A"}</p>
                  </div>
                </div>
              </div>
              
              {/* Detalles específicos según tipo */}
              <div className="bg-gray-100/30 dark:bg-neutral-800/30 rounded-lg md:rounded-xl p-3 md:p-5">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Detalles</h3>
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 md:gap-y-4 md:gap-x-6">
                  {type === "movie" ? (
                    <>
                      <div>
                        <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-neutral-400 mb-0.5">{t("runtime")}</h4>
                        <p className="text-sm md:text-base text-gray-900 dark:text-white flex items-center gap-1">
                          <IoTimeOutline className="text-purple-600 dark:text-purple-400" />
                          {data?.runtime} min
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-neutral-400 mb-0.5">Release Date</h4>
                        <p className="text-sm md:text-base text-gray-900 dark:text-white">{data?.release_date}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-neutral-400 mb-0.5">{t("firstAirDate")}</h4>
                        <p className="text-sm md:text-base text-gray-900 dark:text-white">{data?.first_air_date}</p>
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-neutral-400 mb-0.5">Type</h4>
                        <p className="text-sm md:text-base text-gray-900 dark:text-white">TV Series</p>
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-neutral-400 mb-0.5">Seasons</h4>
                        <p className="text-sm md:text-base text-gray-900 dark:text-white">{data?.number_of_seasons}</p>
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-neutral-400 mb-0.5">Episodes</h4>
                        <p className="text-sm md:text-base text-gray-900 dark:text-white">{data?.number_of_episodes}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Director y Writer */}
              {directorNames || writerNames ? (
                <div className="bg-gray-100/30 dark:bg-neutral-800/30 rounded-lg md:rounded-xl p-3 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Crew</h3>
                  <div className="space-y-2 md:space-y-3">
                    {directorNames && (
                      <div>
                        <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-neutral-400 mb-0.5">{t("director")}</h4>
                        <p className="text-sm md:text-base text-gray-900 dark:text-white">{directorNames}</p>
                      </div>
                    )}
                    {writerNames && (
                      <div>
                        <h4 className="text-xs md:text-sm font-medium text-gray-500 dark:text-neutral-400 mb-0.5">{t("writer")}</h4>
                        <p className="text-sm md:text-base text-gray-900 dark:text-white">{writerNames}</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}

              {/* Donde ver */}
              {providersResults && providersResults.length > 0 && (
                <div className="bg-gray-100/30 dark:bg-neutral-800/30 rounded-lg md:rounded-xl p-3 md:p-5">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 dark:text-white">Dónde ver</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {providersResults.map((provider) => (
                      <div key={provider.provider_name} className="flex items-center gap-1.5 bg-gray-200/40 dark:bg-neutral-700/40 px-2 py-1.5 md:px-3 md:py-2 rounded-lg md:rounded-xl hover:bg-gray-200/70 dark:hover:bg-neutral-700/70 transition-colors">
                        <div className="flex gap-1.5 items-center">
                          <img
                            src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                            alt={provider.provider_name}
                            className="w-5 h-5 md:w-6 md:h-6 object-contain"
                          />
                          <span className="text-xs md:text-sm text-gray-900 dark:text-neutral-100">{provider.provider_name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Columna derecha - Cast */}
        <div className="lg:col-span-2 h-full">
          <div className="bg-gradient-to-br from-white/90 to-gray-100/60 dark:from-neutral-900/90 dark:to-neutral-800/60 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl backdrop-blur-sm border border-gray-200/30 dark:border-neutral-700/30 h-full">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <div className="flex items-center gap-2">
                <SlPeople className="text-blue-600 dark:text-blue-400" size={20} />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{t('topCast')}</h2>
              </div>
              {credits?.cast && credits.cast.length > 11 && (
                <button 
                  onClick={() => navigate(`/cast/${type}/${data.id}-${title?.replace(/\s+/g, "-")}`)}
                  className="text-xs md:text-sm bg-blue-100 hover:bg-blue-200 dark:bg-blue-600/20 dark:hover:bg-blue-600/40 text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-blue-200 dark:border-blue-600/40 transition-all"
                >
                  {t("cast")}
                </button>
              )}
            </div>

            <div className="h-full items-center">
              {credits?.cast?.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-2xl font-bold text-center text-neutral-500">{t('noCastAvailable')}</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-4">
                  {credits?.cast?.slice(0, 11).map((cast: ICast) => (
                    <Cast key={cast.id} cast={cast} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {allKeywords.length > 0 && (
        <div className="bg-gray-100/30 dark:bg-neutral-800/30 rounded-lg md:rounded-xl p-3 md:p-5 mt-8">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-start py-2 text-gray-900 dark:text-white">{t("keywords")}</h3>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {(allKeywords as IKeyword[]).map(({ name, id }) => (
              <Link
                key={id}
                to={`/keywords/${id}-${name.replace(/\s+/g, "-")}`}
                className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-neutral-700/50 dark:hover:bg-details transition-colors text-gray-900 dark:text-white"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}; 