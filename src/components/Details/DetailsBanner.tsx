import { useTranslation } from "react-i18next";
import { CircleRating } from "../../core/components/Icons/CircleRating";
import { PlayIcon } from "../../core/components/Icons/PlayIcon";
import { ICrew } from "../../interfaces/ICrew";
import { IMovie } from "../../interfaces/IMovie";

type DetailsBannerProps = {
  data: IMovie;
  castData: {
    crew: ICrew[];
  };
};

export const DetailsBanner = ({ data, castData }: DetailsBannerProps) => {
  const {t} = useTranslation();
  console.log(data)
  const date = data?.release_date?.substring(0, 4);
  const newDate = data?.release_date?.split("-").reverse().join("-");
  const rate = data?.vote_average?.toString().substring(0, 3);
  const director = castData?.crew?.filter((crew) => crew.job === "Director");
  const writer = castData?.crew?.filter((crew) => crew.job === "Screenplay");

  // Extraemos los nombres del director y escritor
  const directorNames = director?.map((crew) => crew.name).join(", ");
  const writerNames = writer?.map((crew) => crew.name).join(", ");

  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-12 py-16">
      <div>
        <img
          className="inline max-w-96 rounded-3xl"
          src={`https://www.themoviedb.org/t/p/original/${data?.poster_path}`}
          alt=""
        />
      </div>
      <div className="">
        <div className="mb-2 text-start">
          <h2 className="text-4xl font-semibold "> {data?.title} </h2>
          <h3 className="text-gray-500 italic"> {data?.tagline} </h3>
        </div>

        <div className="flex flex-row align-center">
          <div className="flex flex-row text-xs">
            {data?.genres?.map((genre) => {
              return (
                <p
                  className=" mr-2 rounded-md p-1 bg-purple-500 text-white"
                  key={genre.id}
                >
                  {" "}
                  {genre.name}{" "}
                </p>
              );
            })}
          </div>
        </div>

        <div className=" mt-6 flex flex-row items-center">
          <CircleRating rating={rate} />
          <div className="flex items-center ml-7 cursor-pointer">
            <PlayIcon />
            <p className="ml-4 text-xl dark:text-textDark">Trailer</p>
          </div>
        </div>

        <div className="flex flex-col text-start mt-6">
          <p className="font-bold dark:text-textDark">{t('overview')} </p>
          <p className="text-sm/6 mr-20 dark:text-textDark">{data?.overview} </p>
        </div>

        <div className=" text-start text-base leading-10">
          <div className="flex flex-row mt-6 gap-4">
            <p>
              {" "}
              <span className="font-bold dark:text-textDark">{t('status')}</span>{" "}
              <span className="text-gray-500 dark:text-gray-300">{data?.status} </span>{" "}
            </p>
            <p>
              {" "}
              <span className="font-bold dark:text-textDark">{t('releaseDate')}</span>{" "}
              <span className="text-gray-500 dark:text-gray-300">{newDate}</span>{" "}
            </p>
            <p>
              {" "}
              <span className="font-bold dark:text-textDark">{t('runtime')}</span>{" "}
              <span className="text-gray-500 dark:text-gray-300">{data?.runtime} min </span>{" "}
            </p>
          </div>
          <hr className="lg:mr-20" />
          <p>
            {" "}
            <span className="font-bold dark:text-textDark">{t('director')}</span>{" "}
            <span className="text-gray-500 dark:text-gray-300">{directorNames || "N/A"}</span>{" "}
          </p>
          <hr className="lg:mr-20" />
          <p>
            {" "}
            <span className="font-bold dark:text-textDark">{t('writer')}</span>{" "}
            <span className="text-gray-500 dark:text-gray-300">{writerNames || "N/A"}</span>{" "}
          </p>
          <hr className="lg:mr-20" />
        </div>
      </div>
    </div>
  );
};
