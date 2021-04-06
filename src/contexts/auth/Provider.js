import { useState, useMemo } from 'react';
import authContext from './context';
import axios from 'axios';
require('dotenv').config();
const BaseUrl = process.env.BASE_URL;

export default function Provider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
      const { data } = await axios.post(`${BaseUrl}/auth/login`);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return error;
    }
  };

  const onLogIn = () => {
    const userData = fetchLoginData();
    console.log(userData);

    setUser({ userData });
    setIsLoggedIn(true);
  };

  const fetchLogoutData = async () => {
    try {
      await axios.post(`${BaseUrl}/auth/logout`);
      token.unset();
    } catch (error) {
      return error;
    }
  };

  const onLogOut = () => {
    fetchLogoutData();
    setUser(null);
    setIsLoggedIn(false);
    console.log(BaseUrl);
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
