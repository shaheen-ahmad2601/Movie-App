import React from "react";
import "./Card1.css";
import { Link } from "react-router-dom";

const Card1 = () => {
  return (
    <div className="details-page">
     
     <div className="details-container">
     <div>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWqX9PM9GLEy-5_b6eXvfjMAJGjxmZxIpQ8S8zCCXHA6M2hs_2DmXHztiMSBLY1ayq1k&usqp=CAU"
          alt="g20-pic"
          className="details-image"
        />
      </div>
      <div className="details-content">
        <h1 className="details-title">G20</h1>
       <Link to="/video1">
       <button
          type="button"
          style={{
            position:"relative",
            left:"120px",
            padding: "0.6rem 1.2rem",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
            width: "50%",
            borderBottom: "8px solid rgb(182, 10, 10)",
            fontWeight: "bold",

          }}
        >
          Play Now
        </button>
         </Link>
        <p className="details-description rating">Rating : 4 / 5</p>
        <p className="details-description">
        G20 is an upcoming Indian political action thriller film starring Bollywood superstar Kangana Ranaut in the lead role as the Prime Minister of India. Set against the backdrop of the G20 Summit, the movie revolves around high-stakes diplomacy, international conspiracies, and intense political drama. The story showcases how the Indian Prime Minister takes a bold stand on the global stage, navigating pressure from world leaders while protecting national interests.
        </p>
      </div>
     </div>
    </div>
  );
};

export default Card1;



