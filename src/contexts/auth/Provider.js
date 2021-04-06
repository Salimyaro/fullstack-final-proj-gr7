import { useState, useMemo } from 'react';
import authContext from './context';
import axios from 'axios';

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

  const fetchLoginData = async () => {
    try {
      const { data } = await axios.post(
        'https://protest-backend.goit.global/auth/login',
      );
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return error;
    }
  };

  const onLogIn = () => {
    const userData = fetchLoginData();

    setUser({ userData });
    setIsLoggedIn(true);
  };

  const fetchLogoutData = async () => {
    try {
      await axios.post('https://protest-backend.goit.global/auth/logout');
      token.unset();
    } catch (error) {
      return error;
    }
  };

  const onLogOut = () => {
    fetchLogoutData();
    setUser(null);
    setIsLoggedIn(false);
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
