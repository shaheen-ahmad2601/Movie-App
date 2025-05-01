import React from "react";
import "../VideoPage/CardVideo1.css";
import lostlands from "../assets/lostlands.mp4"

const CardVideo7 = () => {
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
          <h3 className="video-title">Long Gone Heroes</h3>
          <p className="video-rating">Rating : 4.4 / 5</p>
          <p className="video-description">
          Long Gone Heroes is an upcoming American war action film starring Guy Pearce and Ben Kingsley in key roles as elite military operatives. Set against the backdrop of a covert mission in a war-torn region, the movie revolves around betrayal, hidden agendas, and moral conflict. The story showcases how a group of special forces soldiers is sent on a dangerous operation to eliminate a warlord, but things take a dark turn when truths about their mission begin to unfold, forcing them to question loyalty, honor, and survival.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo7;