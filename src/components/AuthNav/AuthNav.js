import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import s from './AuthNav.module.css';
import styles from './AuthMobile.module.css';
import SandwBtn from '../SandwBtn';
import Modal from '../Modal';

export default function AuthNav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);
  return (
    <>
      <div className={s.navContacts}>
        <NavLink
          to="/contacts"
          exact
          className={s.link}
          activeClassName={s.activeLink}
        >
          Contacts
        </NavLink>
      </div>

      <SandwBtn onClick={toggleModal} />
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
                exact
                className={styles.linkMob}
                activeClassName={s.activeLink}
                onClick={toggleModal}
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
