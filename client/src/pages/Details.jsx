import React, { useState, useEffect } from "react";
import { useHistory, useParams, NavLink } from "react-router-dom";
import axios from "axios";

import "../styles/index.scss";
import StarSvg from "../components/StarSvg";
import defaultImg from "../assets/images/blank.jpg";

export default function Details() {
  const history = useHistory();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [img, setImg] = useState("");
  const [ratingNum, setRatingNum] = useState(0);
  const {
    title,
    image,
    author,
    ratings,
    description,
    pages,
    publishDate,
  } = book;

  useEffect(() => {
    const getBookById = async () => {
      try {
        const bk = await axios.get(`http://localhost:9009/api/books/${id}`);
        setBook(bk.data.books[0]);
        setRatingNum(bk.data.books[0].ratings);
        setImg(
          String.fromCharCode.apply(
            null,
            new Uint16Array(bk.data.books[0].image.data)
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getBookById();
  }, []);

  const deleteBookHandler = () => {
    const deleteBK = async () => {
      try {
        await axios.delete(`http://localhost:9009/api/books/${id}`);
        history.push("/books");
      } catch (error) {
        console.log(error);
      }
    };
    deleteBK();
  };
  return (
    <div id="details__wrapper page">
      <section className="details">
        <h3 className="details__intro">{title}</h3>
        <img
          src={img || defaultImg}
          alt="book cover"
          className="details__img"
        />
        <q className="details__author">{author}</q>
        <div id="rating" className="details__rating">
          <StarSvg num={ratingNum} adjustable={false} />
        </div>
        <p className="details__published">
          <i>Published: {publishDate}</i>
        </p>
        <p className="details__pages">
          <i>{pages} Pages</i>
        </p>
        <p className="details__description">{description}</p>
      </section>

      <div className="details__wrapper">
        <NavLink
          to={`/books/edit/${id}`}
          className="btn btn--success details__btn--edit"
        >
          Edit Book
        </NavLink>
        <NavLink
          to="/books"
          className="btn btn--setting-one details__btn--back"
        >
          Back To Shelf
        </NavLink>
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
