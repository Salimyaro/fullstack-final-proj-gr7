import axios from 'axios';
import { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import authContext from './context';

axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com';

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log('providerUser: ', user);
  console.log(
    'storage: ',
    JSON.parse(window.localStorage.getItem('token-stor')),
  );

  const history = useHistory();

  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

  const onRefresh = async res => {
    const storageToken = JSON.parse(window.localStorage.getItem('token-stor'));
    if (res.status.toString() === '401') {
      token.set(storageToken.refreshToken);
      const res = await axios.post('/auth/refresh');
      token.set(res.data.data.refreshToken);
      if (res.status.toString() === '401') {
        onLogOut();
        return;
      }
      if (res.status.toString() === '200') {
        setIsLoggedIn(true);
        window.localStorage.setItem(
          'token-stor',
          JSON.stringify({
            accessToken: res.data.data.token,
            refreshToken: res.data.data.refreshToken,
          }),
        );
        token.set(res.data.data.token);
      }
    }
  };

  const signUp = async user => {
    const res = await axios.post('/auth/register', user);

    setUser(res.data.data);
    setIsLoggedIn(true);
    token.set(res.data.data.token);
    return res.data;
  };

  const onLogIn = async user => {
    const res = await axios.post('/auth/login', user);
    console.log('provider pesponse login: ', res.data);
    const storageToken = JSON.parse(window.localStorage.getItem('token-stor'));
    if (res.status.toString() === '401') {
      token.set(storageToken.refreshToken);
      const res = await axios.post('/auth/refresh');

      if (res.status.toString() === '401') {
        onLogOut();
        return;
      }
      if (res.status.toString() === '200') {
        setIsLoggedIn(true);
        setUser(res.data.data);
        window.localStorage.setItem(
          'token-stor',
          JSON.stringify({
            accessToken: res.data.data.token,
            refreshToken: res.data.data.refreshToken,
          }),
        );
        token.set(res.data.data.token);
        return res.data;
      }
    }

    window.localStorage.setItem(
      'token-stor',
      JSON.stringify({
        accessToken: res.data.data.token,
        refreshToken: res.data.data.refreshToken,
      }),
    );
    setUser(res.data.data);
    setIsLoggedIn(true);
    token.set(res.data.data.token);
    return res.data;
  };

  const onLogOut = async () => {
    const res = await axios.post('/auth/logout');

    setUser(null);
    setIsLoggedIn(false);
    token.unset();
    window.localStorage.setItem('token-stor', JSON.stringify(''));
    return res.data;
  };

  const fetchResults = async (answers, testType) => {
    const { data } = await axios.post(`/results/${testType}`, answers);
    return data;
  };

  const currentUser = async () => {
    if (!JSON.parse(window.localStorage.getItem('token-stor'))) {
      setIsLoggedIn(false);
      return;
    }
    const storageToken = JSON.parse(window.localStorage.getItem('token-stor'));
    // token.set(storageToken.refreshToken);
    const res = await axios.get('/user');
    console.log('provider pesponse current: ', res);

    if (res.status.toString() === '401') {
      token.set(storageToken.refreshToken);
      const res = await axios.post('/auth/refresh');

      if (res.status.toString() === '401') {
        onLogOut();
        return;
      }
      if (res.status.toString() === '200') {
        setIsLoggedIn(true);
        setUser(res.data.data);
        window.localStorage.setItem(
          'token-stor',
          JSON.stringify({
            accessToken: res.data.data.token,
            refreshToken: res.data.data.refreshToken,
          }),
        );
        token.set(res.data.data.token);
      }
    }

    setUser(res.data.data);
    setIsLoggedIn(true);
    token.set(res.data.data.token);
    return res.data;
  };

  const onGoogleLogin = () => {
    setIsLoggedIn(true);
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
      fetchResults,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, user]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
