import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderBlur.module.css';

export default function LoaderBlur() {
  return (
    <div className={s.loader}>
      <Loader type="BallTriangle" color="#ffffff" height={60} />
    </div>
  );
}
