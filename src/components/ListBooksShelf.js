import React, { Component } from "react";
import DetailBook from "./DetailBook";

class ListBooksShelf extends React.Component {
  render() {

    const booksFiltered = this.props.books.filter(book => book.shelf == this.props.shelf);

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {booksFiltered.map((book, index) =>
            <DetailBook
                key={index}
                book={book}
                bookUpdate={this.props.bookUpdate}                
            />)}
          </ol>
        </div>
      </div>
    );
  };
};

export default ListBooksShelf;