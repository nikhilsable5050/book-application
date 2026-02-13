📚 Book Management System – Full Stack CRUD App

A full-stack Book Management System built using Spring Boot and React that performs complete CRUD (Create, Read, Update, Delete) operations on books.

This project demonstrates:

RESTful API design

Spring Boot layered architecture

Full-stack integration (React + Spring Boot)

Controller → Service → Repository flow

Proper HTTP methods & responses

🚀 Features

➕ Add a new book

📚 View all books

🔍 Search books

✏️ Update existing books

❌ Delete books

🌙 Dark themed dashboard UI

📦 RESTful API design

🧱 Layered backend architecture

🛠️ Tech Stack
Backend

Java

Spring Boot

Spring Web

Spring Data JPA

Hibernate

MySQL

Maven

Frontend

React

Axios

CSS Dashboard UI

Tools

Postman

Git & GitHub

VS Code / IntelliJ

📂 Project Structure
book-application
│
├── backend        → Spring Boot API
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── resources
│
└── frontend       → React UI
    ├── src
    └── public

⚙️ How to Run the Project
1️⃣ Clone Repository
git clone https://github.com/nikhilsable5050/book-application.git

2️⃣ Run Backend

Open backend folder in IntelliJ:

backend/


Run:

BookApplication.java


Backend runs on:

http://localhost:8080

3️⃣ Run Frontend

Open frontend folder in VS Code:

frontend/


Run:

npm install
npm start


Frontend runs on:

http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
POST	/book/v1/addBook	Add book
GET	/book/v1/books	Get all books
GET	/book/v1/getBook/{title}	Get book
PUT	/book/v1/updateBook	Update book
DELETE	/book/v1/deleteBook/{id}	Delete book


👨‍💻 Author

Nikhil Sable
