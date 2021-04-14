import {
  AppBar as MuiAppBar,
  Grid,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import React, { useContext } from 'react';
import AuthContext from '../../contexts/auth/context';
import AuthNav from '../AuthNav';
import NavigationLogo from '../Logo';
import UserMenu from '../UserMenu';

const useStyles = makeStyles(_theme => ({
  root: {
    backgroundColor: '#f5f6fb',
    boxShadow: 'none',
    borderBottom: '1px solid #E2E3E5',
  },
  wrapper: {
    paddingLeft: '20px',
    paddingRight: '20px',
    minHeight: '70px',
  },
}));

export default function AppBar() {
  const classes = useStyles();

  const { isLoggedIn } = useContext(AuthContext);

  return (
    <MuiAppBar position="static" className={classes.root}>
      <Toolbar className={classes.wrapper}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <NavigationLogo />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}
