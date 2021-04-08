import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  // console.log('publicRoute routeProps', routeProps);

  // console.log('publicRoute isLoggedIn', routeProps.isLoggedIn);
  const shouldRedirect =
    routeProps.isLoggedIn && restricted && routeProps.redirectTo;
  // console.log(shouldRedirect);
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={routeProps.redirectTo} /> : children}
    </Route>
  );
}
