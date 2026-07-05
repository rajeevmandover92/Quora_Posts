# Quora Posts

A simple Quora-inspired CRUD web application built using **Node.js**, **Express.js**, and **EJS**. Users can create, view, edit, and delete posts through a clean and simple interface.

## Live Demo

🔗 https://quora-posts-0oaq.onrender.com/posts

## Preview

(Add a screenshot of your project here)

---

## Features

- Create a new post
- View all posts
- View post details
- Edit existing posts
- Delete posts
- Clean and responsive UI
- Server-side rendering with EJS

---

## Tech Stack

- Node.js
- Express.js
- EJS
- HTML5
- CSS3
- UUID
- Method Override

---

## Project Structure

```
Quora_Posts/
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── show.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/rajeevmandover92/Quora_Posts.git
```

Move into the project folder:

```bash
cd Quora_Posts
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

or

```bash
nodemon index.js
```

Open your browser and visit:

```
http://localhost:3000/posts
```

---

## Routes

| Method | Route | Description |
|---------|-------|-------------|
| GET | `/posts` | View all posts |
| GET | `/posts/new` | Create post page |
| POST | `/posts` | Add a new post |
| GET | `/posts/:id` | View post details |
| GET | `/posts/:id/edit` | Edit post page |
| PATCH | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |

---

## Future Improvements

- MongoDB integration
- User authentication
- User profiles
- Image uploads
- Like and comment system
- Search functionality

---

## Author

**Rajeev Mandover**

GitHub: https://github.com/rajeevmandover92

---

⭐ If you found this project helpful, consider giving it a star!
