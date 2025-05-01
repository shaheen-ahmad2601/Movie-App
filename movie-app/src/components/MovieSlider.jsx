
// import React from "react";
// import { Link } from "react-router-dom";
// import "./MovieSlider.css";
// // import moviesData from "./moviesData";

// function MovieSlider() {

//   const moviesData = [
//     {
//       path: "/cart1",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWqX9PM9GLEy-5_b6eXvfjMAJGjxmZxIpQ8S8zCCXHA6M2hs_2DmXHztiMSBLY1ayq1k&usqp=CAU",
//       alt: "Action 1",
//     },
//     {
//       path: "/cart2",
//       image: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/79/38/51/79/38/51/movie_asset_386077ff-1d35-4c3a-9f00-d6d05e2303c8.jpg?format=webp",
//       alt: "Action 2",
//     },
//     {
//       path: "/cart3",
//       image: "https://resizing.flixster.com/EmRtLlgMu_k4MbdFU3AH4_CBLko=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4ZDNjMTVmLTg3NDAtNDVmMS04NDI5LTQwNGM0YjIwYTQ5ZS5qcGc=",
//       alt: "Action 3",
//     },
//     {
//       path: "/cart4",
//       image: "https://i.etsystatic.com/13325275/r/il/9cec30/3393446498/il_570xN.3393446498_ezqg.jpg",
//       alt: "Action 4",
//     },
//     {
//       path: "/cart5",
//       image: "https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg",
//       alt: "Action 5",
//     },
//     {
//       path: "/cart6",
//       image: "https://filmfare.wwmindia.com/content/2021/jun/action-bollywood-movies-uri-the-surgical-strike-101624867578.jpg",
//       alt: "Action 6",
//     },
//     {
//       path: "/cart7",
//       image: "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/89/32/18/89/32/19/movie_asset_9acb2f9a-ed04-4065-8f66-429b74ef8b1b.jpg?format=webp",
//       alt: "Action 7",
//     },
//     {
//       path: "/cart8",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8F3Z2O5xIKEpGbdNp-8rT4oSW9aK17HJ7A&s",
//       alt: "Action 8",
//     },
//     {
//       path: "/cart9",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-sLP21aWNULJgRD86Jbh4hw9f5frbPDqDMEY6xe1TIKn_F1MXmVGL3Wk1kH3qYp-WFs&usqp=CAU",
//       alt: "Action 9",
//     },
//     {
//       path: "/cart10",
//       image: "https://qqcdnpictest.mxplay.com/pic/bce7ae02445dad432bdab581e180ceef/en/2x3/312x468/d5f863cd13cc307123989701f8b72fdf_1280x1920.webp",
//       alt: "Action 10",
//     },
//     {
//       path: "/cart11",
//       image: "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg",
//       alt: "Action 11",
//     },
//   ];

//   return (
//     <div className="movie-container">
//       <h2 className="heading">Action Movies</h2>
//       <div className="scroller-wrapper">
//         <div className="scroller">
//           {moviesData.map((movie, index) => (
//             <div className="movie-box" key={index}>
//               <Link to={movie.path}>
//                 <img src={movie.image} alt={movie.alt} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MovieSlider;


import React from "react";
import { Link } from "react-router-dom";
import "./MovieSlider.css";

function MovieSlider() {
  const moviesData = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWqX9PM9GLEy-5_b6eXvfjMAJGjxmZxIpQ8S8zCCXHA6M2hs_2DmXHztiMSBLY1ayq1k&usqp=CAU",
      alt: "Action 1",
    },
    {
      id: 2,
      image:
        "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/79/38/51/79/38/51/movie_asset_386077ff-1d35-4c3a-9f00-d6d05e2303c8.jpg?format=webp",
      alt: "Action 2",
    },
    {
      id: 3,
      image:
        "https://resizing.flixster.com/EmRtLlgMu_k4MbdFU3AH4_CBLko=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4ZDNjMTVmLTg3NDAtNDVmMS04NDI5LTQwNGM0YjIwYTQ5ZS5qcGc=",
      alt: "Action 3",
    },
    {
      id: 4,
      image:
        "https://i.etsystatic.com/13325275/r/il/9cec30/3393446498/il_570xN.3393446498_ezqg.jpg",
      alt: "Action 4",
    },
    {
      id: 5,
      image:
        "https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg",
      alt: "Action 5",
    },
    {
      id: 6,
      image:
        "https://filmfare.wwmindia.com/content/2021/jun/action-bollywood-movies-uri-the-surgical-strike-101624867578.jpg",
      alt: "Action 6",
    },
    {
      id: 7,
      image:
        "https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/89/32/18/89/32/19/movie_asset_9acb2f9a-ed04-4065-8f66-429b74ef8b1b.jpg?format=webp",
      alt: "Action 7",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8F3Z2O5xIKEpGbdNp-8rT4oSW9aK17HJ7A&s",
      alt: "Action 8",
    },
    {
      id: 9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-sLP21aWNULJgRD86Jbh4hw9f5frbPDqDMEY6xe1TIKn_F1MXmVGL3Wk1kH3qYp-WFs&usqp=CAU",
      alt: "Action 9",
    },
    {
      id: 10,
      image:
        "https://qqcdnpictest.mxplay.com/pic/bce7ae02445dad432bdab581e180ceef/en/2x3/312x468/d5f863cd13cc307123989701f8b72fdf_1280x1920.webp",
      alt: "Action 10",
    },
    {
      id: 11,
      image:
        "https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg",
      alt: "Action 11",
    },
  ];

  return (
    <div className="movie-container">
      <h2 className="heading">Action Movies</h2>
      <div className="scroller-wrapper">
        <div className="scroller">
          {moviesData.map((movie, index) => (
            <div className="movie-box" key={index}>
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.image} alt={movie.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieSlider;
