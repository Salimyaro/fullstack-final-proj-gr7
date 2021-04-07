import { useEffect, useState, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import Header from './components/Header';
import Loader from './components/Loader';
import Contacts from './components/Contacts';
import { contactsDb } from './components/Contacts/contactsDb';

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
      /---/
      {/* <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
            <AuthPageView /> */}
      /---/
      {/* <PublicRoute path="/auth" restricted>
              <AuthPageView />
            </PublicRoute> */}
      /---/
      {/* <PrivateRoute path="/" exact>
              <MainPageView />
            </PrivateRoute>
            <PrivateRoute path="/test">
              <TestView />
            </PrivateRoute>
            <PrivateRoute path="/results">
              <ResultsView />
            </PrivateRoute>
            <PublicRoute path="/useful-info">
              <UsefulInfoView />
            </PublicRoute>
            <PublicRoute path="/contacts" restricted>
              <ContactsPageView />
            </PublicRoute>
          </Switch>
        </Suspense>
        <ToastContainer autoClose={3000} />
      </Container> */}
      /---/
      <Contacts items={contactsDb} />
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
