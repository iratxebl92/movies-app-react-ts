import { lazy, LazyExoticComponent } from 'react'

type LazyComponent = LazyExoticComponent<() => JSX.Element | null>;

// Lazy components with proper type definitions
export const lazyComponents: Record<string, LazyComponent> = {
 
  Home: lazy(() => import('../pages/Home').then(module => ({ 
    default: module.Home 
  }))),
  
  Details: lazy(() => import('../pages/Details').then(module => ({ 
    default: module.Details 
  }))),
  
  Person: lazy(() => import('../pages/Person').then(module => ({ 
    default: module.Person 
  }))),
  Keywords: lazy(() => import('../pages/Keywords/Keywords').then(module => ({ 
    default: module.Keywords 
  }))),
  Movies: lazy(() => import('../components/Media/MediaContent').then(module => ({ 
    default: module.MediaContent 
  }))),
  TvShows: lazy(() => import('../components/Media/MediaContent').then(module => ({ 
    default: module.MediaContent 
  }))),
  CastPage: lazy(() => import('../pages/CastPage').then(module => ({ 
    default: module.CastPage 
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
    path: '/details/:type/:idAndName',
    component: 'Details'
  },
  {
    path: '/person/:idAndName',
    component: 'Person'
  },
  {
    path: '/keywords/:idAndName',
    component: 'Keywords'
  },
  {
    path: '/movies',
    component: 'TvShows'
  },
  {
    path: '/tv-shows',
    component: 'TvShows'
  },
  {
    path: '/cast/:type/:idAndName',
    component: 'CastPage'
  }
] 