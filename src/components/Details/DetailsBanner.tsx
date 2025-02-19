import { CircleRating } from "../../core/components/Icons/CircleRating";
import { PlayIcon } from "../../core/components/Icons/PlayIcon";
import { IMovie } from "../../interfaces/IMovie";

type DetailsBannerProps = {
  data: IMovie;
};

export const DetailsBanner = ({ data }: DetailsBannerProps) => {
  const date = data?.release_date?.substring(0,4)
  const rate = data?.vote_average?.toString().substring(0,3)
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
        {/* <a href={data?.homepage} target="_blank">
         Web oficial
        </a> */}
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
          {/* <div className="flex text-sm items-center ml-7">
            <p className="px-3"> {date} </p>
            <p className="pr-3">|</p>
            <div className="flex pr-3 align-center">
              <p className="pr-1 pt-0.5"> <StarIcon  /> </p>
              <p>{data?.vote_average} </p> 
            </div>
            <p className="pr-3">|</p>
            <p> 1.46h </p>
        </div> */}
        </div>
        <div className=" mt-6 flex flex-row items-center ">
          <CircleRating rating={rate} />
          <div className="flex items-center ml-7 cursor-pointer">
            <PlayIcon />
          <p className="ml-4 text-xl">Trailer</p>
          </div>
        </div>
        <div className="flex flex-col text-start mt-6">
          <p className="font-bold">Overview</p>
          <p className="text-sm/6 mr-20">{data?.overview} </p>
        </div>
        <div className=" text-start text-base leading-10">
          <div className="flex flex-row mt-6 gap-4">
            <p> <span className="font-bold">Status:</span> <span className="text-gray-500">{data?.status} </span> </p>
            <p> <span className="font-bold">Release Date:</span> <span className="text-gray-500">Nov 18, 1997</span> </p>
            <p> <span className="font-bold">Runtime:</span> <span className="text-gray-500">3h 14m</span> </p>
          </div>
          <hr className="lg:mr-20" />
          <p> <span className="font-bold">Director:</span> <span className="text-gray-500">James Cameron</span> </p>
          <hr className="lg:mr-20"/>
          <p> <span className="font-bold">Writer:</span> <span className="text-gray-500">James Cameron</span> </p>
          <hr className="lg:mr-20"/>
        </div>
          {/* <div>
            <p className="font-bold text-start mt-6">Production Companies</p>
            <div className="flex flex-row mt-4">
              {data?.production_companies?.map((company) => {
                return (
                  <div className="mr-4" key={company.id}>
                    <img
                      className=" h-10"
                      src={`https://www.themoviedb.org/t/p/original/${company.logo_path}`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div> */}
      </div>
    </div>
  );
};
