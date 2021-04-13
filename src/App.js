import { useEffect, Suspense, lazy, useState, useContext } from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import Header from './components/Header';
import LoaderBlur from './components/LoaderBlur';
import AuthContext from './contexts/auth/context';
import { contactsDb } from './components/Contacts/contactsDb';
import Footer from './components/Footer';

import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';

const AuthPageView = lazy(() => import('./views/AuthPageView'));
const MainPageView = lazy(() => import('./views/MainPageView'));
const TestView = lazy(() => import('./views/TestView'));
const ContactsPageView = lazy(() => import('./components/Contacts'));
const UsefulInfoView = lazy(() => import('./views/UsefulInfoView'));
const ResultsView = lazy(() => import('./views/ResultsView'));

export default function App() {
  const [loding, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    currentUser();
    setLoading(false);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Suspense fallback={<LoaderBlur />}>
            <PublicRoute exact path="/auth" redirectTo="/" restricted>
              <AuthPageView />
            </PublicRoute>
            <PublicRoute exact path="/contacts">
              <ContactsPageView items={contactsDb} />
            </PublicRoute>

            <PrivateRoute exact path="/" redirectTo="/auth">
              <MainPageView />
            </PrivateRoute>
            <PrivateRoute exact path="/test" redirectTo="/auth">
              <TestView />
            </PrivateRoute>
            <PrivateRoute exact path="/results" redirectTo="/auth">
              <ResultsView />
            </PrivateRoute>
            <PrivateRoute exact path="/useful-info" redirectTo="/auth">
              <UsefulInfoView />
            </PrivateRoute>
          </Suspense>
        </Switch>
        <ToastContainer autoClose={3000} />
      </Container>
      <Footer />
    </>
  );
}
