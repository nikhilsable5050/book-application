import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [search, setSearch] = useState("");

  const API = "http://localhost:8080/book/v1";

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    setFilteredBooks(
      books.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, books]);

  const fetchBooks = async () => {
    const res = await axios.get(`${API}/books`);
    setBooks(res.data);
    setFilteredBooks(res.data);
  };

  const addBook = async () => {
    if (!title || !author || !genre) return;

    await axios.post(`${API}/addBook`, {
      title,
      author,
      genre,
    });

    setTitle("");
    setAuthor("");
    setGenre("");

    fetchBooks();
  };

  const deleteBook = async (id) => {
    await axios.delete(`${API}/deleteBook/${id}`);
    fetchBooks();
  };

  return (
    <div className="container">
      <h2 className="title">📚 Book Dashboard</h2>

      <div className="stats">
        Total Books: {books.length}
      </div>

      <input
        className="search"
        placeholder="Search book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="form">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <button className="add-btn" onClick={addBook}>
          Add Book
        </button>
      </div>

      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-item">
            <span>
              <b>{book.title}</b> — {book.author} ({book.genre})
            </span>

            <button
              className="delete-btn"
              onClick={() => deleteBook(book.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
