import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard2 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://cdn.kobo.com/book-images/179c31cf-2bc9-4f86-9fff-d45786ebf912/353/569/90/False/marvel-s-avengers-1.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Avengers</h1>
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
          <p className="details-description rating">Rating : 4.4 / 5</p>
          <p className="details-description">
            The Avengers (2012) – Movie Description Marvel’s The Avengers (also
            known as Avengers Assemble in some regions) is a landmark superhero
            film that brings together some of Marvel’s most iconic characters
            into one action-packed ensemble. Directed by Joss Whedon and
            produced by Marvel Studios, it marks the sixth film in the Marvel
            Cinematic Universe (MCU) and the epic culmination of the MCU's
            "Phase One."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard2;
