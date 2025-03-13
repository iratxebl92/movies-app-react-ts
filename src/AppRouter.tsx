import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Details } from './pages/Details/Details'
import { MoviesApp } from './pages/MoviesApp'
import { Person } from './components/Person/Person'

export const AppRouter = () => {
  return (
 <BrowserRouter>
 <Routes>
    <Route element={<MoviesApp/>} >
        <Route path='/' element={<Home/>} />
        <Route path='/details' element={<Details/>} />
        <Route path='/person' element={<Person/>} />

    </Route>
 </Routes>
 </BrowserRouter>
  )
}
