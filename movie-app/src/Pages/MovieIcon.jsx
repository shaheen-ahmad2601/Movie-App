import React from "react";
import { Link } from "react-router-dom";

const MovieIcon = ({ onClick }) => {
  return (
    <Link to="/addmovie">
      <button
        onClick={onClick}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "white",
          color: "black",
          fontSize: "2rem",
          fontWeight: "bold",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
          position:"fixed",
          right:"20px",
            bottom:"20px",
          
        }}
      >
        +
      </button>
    </Link>
  );
};

export default MovieIcon;
