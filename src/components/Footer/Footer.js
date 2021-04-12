import React from 'react';
import { Link } from 'react-router-dom';
import copyright from '../../img/copyright.svg';
import heart from '../../img/heart.svg';
import s from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <img
          className={s.copyRight}
          src={copyright}
          alt=""
          width="16"
          height="16"
        />
        <span>2021</span>
        <span className={s.allRights}>All Rights Reserved</span>
        <span>Developed with</span>
        <img className={s.heart} src={heart} alt="" width="16" height="16" />
        <span>
          by{' '}
          <Link to="/contacts" className={s.link}>
            GoIT Students
          </Link>
        </span>
      </div>
    </footer>
  );
}
