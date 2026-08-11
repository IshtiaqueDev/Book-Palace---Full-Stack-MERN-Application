import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
  <div className="container">

    {/* Brand */}
    <a className="navbar-brand fw-bold fs-4" href="/books">
      <i className="fa-solid fa-book text-dark me-2"></i>
      BooksPalace
    </a>

    {/* Search */}
    <div className="flex-grow-1 mx-lg-5 mx-3 d-flex">
     <div className="input-group">
    <input
      type="text"
      className="form-control"
      placeholder="Search books..."
    />

    <button className="btn btn-dark">
      Search
    </button>
  </div>
    </div>

    {/* Hamburger */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menu */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">

        <li className="nav-item">
          <a className="nav-link fw-medium" href="/books/add">
            Add Book
          </a>
        </li>

        <li className="nav-item">
        <a href="/login">
          <button className="btn btn-dark px-3">
            Login  / Signup
          </button>
          </a>
        </li>

      </ul>
    </div>

  </div>  
</nav>  )
}

export default Navbar