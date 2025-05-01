import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card2 = () => {
  return (
    <div className="details-page">
     
     <div className="details-container">
     <div>
        <img
          src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/79/38/51/79/38/51/movie_asset_386077ff-1d35-4c3a-9f00-d6d05e2303c8.jpg?format=webp"
          alt="g20-pic"
          className="details-image"
        />
      </div>
      <div className="details-content">
        <h1 className="details-title">Gladiator</h1>
        <Link to="/video2">
        <button
          type="button"
          style={{
            position:"relative",
            left:"120px",
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
        <p className="details-description rating">Rating : 4.5 / 5</p>
        <p className="details-description">
        Gladiator is an epic historical action drama film starring Hollywood actor Russell Crowe in the lead role as a Roman general turned slave. Set against the backdrop of Ancient Rome, the movie revolves around betrayal, vengeance, and intense arena battles. The story showcases how the fallen general rises as a gladiator, earning fame and fighting for justice while challenging a corrupt emperor and seeking to honor his murdered family.
        </p>
      </div>
     </div>
    </div>
  );
};

export default Card2;