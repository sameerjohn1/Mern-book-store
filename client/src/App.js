import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import About from "./components/Book/About";
import BookDetail from "./components/Book/BookDetail";
import Books from "./components/Book/Books";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddBook />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/books/:id" element={<BookDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
