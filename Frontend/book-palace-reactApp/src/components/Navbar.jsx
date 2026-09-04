import React, { useContext,useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { toast } from "react-toastify";
import axios from "axios";

const Navbar = () => {
  const[search,setSearch]=useState('');
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchVal,setSearchParam]=useSearchParams();

  async function logout() {
    try {
      let response = await axios.get(
        "http://localhost:5000/user/logout",
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("logout", Date.now());
      toast.success(response.data.message);
      setUser(null);
      navigate("/books");
    } catch (err) {
      console.log(err.message);
    }
  }

  const searchBook=()=>{
    setSearchParam({search:search})
  }

  const handleSearchChange=(e)=>{
    setSearch(e.target.value);
  }


  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
      <div className="container">

        {/* Brand */}
        <Link
          className="navbar-brand fw-bold fs-4"
          to="/books"
        >
          <i className="fa-solid fa-book text-dark me-2"></i>
          BooksPalace
        </Link>

        {/* Search */}
        <div className="flex-grow-1 mx-lg-5 mx-3 d-flex">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search books..."
              value={search}
              onChange={handleSearchChange}
            />

            <button className="btn btn-dark" onClick={searchBook}>
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
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
           <li className="nav-item">
              <Link
                className="nav-link fw-medium"
                to="/books/addFavourite"
              >
                My Favourite Books
              </Link>
            </li>
           
            {/* Add Book */}
            <li className="nav-item">
              <Link
                className="nav-link fw-medium"
                to="/books/add"
              >
                Add Book
              </Link>
            </li>

            {/* User */}
            <li className="nav-item">

              {user ? (

                <div className="dropdown">

                  {/* Profile Image */}
                  <img
                    src="https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w="
                    alt="Profile"
                    className="profile-img"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />

                  {/* Profile Dropdown */}
                  <ul className="dropdown-menu dropdown-menu-end">

                    {/* My Books */}
                    <li>
                      <Link
                        className="dropdown-item"
                        to="books/mybooks"
                      >
                        <i className="bi bi-book me-2"></i>
                        My Added Books
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    {/* Logout */}
                    <li>
                      <button
                        type="button"
                        className="dropdown-item text-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                      >
                        <i className="bi bi-box-arrow-right me-2"></i>
                        Logout
                      </button>
                    </li>

                  </ul>

                  {/* Logout Modal */}
                  <div
                    className="modal fade"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex="-1"
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">

                        {/* Modal Header */}
                        <div className="modal-header">

                          <h1
                            className="modal-title fs-5"
                            id="staticBackdropLabel"
                          >
                            Logout
                          </h1>

                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>

                        </div>

                        {/* Modal Body */}
                        <div className="modal-body">
                          Are you sure you want to logout?
                        </div>

                        {/* Modal Footer */}
                        <div className="modal-footer">

                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>

                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={logout}
                            data-bs-dismiss="modal"
                          >
                            Logout
                          </button>

                        </div>

                      </div>
                    </div>
                  </div>

                </div>

              ) : (

                /* Login / Signup */
                <Link to="/user/login">
                  <button className="btn btn-dark px-3">
                    Login / Signup
                  </button>
                </Link>

              )}

            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;