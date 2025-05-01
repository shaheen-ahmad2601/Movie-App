import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card4 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://i.etsystatic.com/13325275/r/il/9cec30/3393446498/il_570xN.3393446498_ezqg.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Drive</h1>
          <Link to="/video4">
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
          <p className="details-description rating">Rating : 4.3 / 5</p>
          <p className="details-description">
            Drive is a neo-noir action drama film starring Hollywood actor Ryan
            Gosling in the lead role as a silent and skilled getaway driver. Set
            against the backdrop of Los Angeles' criminal underworld, the movie
            revolves around heists, betrayal, and violent retribution. The story
            showcases how the mysterious driver gets entangled in a deadly job
            gone wrong while trying to protect his neighbor and her son, forcing
            him to confront ruthless gangsters and embrace his dark instincts in
            a fight for survival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card4;
