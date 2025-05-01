import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard8 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Iron Man</h1>
          <Link to="/video1">
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
          <p className="details-description rating">Rating : 4.6 / 5</p>
          <p className="details-description">
            Iron Man is the first film in the Marvel Cinematic Universe (MCU)
            and launched the modern era of superhero movies. Directed by Jon
            Favreau and starring Robert Downey Jr. as Tony Stark, it was
            released in 2008 and became a massive critical and commercial
            success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard8;
