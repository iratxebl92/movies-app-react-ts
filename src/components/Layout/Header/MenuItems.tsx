import { useEffect } from "react";
import { FaMoon, FaSearch } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useMoviesStore } from "../../../config/store/store";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

interface MenuItemsProps {
  closeMenu?: () => void;
}

export const MenuItems = ({ closeMenu }: MenuItemsProps) => {
  const { toggleTheme, language, setLanguage, setSearchModal } = useMoviesStore();
  const { i18n, t } = useTranslation();

  // Sincronizar el estado `language` con i18next al montar
  useEffect(() => {
    if (language !== i18n.language) {
      setLanguage(i18n.language);
    }
  }, [i18n.language, setLanguage]);

  const handleMenuClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <nav>
      <ul className="flex flex-col gap-4 md:gap-0 md:flex-row md:space-x-4 md:mr-1">
        <NavLink
          to="/"
          onClick={handleMenuClick}
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
          onClick={handleMenuClick}
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
          onClick={handleMenuClick}
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
            <button onClick={() => {
              toggleTheme('dark');
              handleMenuClick();
            }} aria-label="Activar modo oscuro">
            <FaMoon className="inline hover:cursor-pointer hover:text-details" />
            </button>
          </div>
          <div className="hidden dark:flex" >
          <button onClick={() => {
            toggleTheme('light');
            handleMenuClick();
          }} aria-label="Activar modo claro">
            <IoSunnyOutline className="inline hover:cursor-pointer hover:text-details"  />
            </button>
          </div>
        </li>
        <li className="flex justify-center hover:text-details">
          <LanguageSelector closeMenu={closeMenu}/>
        </li>
        <li className="flex justify-center">
          <button 
            className="text-white rounded-md" 
            onClick={() => {
              setSearchModal(true);
              handleMenuClick();
            }}
            aria-label="Abrir buscador"
          >
            <FaSearch className="inline hover:cursor-pointer hover:text-details text-black dark:text-white" />
          </button>
        </li>
      </ul>
    </nav>
  );
};
