import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import DetailBook from "./DetailBook";

import {useEffect, useState} from 'react';

import * as BooksAPI from "../BooksAPI";

function ListSearch(props) {

  const [booksFound, booksSearch] = useState([]);

  const searchBooks = (event) => {
    
    var booksFoundWithShelfAdded = [];

    const query = event.target.value;

    BooksAPI.search(query).then((booksFound) => {
      // Check if books were found by API
      if (booksFound.length > 0) {
      
        // Loop through book returned by API
        booksFound.map((bookFound) => {
          console.log(bookFound);

          // Check if there is a book in the shelf which is also returned by the API
          var bookMatch = props.books.find(book => book.id === bookFound.id);

          // If yes, add the correct shelf
          if (bookMatch) {
            console.log("Found this book also in shelf.");
            bookFound.shelf = bookMatch.shelf;
          }
          else 
            bookFound.shelf = "none";

          // Add modified book to the new booksFoundWithShelfAdded array
          booksFoundWithShelfAdded.push(bookFound);
        });
      }
      console.log(booksFoundWithShelfAdded);

      // Return booksFoundWithShelfAdded array
      booksSearch(booksFoundWithShelfAdded);
    });  
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">

          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={searchBooks}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
        {booksFound && booksFound.length > 0 ? (

          booksFound.map((book, index) =>
            <DetailBook
            key={index}
            book={book}
            bookUpdate={props.bookUpdate}              
          />)
        ) : (
          <li>No books found</li>
        )}
        </ol>
      </div>
    </div>
  );
};

ListSearch.propTypes = {
  books: PropTypes.array.isRequired,
  bookUpdate: PropTypes.func.isRequired
};

export default ListSearch;