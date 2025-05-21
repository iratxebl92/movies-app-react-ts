import { Suspense } from 'react'
import { LoadingSpinner } from '../core/LoadingSpinner'
import { ErrorBoundary } from '../core/ErrorBoundary'

type LazyRouteProps = {
  component: React.LazyExoticComponent<() => JSX.Element | null>
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