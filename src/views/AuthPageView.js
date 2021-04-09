import AuthForm from '../components/AuthForm';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../assets/variables.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 99,
    marginBottom: 99,
  },
  gridContainer: {
    justifyContent: 'center',
    direction: 'row',
    wrap: 'wrap',
  },
  aboutTest: {
    textAlign: 'start',
    marginRight: 105,
    marginTop: 71,
  },
  proTest: {
    fontFamily: 'var(--main-font)',
    fontWeight: 'var(--extra-bold)',
    fontSize: 34,
  },
  paragraph: {
    width: 420,
    fontFamily: 'var(--main-font)',
    fontWeight: 'var(--medium)',
    fontSize: 18,
    lineHeight: 2,
    color: 'var(--secondary-color-text)',
    letterSpacing: 0.32,
  },
  span: {
    fontWeight: 'var(--extra-bold)',
    color: 'var(--primary-color-text)',
  },
}));

export default function AuthPageView() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid item md={4}>
          <div className={classes.aboutTest}>
            <Typography
              component="h1"
              variant="h2"
              gutterBottom
              className={classes.proTest}
            >
              Pro Test
            </Typography>
            <Typography component="p" className={classes.paragraph} paragraph>
              <span className={classes.span}>[</span> We will help you find weak
              points in knowledge so that you can strengthen it. We will show
              you what is relevant to know for a
              <span className={classes.span}> QA Engineer </span> and will try
              to make the learning process more diverse_{' '}
              <span className={classes.span}>]</span>
            </Typography>
          </div>
        </Grid>
        <div>
          <AuthForm />
        </div>
        {/* <Grid item md={4}>
          
        </Grid> */}
      </Grid>
    </div>
  );
}
