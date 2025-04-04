import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MoviesApp } from './pages/MoviesApp'
import { LazyRoute } from './components/LazyRoute'
import { lazyComponents, routes } from './routes/lazyRoutes'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MoviesApp />}>
          {routes.map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={<LazyRoute component={lazyComponents[component]} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
