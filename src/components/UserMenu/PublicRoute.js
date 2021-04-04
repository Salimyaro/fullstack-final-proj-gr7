import { Route } from 'react-router-dom';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  // const shouldRedirect = isLoggedIn && restricted;
  // console.log('shouldRedirect', shouldRedirect);
  return (
    <Route {...routeProps}>
      {/* {shouldRedirect ? <Redirect to="/contacts" /> : children} */}
    </Route>
  );
}
