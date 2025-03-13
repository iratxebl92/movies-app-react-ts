import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Details } from './pages/Details/Details'
import { MoviesApp } from './pages/MoviesApp'

export const AppRouter = () => {
  return (
 <BrowserRouter>
 <Routes>
    <Route element={<MoviesApp/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
    </Route>
 </Routes>
 </BrowserRouter>
  )
}
