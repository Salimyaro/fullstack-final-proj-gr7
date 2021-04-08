import React from 'react';
import s from './TestMenu.module.css';
import { Link } from 'react-router-dom';

export default function TestMenu() {
  return (
    <div className={s.testContainer}>
      <Link to="/test?type=qa" exact className={s.link}>
        <div className={s.textBox}>
          <div className={s.linkText}>QA technical training</div>
        </div>
      </Link>
      <Link to="/test?type=tt" exact className={s.link}>
        <div className={s.textBox}>
          <div className={s.linkText}>Testing theory</div>
        </div>
      </Link>
    </div>
  );
}
