
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";


export const MoviesApp = () => {

  return (
    <div className="dark:bg-dark dark:text-white bg-light min-h-screen">
    <Header />
     <Outlet/>
    </div>
  );
};
