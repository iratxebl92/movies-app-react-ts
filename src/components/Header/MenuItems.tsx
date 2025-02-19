import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useMoviesStore } from "../../config/store/store";
import { useTranslation } from "react-i18next"; // Importar el hook de i18n

export const MenuItems = () => {
  const { theme, toggleTheme, language, setLanguage } = useMoviesStore();
  const { t } = useTranslation(); 
  return (
    <nav>
      <ul className="md:flex md:flex-row md:space-x-4 md:mr-1">
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {t('home')} 
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {t('movies')} 
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {t('tv')} 
        </li>
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
