import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { MoviesContext } from "../../context/MoviesContext";
import { useContext, useState } from "react";

export const MenuItems = () => {
  



  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("MenuItems must be used with a MoviesProvider");
  }

  const { theme, handleChangeTheme} = context;



  return (
    <nav>
      <ul className="md:flex md:flex-row md:space-x-4 md:mr-1">
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
         Inicio
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
          Películas
        </li>
        <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer ">
         Seríes
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
      </ul>
    </nav>
  );
};
