import { useState } from 'react';
// import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { login, signUp } from '../../service/user-api';
import s from './AuthForm.module.css';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (email.trim() === '') {
      toast.error('Please enter email!');
      return;
    }

    if (event.target.value === email) {
      login({ email, password });
      reset();
    } else {
      signUp({ email, password });
      reset();
    }
  };

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.form}>
      <p className={s.account}>
        You can use your Google Account to authorize:{' '}
      </p>
      <Box>
        <Button variant="outlined">Google</Button>
      </Box>
      <p className={s.login}>Or login to our app using e-mail and password: </p>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={handleChangeEmail}
            required
          />
        </label>
        <label>
          <input
            className={s.input}
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChangePassword}
            required
            // autocomplete="off"
          />
        </label>

        <Box>
          <Button variant="outlined" type="submit">
            Sign in
          </Button>
          <Button variant="outlined" type="button">
            Sign up
          </Button>
        </Box>
      </form>
    </div>
  );
}
