import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  children,
  restricted = true,
  ...routeProps
}) {
  console.log('privateRoute authorized', routeProps.authorized);
  return (
    <Route {...routeProps}>
      {' '}
      {routeProps.authorized ? (
        children
      ) : (
        <Redirect to={routeProps.redirectTo} />
      )}
    </Route>
  );
}
