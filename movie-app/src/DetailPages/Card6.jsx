import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card6 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://filmfare.wwmindia.com/content/2021/jun/action-bollywood-movies-uri-the-surgical-strike-101624867578.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">URI : The Surgical Strike</h1>
          <Link to="/video6">
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
          <p className="details-description rating">Rating : 4.8 / 5</p>
          <p className="details-description">
            Uri: The Surgical Strike is a patriotic Indian military action film
            starring Vicky Kaushal in the lead role as Major Vihaan Singh
            Shergill, a brave Indian Army officer. Set against the backdrop of
            the 2016 Uri attack, the movie revolves around national security,
            retaliation, and tactical warfare. The story showcases how Indian
            soldiers meticulously plan and execute a covert surgical strike
            across the border to avenge the deadly terrorist attack,
            highlighting themes of valor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card6;
