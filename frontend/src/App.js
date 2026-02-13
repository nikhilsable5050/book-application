import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const API = "http://localhost:8080/book/v1";

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await axios.get(`${API}/books`);
    setBooks(res.data);
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
    <div style={{ padding: 30, maxWidth: 600, margin: "auto" }}>
      <h2>📚 Book Manager</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ marginLeft: 10 }}
        />
        <input
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          style={{ marginLeft: 10 }}
        />

        <button onClick={addBook} style={{ marginLeft: 10 }}>
          Add Book
        </button>
      </div>

      <h3>Book List</h3>

      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ marginBottom: 8 }}>
            <b>{book.title}</b> — {book.author} ({book.genre})
            <button
              onClick={() => deleteBook(book.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
