import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { FaMoon } from "react-icons/fa"
import { IoSunnyOutline } from "react-icons/io5"
import { TfiWorld } from "react-icons/tfi"

export const MenuItems = () => {
  const [t, i18n] = useTranslation("global")
  const [theme, setTheme] = useState(() => {
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      return "dark"
    }
    return "light"
  });
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if(theme === 'dark'){
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')

    }
    
  }, [theme])

  console.log(theme)

  return (
    <nav>
            <ul className="md:flex md:flex-row md:space-x-4">
              <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer "> {t("header.nav.home")} </li>
              <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer "> {t("header.nav.movies")} </li>
              <li className="md:pr-5 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer "> {t("header.nav.tv-shows")} </li>
              <li className="md:pr-5 md:pt-1 md:hover:underline md:hover:decoration-3 md:hover:decoration-details hover:cursor-pointer "> <TfiWorld /> </li>
              <li onClick={handleChangeTheme}  className=" dark:text-white md:pr-5 md:pt-1 md:hover:underline hover:decoration-3 md:hover:decoration-details hover:cursor-pointer "> {theme === 'light' ? <FaMoon/> : <IoSunnyOutline />  } </li>
  
            </ul>
          </nav>
  )  
}
