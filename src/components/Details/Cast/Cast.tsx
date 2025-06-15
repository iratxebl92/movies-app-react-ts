import * as motion from "motion/react-client";
import { useNavigate } from "react-router-dom";
import { ICast } from "../../../interfaces/ICast";
import clsx from "clsx";

type CastProps = {
  cast: ICast;
  className?: string;
  imageClassName?: string;
};

export const Cast = ({ cast, className, imageClassName }: CastProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/person/${cast.id}-${cast?.name?.replace(/\s+/g, "-")}`);
  };

  return (
    <div className={clsx("mb-2 dark:text-white", className)} onClick={handleClick}>
      <div>
        <motion.div
          whileHover={{ scale: 1.016 }}
          whileTap={{ scale: 1.1 }}
          className="transition-transform duration-200"
        >
          <div className={clsx("cursor-pointer", imageClassName)}>
            <img
              src={
                cast?.profile_path
                  ? `https://www.themoviedb.org/t/p/original${cast?.profile_path}`
                  : "/images/icon-default.png"
              }
              className={clsx(
                "rounded-lg w-full object-cover object-top h-60",
                !cast?.profile_path && "border"
              )}
              alt={cast?.name}
              title={cast?.name}
            />
          </div>
          <div className="flex flex-col text-center  w-38 mt-1">
            <p className="font-medium truncate text-sm">{cast?.name}</p>
            <p className="text-gray-600 dark:text-gray-300 truncate text-xs hover:whitespace-normal hover:cursor-default">
              {cast?.character
                ? cast.character
                : cast?.roles && cast.roles[0]
                ? cast.roles[0].character
                : ""}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
