import React, { useState } from "react";
import "./HomePage.css";
import { MoveLeft } from "lucide-react";
import { MoveRight } from "lucide-react";
import AddMovie from "../Pages/AddMoive";

const images = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs/becde9169107197.64473cc648ca2.jpg",
  "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/john-wick-chapter-4-et00311714-1679379542.jpg",
  "https://www.gamebyte.com/wp-content/uploads/2019/01/avengers-end-game-reveal.jpg",
  "https://substack-post-media.s3.amazonaws.com/public/images/cade6a41-107c-4af8-b941-77557b5a8e28_2560x1520.png",
];

function HomePage() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    
    <div className="homepage">
      <h1 className="movie-heading">Top Movies</h1>
      <div className="slider-container">
        <img
          src={images[current]}
          alt={`Movie ${current + 1}`}
          className="slide-image"
        />
      </div>

      <div className="btn-container">
        <button onClick={handlePrev} className="arrow left-arrow">
          <MoveLeft size={28} strokeWidth={1} />
        </button>
        <button onClick={handleNext} className="arrow right-arrow">
          <MoveRight size={28} strokeWidth={1} />
        </button>
      </div>
    </div>
    </>
  );
}

export default HomePage;
