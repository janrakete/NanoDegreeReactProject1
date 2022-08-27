import React from "react";

import * as BooksAPI from "../BooksAPI";

class DetailBook extends React.Component {

  bookUpdateStart = (event) => {
    this.props.bookUpdate(this.props.book, event.target.value);
  }

  render() {
    console.log(this.props.book);

    var bookAuthors = '';
    if (this.props.book.authors) {
      if (this.props.book.authors.length > 1) {
        bookAuthors = this.props.book.authors.join(', '); 
      }
      else {
        bookAuthors = this.props.book.authors
      }
    }

    var bookImage = '';
    if (this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail)
      bookImage = this.props.book.imageLinks.smallThumbnail;


    var bookShelf = 'none';
    if (this.props.book.shelf) {
      bookShelf = this.props.book.shelf;
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
              <select defaultValue={bookShelf} onChange={this.bookUpdateStart} >
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
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{bookAuthors}</div>
        </div>
      </li>

    );
  };
};

export default DetailBook;