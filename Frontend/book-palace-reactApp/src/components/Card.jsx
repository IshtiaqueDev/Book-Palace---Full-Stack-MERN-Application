import React from "react";

const Card = () => {
  return (
    <div
      className="card border-0 custom-card shadow-sm rounded-4 overflow-hidden h-100"
      style={{ width: "100%", transition: "0.3s ease" }}
    >
      <img
        src="https://images.squarespace-cdn.com/content/v1/59c82ac46f4ca30b86d179bf/1706362642426-BI3J8PJ5LRJNO8H7WFV4/119.bookreview.AtomicHabits.jpg"
        className="card-img-top"
        alt="Atomic Habits"
        style={{
          height: "260px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">

        <h5 className="card-title fw-bold mb-1">
          Atomic Habits
        </h5>

        <p className="text-secondary mb-3">
          James Clear
        </p>

           <span className="badge bg-warning text-dark align-self-start mb-2">
          Self Development
        </span>
  
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="fw-semibold">
            ⭐ 4.8
          </span>

          <span className="text-muted">
            12k Reviews
          </span>
        </div>

        <button className="btn btn-dark mt-auto rounded-3">
          View Details
        </button>

      </div>
    </div>
  );
};

export default Card;