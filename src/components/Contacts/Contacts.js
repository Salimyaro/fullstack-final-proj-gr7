import { useState } from 'react';
import LoaderBlur from '../LoaderBlur';
import ContactCard from './contact-card';
import s from './Contacts.module.css';

export default function Contacts({ items }) {
  const [loading, setLoading] = useState(null);
  return (
    <>
      {loading && <LoaderBlur />}
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
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
