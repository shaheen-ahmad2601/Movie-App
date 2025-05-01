import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard5 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2018/01/blackpanther_poster_lg.jpg?fit=1688%2C2500&ssl=1"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Panther</h1>
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
          <p className="details-description rating">Rating : 4.2 / 5</p>
          <p className="details-description">
            Black Panther is a groundbreaking superhero film from Marvel
            Studios, directed by Ryan Coogler. It is the 18th film in the Marvel
            Cinematic Universe (MCU) and stands out as a cultural milestone for
            its Afro-futuristic setting, powerful storytelling, and
            predominantly Black cast. The film is based on the Marvel Comics
            character Black Panther, created by Stan Lee and Jack Kirby.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard5;
