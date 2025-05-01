import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard4 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://store-images.s-microsoft.com/image/apps.31741.14598622000073877.3bab7f53-d2c8-4439-bb2e-b71edc585766.9ed2d8d9-cb15-472b-b611-0a2421af7cc3?mode=scale&q=90&h=300&w=300"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Venom</h1>
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
          <p className="details-description rating">Rating : 4 / 5</p>
          <p className="details-description">
            Venom is a science-fiction action thriller based on the Marvel
            Comics character Venom, one of Spider-Man’s most iconic and complex
            foes. Directed by Ruben Fleischer and produced by Sony Pictures, the
            film is part of Sony’s Spider-Man Universe (SSU), though it exists
            separately from the Marvel Cinematic Universe (MCU).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard4;
