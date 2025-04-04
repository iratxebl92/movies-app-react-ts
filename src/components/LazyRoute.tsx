import { Suspense } from 'react'
import { LoadingSpinner } from '../core/LoadingSpinner'
import { ErrorBoundary } from './ErrorBoundary'

type LazyRouteProps = {
  component: React.LazyExoticComponent<() => JSX.Element>
}

export const LazyRoute = ({ component: Component }: LazyRouteProps) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  )
} 