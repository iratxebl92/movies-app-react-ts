import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { MenuItems } from "./MenuItems";
import { LogoIcon } from "../../../core/components/Icons/LogoIcon";

export const Header = () => {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  return (
    <>
    <header className="relative z-20 flex justify-between pr-0 font-heading dark:text-white md:dark:bg-dark bg-opacity-50 backdrop-blur-md ">
      
        <div className="text-start py-5 pl-5 flex">
          <Link to='/' className="text-black dark:text-white">KoaFilms</Link>
          <LogoIcon/>
        </div>
        <div className="md:hidden">
        <div>
          <button className={`pr-3 py-5 pl-5 mr-3 ${isOpenHeader ? 'hidden' : ''}`} onClick={() => setIsOpenHeader(true)}>
            <IoMenu />
          </button>
        </div>
        <div
          className={`z-2 h-screen w-full bg-slate-400/95 dark:bg-dark/95 backdrop-blur-md text-center fixed top-0 right-0 transform transition-all duration-300 ease-in-out ${
            isOpenHeader ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <div className="relative mt-10 transform transition-all duration-300 ease-in-out"
               style={{ 
                 transform: isOpenHeader ? 'translateY(0)' : 'translateY(-20px)',
                 opacity: isOpenHeader ? 1 : 0 
               }}>
            <MenuItems closeMenu={() => setIsOpenHeader(false)} />
          </div>
          <div className="absolute top-5 right-4">
            <button 
              onClick={() => setIsOpenHeader(false)}
              className="transform transition-transform duration-200 hover:scale-110"
            >
              <IoClose />
            </button>
          </div>
        </div>
        </div>
        <div className="hidden md:flex md:items-center md:max-w-4/12 mr-10">
          <MenuItems/>
        </div>
    </header>
    </>
  );
};

