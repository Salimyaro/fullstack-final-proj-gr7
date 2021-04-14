import { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { contactsDb } from './components/Contacts/contactsDb';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import LoaderBlur from './components/LoaderBlur';
import PrivateRoute from './components/UserMenu/PrivateRoute';
import PublicRoute from './components/UserMenu/PublicRoute';
import AuthContext from './contexts/auth/context';

const AuthPageView = lazy(() => import('./views/AuthPageView'));
const MainPageView = lazy(() => import('./views/MainPageView'));
const TestView = lazy(() => import('./views/TestView'));
const UsefulInfoView = lazy(() => import('./views/UsefulInfoView'));
const ResultsView = lazy(() => import('./views/ResultsView'));
const GoogleAuth = lazy(() => import('./views/GoogleAuth'));
const ContactsPageView = lazy(() => import('./views/Contacts'));

export default function App() {
  const [loding, setLoading] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    currentUser();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Suspense fallback={<LoaderBlur />}>
            <PublicRoute exact path="/google-auth" redirectTo="/">
              <GoogleAuth />
            </PublicRoute>
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
