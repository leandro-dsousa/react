import React, { lazy, Suspense } from 'react';

const LazyAppHeader = lazy(() => import('./AppHeader'));

const AppHeader = props => (
  <Suspense fallback={null}>
    <LazyAppHeader {...props} />
  </Suspense>
);

export default AppHeader;
