import React from "react";
import "../VideoPage/CardVideo1.css";
import gladiator from "../assets/gladiator.mp4"

const CardVideo9 = () => {
  return (
    <div className="video-page">
      <div className="video-container">
        <video style={{height:"300px", width:"600px"}} 
          controls
          className="video"
        >
          <source src={gladiator} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-content">
          <h3 className="video-title">Carter</h3>
          <p className="video-rating">Rating : 4 / 5</p>
          <p className="video-description">
          Carter is a South Korean action thriller film starring Joo Won in the lead role. The movie follows the story of Carter, a man who wakes up with no memory of his past and is thrust into a deadly mission to save a kidnapped American agent and prevent a global disaster. With a mysterious virus threatening the world, Carter must rely on his instincts, fighting his way through an intense series of action-packed events while uncovering dark secrets about his own identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo9;