import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  children,
  restricted = true,
  ...routeProps
}) {
  console.log('privateRoute isLoggedIn', routeProps.isLoggedIn);
  return (
    <Route {...routeProps}>
      {routeProps.isLoggedIn ? children : <Redirect to="/auth" />}
    </Route>
  );
}
