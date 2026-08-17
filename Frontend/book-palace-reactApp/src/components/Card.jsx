import React from "react";

const Card = ({ book }) => {
  return (
    <div
      className="card border-0 custom-card shadow-sm rounded-4 overflow-hidden h-100"
      style={{
        width: "100%",
        transition: "0.3s ease",
      }}
    >
      {/* Book Image */}
      <img
        src={book.imageUrl}
        className="card-img-top"
        alt={book.title}
        style={{
          height: "260px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column p-3">

        {/* Title */}
        <h5 className="card-title fw-bold mb-1 text-truncate">
          {book.title}
        </h5>

        {/* Author */}
        <p className="text-secondary mb-2">
          By {book.author}
        </p>

        {/* Category */}
        <span className="badge bg-warning text-dark align-self-start rounded-pill px-3 py-2 mb-3">
          {book.category}
        </span>

        {/* Rating & Reviews */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-semibold">
            ⭐ 4.8
          </span>

          <small className="text-muted">
            12k Reviews
          </small>
        </div>

        {/* Button */}
        <form action={`/books/${book._id}`} className="mt-auto">
          <button
            className="btn btn-dark w-100 rounded-3 py-2 fw-semibold"
          >
            View Details
          </button>
        </form>

      </div>
    </div>
  );
};

export default Card;