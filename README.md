# 📚 Book Palace

> A full-stack book management and review platform built with the **MERN stack**, where users can discover books, add listings, manage their books, and share reviews and ratings.

---

## 🌐 Overview

**Book Palace** is a full-stack web application designed to provide a simple and interactive platform for discovering and managing books.

Users can browse available books, view detailed information, add their own books, edit or delete their listings, and share reviews with ratings.

The project was built to practice and demonstrate real-world **MERN stack development**, including REST APIs, authentication, authorization, database relationships, validation, sessions, and responsive frontend development.

---

## ✨ Features

### 📖 Book Management

* Browse all available books
* View detailed information about a book
* Add new books
* Edit existing books
* Delete books
* View related books
* Organize books by categories
* Search and sort books

### ⭐ Reviews & Ratings

* Add reviews to books
* Give books star ratings
* Display user reviews
* Validate review submissions

### 🔐 Authentication & Authorization

* User registration
* User login/logout
* Session-based authentication
* Protected routes
* Authorization for book management
* Users can manage their own book listings

### 🛡️ Backend Security & Validation

* Joi request validation
* Authentication middleware
* Authorization middleware
* Express middleware
* Secure session handling
* Protected API routes

### 🎨 Frontend

* Responsive UI
* React components
* React Router navigation
* Protected frontend routes
* Search functionality
* Sorting and filtering
* Loading states
* Form validation
* Bootstrap-based responsive design

---

## 🛠️ Tech Stack

### Frontend

| Technology   | Purpose             |
| ------------ | ------------------- |
| React.js     | Frontend UI         |
| React Router | Client-side routing |
| Axios        | API requests        |
| Bootstrap    | Responsive UI       |
| JavaScript   | Application logic   |

### Backend

| Technology      | Purpose             |
| --------------- | ------------------- |
| Node.js         | Runtime environment |
| Express.js      | Backend framework   |
| MongoDB         | Database            |
| Mongoose        | MongoDB ODM         |
| Passport.js     | Authentication      |
| Express Session | Session management  |
| Joi             | Data validation     |

---

## 🏗️ Project Architecture

```text
Book Palace
│
├── Frontend
│   ├── React
│   ├── React Router
│   ├── Context API
│   ├── Axios
│   └── Bootstrap
│
└── Backend
    ├── Node.js
    ├── Express.js
    ├── MongoDB
    ├── Mongoose
    ├── Passport.js
    ├── Express Session
    └── Joi Validation
```

---

## 🔄 Application Flow

```text
                 ┌─────────────────┐
                 │      User       │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │  React Frontend │
                 └────────┬────────┘
                          │
                       Axios
                          │
                          ▼
                 ┌─────────────────┐
                 │ Express REST API│
                 └────────┬────────┘
                          │
              ┌───────────┴───────────┐
              ▼                       ▼
      ┌───────────────┐       ┌───────────────┐
      │ Authentication│       │   Validation  │
      │  Passport.js  │       │     Joi       │
      └───────────────┘       └───────────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │     MongoDB     │
                 └─────────────────┘
```

---

## 🔐 Authentication

Book Palace uses **session-based authentication**.

The authentication flow is:

```text
User Login
    ↓
Passport Authentication
    ↓
Session Created
    ↓
Session Cookie Stored
    ↓
Authenticated Requests
    ↓
Protected Resources
```

Authentication is handled on the backend, while the frontend maintains the current user's authentication state.

---

## 📂 Main Concepts Implemented

This project demonstrates several important full-stack development concepts:

* RESTful API design
* CRUD operations
* MVC-style backend structure
* MongoDB database operations
* Mongoose models and relationships
* User authentication
* Authorization
* Express middleware
* Session management
* Joi validation
* Protected API routes
* Protected React routes
* Context API
* Axios API integration
* Search parameters
* Form validation
* Responsive UI
* Error handling

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
```

Move into the project directory:

```bash
cd Book-Palace
```

---

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

---

### 4. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

Add any additional environment variables required by your project.

> ⚠️ Never commit your `.env` file to GitHub.

---

### 5. Start the Backend

```bash
npm start
```

Or, if your project uses nodemon:

```bash
npm run dev
```

---

### 6. Start the Frontend

Inside the frontend directory:

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

---

## 📡 API Overview

The backend provides API endpoints for different resources.

### Books

```text
GET     /books
GET     /books/:id
POST    /books
POST    /books/edit/:id
DELETE  /books/delete/:id
```

### Authentication

```text
POST    /user/signup
POST    /user/login
GET     /user/me
GET     /user/logout
```

### Reviews

```text
POST    /reviews/:id/add
```

> Endpoint names may vary depending on the current backend implementation.

---

## 🗃️ Database Structure

The application uses MongoDB to store application data.

Main entities include:

```text
User
 │
 ├── Books
 │
 └── Reviews

Book
 │
 ├── Author
 ├── Category
 ├── Description
 ├── Image
 ├── Owner
 └── Reviews

Review
 │
 ├── Rating
 ├── Comment
 ├── User
 └── Book
```

---

## 🧪 Testing

During development, API endpoints can be tested using tools such as **Hoppscotch** or Postman.

Example:

```text
GET http://localhost:5000/books
```

For authenticated requests, make sure your session/cookies are correctly maintained.

---

## 📸 Screenshots

> Add screenshots of your application here.

Example:

```text
screenshots/
├── home.png
├── book-details.png
├── login.png
├── signup.png
├── add-book.png
└── reviews.png
```

You can display them in the README using:

```markdown
![Home Page](screenshots/home.png)
```

---

## 🔮 Future Improvements

Some features that can be added in future versions:

* [ ] Advanced book search
* [ ] Better filtering system
* [ ] Pagination
* [ ] User profile pages
* [ ] Wishlist functionality
* [ ] Book favorites
* [ ] Image upload and cloud storage
* [ ] Email verification
* [ ] Password reset
* [ ] Admin dashboard
* [ ] Improved recommendation system
* [ ] Deployment with production database
* [ ] Automated testing

---

## 📚 What I Learned

Building Book Palace helped me understand how a real-world full-stack application works from frontend to backend.

Key learning areas include:

* Connecting React with an Express backend
* Building REST APIs
* Working with MongoDB and Mongoose
* Implementing authentication using Passport
* Managing sessions and cookies
* Protecting backend routes
* Creating reusable React components
* Managing authentication state with Context API
* Handling API errors
* Validating incoming data with Joi
* Working with Git and GitHub
* Structuring a full-stack application

---

## 👨‍💻 Author

**Ishtiaque Dev**

Computer Science Student & Full-Stack Developer

GitHub: **[IshtiaqueDev](https://github.com/IshtiaqueDev)**

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and development purposes.
