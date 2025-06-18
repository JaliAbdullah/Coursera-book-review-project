# 📚 Coursera Book Review Project

This is the final project for the Full Stack Software Developer course on Coursera. It demonstrates a basic Node.js backend for managing a book review system, including API endpoints and a client using Axios.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- Axios
- JavaScript (ES6+)
- Git & GitHub
- Postman (for testing)

---

## 🚀 Features by Task

### ✅ General Users
| Task | Description                             | Endpoint                             |
|------|-----------------------------------------|--------------------------------------|
| 1    | Get the book list                       | `GET /books`                         |
| 2    | Get books based on ISBN                 | `GET /isbn/:isbn`                    |
| 3    | Get all books by author                 | `GET /author/:author`                |
| 4    | Get all books based on title            | `GET /title/:title`                  |
| 5    | Get book review by ISBN                 | `GET /review/:isbn`                  |
| 6    | Register new user                       | `POST /register`                     |
| 7    | Login as registered user                | `POST /login`                        |

### ✅ Registered Users
| Task | Description                             | Endpoint                             |
|------|-----------------------------------------|--------------------------------------|
| 8    | Add or modify book review               | `PUT /review/:isbn`                  |
| 9    | Delete user's book review               | `DELETE /review/:isbn/:username`     |

---

## 🧪 Node.js Client Methods (Tasks 10–13)

You can run `client.js` to test various Axios requests:

| Task | Description                             | Method Used     |
|------|-----------------------------------------|-----------------|
| 10   | Get all books                           | async/await     |
| 11   | Get book by ISBN                        | Promises        |
| 12   | Get books by author                     | async/await     |
| 13   | Get books by title                      | async/await     |

Run using:

```bash
node client.js
