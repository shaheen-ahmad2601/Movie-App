import React from "react";
import "../VideoPage/CardVideo1.css";
import g20 from "../assets/G20.mp4"

const CardVideo5 = () => {
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
          <h3 className="video-title">War</h3>
          <p className="video-rating">Rating : 3.9 / 5</p>
          <p className="video-description">
          War is a high-octane Indian action thriller film starring Bollywood actors Hrithik Roshan and Tiger Shroff in lead roles as elite soldiers. Set against the backdrop of international espionage and covert missions, the movie revolves around loyalty, betrayal, and intense face-offs. The story showcases how a top intelligence agent goes rogue, prompting his former protégé to track him down, leading to explosive action sequences, stunning stunts, and a gripping game of cat and mouse across the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo5;