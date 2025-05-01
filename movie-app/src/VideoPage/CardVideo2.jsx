import React from "react";
import "../VideoPage/CardVideo1.css";
import gladiator from "../assets/gladiator.mp4"

const CardVideo2 = () => {
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
          <h3 className="video-title">Gladiator</h3>
          <p className="video-rating">Rating : 4.5 / 5</p>
          <p className="video-description">
          Gladiator is an epic historical action drama film starring Hollywood actor Russell Crowe in the lead role as a Roman general turned slave. Set against the backdrop of Ancient Rome, the movie revolves around betrayal, vengeance, and intense arena battles. The story showcases how the fallen general rises as a gladiator, earning fame and fighting for justice while challenging a corrupt emperor and seeking to honor his murdered family.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo2;
