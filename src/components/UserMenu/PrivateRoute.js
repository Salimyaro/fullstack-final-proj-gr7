import { Route } from 'react-router-dom';

export default function PrivateRoute({ children, ...routeProps }) {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {/* {isLoggedIn ? children : <Redirect to="/login" />} */}
    </Route>
  );
}
