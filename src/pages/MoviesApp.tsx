
import { Header } from "../components/Header/Header";
import { Details } from "./Details/Details";
import { Home } from "./Home/Home";


export const MoviesApp = () => {

  return (
    <div className="dark:bg-dark dark:text-white h-screen">
    <Header />
     {/* <Home/> */}
     <Details/>
    </div>
  );
};
