import { useState, useMemo } from 'react';
import authContext from './context';
import axios from 'axios';
axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com';
export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loding, setLoading] = useState(false);
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
    // setLoading(true);
    const { data } = await axios.post('/auth/register', user);
    setUser(data.data);
    setIsLoggedIn(true);
    token.set(data.data.token);
    // setLoading(false);
    return data;
  };

  const onLogIn = async user => {
    // setLoading(true);
    const { data } = await axios.post('/auth/login', user);
    setUser(data.data);
    setIsLoggedIn(true);
    token.set(data.data.token);
    window.localStorage.setItem('token-stor', JSON.stringify(data.data.token));
    // setLoading(false);
    return data;
  };

  const onLogOut = async () => {
    // setLoading(true);
    const { data } = await axios.post('/auth/logout');
    setUser(null);
    setIsLoggedIn(false);
    token.unset();
    window.localStorage.setItem('token-stor', JSON.stringify(''));
    // setLoading(false);
    return data;
  };

  const currentUser = async () => {
    // setLoading(true);
    if (!JSON.parse(window.localStorage.getItem('token-stor'))) {
      return;
    }
    token.set(JSON.parse(window.localStorage.getItem('token-stor')));

    const { data } = await axios.get('/user');

    setUser(data.data);
    setIsLoggedIn(true);
    // setLoading(false);
    return data;
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut, signUp, currentUser };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, user]);

  console.log('providerValue', providerValue);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
