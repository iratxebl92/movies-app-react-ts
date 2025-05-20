import { IoPlayCircleOutline } from "react-icons/io5";
import { useMoviesStore } from "../config/store/store";
import { useTranslation } from "react-i18next";

export const ButtonWatchTrailer = () => {
    const {t} = useTranslation()
    const { setOpenVideoModal } = useMoviesStore()
    const prueba = () => {
        setOpenVideoModal(true)
        }
  return (
    <button
      className="flex items-center gap-2 bg-black/60 hover:bg-slate-700 transition-colors p-2 rounded-xl"
      onClick={prueba}
    >
      <IoPlayCircleOutline className="text-white/80 w-10 h-10 " />
      {t("watchTrailer")}
    </button>
  );
};
