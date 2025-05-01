
import React from "react";
import "./MovieSlider1.css";
import { Link } from "react-router-dom";
// import movieData from "./movieData";

function MovieSlider1() {
  const movieData = [
    {
      id: 1,
      route: "/scard1",
      image: "https://assets.vogue.in/photos/5d4bf42a60869300083bf669/master/w_1600%2Cc_limit/Captain%2520Marvel.jpg",
      alt: "Captain Marvel"
    },
    {
      id: 2,
      route: "/scard2",
      image: "https://cdn.kobo.com/book-images/179c31cf-2bc9-4f86-9fff-d45786ebf912/353/569/90/False/marvel-s-avengers-1.jpg",
      alt: "Avengers"
    },
    {
      id: 3,
      route: "/scard3",
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2022-02/15/19/asset/0927721cc615/sub-buzz-558-1644955047-9.jpg",
      alt: "Iron Man"
    },
    {
      id: 4,
      route: "/scard4",
      image: "https://store-images.s-microsoft.com/image/apps.31741.14598622000073877.3bab7f53-d2c8-4439-bb2e-b71edc585766.9ed2d8d9-cb15-472b-b611-0a2421af7cc3?mode=scale&q=90&h=300&w=300",
      alt: "Hulk"
    },
    {
      id: 5,
      route: "/scard5",
      image: "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2018/01/blackpanther_poster_lg.jpg?fit=1688%2C2500&ssl=1",
      alt: "Black Panther"
    },
    {
      id: 6,
      route: "/scard6",
      image: "https://resizing.flixster.com/YwMYmeoAnmjnI2fZRXH7vYraxfA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p176337_p_v8_am.jpg",
      alt: "Doctor Strange"
    },
    {
      id: 7,
      route: "/scard7",
      image: "https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor.jpg",
      alt: "Thor"
    },
    {
      id: 8,
      route: "/scard8",
      image: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
      alt: "Captain America"
    },
    {
      id: 9,
      route: "/scard9",
      image: "https://rukminim2.flixcart.com/image/850/1000/l12h1u80/poster/o/l/w/small-baby-groot-multicolour-photo-paper-print-poster-original-imagcqfvtcacwe9f.jpeg?q=20&crop=false",
      alt: "Groot"
    },
    {
      id: 10,
      route: "/scard10",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykMZYevHAZu3R68P0pqyD0p-8mRvW22SJ1NfKqCVs1ZqG0D0eOZUB7RCdpaUR9jdMU5I&usqp=CAU",
      alt: "Spiderman"
    },
    {
      id: 11,
      route: "/scard11",
      image: "https://i.ebayimg.com/images/g/WfQAAOSwbAVk4Qqe/s-l1200.jpg",
      alt: "Deadpool"
    }
  ];
  
  return (
    <div className="movie-container">
      <h2 className="heading">SuperHeros</h2>
      <div className="scroller-wrapper">
        <div className="scroller">
          {movieData.map((movie) => (
            <div className="movie-box" key={movie.id}>
              <Link to={movie.route}>
                <img src={movie.image} alt={movie.alt} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <p className="about-copyright">© Copyright Movies. All Rights Reserved</p>
    </div>
  );
}

export default MovieSlider1;




