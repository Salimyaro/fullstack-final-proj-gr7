// export default function UsefulInfoView() {
//   return <div>UsefulInfoView</div>;
// }

import React from 'react';

import s from './UsefulInfoView.module.css';

export default function UsefulInfoView() {
  return (
    <section className={s.bgImage}>
      <div className={s.useContainer}>
        <div className={s.usefulInfo}>
          <h2 className={s.title}>Useful literature</h2>
          <ol className={s.list}>
            <li className={s.item}>Testing dot.com Savin.</li>
            <li className={s.item}>
              A mental hospital in the hands of patients.
            </li>
            <li className={s.item}>Scrum. J. Sutherland.</li>
          </ol>
        </div>

        <div className={s.usefulInfo}>
          <h2 className={s.title}>Useful resources</h2>
          <ol className={s.list}>
            <li className={s.item}>
              <a
                className={s.itemLink}
                href="http://dou.ua"
                aria-label="сайт dou.ua"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOU
              </a>
            </li>
            <li className={s.item}>
              <a
                className={s.itemLink}
                href="https://habr.com"
                aria-label="сайт habr.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Habr
              </a>
            </li>
            <li className={s.item}>
              <a
                className={s.itemLink}
                href="http://www.softwareqatest.com/"
                aria-label="сайт softwareqatest.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SoftwareQATest
              </a>
            </li>
            <li className={s.item}>
              <a
                className={s.itemLink}
                href="https://goit.ua"
                aria-label="сайт goit.ua"
                target="_blank"
                rel="noopener noreferrer"
              >
                GoIt
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
