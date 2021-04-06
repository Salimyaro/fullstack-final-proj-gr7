import { useState, useEffect, useContext } from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import AuthContext from '../../contexts/auth/context';

import React from 'react';
import {
  AppBar as MuiAppBar,
  Toolbar,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    borderBottom: '1px solid #ccc',
  },
  wrapper: {
    paddingLeft: '20px',
    paddingRight: '20px',
    minHeight: '70px',
  },
}));

export default function AppBar() {
  const classes = useStyles();
  // const [isLoggedIn, setisLoggedIn] = useState(true);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <MuiAppBar position="static" className={classes.root}>
      <Toolbar className={classes.wrapper}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Navigation />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Grid>
        </Grid>
      </Toolbar>
    </MuiAppBar>
  );
}
