import React from "react";

const Card = ({ book }) => {
  const imageSrc = book?.image?.url || book?.imageUrl || "https://placehold.co/600x900?text=Book+Cover";

  return (
    <>
    <a href={`/books/${book._id}`} className="text-reset text-decoration-none">
          <div
      className="card border-0 custom-card shadow-sm rounded-4 overflow-hidden h-100"
      style={{
        width: "100%",
        transition: "0.3s ease",
      }}
    >
      {/* Book Image */}
      <img
        src={imageSrc}
        className="card-img-top"
        alt={book.title}
        style={{
          width:"100%",
          height: "280px",
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
        <span className="d-flex justify-content-between">
        <span className="badge bg-warning text-dark align-self-start rounded-pill px-3 py-2 mb-3">
          {book.category}
        </span>
        <button className="btn">
          <i className="fa-regular fa-heart fs-4"></i>
        </button>
        </span>
        
        {/* Rating & Reviews */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-semibold">
            ⭐
          </span>

          <small className="text-muted">
            View in Detail 
          </small>
        </div>

        {/* Button */}
        {/* <form action={`/books/${book._id}`} className="mt-auto">
          <button
            className="btn btn-dark w-100 rounded-3 py-2 fw-semibold"
          >
            View Details
          </button>
        </form> */}

      </div>
    </div>
    </a>
    </>
  );
};

export default Card;