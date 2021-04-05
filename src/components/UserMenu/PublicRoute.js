import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  console.log('publicRoute authorized', routeProps.authorized);
  const shouldRedirect =
    routeProps.authorized && restricted && routeProps.redirectTo;
  console.log(shouldRedirect);
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={routeProps.redirectTo} /> : children}
    </Route>
  );
}
