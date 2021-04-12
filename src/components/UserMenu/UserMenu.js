import { useContext, useState } from 'react';
import AuthContext from '../../contexts/auth/context';
import DefaultAvatar from '../../img/default-avatar.jpg';
import LogOutImg from '../../img/sign-out.png';
import styles from '../AuthNav/AuthMobile.module.css';
import Modal from '../Modal';
import NavLinks from '../NavLinks';
import SandwBtn from '../SandwBtn';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);
  const { user, onLogOut } = useContext(AuthContext);

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
        <span className={s.userName}>{user?.email} </span>
      </p>
      <button onClick={onLogOut} type="button" className={s.btnLoguot}>
        <img src={LogOutImg} alt="loguot" />
      </button>

      <SandwBtn isModalOpen={isModalOpen} onClick={toggleModal} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <div className={styles.navContactsMob}>
            <NavLinks onClick={toggleModal} />
            <button
              onClick={onLogOut}
              type="button"
              style={{
                border: 'none',
                background: 'transparent',
                padding: '0',
                marginTop: '26px',
              }}
            >
              <img src={LogOutImg} alt="loguot" />
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
