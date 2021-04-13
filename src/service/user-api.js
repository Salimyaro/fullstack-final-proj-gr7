import axios from 'axios';
import { useState } from 'react';
axios.defaults.baseURL = 'https://fin-proj-gr7.herokuapp.com';

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
