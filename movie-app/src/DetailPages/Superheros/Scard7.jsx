import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard7 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Thor</h1>
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
          <p className="details-description rating">Rating : 4.8 / 5</p>
          <p className="details-description">
            Thor is a superhero film based on the Marvel Comics character Thor,
            the Norse God of Thunder. Produced by Marvel Studios and directed by
            Kenneth Branagh, the film was released in 2011 and is part of the
            Marvel Cinematic Universe (MCU), marking Thor’s first solo
            appearance on screen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard7;
