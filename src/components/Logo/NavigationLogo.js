import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/logo.svg';
import s from './Navigation.module.css';

const NavigationLogo = () => {
  return (
    <nav>
      <NavLink to="/" className={s.link} activeClassName={s.activeLink}>
        <img src={Logo} alt="logo" />
      </NavLink>
    </nav>
  );
};

export default NavigationLogo;
