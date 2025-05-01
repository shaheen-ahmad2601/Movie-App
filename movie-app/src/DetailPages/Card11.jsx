import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card11 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Bloody Daddy</h1>
          <Link to="/video11">
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
          <p className="details-description rating">Rating : 4.2 / 5</p>
          <p className="details-description">
            Bloody Daddy is an upcoming Indian action thriller film starring
            Shahid Kapoor in the lead role. Directed by Ali Abbas Zafar, the
            film follows the story of a man caught in a deadly and high-stakes
            situation involving crime, betrayal, and survival. Shahid Kapoor
            plays a father who finds himself entangled in a dangerous underworld
            conflict after a series of unexpected events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card11;
