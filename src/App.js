import "./App.css";
import React from "react";
import {useEffect, useState} from 'react';
import { Route, Routes, BrowserRouter  } from "react-router-dom";

import ListBooks from "./components/ListBooks";
import ListSearch from "./components/ListSearch";

import * as BooksAPI from "./BooksAPI";

function App() {

  const [books, booksGetAll] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {booksGetAll(books)});
  }, []);

  const booksUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => { 
      BooksAPI.getAll().then((books) => {booksGetAll(books)});
    }) ;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<ListBooks books={books} bookUpdate={booksUpdate} />} />
          <Route path="/search" element={<ListSearch books={books} bookUpdate={booksUpdate} />} />
        </Routes>
      </div>
    </BrowserRouter>
    )
  }

export default App;