import * as motion from "motion/react-client";
import { useNavigate } from "react-router-dom";
import { ICast } from "../../interfaces/ICast";

type CastProps = {
  cast: ICast;
};

export const Cast = ({ cast }: CastProps) => {
  const navigate = useNavigate();
console.log(cast)
  const handleClick = () => {
    navigate(`/person/${cast.id}-${cast?.name?.replace(/\s+/g, "-")}`);
  };


  return (
    <div className="mb-2 dark:text-white" onClick={handleClick}>
      <div>
        <motion.div 
          whileHover={{ scale: 1.016 }} 
          whileTap={{ scale: 1.1 }}
          className="transition-transform duration-200"
        >
          <div className="cursor-pointer">
            <img
              src={
                cast?.profile_path
                  ? `https://www.themoviedb.org/t/p/w220_and_h330_face${cast?.profile_path}`
                  : "/images/people-icon.png"
              }
              className={`rounded-lg h-15 w-40 object-contain ${
                !cast?.profile_path && "border-2"
              }`}
              alt={cast?.name}
              title={cast?.name}
            />
          </div>
          <div className="flex flex-col text-center text-sm w-40 mt-1">
            <p className="font-medium truncate">{cast?.name}</p>
            <p className="text-gray-600 dark:text-gray-300 truncate">
              {cast?.character ? cast?.character : cast?.roles[0].character}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
