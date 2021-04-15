import { useContext, useState, useEffect } from 'react';
import AuthContext from '../contexts/auth/context';
import ContactCard from '../components/Contacts/contact-card';
import s from '../components/Contacts/Contacts.module.css';

export default function Contacts({ items }) {
  const { setLoading } = useContext(AuthContext);
  const [loadedImages, setLoadedImages] = useState(0);
  const toggleLoadind = () => {
    setLoadedImages(prev => prev + 1);
  };
  useEffect(() => {
    if (loadedImages === items.length) {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadedImages]);
  return (
    <>
      <div className={s.contactsContainer}>
        <div className={s.contactsArticleContainer}>
          <h2 className={s.contactsArticle}>Our team</h2>
        </div>
        <ul className={s.contactsList}>
          {items.map(item => (
            <li className={s.contactCard} key={item.id}>
              <ContactCard
                name={item.name}
                url={item.url}
                photo={item.photo}
                role={item.role}
                onload={toggleLoadind}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
