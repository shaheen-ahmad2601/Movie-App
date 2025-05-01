import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard1 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://assets.vogue.in/photos/5d4bf42a60869300083bf669/master/w_1600%2Cc_limit/Captain%2520Marvel.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Captain America</h1>
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
            Captain America: The First Avenger (2011) – Movie Description
            Captain America: The First Avenger is a superhero film based on the
            Marvel Comics character Captain America, produced by Marvel Studios
            and released by Paramount Pictures. Directed by Joe Johnston, the
            movie is set during World War II and serves as the fifth installment
            in the Marvel Cinematic Universe (MCU)..
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard1;
