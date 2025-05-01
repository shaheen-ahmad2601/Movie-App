import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard10 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykMZYevHAZu3R68P0pqyD0p-8mRvW22SJ1NfKqCVs1ZqG0D0eOZUB7RCdpaUR9jdMU5I&usqp=CAU"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Gardian of Galaxy II</h1>
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
          <p className="details-description rating">Rating : 4.3 / 5</p>
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

export default Scard10;
