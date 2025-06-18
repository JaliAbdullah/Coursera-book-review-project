const axios = require('axios');

// Task 10 - Get all books (Async/Await)
async function getAllBooks() {
  try {
    const res = await axios.get('http://localhost:3000/books');
    console.log("Books:", res.data);
  } catch (err) {
    console.error("Error fetching all books:", err.message);
  }
}

// Task 11 - Get book by ISBN (Promise)
function getBookByISBN(isbn) {
  axios.get(`http://localhost:3000/isbn/${isbn}`)
    .then(res => console.log("Book by ISBN:", res.data))
    .catch(err => console.error("Book not found."));
}

// Task 12 - Get books by author (Async/Await)
async function getBooksByAuthor(author) {
  try {
    const res = await axios.get(`http://localhost:3000/author/${author}`);
    console.log("Books by Author:", res.data);
  } catch (err) {
    console.error("Error fetching books by author:", err.message);
  }
}

// Task 13 - Get books by title (Async/Await)
async function getBooksByTitle(title) {
  try {
    const res = await axios.get(`http://localhost:3000/title/${title}`);
    console.log("Books by Title:", res.data);
  } catch (err) {
    console.error("Error fetching books by title:", err.message);
  }
}

// Run all tasks
getAllBooks();
getBookByISBN("9781982185824");
getBooksByAuthor("James Clear");
getBooksByTitle("Atomic Habits");
