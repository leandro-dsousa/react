import React, { lazy, Suspense } from 'react';

const LazyAppFooter = lazy(() => import('./AppFooter'));

const AppFooter = props => (
  <Suspense fallback={null}>
    <LazyAppFooter {...props} />
  </Suspense>
);

export default AppFooter;
