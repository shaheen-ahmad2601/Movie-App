import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card3 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://resizing.flixster.com/EmRtLlgMu_k4MbdFU3AH4_CBLko=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4ZDNjMTVmLTg3NDAtNDVmMS04NDI5LTQwNGM0YjIwYTQ5ZS5qcGc="
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">In The Lost Lands</h1>
          <Link to="/video3">
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
          <p className="details-description rating">Rating : 4.1 / 5</p>
          <p className="details-description">
            In the Lost Lands is an upcoming epic fantasy adventure film
            starring Milla Jovovich in the lead role as a powerful sorceress
            named Gray Alys. Set in a mystical realm filled with magic, beasts,
            and treachery, the movie revolves around a queen’s desperate quest,
            dark bargains, and dangerous journeys. The story showcases how the
            mysterious sorceress embarks on a perilous mission through forbidden
            lands, facing mythical creatures and moral choices, as she seeks to
            fulfill a prophecy and claim her destiny.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
