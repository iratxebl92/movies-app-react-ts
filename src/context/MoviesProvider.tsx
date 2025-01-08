import { ReactNode, useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import {useTranslation} from "react-i18next"


type MoviesProviderProps = {
  children: ReactNode;
};


export const MoviesProvider = ({children}: MoviesProviderProps) => {

  const [t, i18n] = useTranslation("global") //el archivo del que sacamos la traducción
  const contentTypes = [t("tab.type.movies"), t("tab.type.tv-show")];
  const timePeriods = [t("tab.periods.week"), t("tab.periods.day")];
  

  const [theme, setTheme] = useState(() => {
    if(window.matchMedia('(prefers-color-scheme:dark)').matches){
      return "dark"
    }
    return "light"
  });

  const handleChangeTheme = ():void => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if(theme === 'dark'){
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')

    }
    
  }, [theme])

return (
    <MoviesContext.Provider value={{ 
      theme, handleChangeTheme, t, i18n, contentTypes, timePeriods
      }}>
      {children}
    </MoviesContext.Provider>
  )
};
