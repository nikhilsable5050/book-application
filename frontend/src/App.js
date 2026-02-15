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
  const [editingId, setEditingId] = useState(null);

  console.log("API URL:", process.env.REACT_APP_API_URL);

const API =
  (process.env.REACT_APP_API_URL || "http://localhost:8080") +
  "/book/v1";

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

    clearForm();
    fetchBooks();
  };

  const updateBook = async () => {
    await axios.patch(`${API}/updateBook/${editingId}`, {
      title,
      author,
      genre,
    });

    clearForm();
    fetchBooks();
  };

  const editBook = (book) => {
    setTitle(book.title);
    setAuthor(book.author);
    setGenre(book.genre);
    setEditingId(book.id);
  };

  const deleteBook = async (id) => {
    await axios.delete(`${API}/deleteBook/${id}`);
    fetchBooks();
  };

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setGenre("");
    setEditingId(null);
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

        {editingId ? (
          <button className="add-btn" onClick={updateBook}>
            Update Book
          </button>
        ) : (
          <button className="add-btn" onClick={addBook}>
            Add Book
          </button>
        )}
      </div>

      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <div key={book.id} className="book-item">
            <span>
              <b>{index + 1}.</b> <b>{book.title}</b> — {book.author} ({book.genre})
            </span>

            <div>
              <button
                className="add-btn"
                onClick={() => editBook(book)}
                style={{ marginRight: 8 }}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteBook(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
