import React from "react";
import "../VideoPage/CardVideo1.css";
import lostlands from "../assets/lostlands.mp4"

const CardVideo3 = () => {
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
          <h3 className="video-title">In The Lost Lands</h3>
          <p className="video-rating">Rating : 4.1 / 5</p>
          <p className="video-description">
          In the Lost Lands is an upcoming epic fantasy adventure film starring Milla Jovovich in the lead role as a powerful sorceress named Gray Alys. Set in a mystical realm filled with magic, beasts, and treachery, the movie revolves around a queen’s desperate quest, dark bargains, and dangerous journeys. The story showcases how the mysterious sorceress embarks on a perilous mission through forbidden lands, facing mythical creatures and moral choices, as she seeks to fulfill a prophecy and claim her destiny.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo3;
