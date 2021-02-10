import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import shortid from "shortid";

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
        if (search) {
          search = "/search?q=" + search.trim().split(" ").join("+");
        } else {
          search = "";
        }
        setIsLoading(true);
        let res = await axios.get(`http://localhost:9009/api/books${search}`);
        setBooks(res.data.books);
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
        {books.length > 0 &&
          books.map((el) => (
            <Book
              key={shortid.generate()}
              el={el}
              onClick={() => {
                history.push(`/books/details/${el.book_id}`);
              }}
            />
          ))}
        {isLoading && <Spinner />}
      </div>
    </section>
  );
}
