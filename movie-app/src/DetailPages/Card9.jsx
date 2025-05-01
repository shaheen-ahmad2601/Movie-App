import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card9 = () => {
  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-sLP21aWNULJgRD86Jbh4hw9f5frbPDqDMEY6xe1TIKn_F1MXmVGL3Wk1kH3qYp-WFs&usqp=CAU"
            alt="g20-pic"
            className="details-image"
          />
        </div>
        <div className="details-content">
          <h1 className="details-title">Carter</h1>
          <Link to="/video9">
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
          <p className="details-description rating">Rating : 4. / 5</p>
          <p className="details-description">
            Carter is a South Korean action thriller film starring Joo Won in
            the lead role. The movie follows the story of Carter, a man who
            wakes up with no memory of his past and is thrust into a deadly
            mission to save a kidnapped American agent and prevent a global
            disaster. With a mysterious virus threatening the world, Carter must
            rely on his instincts, fighting his way through an intense series of
            action-packed events while uncovering dark secrets about his own
            identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card9;
