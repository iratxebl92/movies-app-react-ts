import { IoPlayCircleOutline } from "react-icons/io5";
import { useMoviesStore } from "../config/store/store";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

type ButtonWatchTrailerProps = {
  className?: string
}

export const ButtonWatchTrailer = ({className}: ButtonWatchTrailerProps) => {
    const {t} = useTranslation()
    const { setOpenVideoModal, setIsWatchTrailerButton } = useMoviesStore()
    const handleOpenTrailer = () => {
        setIsWatchTrailerButton(true)
        setOpenVideoModal(true)
    }
  return (
    <button
      className={clsx("flex items-center gap-2 bg-black/60 hover:bg-slate-700 transition-colors p-2 rounded-xl", className)}
      onClick={handleOpenTrailer}
    >
      <IoPlayCircleOutline className="text-white/80 w-10 h-10 " />
      {t("watchTrailer")}
    </button>
  );
};
