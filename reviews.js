const books = require('./data');

const addOrModifyReview = (isbn, username, review) => {
  if (!books[isbn]) return false;
  books[isbn].reviews[username] = review;
  return true;
};

const deleteReview = (isbn, username) => {
  if (!books[isbn] || !books[isbn].reviews[username]) return false;
  delete books[isbn].reviews[username];
  return true;
};

module.exports = { addOrModifyReview, deleteReview };
