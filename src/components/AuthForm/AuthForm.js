import { ReactComponent as GoogleIcon } from 'img/google-symbol.svg';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/variables.css';
import AuthContext from '../../contexts/auth/context';
import EyeHide from '../../img/eye-blocked.svg';
import Eye from '../../img/eye.svg';
import s from './AuthForm.module.css';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onLogIn, onSignUp, setLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);

  const handleClickShowPassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleLogin = async event => {
    event.preventDefault();
    if (!/\S+@\S+\.\S{2,}/.test(email.trim()) || password.trim().length < 6) {
      toast.warning(
        'E-mail must be valid and the password must be longer than 5 characters!',
      );
      return;
    }
    setLoading(true);
    onLogIn({ email, password });
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
    onSignUp({ email, password });
  };

  const handleChangeEmail = event => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = event => {
    setPassword(event.currentTarget.value);
  };

  const googleClikcHandler = () => {
    setLoading(true);
  };
  useEffect(() => {
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.form}>
      <p className={s.account}>You can use your Google Account to authorize:</p>
      <div className={s.buttonGoogle}>
        <a
          href="https://fin-proj-gr7.herokuapp.com//auth/google"
          className={s.authGoogle}
          onClick={googleClikcHandler}
        >
          <GoogleIcon width="18" height="18" className={s.icon} />
          Google
        </a>
      </div>
      <p className={s.login}>Or login to our app using e-mail and password: </p>
      <form>
        <div className={s.formInput}>
          <label className={s.formLabel}>
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
          <label className={s.formLabel}>
            <input
              className={s.input}
              type={showPassword ? 'password' : 'text'}
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChangePassword}
              required
              autoComplete="off"
            />
            <button onClick={handleClickShowPassword} className={s.eyeBtn}>
              <img src={showPassword ? EyeHide : Eye} alt="hide-button" />
            </button>
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
