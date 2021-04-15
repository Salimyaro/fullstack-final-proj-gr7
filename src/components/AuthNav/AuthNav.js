import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../contexts/auth/context';

import Modal from '../Modal';
import SandwBtn from '../SandwBtn';
import styles from './AuthMobile.module.css';
import s from './AuthNav.module.css';

export default function AuthNav() {
  const { setLoading } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);
  const handleNavLink = () => {
    setLoading(true);
    toggleModal();
  };
  return (
    <>
      <div className={s.navContacts}>
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      </div>
      <SandwBtn isModalOpen={isModalOpen} onClick={toggleModal} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <div className={styles.navContactsMob}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70px',
                width: '100%',
                borderBottom: '1px solid #ccc',
              }}
            >
              <NavLink
                to="/contacts"
                className={styles.linkMob}
                activeClassName={s.activeLink}
                onClick={handleNavLink}
              >
                Contacts
              </NavLink>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
