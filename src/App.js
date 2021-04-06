import { useEffect, useState, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import Container from './components/Container';
import Header from './components/Header';
import Loader from './components/Loader';

import Footer from './components/Footer';

import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';

const AuthPageView = lazy(() => import('./views/AuthPageView'));
const MainPageView = lazy(() => import('./views/MainPageView'));
const TestView = lazy(() => import('./views/TestView'));
const ContactsPageView = lazy(() => import('./views/ContactsPageView'));
const UsefulInfoView = lazy(() => import('./views/UsefulInfoView'));
const ResultsView = lazy(() => import('./views/ResultsView'));

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('useEffect isLoggedIn', isLoggedIn);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute
              path="/auth"
              restricted
              isLoggedIn={isLoggedIn}
              redirectTo="/"
            >
              <AuthPageView />
            </PublicRoute>
            <PrivateRoute
              path="/"
              restricted
              isLoggedIn={isLoggedIn}
              redirectTo="/auth"
              exact
            >
              <MainPageView />
            </PrivateRoute>
            <PrivateRoute
              path="/test"
              restricted
              isLoggedIn={isLoggedIn}
              redirectTo="/"
            >
              <TestView />
            </PrivateRoute>
            <PrivateRoute
              path="/results"
              restricted
              isLoggedIn={isLoggedIn}
              redirectTo="/auth"
            >
              <ResultsView />
            </PrivateRoute>
            <PublicRoute path="/useful-info" restricted isLoggedIn={isLoggedIn}>
              <UsefulInfoView />
            </PublicRoute>
            <PublicRoute path="/contacts" restricted isLoggedIn={isLoggedIn}>
              <ContactsPageView />
            </PublicRoute>
          </Switch>
        </Suspense>
      </Container>
      <Footer />
    </>
  );
}

// {
//   /* <AppBar /> */
// }
// {
//   /* <Switch> */
// }
// {
//   /* <Suspense fallback={<p>Loading...</p>}> */
// }
// {
//   /* <PublicRoute exact path="/">
//                 <HomeView />
//               </PublicRoute>
//               <PublicRoute
//                 exact
//                 path="/register"
//                 redirectTo="/contacts"
//                 restricted
//               >
//                 <RegisterViev />
//               </PublicRoute>
//               <PublicRoute
//                 exact
//                 path="/login"
//                 redirectTo="/contacts"
//                 restricted
//               >
//                 <LoginView />
//               </PublicRoute>
//               <PrivateRoute exact path="/contacts" redirectTo="/login">
//                 <ContactsView />
//               </PrivateRoute> */
// }
// {
//   /* </Suspense> */
// }
// {
//   /* </Switch> */
// }
