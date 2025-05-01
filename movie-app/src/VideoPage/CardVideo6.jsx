import React from "react";
import "../VideoPage/CardVideo1.css";
import gladiator from "../assets/gladiator.mp4"

const CardVideo6 = () => {
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
          <h3 className="video-title">Drive</h3>
          <p className="video-rating">Rating : 4.8 / 5</p>
          <p className="video-description">
          Uri: The Surgical Strike is a patriotic Indian military action film starring Vicky Kaushal in the lead role as Major Vihaan Singh Shergill, a brave Indian Army officer. Set against the backdrop of the 2016 Uri attack, the movie revolves around national security, retaliation, and tactical warfare. The story showcases how Indian soldiers meticulously plan and execute a covert surgical strike across the border to avenge the deadly terrorist attack, highlighting themes of valor
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo6;