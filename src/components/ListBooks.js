import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import ListBooksShelf from "./ListBooksShelf";

function ListBooks(props)
{
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <ListBooksShelf
              books={props.books}
              title="Currently Reading"
              shelf="currentlyReading"
              bookUpdate={props.bookUpdate}
          />
          <ListBooksShelf
              books={props.books}
              title="Want to read"
              shelf="wantToRead"
              bookUpdate={props.bookUpdate}
          />
          <ListBooksShelf
              books={props.books}
              title="Read"
              shelf="read"
              bookUpdate={props.bookUpdate}                
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  bookUpdate: PropTypes.func.isRequired
};

export default ListBooks;