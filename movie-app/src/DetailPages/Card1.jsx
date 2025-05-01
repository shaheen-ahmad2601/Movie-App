
// import React from "react";
// import MovieDetails from "./MovieDetails";
// import movieData from "./MovieData";

// const Card1 = () => {
//   const movie = movieData.find((m) => m.id === 1);
//   return <MovieDetails {...movie} />;
// };

// export default Card1;

// src/DetailPages/Card1.jsx
import { useParams } from "react-router-dom";
import movieData from "./MovieData";

function Card1() {
  const { id } = useParams();
  const movie = movieData.find((item) => item.id === Number(id));


  if (!movie) return <div>Movie Not Found</div>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <video src={movie.videoUrl} controls width="600" />
    </div>
  );
}

export default Card1;
