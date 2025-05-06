import { useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useMoviesStore } from "../../config/store/store";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const MenuItems = () => {
  const { toggleTheme, language, setLanguage } = useMoviesStore();
  const { i18n, t } = useTranslation();

  // Sincronizar el estado `language` con i18next al montar
  useEffect(() => {
    if (language !== i18n.language) {
      setLanguage(i18n.language);
    }
  }, [i18n.language, setLanguage]);

  // Cambiar idioma en i18next al cambiar el select
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <nav>
      <ul className="md:flex md:flex-row md:space-x-4 md:mr-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "underline decoration-details decoration-3 font-bold md:pr-5"
              : "dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details"
          }
        >
          {t("home")}
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive
              ? "underline decoration-details decoration-3 font-bold md:pr-5"
              : "dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details"
          }
        >
          {t("movies")}
        </NavLink>
        <NavLink
          to="/tv-shows"
          className={({ isActive }) =>
            isActive
              ? "underline decoration-details decoration-3 font-bold md:pr-5"
              : "dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details"
          }
        >
          {t("tv")}
        </NavLink>
        <li className="dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details">
          <div className="dark:hidden">
            <button  onClick={() => toggleTheme('dark')}>
            <FaMoon className="inline hover:cursor-pointer" />
            </button>

          </div>
          <div className="hidden dark:flex" >
          <button onClick={() => toggleTheme('light')} >
            <IoSunnyOutline className="inline hover:cursor-pointer"  />
            </button>
          </div>
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-detail">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="dark:bg-dark dark:text-white"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};
