import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard6 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://resizing.flixster.com/YwMYmeoAnmjnI2fZRXH7vYraxfA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176337_p_v8_am.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Hulk</h1>
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
            The Incredible Hulk is a superhero film based on the Marvel Comics
            character Hulk, produced by Marvel Studios and distributed by
            Universal Pictures. Directed by Louis Leterrier, it is the second
            film in the Marvel Cinematic Universe (MCU) and stars Edward Norton
            as Dr. Bruce Banner, a brilliant scientist with a dangerous secret.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard6;
