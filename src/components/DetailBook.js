import React from "react";
import PropTypes from 'prop-types';

function DetailBook(props) {

  const bookUpdateStart = (event) => {
    props.bookUpdate(props.book, event.target.value);
  }

  var bookAuthors = '';
  if (props.book.authors) {
    if (props.book.authors.length > 1) {
      bookAuthors = props.book.authors.join(', '); 
    }
    else {
      bookAuthors = props.book.authors
    }
  }

  var bookImage = '';
  if (props.book.imageLinks && props.book.imageLinks.smallThumbnail)
    bookImage = props.book.imageLinks.smallThumbnail;

  var bookShelf = 'none';
  if (props.book.shelf) {
    bookShelf = props.book.shelf;
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: 'url(' + bookImage + ')'
            }}
          ></div>
          <div className="book-shelf-changer">
            <select defaultValue={bookShelf} onChange={bookUpdateStart} >
              <option value="" disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    </li>

  );
};

DetailBook.propTypes = {
  book: PropTypes.object.isRequired,
  bookUpdate: PropTypes.func.isRequired
};

export default DetailBook;