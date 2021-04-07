import s from './Contacts.module.css';
import { contactsDb } from './contactsDb';
import ContactCard from './contact-card';

export default function Contacts({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <ContactCard
            name={item.name}
            url={item.url}
            photo={item.photo}
            role={item.role}
          />
        </li>
      ))}
    </ul>
  );
}
