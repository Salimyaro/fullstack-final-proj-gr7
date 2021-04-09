import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import Logo from '../../img/logo.png';

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        <img src={Logo} alt="logo" />
      </NavLink>
    </nav>
  );
};

export default Navigation;
