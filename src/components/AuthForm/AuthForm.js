import Button from '@material-ui/core/Button';
import { Box } from '@material-ui/core';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/variables.css';
import AuthContext from '../../contexts/auth/context';
import s from './AuthForm.module.css';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loding, setLoading] = useState(false);
  const { onLogIn, signUp } = useContext(AuthContext);

  const handleLogin = async event => {
    event.preventDefault();

    if (!/\S+@\S+\.\S{2,}/.test(email.trim()) || password.trim().length < 6) {
      toast.dark(
        'E-mail must be valid and the password must be longer than 5 characters!',
      );
      return;
    }
    setLoading(true);
    const data = await onLogIn({ email, password });
    setLoading(false);
    return data
  };

  const handleRegister = async event => {
    event.preventDefault();
    if (!/\S+@\S+\.\S{2,}/.test(email.trim()) || password.trim().length < 6) {
      toast.dark(
        'E-mail must be valid and the password must be longer than 5 characters!',
      );
      return;
    }
    setLoading(true);
    const data = await signUp({ email, password });
    setLoading(false);
    return data
  };

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className={s.form}>
      <p className={s.account}>You can use your Google Account to authorize:</p>
      <div className={s.buttonGoogle}>
        <a
          href="https://goit-solo-tests-final-prg.herokuapp.com/auth/google"
          className={s.authGoogle}
        >
          <svg
            className={s.icon}
            width="18"
            height="18"
            aria-label="Google-icon"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8555 7.33402C17.9355 7.33402 18.0004 7.39888 18.0004 7.47889V9C18.0004 9.56932 17.9475 10.126 17.8461 10.666C17.0615 14.8604 13.3662 18.0303 8.9369 17.9998C3.96689 17.9655 -0.0106149 13.9498 0.000388988 8.97972C0.0113226 4.01857 4.03664 0 9.00036 0C11.4322 0 13.6387 0.964758 15.2587 2.53188C15.3172 2.58845 15.3187 2.68168 15.2611 2.7392L13.1092 4.89115C13.0538 4.94656 12.9643 4.948 12.9075 4.89396C11.8907 3.92614 10.5151 3.33197 9.00036 3.33197C5.87247 3.33197 3.3537 5.83284 3.33246 8.96066C3.31112 12.109 5.857 14.668 9.00036 14.668C11.5508 14.668 13.7079 12.9832 14.4192 10.666H9.14523C9.06522 10.666 9.00036 10.6011 9.00036 10.5211V7.47886C9.00036 7.39884 9.06522 7.33398 9.14523 7.33398H17.8555V7.33402Z"
              fill="#2196F3"
            />
            <path
              d="M17.8551 7.33405H16.7686C16.8486 7.33405 16.9135 7.39891 16.9135 7.47892V9.00003C16.9135 9.56935 16.8606 10.126 16.7592 10.666C16.0107 14.6676 12.613 17.7365 8.45618 17.9838C8.61522 17.9932 8.77533 17.9987 8.93655 17.9998C13.3659 18.0303 17.0611 14.8604 17.8457 10.666C17.9471 10.126 18 9.56935 18 9.00003V7.47889C18 7.39891 17.9351 7.33405 17.8551 7.33405Z"
              fill="#1E88E5"
            />
            <path
              d="M3.85174 6.62632L1.11841 4.65138C2.65185 1.87787 5.60681 0 9.00002 0C11.4319 0 13.6384 0.964758 15.2583 2.53188C15.3168 2.58845 15.3183 2.68168 15.2608 2.7392L13.1088 4.89115C13.0535 4.94645 12.964 4.94817 12.9074 4.89424C11.8906 3.92625 10.5149 3.332 9.00002 3.332C6.71725 3.332 4.74956 4.68144 3.85174 6.62632Z"
              fill="#F44336"
            />
            <path
              d="M3.06262 6.05616L3.8517 6.62629C4.6712 4.85111 6.38218 3.57262 8.41035 3.36291C8.4256 3.36126 8.44026 3.35925 8.4558 3.35777C8.27731 3.34083 8.09644 3.33197 7.91348 3.33197C5.85132 3.33197 4.05413 4.41911 3.06262 6.05616Z"
              fill="#E53935"
            />
            <path
              d="M14.1717 2.53188C14.2302 2.58845 14.2318 2.68168 14.1742 2.73923L12.4275 4.4859C12.5949 4.61317 12.7551 4.74929 12.9071 4.894C12.9638 4.94803 13.0534 4.94659 13.1088 4.89118L15.2607 2.73923C15.3183 2.68168 15.3167 2.58848 15.2583 2.53188C13.6383 0.964758 11.4318 0 8.99994 0C8.81745 0 8.63639 0.00608203 8.4566 0.0168047C10.6729 0.148816 12.6733 1.08232 14.1717 2.53188Z"
              fill="#E53935"
            />
            <path
              d="M15.6021 15.1164C13.9585 16.89 11.6088 18 9.00003 18C5.47646 18 2.42588 15.9751 0.948547 13.0252L3.73907 11.1129C4.57646 13.1965 6.61658 14.668 9.00003 14.668C10.4958 14.668 11.8561 14.0885 12.8688 13.1418L15.6021 15.1164Z"
              fill="#4CAF50"
            />
            <path
              d="M3.73913 11.1129L2.91626 11.6768C3.87198 13.4572 5.7514 14.668 7.91355 14.668C8.09639 14.668 8.27713 14.659 8.45555 14.6421C6.30929 14.4375 4.51193 13.0359 3.73913 11.1129Z"
              fill="#43A047"
            />
            <path
              d="M9.00003 18C11.6088 18 13.9585 16.89 15.6021 15.1164L14.9326 14.6328C13.3894 16.5533 11.0744 17.8274 8.45813 17.9836C8.63743 17.9943 8.81806 18 9.00003 18Z"
              fill="#43A047"
            />
            <path
              d="M3.332 8.99998C3.332 9.74677 3.4765 10.4599 3.73908 11.1129L0.948516 13.0252C0.341543 11.8141 0 10.4469 0 8.99998C0 7.42273 0.405633 5.94034 1.11839 4.65137L3.85172 6.6263C3.51816 7.3481 3.332 8.15251 3.332 8.99998Z"
              fill="#FFC107"
            />
            <path
              d="M2.91616 11.6768L3.73903 11.1129C3.47645 10.4599 3.33195 9.74676 3.33195 8.99997C3.33195 8.15249 3.51811 7.34808 3.85167 6.62628L3.06259 6.05615C2.55019 6.90219 2.2528 7.89497 2.24556 8.96066C2.23888 9.94342 2.4824 10.8688 2.91616 11.6768Z"
              fill="#FFB300"
            />
          </svg>
          Google
        </a>
      </div>
      <p className={s.login}>Or login to our app using e-mail and password: </p>
      <form>
        <div className={s.formInput}>
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
        </div>
        <div>
          <button onClick={handleLogin} type="submit" className={s.sign}>
            Sign in
          </button>
          <button onClick={handleRegister} type="submit" className={s.sign}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
