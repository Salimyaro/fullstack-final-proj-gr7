import axios from 'axios';
axios.defaults.baseURL = 'https://goit-solo-tests-final-prg.herokuapp.com';

export async function login(user) {
  const { data } = await axios.post('/auth/login', user);
  return data;
}

export async function signUp(user) {
  const { data } = await axios.post('/auth/register', user);
  return data;
}

export async function getTest(type) {
  const { data } = await axios.get(`/test/${type}`);
  return data;
}
