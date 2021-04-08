import { useState, useMemo } from 'react';
import authContext from './context';
import axios from 'axios';
axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com';

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('state user:', user);
  console.log('state isLoggedIn:', isLoggedIn);

  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

  const signUp = async user => {
    const { data } = await axios.post('/auth/register', user);
    setUser(data.data);
    setIsLoggedIn(true);
    token.set(data.data.token);
    return data;
  };

  const onLogIn = async user => {
    const { data } = await axios.post('/auth/login', user);
    // console.log(data.data);
    setUser(data.data);
    setIsLoggedIn(true);
    token.set(data.data.token);
    window.localStorage.setItem('token-stor', JSON.stringify(data.data.token));

    return data;
  };

  const onLogOut = async () => {
    const { data } = await axios.post('/auth/logout');

    setUser(null);
    setIsLoggedIn(false);
    token.unset();
    window.localStorage.setItem('token-stor', JSON.stringify(''));
    return data;
  };

  const currentUser = async () => {
    if (!JSON.parse(window.localStorage.getItem('token-stor'))) {
      return;
    }
    token.set(JSON.parse(window.localStorage.getItem('token-stor')));
    const { data } = await axios.get('/user');
    setUser(data.data);
    setIsLoggedIn(true);

    return data;
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut, signUp, currentUser };
  }, [isLoggedIn, user]);

  console.log('providerValue', providerValue);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
