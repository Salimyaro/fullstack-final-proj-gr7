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
    return data;
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut };
  }, [isLoggedIn, user]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
