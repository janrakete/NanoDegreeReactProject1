import React, { Component } from "react";
import { Link } from "react-router-dom";

import DetailBook from "./DetailBook";

import * as BooksAPI from "../BooksAPI";

class ListSearch extends React.Component {

  state = {
    query: "",
    booksFound: []
  };

  searchBooks = (event) => {
    const query = event.target.value;
    this.setState({ query });
    BooksAPI.search(query).then(books => this.setState({ booksFound : books }));
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onChange={this.searchBooks}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.booksFound && this.state.booksFound.length > 0 ? (

            this.state.booksFound.map((book, index) =>
              <DetailBook
              key={index}
              book={book}
              bookUpdate={this.props.bookUpdate}              
            />)
          ) : (
            <li>No books found</li>
          )}
          </ol>
        </div>
      </div>
    );
  };
};

export default ListSearch;