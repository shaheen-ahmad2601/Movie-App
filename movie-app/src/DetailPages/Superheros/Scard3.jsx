import React from "react";
import "./Scard1.css";
import { Link } from "react-router-dom";

const Scard3 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://img.buzzfeed.com/buzzfeed-static/static/2022-02/15/19/asset/0927721cc615/sub-buzz-558-1644955047-9.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Batman</h1>
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
          <p className="details-description rating">Rating : 4.1 / 5</p>
          <p className="details-description">
            Batman, also known as Bruce Wayne, is a fictional superhero created
            by Bob Kane and Bill Finger for DC Comics. Unlike most superheroes,
            Batman has no superpowers—instead, he relies on his intellect,
            detective skills, martial arts expertise, and an arsenal of
            high-tech gadgets. His character is defined by a dark, brooding
            persona and a relentless pursuit of justice in the corrupt city of
            Gotham.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Scard3;
