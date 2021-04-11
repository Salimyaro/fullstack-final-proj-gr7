import { NavLink } from 'react-router-dom';

import style from '../AuthNav/AuthNav.module.css';

export default function NavLinks({ onClick }) {
  return (
    <ul className={style.navList}>
      <li>
        <NavLink
          to="/"
          className={style.link}
          activeClassName={style.activeLink}
          onClick={onClick}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/useful-info"
          className={style.link}
          activeClassName={style.activeLink}
          onClick={onClick}
        >
          Materials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          className={style.link}
          activeClassName={style.activeLink}
          onClick={onClick}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}
