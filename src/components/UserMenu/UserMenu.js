import { useState, useContext } from 'react';
import s from './UserMenu.module.css';
import styles from '../AuthNav/AuthMobile.module.css';
import LogOut from '../../img/sign-out.png';
import DefaultAvatar from '../../img/default-avatar.jpg';
import SandwBtn from '../SandwBtn';
import Modal from '../Modal';
import NavLinks from '../NavLinks';
// import AuthContext from '../../contexts/auth/context';

export default function UserMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);
  // const { user } = useContext(AuthContext);

  return (
    <div className={s.container}>
      <div className={s.navigationDesc}>
        <NavLinks />
      </div>
      <p className={s.name}>
        <img
          src={DefaultAvatar}
          alt="avatar"
          width="30"
          height="30"
          style={{ marginRight: '15px', borderRadius: '50%' }}
        />
        <span className={s.userName}>Welcome, </span>
      </p>
      <button type="button" className={s.btnLoguot}>
        <img src={LogOut} alt="loguot" />
      </button>

      <SandwBtn isModalOpen={isModalOpen} onClick={toggleModal} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <div className={styles.navContactsMob}>
            <NavLinks onClick={toggleModal} />
            <button
              type="button"
              style={{
                border: 'none',
                background: 'transparent',
                padding: '0',
                marginTop: '26px',
              }}
            >
              <img src={LogOut} alt="loguot" />
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
