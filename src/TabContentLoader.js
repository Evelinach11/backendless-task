import React from "react";

export const TabContentLoader = ({ path }) => {
  const Component = React.lazy(() => import(`./${path}`));

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  );
};
