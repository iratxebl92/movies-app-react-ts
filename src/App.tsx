import { useEffect, useState } from "react";
import {QueryClientProvider, QueryClient} from 'react-query'
import "./App.css";
import {useTranslation} from "react-i18next"
import { Header } from "./components/Header/Header";
import { MoviesApp } from "./pages/MoviesApp";
import { MoviesProvider } from "./context/MoviesProvider";
import { MoviesContext } from "./context/MoviesContext";


const queryClient = new QueryClient()

function App() {
  const [t, i18n] = useTranslation("global") //el archivo del que sacamos la traducción
  
  // const [theme, setTheme] = useState(() => {
  //   if(window.matchMedia('(prefers-color-scheme:dark)').matches){
  //     return "dark"
  //   }
  //   return "light"
  // });

  // const handleChangeTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  // };

  // useEffect(() => {
  //   if(theme === 'dark'){
  //     document.querySelector('html')?.classList.add('dark')
  //   } else {
  //     document.querySelector('html')?.classList.remove('dark')

  //   }
    
  // }, [theme])
   

  return (
    <>
    <QueryClientProvider client={queryClient}>
    <MoviesProvider>
    <MoviesApp/>
    </MoviesProvider>
    </QueryClientProvider>
   
     {/* <h1>{t("header.nav.home")} </h1>
    <br />
    <button className="bg-slate-200 mr-3" onClick={() => i18n.changeLanguage("es")}>
      ES
    </button>
    <button className="" onClick={() => i18n.changeLanguage("en")}>
      EN
    </button>
      <div className="h-screen flex justify-center items-center text-black-600 dark:bg-primary-dark">
        <button
          className="bg-slate-200 px-4 py-2 rounded hover:text-red-50 dark:hover:bg-slate-900 dark:text-stone-50"
          onClick={handleChangeTheme}
        >
          Cambiar
        </button>
      </div>  */}


    </>
  );
}

export default App;
