import axios from 'axios';
import { useMemo, useState } from 'react';
import authContext from './context';

axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com';

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [loding, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [error, setError] = useState(null);

  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

  function setTokensUserAndLogIn(data) {
    window.localStorage.setItem(
      'auth-tokens',
      JSON.stringify({
        token: data.data.token,
        refreshToken: data.data.refreshToken,
      }),
    );
    setUser(data.data);
    setIsLoggedIn(true);
    token.set(data.data.token);
  }

  function logOutAndDeleteTokens() {
    token.unset();
    window.localStorage.removeItem('auth-tokens');
    setIsLoggedIn(false);
    setUser(null);
    window.location.reload();
    return;
  }

  const signUp = async user => {
    try {
      const { data } = await axios.post('/auth/register', user);
      setTokensUserAndLogIn(data);
      return data;
    } catch (e) {
      if (e.response.status.toString() === '409') {
        setError(e.response.data.message);
      }
      if (e.response.status.toString() === '400') {
        setError(e.response.data.message);
      }
    }
  };

  const onLogIn = async user => {
    try {
      const { data } = await axios.post('/auth/login', user);
      setTokensUserAndLogIn(data);
      return data;
    } catch (e) {
      if (e.response.status.toString() === '403') {
        setError(e.response.data.message);
      }
      if (e.response.status.toString() === '400') {
        setError(e.response.data.message);
      }
    }
  };

  const onLogOut = async () => {
    const authTokens = JSON.parse(window.localStorage.getItem('auth-tokens'));
    try {
      token.set(authTokens.token);
      await axios.post('/auth/logout');
      logOutAndDeleteTokens();
      return;
    } catch (e) {
      if (e.response.status.toString() === '401') {
        try {
          token.set(authTokens.refreshToken);
          const { data } = await axios.post('/auth/refresh');
          window.localStorage.setItem(
            'auth-tokens',
            JSON.stringify({
              token: data.data.token,
              refreshToken: data.data.refreshToken,
            }),
          );
          token.set(data.data.token);
          await axios.post('/auth/logout');
          window.location.reload();
        } catch (e) {
          logOutAndDeleteTokens();
        }
      }
    }
  };

  const getTest = async type => {
    const authTokens = JSON.parse(window.localStorage.getItem('auth-tokens'));
    if (!authTokens) {
      setIsLoggedIn(false);
      return;
    }
    token.set(authTokens.token);
    try {
      const { data } = await axios.get(`/test/${type}`);
      return data;
    } catch (e) {
      if (e.response.status.toString() === '401') {
        const authTokens = JSON.parse(
          window.localStorage.getItem('auth-tokens'),
        );
        token.set(authTokens.refreshToken);
        try {
          const { data } = await axios.post('/auth/refresh');
          window.localStorage.setItem(
            'auth-tokens',
            JSON.stringify({
              token: data.data.token,
              refreshToken: data.data.refreshToken,
            }),
          );
          token.set(data.data.token);
          window.location.reload();
        } catch (e) {
          logOutAndDeleteTokens();
        }
      }
    }
  };

  const fetchResults = async (answers, testType) => {
    const authTokens = JSON.parse(window.localStorage.getItem('auth-tokens'));
    if (!authTokens) {
      setIsLoggedIn(false);
      return;
    }
    token.set(authTokens.token);
    try {
      const { data } = await axios.post(`/results/${testType}`, answers);
      return data;
    } catch (e) {
      if (e.response.status.toString() === '401') {
        const authTokens = JSON.parse(
          window.localStorage.getItem('auth-tokens'),
        );
        token.set(authTokens.refreshToken);
        try {
          const { data } = await axios.post('/auth/refresh');
          window.localStorage.setItem(
            'auth-tokens',
            JSON.stringify({
              token: data.data.token,
              refreshToken: data.data.refreshToken,
            }),
          );
          token.set(data.data.token);
          window.location.reload();
        } catch (e) {
          logOutAndDeleteTokens();
          return;
        }
      }
    }
  };

  const currentUser = async () => {
    const authTokens = JSON.parse(window.localStorage.getItem('auth-tokens'));
    if (!authTokens) {
      setIsLoggedIn(false);
      return;
    }
    token.set(authTokens.token);
    try {
      const { data } = await axios.get('/user');
      setUser(data.data);
      setIsLoggedIn(true);
      return data;
    } catch (e) {
      if (e.response.status.toString() === '401') {
        const authTokens = JSON.parse(
          window.localStorage.getItem('auth-tokens'),
        );
        token.set(authTokens.refreshToken);
        try {
          const { data } = await axios.post('/auth/refresh');
          window.localStorage.setItem(
            'auth-tokens',
            JSON.stringify({
              token: data.data.token,
              refreshToken: data.data.refreshToken,
            }),
          );
          token.set(data.data.token);
          return;
        } catch (e) {
          logOutAndDeleteTokens();
        }
      }
    }
  };

  const onGoogleLogin = authTokens => {
    window.localStorage.setItem('auth-tokens', JSON.stringify(authTokens));
    setIsLoggedIn(true);
    currentUser();
    return;
  };

  const providerValue = useMemo(() => {
    return {
      user,
      isLoggedIn,
      onLogIn,
      onLogOut,
      signUp,
      currentUser,
      onGoogleLogin,
      getTest,
      fetchResults,

      error,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, user, error]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
