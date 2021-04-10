import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/auth/context';

import axios from 'axios';
axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com';

export default function GoogleAuth() {
  const { currentUser, onGoogleLogin } = useContext(AuthContext);
  const params = new URL(document.location).searchParams;
  const token = params.get('token');
  console.log(token);

  const history = useHistory();

  useEffect(() => {
    window.localStorage.setItem('token-stor', JSON.stringify(token));
    onGoogleLogin();
    currentUser();
    history.push('/');
  }, []);

  return <div>Loading ...</div>;
}
