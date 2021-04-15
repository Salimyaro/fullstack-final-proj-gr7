import React, { useContext } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import AuthContext from '../../contexts/auth/context';
import s from './LoaderBlur.module.css';

export default function LoaderBlur() {
  const { setLoading } = useContext(AuthContext);

  const handleClick = () => {
    setLoading(true);
    window.location.reload();
  };
  return (
    <div className={s.loader} onClick={handleClick}>
      <Loader type="BallTriangle" color="#ffffff" height={60} />
    </div>
  );
}
