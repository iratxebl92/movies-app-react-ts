import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesApp } from "../components/Layout/MoviesApp";
import { LazyRoute } from "./LazyRoute";
import { lazyComponents, routes } from "./lazyRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MoviesApp />}>
          {routes.map(({ path, component }) => {
            //comprobar si el componente existe ya que component no puede ser null
            const LazyComponent = lazyComponents[component];
            if (!LazyComponent) return null;

            return (
              <Route
                key={path}
                path={path}
                element={<LazyRoute component={LazyComponent} />}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
};
