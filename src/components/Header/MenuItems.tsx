import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { MoviesContext } from "../../context/MoviesContext";
import { useContext, useState } from "react";

export const MenuItems = () => {
  

  const [languageModal, setLanguageModal] = useState(true)

  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("MenuItems must be used with a MoviesProvider");
  }

  const { theme, handleChangeTheme, t, i18n } = context;
  const handleChangeLanguage = () => {
    setLanguageModal( !languageModal)
  };

  const closeLanguageModal = (language:string) => {
    i18n.changeLanguage(language)
    setLanguageModal(!languageModal)
  }

  return (
    <nav>
      <ul className="md:flex md:flex-row md:space-x-4 md:mr-1">
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {" "}
          {t("header.nav.home")}{" "}
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {" "}
          {t("header.nav.movies")}{" "}
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          {" "}
          {t("header.nav.tv-shows")}{" "}
        </li>
        <li className=" dark:text-white md:pr-5  md:hover:underline hover:decoration-3 md:hover:decoration-details">
          <button onClick={handleChangeTheme}>
            {theme === "light" ? (
              <FaMoon className="inline hover:cursor-pointer " />
            ) : (
              <IoSunnyOutline className="inline hover:cursor-pointer " />
            )}
          </button>
        </li>
        <li className="md:pr-5 md:pt-1.5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details">
          <div className="md:absolute flex text-center justify-center">
            <TfiWorld
              onClick={handleChangeLanguage}
              className="hidden md:block hover:cursor-pointer"
            />



            <div className= {` ${languageModal ? 'md:hidden' : ''} bg-slate-400 flex md:content-center md:w-12 md:h-16 md:text-center md:relative md:top-5 md:right-8 md:rounded-md`} >
              <button
                onClick={() => closeLanguageModal("es")}
                className="mr-1 ml-1  hover:cursor-pointer"
              >
                ES
              </button>
              <p className="md:content-center">|</p>
              <button
                onClick={() => closeLanguageModal("en")}
                className="ml-1  hover:cursor-pointer"
              >
                EN
              </button>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
