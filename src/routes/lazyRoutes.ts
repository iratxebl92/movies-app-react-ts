import { lazy } from 'react'
import { useLocation } from 'react-router-dom'



// Lazy components with proper type definitions
export const lazyComponents = {
 
  Home: lazy(() => import('../pages/Home/Home').then(module => ({ 
    default: module.Home 
  }))),
  
  Details: lazy(() => import('../pages/Details/Details').then(module => ({ 
    default: module.Details 
  }))),
  
  Person: lazy(() => import('../components/Person/Person').then(module => ({ 
    default: module.Person 
  }))),
  Keywords: lazy(() => import('../components/Keywords').then(module => ({ 
    default: module.Keywords 
  }))),
  Seasons: lazy(() => import('../components/Seasons/Seasons').then(module => ({ 
    default: module.Seasons 
  }))),
  Movies: lazy(() => import('../components/Movies').then(module => ({ 
    default: module.Movies 
  }))),
  TvShows: lazy(() => import('../components/TvShows').then(module => ({ 
    default: module.TvShows 
  }))),
} as const

// Type for route configuration
export type RouteConfig = {
  path: string
  component: keyof typeof lazyComponents
  children?: RouteConfig[]
}

// Route configurations
export const routes: RouteConfig[] = [
  {
    path: '/',
    component: 'Home'
  },
  {
    path: '/details/:type/:id',
    component: 'Details'
  },
  {
    path: '/person/:id',
    component: 'Person'
  },
  {
    path: '/keywords/:idAndName',
    component: 'Keywords'
  },
  {
    path: '/tv/id/seasons/2',
    component: 'Seasons'
  },
  {
    path: '/movies',
    component: 'Movies'
  },
  {
    path: '/tv-shows',
    component: 'TvShows'
  }
] 