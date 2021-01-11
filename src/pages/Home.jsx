import React from "react";
import { Link } from "react-router-dom";

import "../styles/index.scss";
import libraryImg from "../assets/images/library1.jpg";

export default function Home() {
  return (
    <div id="page">
      <main id="home" className="whatAreWe">
        <img src={libraryImg} alt="library" className="whatAreWe__img" />
        <div className="whatAreWe__container">
          <h1 className="whatAreWe__intro whatAreWe__text">Books...</h1>
          <q className="whatAreWe__message whatAreWe__text">
            Reading one book is like eating one potato chip.
          </q>
          <q className="whatAreWe__reference whatAreWe__text">– Diane Duane</q>
        </div>
      </main>
      <section className="cta">
        <h2 className="cta__welcome">Welcome to Library City</h2>
        <p className="cta__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/books" className="btn btn--success cta__btn">
          See a book
        </Link>
        <p className="cta__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to="/books/add" className="btn btn--success cta__btn">
          Add book
        </Link>
      </section>
    </div>
  );
}
