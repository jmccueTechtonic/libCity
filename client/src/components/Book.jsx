import React from "react";

import "../styles/index.scss";
import defaultImg from "../assets/images/blank.jpg";

export default function Book(props) {
  const {
    id,
    title,
    image,
    author,
    ratings,
    description,
    date,
    pages,
    publishDate,
  } = props.el;

  return (
    <div className="card--wrapper" onClick={props.onClick}>
      <section className="card">
        <img
          src={
            String.fromCharCode.apply(null, new Uint16Array(image.data)) ||
            defaultImg
          }
          alt={title}
          className="card__img"
        />
        <p className="card__title">{title}</p>
        <q className="card__author">{author}</q>
      </section>
    </div>
  );
}
