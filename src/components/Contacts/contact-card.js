export default function ContactsCard({ name, url, photo, role }) {
  return (
    <ul>
      <li className="contact-card">
        <a className="contact-link" target="_blank" href={url}>
          <img
            className="contact-photo"
            src={photo}
            alt={name}
            width="244px"
            height="280px"
          />
          <div>
            <h4 className="contact-name">{name}</h4>
            <span className="description">{role} </span>
          </div>
        </a>
      </li>
    </ul>
  );
}
