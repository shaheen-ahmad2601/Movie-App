import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card8 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8F3Z2O5xIKEpGbdNp-8rT4oSW9aK17HJ7A&s"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Battle Game II</h1>
          <Link to="/video8">
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
              }}
            >
              Play Now
            </button>
          </Link>
          <p className="details-description rating">Rating : 3.6 / 5</p>
          <p className="details-description">
            Crouching Tiger, Hidden Dragon is a critically acclaimed Chinese
            martial arts film directed by Ang Lee, starring Chow Yun-fat,
            Michelle Yeoh, and Zhang Ziyi. Set in ancient China, the movie
            combines breathtaking martial arts choreography with a compelling
            story of love, honor, and betrayal. The plot revolves around a
            stolen legendary sword, Green Destiny, and the efforts of a renowned
            warrior and a young woman to retrieve it, while
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card8;
