import React from "react";
import "../VideoPage/CardVideo1.css";
import g20 from "../assets/G20.mp4"

const CardVideo8 = () => {
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
          <h3 className="video-title">Battle Game II</h3>
          <p className="video-rating">Rating : 3.6 / 5</p>
          <p className="video-description">
          Crouching Tiger, Hidden Dragon is a critically acclaimed Chinese martial arts film directed by Ang Lee, starring Chow Yun-fat, Michelle Yeoh, and Zhang Ziyi. Set in ancient China, the movie combines breathtaking martial arts choreography with a compelling story of love, honor, and betrayal. The plot revolves around a stolen legendary sword, Green Destiny, and the efforts of a renowned warrior and a young woman to retrieve it, while
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVideo8;