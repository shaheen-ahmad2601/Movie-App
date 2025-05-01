import React from "react";
import { Link } from "react-router-dom";
import "./MovieSlider.css";

function MovieSlider() {
  return (
    <div className="movie-container">
      <h2 className="heading">Action Movies</h2>
      <div className="scroller-wrapper">
        <div className="scroller">
          <div className="movie-box">
            <Link to="/cart1">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWqX9PM9GLEy-5_b6eXvfjMAJGjxmZxIpQ8S8zCCXHA6M2hs_2DmXHztiMSBLY1ayq1k&usqp=CAU"
                alt="Action 1"
              />
            </Link>
          </div>
          <div className="movie-box">
            <Link to="/cart2">
              <img
                src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/79/38/51/79/38/51/movie_asset_386077ff-1d35-4c3a-9f00-d6d05e2303c8.jpg?format=webp"
                alt="Action 2"
              />
            </Link>
          </div>
          <div className="movie-box">
            <Link to="/cart3">
              <img
                src="https://resizing.flixster.com/EmRtLlgMu_k4MbdFU3AH4_CBLko=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzY4ZDNjMTVmLTg3NDAtNDVmMS04NDI5LTQwNGM0YjIwYTQ5ZS5qcGc="
                alt="Action 3"
              />
            </Link>
          </div>
          <div className="movie-box">
            <Link to="/cart4">
              <img
                src="https://i.etsystatic.com/13325275/r/il/9cec30/3393446498/il_570xN.3393446498_ezqg.jpg"
                alt="Action 4"
              />
            </Link>
          </div>
          <div className="movie-box">
            <Link to="/cart5">
              <img
                src="https://assets.vogue.in/photos/5f16b3bc9ffca08d1848369b/2:3/w_2560%2Cc_limit/must-watch%2520action%2520movies.jpg"
                alt="Action 5"
              />
            </Link>
          </div>
          <div className="movie-box">
            <Link to="/cart6">
              <img
                src="https://filmfare.wwmindia.com/content/2021/jun/action-bollywood-movies-uri-the-surgical-strike-101624867578.jpg"
                alt="Action 6"
              />
            </Link>
          </div>
          <div className="movie-box">
          <Link to="/cart7">
            <img
              src="https://wwwimage-us.pplusstatic.com/thumbnails/photos/w370-q80/movie_asset/89/32/18/89/32/19/movie_asset_9acb2f9a-ed04-4065-8f66-429b74ef8b1b.jpg?format=webp"
              alt="Action 7"
            />
          </Link>
          </div>
          */
          <div className="movie-box">
          <Link to="/cart8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8F3Z2O5xIKEpGbdNp-8rT4oSW9aK17HJ7A&s"
              alt="Action 7"
            />
          </Link>
          </div>
          <div className="movie-box">
          <Link to="/cart9">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-sLP21aWNULJgRD86Jbh4hw9f5frbPDqDMEY6xe1TIKn_F1MXmVGL3Wk1kH3qYp-WFs&usqp=CAU"
              alt="Action 7"
            />
          </Link>
          </div>
          */
          <div className="movie-box">
          <Link to="/cart10">
            <img
              src="https://qqcdnpictest.mxplay.com/pic/bce7ae02445dad432bdab581e180ceef/en/2x3/312x468/d5f863cd13cc307123989701f8b72fdf_1280x1920.webp"
              alt="Action 7"
            />
          </Link>
          </div>
          <div className="movie-box">
          <Link to="/cart11">
            <img
              src="https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg"
              alt="Action 7"
            />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieSlider;
