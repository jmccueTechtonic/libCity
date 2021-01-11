import React from "react";

import "../styles/index.scss";
import imagesArray from "../utils/imagesArray";

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
          src={imagesArray.find(
            (item) =>
              image === `./src/assets/images${item.replace(/\..*\./, ".")}`
          )}
          alt={title}
          className="card__img"
        />
        <p className="card__title">{title}</p>
        <q className="card__author">{author}</q>
      </section>
    </div>
  );
}
