import { MoviesHome } from './MoviesHome'
import { Search } from '../Search'


export const HomeBody = () => {
  return (
    <div className='dark:bg-dark h-full'>
      <div className='max-w-1920  m-auto'>
        <Search/>
        <MoviesHome/>
      </div>
    </div>
  )
}
