import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useMoviesStore } from "../../config/store/store";
import { useTranslation } from "react-i18next"; // Importar el hook de i18n

export const MenuItems = () => {
  const { theme, toggleTheme, language, setLanguage } = useMoviesStore();
  const { t } = useTranslation();  // Usamos el hook de i18n para acceder a las traducciones

  return (
    <nav>
      <ul className="md:flex md:flex-row md:space-x-4 md:mr-1">
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {t('home')} {/* Traducción para "Inicio" */}
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {t('movies')} {/* Traducción para "Películas" */}
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {t('tv')} {/* Traducción para "Series" */}
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
        <li className="md:pr-5 md:pt-1.5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details">
          <div className="md:absolute flex text-center justify-center">
            <div>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="en">{t('english')}</option> {/* Traducción para "English" */}
                <option value="es">{t('spanish')}</option> {/* Traducción para "Español" */}
              </select>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
