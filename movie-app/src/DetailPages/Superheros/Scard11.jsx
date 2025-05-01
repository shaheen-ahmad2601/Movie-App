import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard11 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://i.ebayimg.com/images/g/WfQAAOSwbAVk4Qqe/s-l1200.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">End Game</h1>
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
          <p className="details-description rating">Rating : 4.9 / 5</p>
          <p className="details-description">
          Avengers: Endgame is the epic conclusion to over a decade of
            storytelling in the Marvel Cinematic Universe (MCU). Directed by
            Anthony and Joe Russo, it is the direct sequel to Avengers: Infinity
            War and marks the 22nd film in the MCU. This movie brings together
            nearly every major Marvel hero for a final showdown against the
            mighty Thanos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard11;
