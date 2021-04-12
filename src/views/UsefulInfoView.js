import React from 'react';
import Materials from '../components/Materials/Materials';
import s from './UsefulInfoView.module.css';

export default function UsefulInfoView() {
  return (
    <section className={s.bgImage}>
      <Materials />
    </section>
  );
}
