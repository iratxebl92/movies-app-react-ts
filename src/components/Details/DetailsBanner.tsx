
import { IMovie } from "../../interfaces/IMovie";

type DetailsBannerProps = {
  data: IMovie;
};

export const DetailsBanner = ({ data }: DetailsBannerProps) => {
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
        <div className="flex flex-row text-xs">
          {data?.genres?.map((genre) => {
            return <p className=" mr-2 rounded-md p-1 bg-purple-500 text-white"  key={genre.id}> {genre.name} </p>;
          })}
        </div>
      </div>
    </div>
  );
};
