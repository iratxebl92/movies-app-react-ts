
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useMoviesStore } from "../../config/store/store";


export const MenuItems = () => {
  const { theme, toggleTheme } = useMoviesStore();

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
        <li className="dark:text-white md:pr-5 md:hover:underline hover:decoration-3 md:hover:decoration-details">
          <button onClick={toggleTheme}>
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