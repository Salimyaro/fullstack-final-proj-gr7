import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/variables.css';
import AuthContext from '../../contexts/auth/context';
import s from './AuthForm.module.css';
import { ReactComponent as GoogleIcon } from 'img/google-symbol.svg';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loding, setLoading] = useState(false);
  const { onLogIn, signUp } = useContext(AuthContext);

  const handleLogin = async event => {
    event.preventDefault();

    if (!/\S+@\S+\.\S{2,}/.test(email.trim()) || password.trim().length < 6) {
      toast.warning(
        'E-mail must be valid and the password must be longer than 5 characters!',
      );
      return;
    }
    setLoading(true);
    const data = await onLogIn({ email, password });
    setLoading(false);
    return data;
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
    return data;
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
          <GoogleIcon width="18" height="18" className={s.icon} />
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
