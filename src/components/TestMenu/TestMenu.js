import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/auth/context';
import s from './TestMenu.module.css';

export default function TestMenu() {
  const { setLoading } = useContext(AuthContext);
  useEffect(() => {
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={s.testContainer}>
      <Link to="/test?type=tech" className={s.link}>
        <div className={s.textBox}>
          <div className={s.linkText}>QA technical training</div>
        </div>
      </Link>
      <Link to="/test?type=theory" className={s.link}>
        <div className={s.textBox}>
          <div className={s.linkText}>Testing theory</div>
        </div>
      </Link>
    </div>
  );
}
