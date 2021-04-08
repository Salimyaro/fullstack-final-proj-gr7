import { useState, useContext } from 'react';
// import axios from 'axios';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
// import { login, signUp } from '../../service/user-api';
import s from './AuthForm.module.css';
import AuthContext from '../../contexts/auth/context';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogIn, signUp } = useContext(AuthContext);

  const handleLogin = async event => {
    event.preventDefault();

    if (email.trim() === '') {
      toast.error('Please enter email!');
      return;
    }

    const data = await onLogIn({ email, password });
    // console.log('dataAuthForm log', data);
    // reset();
  };

  const handleRegister = async event => {
    event.preventDefault();

    if (email.trim() === '') {
      toast.error('Please enter email!');
      return;
    }

    const data = await signUp({ email, password });
    // console.log('dataAuthForm reg', data);
    // reset();
  };

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };

  // const reset = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  return (
    <div className={s.form}>
      <p className={s.account}>
        You can use your Google Account to authorize:{' '}
      </p>
      <Box>
        <Button variant="outlined">Google</Button>
      </Box>
      <p className={s.login}>Or login to our app using e-mail and password: </p>
      <form>
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
            autoComplete="off"
          />
        </label>

        <Box>
          <Button onClick={handleLogin} variant="outlined" type="submit">
            Sign in
          </Button>
          <Button onClick={handleRegister} variant="outlined" type="submit">
            Sign up
          </Button>
        </Box>
      </form>
    </div>
  );
}
