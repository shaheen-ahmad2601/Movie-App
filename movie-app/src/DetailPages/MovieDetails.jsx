import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Card1.css";
import movieData from "./MovieData"; // Import your movie data

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movieData.find(item => item.id === Number(id));

  if (!movie) return <div>Movie Not Found</div>;

  return (
    <div className="details-page">
      <div className="details-container">
        <div>
          <img src={movie.image} alt={movie.title} className="details-image" />
        </div>
        <div className="details-content">
          <h1 className="details-title">{movie.title}</h1>
          <Link to={movie.videoLink}>
            <button
              type="button"
              style={{
                position: "relative",
                left: "120px",
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
          <p className="details-description rating">Rating : {movie.rating}</p>
          <p className="details-description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;