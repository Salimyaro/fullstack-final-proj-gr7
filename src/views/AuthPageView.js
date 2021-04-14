import '../assets/variables.css';
import AuthForm from '../components/AuthForm';
import s from './AuthView.module.css';

export default function AuthPageView() {
  return (
    <div className={s.container}>
      <div className={s.aboutTest}>
        <h1 className={s.proTest}>Pro Test</h1>
        <p className={s.paragraph}>
          <span className={s.span}>[</span> We will help you find weak points in
          knowledge so that you can strengthen it. We will show you what is
          relevant to know for a<span className={s.span}> QA Engineer </span>{' '}
          and will try to make the learning process more diverse_{' '}
          <span className={s.span}>]</span>
        </p>
      </div>
      <div>
        <AuthForm />
      </div>
    </div>
  );
}
