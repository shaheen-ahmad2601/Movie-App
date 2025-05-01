import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card10 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://qqcdnpictest.mxplay.com/pic/bce7ae02445dad432bdab581e180ceef/en/2x3/312x468/d5f863cd13cc307123989701f8b72fdf_1280x1920.webp"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Jumanji</h1>
          <Link to="/video10">
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
          <p className="details-description rating">Rating : 4.6 / 5</p>
          <p className="details-description">
            Jumanji is a 1995 fantasy adventure film based on the 1981
            children's book of the same name by Chris Van Allsburg. The movie
            stars Robin Williams, Kirsten Dunst, and Bonnie Hunt and is directed
            by Joe Johnston. The story revolves around a magical and dangerous
            board game called Jumanji, which brings wild animals, natural
            disasters, and other perilous events into the real world. When two
            children,
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card10;
