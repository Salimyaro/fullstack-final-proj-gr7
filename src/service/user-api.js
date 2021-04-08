import axios from 'axios';
axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com';

export async function login(user) {
  const { data } = await axios.post('/auth/login', user);
  // console.log(data);
  return data;
}

export async function signUp(user) {
  const { data } = await axios.post('/auth/register', user);
  return data;
}
