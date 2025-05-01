import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card7 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/89/32/18/89/32/19/movie_asset_9acb2f9a-ed04-4065-8f66-429b74ef8b1b.jpg?format=webp"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Long Gone Heroes</h1>
          <Link to="/video7">
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
          <p className="details-description rating">Rating : 4.4 / 5</p>
          <p className="details-description">
            Long Gone Heroes is an upcoming American war action film starring
            Guy Pearce and Ben Kingsley in key roles as elite military
            operatives. Set against the backdrop of a covert mission in a
            war-torn region, the movie revolves around betrayal, hidden agendas,
            and moral conflict. The story showcases how a group of special
            forces soldiers is sent on a dangerous operation to eliminate a
            warlord, but things take a dark turn when truths about their mission
            begin to unfold, forcing them to question loyalty, honor, and
            survival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card7;
