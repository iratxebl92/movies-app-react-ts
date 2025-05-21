import { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useMoviesStore } from "../../../config/store/store";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

export const MenuItems = () => {
  const { toggleTheme, language, setLanguage } = useMoviesStore();
  const { i18n, t } = useTranslation();

  // Sincronizar el estado `language` con i18next al montar
  useEffect(() => {
    if (language !== i18n.language) {
      setLanguage(i18n.language);
    }
  }, [i18n.language, setLanguage]);


  return (
    <nav>
      <ul className="flex flex-col gap-4 md:gap-0 md:flex-row md:space-x-4 md:mr-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline decoration-details decoration-3 font-bold md:pr-5"
              : "dark:text-white md:pr-5 hover:underline hover:decoration-3 hover:decoration-details"
          }
        >
          {t("home")}
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? "underline decoration-details decoration-3 font-bold md:pr-5"
              : "dark:text-white md:pr-5 hover:underline hover:decoration-3 hover:decoration-details"
          }
        >
          {t("movies")}
        </NavLink>
        <NavLink
          to="/tv-shows"
          className={({ isActive }) =>
            isActive
              ? "underline decoration-details decoration-3 font-bold md:pr-5"
              : "dark:text-white md:pr-5 hover:underline hover:decoration-3 hover:decoration-details"
          }
        >
          {t("tv")}
        </NavLink>
        <li className="flex justify-center dark:text-white md:pr-5 hover:underline hover:decoration-3 hover:decoration-details">
          <div className="dark:hidden">
            <button  onClick={() => toggleTheme('dark')}>
            <FaMoon className="inline hover:cursor-pointer hover:text-xl" />
            </button>

          </div>
          <div className="hidden dark:flex" >
          <button onClick={() => toggleTheme('light')} >
            <IoSunnyOutline className="inline hover:cursor-pointer  hover:text-xl"  />
            </button>
          </div>
        </li>
        <li className="flex justify-center ml-7 ">
          <LanguageSelector/>

        </li>
      </ul>
    </nav>
  );
};
