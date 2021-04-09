import s from './Contacts.module.css';
import { contactsDb } from './contactsDb';
import ContactCard from './contact-card';

export default function Contacts({ items }) {
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
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
