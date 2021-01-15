import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import "../styles/index.scss";
import Book from "../components/Book";
import Spinner from "../components/Spinner";

export default function Bookshelf() {
  let { search } = useParams();
  const history = useHistory();
  const [searchItem, setSearchItem] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        setIsLoading(true);
        let res = await axios.get(
          `http://localhost:3000/books?q=${search.trim()}`
        );
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllBooks();
  }, [search]);

  const updateSearchHandler = (e) => {
    const { value } = e.target;
    setSearchItem(value);
  };

  const searchBookHandler = () => {
    history.push(`/books/${searchItem}`);
    setSearchItem("");
  };

  let bks;
  if (books) {
    bks = books.map((el) => (
      <Book
        key={el.id}
        el={el}
        onClick={() => {
          history.push(`/books/details/${el.id}`);
        }}
      />
    ));
  }
  return (
    <section id="books" className="search page">
      <label htmlFor="booksSearch" className="search__searchBar--label">
        <input
          id="booksSearch"
          type="search"
          className="search__searchBar--input"
          placeholder="Search by Author/Title"
          value={searchItem}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              searchBookHandler();
            }
          }}
          onChange={(e) => updateSearchHandler(e)}
        />
      </label>
      <h1 className="search__intro">For the love of... books!</h1>
      <div className="card--wrapper">
        {!!books && bks}
        {isLoading && <Spinner />}
      </div>
    </section>
  );
}
