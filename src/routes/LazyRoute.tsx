import { Suspense } from 'react'
import { LoadingSpinner } from '../core/LoadingSpinner'


type LazyRouteProps = {
  component: React.LazyExoticComponent<() => JSX.Element | null>
}

export const LazyRoute = ({ component: Component }: LazyRouteProps) => {
  return (
      <Suspense fallback={<LoadingSpinner />}>
        <Component />
      </Suspense>

  )
} 