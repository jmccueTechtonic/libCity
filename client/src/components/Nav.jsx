import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import '../styles/index.scss';

export default function Nav() {
  const history = useHistory();
  const [searchItem, setSearchItem] = useState('');
  const [showCurtain, setShowCurtain] = useState(false);

  const updateSearchHandler = (e) => {
    const { value } = e.target;
    setSearchItem(value);
  };

  const searchBookHandler = () => {
    history.push(`/books/${searchItem.trim()}`);
    setSearchItem('');
  };

  const toggleShowCurtain = () => {
    setShowCurtain(!showCurtain);
  };
  return (
    <nav data-cy='navBar' className='nav'>
      <h1 className='nav__link nav__title'>Library City</h1>
      <ul className={`nav__nav-list ${showCurtain ? 'visible' : ''}`}>
        <li className='nav__nav-item'>
          <NavLink
            data-cy='link-home'
            exact
            to='/'
            className='nav__link nav__link--small'
            activeClassName='btn__link'
          >
            Home
          </NavLink>
        </li>
        <li className='nav__nav-item'>
          <NavLink
            data-cy='link-books'
            exact
            to='/books'
            className='nav__link nav__link--small'
            activeClassName='btn__link'
          >
            Bookshelf
          </NavLink>
        </li>
        <li className='nav__nav-item'>
          <NavLink
            data-cy='link-addBook'
            exact
            to='/books/add'
            className='nav__link nav__link--small'
            activeClassName='btn__link'
          >
            Add Book
          </NavLink>
        </li>
        <li className='nav__nav-item'>
          <label htmlFor='search'></label>
          <input
            data-cy='nav-search'
            id='search'
            type='text'
            className='nav__search'
            placeholder='Author / Title'
            value={searchItem}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                searchBookHandler();
              }
            }}
            onChange={(e) => updateSearchHandler(e)}
          />
        </li>
        <li className='nav__nav-item'>
          <button
            data-cy='nav-searchBtn'
            onClick={() => searchBookHandler()}
            className='nav__btn'
          >
            Search
          </button>
        </li>
      </ul>
      <span
        data-cy='burgerBtn'
        className={`nav__burger-btn ${showCurtain && 'changeBurger'}`}
        onClick={toggleShowCurtain}
      >
        <div className='nav__slice burger1'></div>
        <div className='nav__slice burger2'></div>
        <div className='nav__slice burger3'></div>
      </span>
    </nav>
  );
}
