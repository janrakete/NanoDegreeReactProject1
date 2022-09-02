import React from "react";
import PropTypes from 'prop-types';

import DetailBook from "./DetailBook";

function ListBooksShelf(props) {

  const booksFiltered = props.books.filter(book => book.shelf === props.shelf);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {booksFiltered.map((book, index) =>
          <DetailBook
              key={index}
              book={book}
              bookUpdate={props.bookUpdate}                
          />)}
        </ol>
      </div>
    </div>
  );
};

ListBooksShelf.propTypes = {
  books: PropTypes.array.isRequired,
  bookUpdate: PropTypes.func.isRequired
};

export default ListBooksShelf;