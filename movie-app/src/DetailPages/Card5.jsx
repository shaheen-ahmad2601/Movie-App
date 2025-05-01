import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card5 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">War</h1>
          <Link to="/video5">
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
          <p className="details-description rating">Rating : 3.9 / 5</p>
          <p className="details-description">
            War is a high-octane Indian action thriller film starring Bollywood
            actors Hrithik Roshan and Tiger Shroff in lead roles as elite
            soldiers. Set against the backdrop of international espionage and
            covert missions, the movie revolves around loyalty, betrayal, and
            intense face-offs. The story showcases how a top intelligence agent
            goes rogue, prompting his former protégé to track him down, leading
            to explosive action sequences, stunning stunts, and a gripping game
            of cat and mouse across the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card5;
