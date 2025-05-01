// MovieDetails.js
import React from "react";
import { Link } from "react-router-dom";
import "./Card1.css"; // You can rename it to MovieDetails.css for clarity

const MovieDetails = ({ image, title, videoLink, rating, description }) => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img src={image} alt={title} className="details-image" />
        </div>
        <div className="details-content">
          <h1 className="details-title">{title}</h1>
          <Link to={videoLink}>
            <button
              type="button"
              style={{
                position: "relative",
                left: "120px",
                padding: "0.6rem 1.2rem",
                backgroundColor: "white",
                color: "black",
                border: "none",
                cursor: "pointer",
                width: "50%",
                borderBottom: "8px solid rgb(182, 10, 10)",
                fontWeight: "bold",
              }}
            >
              Play Now
            </button>
          </Link>
          <p className="details-description rating">Rating : {rating}</p>
          <p className="details-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
