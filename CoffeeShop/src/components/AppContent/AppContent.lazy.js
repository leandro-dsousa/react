import React, { lazy, Suspense } from 'react';

const LazyAppContent = lazy(() => import('./AppContent'));

const AppContent = props => (
  <Suspense fallback={null}>
    <LazyAppContent {...props} />
  </Suspense>
);

export default AppContent;
