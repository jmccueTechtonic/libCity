import React from 'react';

import '../styles/index.scss';
import defaultImg from '../assets/images/blank.jpg';

export default function Book({ title, image: { data }, author, onClick }) {
  return (
    <div className='card--wrapper' onClick={onClick}>
      <section className='card'>
        <img
          src={
            String.fromCharCode.apply(null, new Uint16Array(data)) || defaultImg
          }
          alt={title}
          className='card__img'
        />
        <p className='card__title'>{title}</p>
        <q className='card__author'>{author}</q>
      </section>
    </div>
  );
}
