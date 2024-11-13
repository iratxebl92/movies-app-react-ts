import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { MenuItems } from "./MenuItems";
import { LogoIcon } from "../core/components/Icons/LogoIcon";

export const Header = () => {
  const [isOpenHeader, setIsOpenHeader] = useState(false);

  return (
    <>
    <div>

      <div className="flex justify-between pr-0 font-heading dark:text-white md:dark:bg-dark bg-opacity-50 backdrop-blur-md">
        <div className="text-start py-5 pl-5 flex">
          <p className="text-black md:dark:text-white">KoaFilms</p>
          <LogoIcon/>
        </div>
        <div className="md:hidden">
        <div>
          <button className={`pr-3 py-5 pl-5 ${isOpenHeader ? 'hidden' : ''}`} onClick={() => setIsOpenHeader(true)}>
            <IoMenu />
          </button>
        </div>
        <div
          className={`h-auto w-full pb-5 bg-slate-400 dark:bg-dark backdrop-blur-md text-center fixed top-0 right-0 transform transition-transform duration-500 ease-linear ${
            isOpenHeader ? "translate-x-0" : "translate-x-full "
          }`}
        >
          <div className="relative mt-10">
            <MenuItems />
          </div>
          <div className="absolute top-5 right-4">
            <button onClick={() => setIsOpenHeader(false)}>
              <IoClose />
            </button>
          </div>
        </div>
        </div>
        <div className="hidden md:flex md:items-center md:max-w-4/12 mr-10">
          <MenuItems/>
        </div>
      </div>
    </div>
    </>
  );
};

