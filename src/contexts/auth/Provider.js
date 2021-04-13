import axios from 'axios';
import { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import authContext from './context';

axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com';

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // console.log('providerUser: ', user);
  // console.log(
  //   'storage: ',
  //   JSON.parse(window.localStorage.getItem('token-stor')),
  // );

  const history = useHistory();

  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

  // const onRefresh = async response => {
  //   const storageToken = JSON.parse(window.localStorage.getItem('token-stor'));
  //   token.set(storageToken.token);

  //   const res = await axios.get('/user');

  //   if (res.status.toString() === '401') {
  //     token.set(storageToken.refreshToken);
  //     const res = await axios.post('/auth/refresh');

  //     if (res.status.toString() === '401') {
  //       onLogOut();
  //       return;
  //     }
  //     if (res.status.toString() === '200') {
  //       setIsLoggedIn(true);
  //       setUser(res.data.data);
  //       window.localStorage.setItem(
  //         'token-stor',
  //         JSON.stringify({
  //           token: res.data.data.token,
  //           refreshToken: res.data.data.refreshToken,
  //         }),
  //       );
  //       token.set(res.data.data.token);
  //       return;
  //     }
  //   }
  // };

  const signUp = async user => {
    const res = await axios.post('/auth/register', user);
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
            token: res.data.data.token,
            refreshToken: res.data.data.refreshToken,
          }),
        );
        token.set(res.data.data.token);
        return;
      }
    }
    window.localStorage.setItem(
      'token-stor',
      JSON.stringify({
        token: res.data.data.token,
        refreshToken: res.data.data.refreshToken,
      }),
    );
    setUser(res.data.data);
    setIsLoggedIn(true);
    token.set(res.data.data.token);
    return res.data;
  };

  const onLogIn = async user => {
    const res = await axios.post('/auth/login', user);

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
            token: res.data.data.token,
            refreshToken: res.data.data.refreshToken,
          }),
        );
        token.set(res.data.data.token);
        return;
      }
    }

    window.localStorage.setItem(
      'token-stor',
      JSON.stringify({
        token: res.data.data.token,
        refreshToken: res.data.data.refreshToken,
      }),
    );
    setUser(res.data.data);
    setIsLoggedIn(true);
    token.set(res.data.data.token);
    return res.data;
  };

  const onLogOut = async () => {
    const storageToken = JSON.parse(window.localStorage.getItem('token-stor'));
    token.set(storageToken.token);
    const res = await axios.post('/auth/logout');

    if (res.status.toString() === '401') {
      token.set(storageToken.refreshToken);
      const res = await axios.post('/auth/refresh');

      if (res.status.toString() === '401') {
        setIsLoggedIn(false);
        setUser(null);
        token.unset();
        window.localStorage.removeItem('token-stor');
        history.push('/auth');
        return;
      }
      if (res.status.toString() === '200') {
        window.localStorage.setItem(
          'token-stor',
          JSON.stringify({
            token: res.data.data.token,
            refreshToken: res.data.data.refreshToken,
          }),
        );
        return;
      }
    }

    setUser(null);
    setIsLoggedIn(false);
    token.unset();
    window.localStorage.removeItem('token-stor');
    history.push('/auth');
    return res.data;
  };

  const fetchResults = async (answers, testType) => {
    const storageToken = JSON.parse(window.localStorage.getItem('token-stor'));
    token.set(storageToken.token);
    console.log('results');

    const res = await axios.post(`/results/${testType}`, answers);
    console.log('fetchresults rsponse: ', res);

    if (res.status.toString() === '401') {
      token.set(storageToken.refreshToken);
      const res = await axios.post('/auth/refresh');

      if (res.status.toString() === '401') {
        onLogOut();
        return;
      }
      if (res.status.toString() === '200') {
        window.localStorage.setItem(
          'token-stor',
          JSON.stringify({
            token: res.data.data.token,
            refreshToken: res.data.data.refreshToken,
          }),
        );
        history.push(`/results?type=${testType}`);
        token.set(res.data.data.token);

        return;
      }
    }
    history.push(`/results?type=${testType}`);

    return res.data;
  };

  const currentUser = async () => {
    if (!JSON.parse(window.localStorage.getItem('token-stor'))) {
      setIsLoggedIn(false);
      return;
    }

    const storageToken = JSON.parse(window.localStorage.getItem('token-stor'));
    token.set(storageToken.token);
    console.log('current user');

    const res = await axios.get('/user');
    console.log(res);

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
            token: res.data.data.token,
            refreshToken: res.data.data.refreshToken,
          }),
        );
        token.set(res.data.data.token);
        return;
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
