import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard9 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/l12h1u80/poster/o/l/w/small-baby-groot-multicolour-photo-paper-print-poster-original-imagcqfvtcacwe9f.jpeg?q=20&crop=false"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Gardian of Galaxy</h1>
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
            Guardians of the Galaxy is a bold, space-faring superhero film from
            Marvel Studios, directed by James Gunn. Unlike traditional Marvel
            stories centered on Earth, this movie dives into the cosmic side of
            the Marvel Universe and introduces a group of unlikely misfits who
            band together to save the galaxy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard9;
