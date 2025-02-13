import { ReactNode, useEffect, useState } from "react";
import { MoviesContext } from "./MoviesContext";


type MoviesProviderProps = {
  children: ReactNode;
};


export const MoviesProvider = ({children}: MoviesProviderProps) => {

  const contentTypes = ["movie", "tv"];
  const timePeriods = ["week", "day"];
  const [contentSelected, setContentSelected] = useState('movie')
  console.log(contentSelected, "contentSelected en Contexto")

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
      theme, 
      handleChangeTheme, 
      contentTypes, 
      timePeriods,
      contentSelected, 
      setContentSelected
      }}>
      {children}
    </MoviesContext.Provider>
  )
};
