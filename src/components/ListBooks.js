import React, { Component } from "react";
import { Link } from "react-router-dom";

import ListBooksShelf from "./ListBooksShelf";

class ListBooks extends React.Component {
  render() {

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <ListBooksShelf
                books={this.props.books}
                title="Currently Reading"
                shelf="currentlyReading"
                bookUpdate={this.props.bookUpdate}
            />
            <ListBooksShelf
                books={this.props.books}
                title="Want to read"
                shelf="wantToRead"
                bookUpdate={this.props.bookUpdate}
            />
            <ListBooksShelf
                books={this.props.books}
                title="Read"
                shelf="read"
                bookUpdate={this.props.bookUpdate}                
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  };
};

export default ListBooks;