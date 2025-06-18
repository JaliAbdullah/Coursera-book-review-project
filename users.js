const users = [];

const registerUser = (username, password) => {
  users.push({ username, password });
};

const isValidUser = (username, password) => {
  return users.some(user => user.username === username && user.password === password);
};

module.exports = { users, registerUser, isValidUser };
