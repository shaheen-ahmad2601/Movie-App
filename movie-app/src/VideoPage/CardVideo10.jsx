import React from "react";
import "../VideoPage/CardVideo1.css";
import lostlands from "../assets/lostlands.mp4"

const CardVideo10 = () => {
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
          <h3 className="video-title">Jumanji</h3>
          <p className="video-rating">Rating : 4.6 / 5</p>
          <p className="video-description">
          Jumanji is a 1995 fantasy adventure film based on the 1981 children's book of the same name by Chris Van Allsburg. The movie stars Robin Williams, Kirsten Dunst, and Bonnie Hunt and is directed by Joe Johnston. The story revolves around a magical and dangerous board game called Jumanji, which brings wild animals, natural disasters, and other perilous events into the real world. When two children,
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo10;