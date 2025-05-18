import { useState } from "react";
import { useMoviesStore } from "../../config/store/store";
import { useDetailsAndCast, useSeasonDetails } from "../../hooks/useMovies";
import OptionsSelect from "../OptionsSelect";
import { formatDate } from "../../utils/filters";
import { StarIcon } from "../../core/components/Icons/StarIcon";
import { motion, AnimatePresence } from "framer-motion";

export const Season = ({ id, type }: { id: number; type: string }) => {
  const [selectedSeason, setSelectedSeason] = useState(0);
  const { language } = useMoviesStore();
  const { data } = useDetailsAndCast(type, id, language);

  const { data: seasonData } = useSeasonDetails(id, selectedSeason, language);
  if (!seasonData || !data?.seasons) return null;
  const seasons: string[] = data?.seasons.map((season: any) => season.name) || [];

  const handleSeasonChange = (season: string) => {
    const seasonInfo = data?.seasons.find((s: any) => s.name === season);
    setSelectedSeason(seasonInfo?.season_number);
  };

  return (
    <>
      <OptionsSelect
        options={seasons}
        style={{ width: "300px" }}
        value={data?.seasons.find((s: any) => s.season_number === selectedSeason)?.name || seasons[0]}
        onOptionChange={handleSeasonChange}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSeason}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className='text-start leading-7 my-8'>
            {seasonData.overview && <p className="opacity-80">{seasonData.overview} </p>}
          </div>
          {seasonData.episodes.map((episode: any) => (
            <div key={episode.id} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 mb-11 lg:mb-4">
              <div className="rounded-xl h-52 md:h-[25rem] md:w-[45rem] lg:h-[15rem] lg:w-[30rem] overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/original/${episode.still_path}`}
                  alt="episode image"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 text-start">
                <div>
                  <p className="text-3xl font-bold">{episode.episode_number} - {episode.name}</p>
                  <div className="flex flex-row gap-2 leading-8 text-sm opacity-75">
                    <p className="pr-3">
                      {episode?.air_date
                        ? formatDate(episode.air_date, language)
                        : "Sin fecha"}
                    </p>
                    <p>{episode.runtime} min </p>
                    <p className="flex gap-2 items-center pl-3">
                      <span>
                        <StarIcon />
                      </span>
                      <span> {episode.vote_average}</span>
                    </p>
                  </div>
                </div>
                <p>{episode.overview}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
