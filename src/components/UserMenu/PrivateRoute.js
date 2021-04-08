import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({
  children,
  restricted = true,
  ...routeProps
}) {
  // console.log('privateRoute isLoggedIn', routeProps.isLoggedIn);
  // console.log('privateRoute user', routeProps.user);
  return (
    <Route {...routeProps}>
      {children}
      {/* {routeProps.isLoggedIn ? children : <Redirect to="/auth" />} */}
    </Route>
  );
}
