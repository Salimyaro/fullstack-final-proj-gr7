import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../contexts/auth/context';
import style from '../AuthNav/AuthNav.module.css';

export default function NavLinks({ onClick }) {
  const { setLoading } = useContext(AuthContext);
  const handleNavLink = e => {
    window.location.href !== e.target.href && setLoading(true);
    onClick && onClick();
  };
  return (
    <ul className={style.navList}>
      <li>
        <NavLink
          exact
          to="/"
          className={style.link}
          activeClassName={style.activeLink}
          onClick={handleNavLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/useful-info"
          className={style.link}
          activeClassName={style.activeLink}
          onClick={handleNavLink}
        >
          Materials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={style.link}
          activeClassName={style.activeLink}
          onClick={handleNavLink}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}
