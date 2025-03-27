import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Details } from './pages/Details/Details'
import { MoviesApp } from './pages/MoviesApp'
import { Person } from './components/Person/Person'
import { Seasons } from './components/Seasons/Seasons'

export const AppRouter = () => {
  return (
 <BrowserRouter>
 <Routes>
    <Route element={<MoviesApp/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/details/:type/:id' element={<Details/>} />
        <Route path='/tv/id/seasons/2' element={<Seasons/>} />
        <Route path='/person/:id' element={<Person/>} />

    </Route>
 </Routes>
 </BrowserRouter>
  )
}
