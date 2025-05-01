import React from "react";
import "../VideoPage/CardVideo1.css";
import lostlands from "../assets/lostlands.mp4"

const CardVideo4 = () => {
  return (
    <div className="video-page">
      <div className="video-container">
        <video style={{height:"300px", width:"600px"}} 
          controls
          className="video"
        >
          <source src={lostlands} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-content">
          <h3 className="video-title">Drive</h3>
          <p className="video-rating">Rating : 4.3 / 5</p>
          <p className="video-description">
          Drive is a neo-noir action drama film starring Hollywood actor Ryan Gosling in the lead role as a silent and skilled getaway driver. Set against the backdrop of Los Angeles' criminal underworld, the movie revolves around heists, betrayal, and violent retribution. The story showcases how the mysterious driver gets entangled in a deadly job gone wrong while trying to protect his neighbor and her son, forcing him to confront ruthless gangsters and embrace his dark instincts in a fight for survival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo4;