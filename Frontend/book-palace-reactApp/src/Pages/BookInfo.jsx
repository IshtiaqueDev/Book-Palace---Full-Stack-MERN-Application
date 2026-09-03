import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserProvider";
import Reviews from "../components/Reviews";
import { ReviewCards } from "../components/ReviewCards";

const BookInfo = () => {
  const [relatedBooks, setRelatedBooks] = useState([]);
  const { id } = useParams();
  const [book, setBookInfo] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    findBook();
  }, []);

  const relatedBooksFind = async () => {
    if (!book?.category) return;
    try {
      let response = await axios.get(
        `https://book-palace-full-stack-mern-application-production-1d9c.up.railway.app/books/relatedbook/${book.category}`
      );
      setRelatedBooks(response.data.relatedBooks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    relatedBooksFind();
  }, [book]);

  const findBook = async () => {
    try {
      let response = await axios.get(
        `https://book-palace-full-stack-mern-application-production-1d9c.up.railway.app/books/${id}`
      );
      setBookInfo(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async () => {
    try {
      let response = await axios.delete(
        `https://book-palace-full-stack-mern-application-production-1d9c.up.railway.app/books/delete/${book._id}`,
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      navigate("/books");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <div
        className="container py-5 overflow-hidden"
        style={{
          maxWidth: "100%",
        }}
      >
        {book && (
          <div className="row align-items-center g-5 mx-0">
            {/* Book Image */}
            <div className="col-md-5 text-center">
              <div className="p-3">
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="img-fluid rounded shadow"
                  style={{
                    maxHeight: "500px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            {/* Book Information */}
            <div
              className="col-md-7"
              style={{
                minWidth: 0,
                overflowWrap: "anywhere",
              }}
            >
              <div className="p-4">
                <h1
                  className="fw-bold mb-4"
                  style={{
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                  }}
                >
                  {book.title}
                </h1>

                <div className="mb-3">
                  <h5 className="text-muted mb-1">Author:</h5>
                  <p
                    className="fs-5 mb-0"
                    style={{
                      overflowWrap: "anywhere",
                    }}
                  >
                    {book.author}
                  </p>
                </div>
                <hr />
                <div className="mb-3">
                  <h5 className="text-muted mb-1">Category:</h5>
                  <p className="fs-5 mb-0">{book.category}</p>
                </div>
                <div className="mb-4">
                  <h5 className="text-muted mb-2">Description</h5>
                  <p
                    className="text-secondary fs-5"
                    style={{
                      overflowWrap: "anywhere",
                      wordBreak: "break-word",
                    }}
                  >
                    {book.description}
                  </p>
                </div>
                <div className="mb-3">
                  <h5 className="text-muted mb-1">Posted By:</h5>
                  <p className="fs-5 mb-0">
                    {book.postedBy.username}
                  </p>
                </div>
                {user && user._id == book.postedBy._id && (
                  <>
                    <a
                      href={`/books/edit/${book._id}`}
                      className="btn btn-dark px-4"
                    >
                      Edit
                    </a>
                    <span className="mx-2"></span>
                    <button
                      className="btn btn-danger px-4"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Related Books */}
        <div className="m-3">
          <h3>Related Books:</h3>

          <div
            className="d-flex gap-3 overflow-auto"
            style={{
              maxWidth: "100%",
              paddingBottom: "10px",
            }}
          >
            {relatedBooks &&
              relatedBooks.map((el) => (
                <a
                  href={`/books/${el._id}`}
                  key={el._id}
                  className="text-decoration-none text-dark flex-shrink-0"
                >
                  <div
                    className="card"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={el.imageUrl}
                      className="card-img-top"
                      alt={el.title}
                      style={{
                        height: "250px",
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body">
                      <h5 className="card-title text-truncate">
                        {el.title}
                      </h5>
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>

      <Reviews id={id} />

      <ReviewCards id={id} />
    </>
  );
};

export default BookInfo;