// ==== server.js ====
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const books = require('./data');
const { registerUser, isValidUser } = require('./users');
const { addOrModifyReview, deleteReview } = require('./reviews');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Task 1 - Get all books
app.get('/books', (req, res) => res.json(books));

// Task 2 - Get book by ISBN
app.get('/isbn/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  if (book) res.json(book);
  else res.status(404).json({ message: "Book not found." });
});

// Task 3 - Get books by author
app.get('/author/:author', (req, res) => {
  const result = Object.values(books).filter(book => book.author === req.params.author);
  res.json(result);
});

// Task 4 - Get books by title
app.get('/title/:title', (req, res) => {
  const result = Object.values(books).filter(book => book.title === req.params.title);
  res.json(result);
});

// Task 5 - Get reviews
app.get('/review/:isbn', (req, res) => {
  const book = books[req.params.isbn];
  if (book) res.json(book.reviews);
  else res.status(404).json({ message: "Book not found." });
});

// Task 6 - Register user
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  registerUser(username, password);
  res.json({ message: "User registered successfully." });
});

// Task 7 - Login user
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (isValidUser(username, password)) {
    res.json({ message: "Login successful." });
  } else {
    res.status(401).json({ message: "Invalid credentials." });
  }
});

// Task 8 - Add/Modify review
app.put('/review/:isbn', (req, res) => {
  const { username, review } = req.body;
  if (addOrModifyReview(req.params.isbn, username, review)) {
    res.json({ message: "Review added/modified." });
  } else {
    res.status(404).json({ message: "Book not found." });
  }
});

// Task 9 - Delete review
app.delete('/review/:isbn/:username', (req, res) => {
  if (deleteReview(req.params.isbn, req.params.username)) {
    res.json({ message: "Review deleted." });
  } else {
    res.status(404).json({ message: "Review not found." });
  }
});

// Start server
app.listen(3000, () => console.log("Server running at http://localhost:3000"));