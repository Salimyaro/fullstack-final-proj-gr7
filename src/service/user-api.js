import axios from 'axios';
axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com/api/';

export async function login(user) {
  const { data } = await axios.post('/auth/login', user);
  return data;
}

export async function signUp(user) {
  const { data } = await axios.post('/auth/signup', user);
  return data;
}
