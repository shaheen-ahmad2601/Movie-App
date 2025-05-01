import React from "react";
import "../VideoPage/CardVideo1.css";
import g20 from "../assets/G20.mp4"

const CardVideo11 = () => {
  return (
    <div className="video-page">
      <div className="video-container">
        <video style={{height:"300px", width:"600px"}} 
          controls
          className="video"
        >
          <source src={g20} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-content">
          <h3 className="video-title">Bloody Daddy</h3>
          <p className="video-rating">Rating : 4.2 / 5</p>
          <p className="video-description">
          Bloody Daddy is an upcoming Indian action thriller film starring Shahid Kapoor in the lead role. Directed by Ali Abbas Zafar, the film follows the story of a man caught in a deadly and high-stakes situation involving crime, betrayal, and survival. Shahid Kapoor plays a father who finds himself entangled in a dangerous underworld conflict after a series of unexpected events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo11;