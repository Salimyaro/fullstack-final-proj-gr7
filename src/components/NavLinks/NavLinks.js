import { NavLink } from 'react-router-dom';
import style from '../AuthNav/AuthNav.module.css';

export default function NavLinks() {
  return (
    <ul className={style.navList}>
      <li>
        <NavLink
          to="/"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/useful-info"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Materials
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contacts"
          exact
          className={style.link}
          activeClassName={style.activeLink}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}
