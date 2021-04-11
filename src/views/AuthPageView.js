import AuthForm from '../components/AuthForm';
import '../assets/variables.css';
import s from './AuthView.module.css';

// const useStyles = makeStyles(theme => ({
//   // root: {
//   //   flexGrow: 1,
//   //   marginTop: 39,
//   //   marginBottom: 50,
//   //   [theme.breakpoints.up('lg')]: {
//   //     marginTop: 99,
//   //     marginBottom: 99,
//   //   },
//   //   [theme.breakpoints.between('sm', 'md')]: {
//   //     marginTop: 80,
//   //     marginBottom: 70,
//   //   },
//   // },
//   // gridContainer: {
//   //   justifyContent: 'center',
//   //   direction: 'column',
//   //   wrap: 'wrap',
//   //   [theme.breakpoints.up('sm')]: {
//   //     direction: 'row',
//   //   },
//   // },
//   // aboutTest: {
//   //   textAlign: 'start',
//   //   [theme.breakpoints.up('lg')]: {
//   //     marginRight: 105,
//   //     marginTop: 71,
//   //   },
//   // },
//   // proTest: {
//   //   fontFamily: 'var(--main-font)',
//   //   fontWeight: 'var(--extra-bold)',
//   //   fontSize: 34,
//   // },
//   // paragraph: {
//   //   width: 420,
//   //   fontFamily: 'var(--main-font)',
//   //   fontWeight: 'var(--medium)',
//   //   fontSize: 18,
//   //   lineHeight: 2,
//   //   color: 'var(--secondary-color-text)',
//   //   letterSpacing: 0.32,
//   // },
//   // span: {
//   //   fontWeight: 'var(--extra-bold)',
//   //   color: 'var(--primary-color-text)',
//   // },
// }));

export default function AuthPageView() {
  return (
    <div className={s.container}>
      <div className={s.aboutTest}>
        <h1 className={s.proTest}>Pro Test</h1>
        <p className={s.paragraph} paragraph>
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
