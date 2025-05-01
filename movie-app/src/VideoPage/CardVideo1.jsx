import React from "react";
import "../VideoPage/CardVideo1.css";
import G20 from "../assets/G20.mp4"

const CardVideo1 = () => {
  return (
    <div className="video-page">
      <div className="video-container">
        <video style={{height:"300px", width:"600px"}} 
          controls
          className="video"
        >
          <source src={G20} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="video-content">
          <h3 className="video-title">G20</h3>
          <p className="video-rating">Rating : 4 / 5</p>
          <p className="video-description">
            G20 is an upcoming Indian political action thriller film starring Bollywood superstar Kangana Ranaut in the lead role as the Prime Minister of India. Set against the backdrop of the G20 Summit, the movie revolves around high-stakes diplomacy, international conspiracies, and intense political drama. The story showcases how the Indian Prime Minister takes a bold stand on the global stage, navigating pressure from world leaders while protecting national interests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo1;
