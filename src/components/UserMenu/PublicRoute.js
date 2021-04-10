import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/auth/context';

export default function PublicRoute({
  children,
  redirectTo = '/',
  ...routeProps
}) {
  const { isLoggedIn } = useContext(AuthContext);
  const shouldRedirect = isLoggedIn;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
