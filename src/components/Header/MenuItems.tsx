import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useMoviesStore } from "../../config/store/store";
import { useTranslation } from "react-i18next"; // Importar el hook de i18n
import { NavLink } from "react-router-dom";

export const MenuItems = () => {
  const { theme, toggleTheme, language, setLanguage } = useMoviesStore();
  const { t } = useTranslation(); 
``
  return (
    <nav>
      <ul className="md:flex md:flex-row md:space-x-4 md:mr-1">
        <NavLink to="/" className={({isActive}) => isActive ? "underline decoration-details decoration-3 font-bold md:pr-5" : "dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details"}>
          {t('home')} 
        </NavLink>
        <NavLink to="/movies"className={({isActive}) => isActive ? "underline decoration-details decoration-3 font-bold md:pr-5" : "dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details"}>
          {t('movies')} 
        </NavLink>
        <NavLink to="/tv-shows"className={({isActive}) => isActive ? "underline decoration-details decoration-3 font-bold md:pr-5" : "dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details"}>
          {t('tv')} 
        </NavLink>
        <li className="dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details">
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <FaMoon className="inline hover:cursor-pointer " />
            ) : (
              <IoSunnyOutline className="inline hover:cursor-pointer " />
            )}
          </button>
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-detail">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="dark:bg-dark dark:text-white"
              >
                <option value="en">EN</option> 
                <option value="es">ES</option>
              </select>
        </li>
      </ul>
    </nav>
  );
};
