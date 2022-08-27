import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter  } from "react-router-dom";

import ListBooks from "./components/ListBooks";
import ListSearch from "./components/ListSearch";

import * as BooksAPI from "./BooksAPI";

class App extends React.Component {

  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  bookUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => { 
      BooksAPI.getAll().then(books => this.setState({ books }));
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" exact element={<ListBooks books={this.state.books} bookUpdate={this.bookUpdate} />} />
            <Route path="/search" element={<ListSearch books={this.state.books} bookUpdate={this.bookUpdate} />} />
          </Routes>
        </div>
      </BrowserRouter>
      )
    }
  }

export default App;