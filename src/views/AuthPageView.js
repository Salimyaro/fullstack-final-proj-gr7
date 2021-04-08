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
    marginRight: 105,
    marginTop: 71,
  },
  proTest: {
    fontFamily: 'var(--main-font)',
    fontWeight: 'var(--extra-bold)',
  },
  paragraph: {},
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
            <Typography component="p" color="inherit" spacing={3} paragraph>
              <b>[</b> We will help you find weak points in knowledge so that
              you can strengthen it. We will show you what is relevant to know
              for a<b> QA Engineer </b> and will try to make the learning
              process more diverse_ <b>]</b>
            </Typography>
          </div>
        </Grid>
        <Grid item md={4}>
          <div>
            <AuthForm />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
