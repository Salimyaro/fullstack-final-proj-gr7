import books from '../../assets/materials/literature.json';
import resources from '../../assets/materials/resources.json';
import s from './Materials.module.css';

export default function Materials() {
  return (
    <div className={s.useContainer}>
      <div className={s.usefulInfo}>
        <h2 className={s.title}>Useful literature</h2>
        <ol className={s.list}>
          {books.map(book => {
            return (
              <li className={s.item} key={book.id}>
                <a
                  className={`${s.itemLink} ${s.book}`}
                  href={book.url}
                  aria-label="book"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`"${book.name}", ${book.author}`}
                </a>
              </li>
            );
          })}
        </ol>
      </div>

      <div className={s.usefulInfo}>
        <h2 className={s.title}>Useful resources</h2>
        <ol className={s.list}>
          {resources.map(resource => {
            return (
              <li className={s.item} key={resource.id}>
                <a
                  className={s.itemLink}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.description}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
