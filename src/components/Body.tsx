import { MoviesHome } from './MoviesHome'
import { Search } from './Search'
import { Slider } from './Slider'

export const Body = () => {
  return (
    <div className='dark:bg-dark h-full w-screen '>
      <div className='max-w-1920  m-auto'>
        <Search/>
        <MoviesHome/>
      </div>
    </div>
  )
}
