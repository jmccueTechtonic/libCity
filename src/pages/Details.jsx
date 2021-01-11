import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import "../styles/index.scss";
import StarSvg from "../components/StarSvg";
import imagesArray from "../utils/imagesArray";
import defaultImg from "../assets/images/blank.jpg";

export default function Details() {
  const history = useHistory();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [ratingNum, setRatingNum] = useState(0);

  useEffect(() => {
    const getBookById = async () => {
      try {
        const bk = await axios.get(`http://localhost:3000/books/${id}`);
        setBook(bk.data);
        setRatingNum(bk.data.ratings);
      } catch (error) {
        console.log(error);
      }
    };
    getBookById();
  }, []);

  const deleteBookHandler = () => {
    const deleteBook = async () => {
      try {
        await axios.delete(`http://localhost:3000/books/${id}`);
        history.push("/books");
      } catch (error) {
        console.log(error);
      }
    };
    deleteBook();
  };
  return (
    <div id="details__wrapper page">
      <section className="details">
        <h3 className="details__intro">{book.title}</h3>
        <img
          src={
            imagesArray.find(
              (img) =>
                book.image ===
                `./src/assets/images${img.replace(/\..*\./, ".")}`
            ) || defaultImg
          }
          alt="book cover"
          className="details__img"
        />
        <q className="details__author">{book.author}</q>
        <div id="rating" className="details__rating">
          <StarSvg num={ratingNum} adjustable={false} />
        </div>
        <p className="details__published">
          <i>Published: {book.publishDate}</i>
        </p>
        <p className="details__pages">
          <i>{book.pages} Pages</i>
        </p>
        <p className="details__description">{book.description}</p>
      </section>

      <div className="details__wrapper">
        <button
          onClick={() => {
            history.push(`/books/edit/${id}`);
          }}
          className="btn btn--success details__btn--edit"
        >
          Edit Book
        </button>
        <button
          onClick={() => {
            history.push("/books");
          }}
          className="btn btn--setting-one details__btn--back"
        >
          Back To Shelf
        </button>
        <button
          onClick={() => deleteBookHandler()}
          className="btn btn--setting-danger details__btn--delete"
        >
          Delete Book
        </button>
      </div>
    </div>
  );
}
