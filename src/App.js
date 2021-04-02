import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
// import AppBar from './components/AppBar';
// import PrivateRoute from './components/PrivateRoute';
// import PublicRoute from './components/PublicRoute';

// const HomeView = lazy(() => import('./views/HomeView'));
// const RegisterViev = lazy(() => import('./views/RegisterViev'));
// const LoginView = lazy(() => import('./views/LoginView'));
// const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  useEffect(() => {}, []);

  return (
    <>
      {/* <AppBar /> */}
      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          {/* <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <RegisterViev />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute> */}
        </Suspense>
      </Switch>
    </>
  );
}
