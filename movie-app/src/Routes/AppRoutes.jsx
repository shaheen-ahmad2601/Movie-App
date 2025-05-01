import { Routes, Route } from "react-router-dom";

// Common Components
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import MovieSlider from "../components/MovieSlider";
import MovieSlider1 from "../components/MovieSlider1";

// Pages
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AddMovie from "../Pages/AddMoive";
import MovieIcon from "../Pages/MovieIcon";

// Dynamic Detail Page
import Card1 from "../DetailPages/Card1";

// Static Superhero Pages (Can be converted to dynamic later)
import Scard1 from "../DetailPages/Superheros/Scard1";
import Scard2 from "../DetailPages/Superheros/Scard2";
import Scard3 from "../DetailPages/Superheros/Scard3";
import Scard4 from "../DetailPages/Superheros/Scard4";
import Scard5 from "../DetailPages/Superheros/Scard5";
import Scard6 from "../DetailPages/Superheros/Scard6";
import Scard7 from "../DetailPages/Superheros/Scard7";
import Scard8 from "../DetailPages/Superheros/Scard8";
import Scard9 from "../DetailPages/Superheros/Scard9";
import Scard10 from "../DetailPages/Superheros/Scard10";
import Scard11 from "../DetailPages/Superheros/Scard11";

// Static Video Pages (Can be dynamic too)
import CardVideo1 from "../VideoPage/CardVideo1";
import CardVideo2 from "../VideoPage/CardVideo2";
import CardVideo3 from "../VideoPage/CardVideo3";
import CardVideo4 from "../VideoPage/CardVideo4";
import CardVideo5 from "../VideoPage/CardVideo5";
import CardVideo6 from "../VideoPage/CardVideo6";
import CardVideo7 from "../VideoPage/CardVideo7";
import CardVideo8 from "../VideoPage/CardVideo8";
import CardVideo9 from "../VideoPage/CardVideo9";
import CardVideo10 from "../VideoPage/CardVideo10";
import CardVideo11 from "../VideoPage/CardVideo11";
import MovieDetails from "../DetailPages/MovieDetails";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <MovieSlider />
              <MovieSlider1 />
              <MovieIcon />
            </>
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addmovie" element={<AddMovie />} />

        {/* Dynamic card route */}
        <Route path="/movie/:id" element={<MovieDetails />} />

        {/* Superhero detail pages */}
        <Route path="/scard1" element={<Scard1 />} />
        <Route path="/scard2" element={<Scard2 />} />
        <Route path="/scard3" element={<Scard3 />} />
        <Route path="/scard4" element={<Scard4 />} />
        <Route path="/scard5" element={<Scard5 />} />
        <Route path="/scard6" element={<Scard6 />} />
        <Route path="/scard7" element={<Scard7 />} />
        <Route path="/scard8" element={<Scard8 />} />
        <Route path="/scard9" element={<Scard9 />} />
        <Route path="/scard10" element={<Scard10 />} />
        <Route path="/scard11" element={<Scard11 />} />

        {/* Video detail pages */}
        <Route path="/video1" element={<CardVideo1 />} />
        <Route path="/video2" element={<CardVideo2 />} />
        <Route path="/video3" element={<CardVideo3 />} />
        <Route path="/video4" element={<CardVideo4 />} />
        <Route path="/video5" element={<CardVideo5 />} />
        <Route path="/video6" element={<CardVideo6 />} />
        <Route path="/video7" element={<CardVideo7 />} />
        <Route path="/video8" element={<CardVideo8 />} />
        <Route path="/video9" element={<CardVideo9 />} />
        <Route path="/video10" element={<CardVideo10 />} />
        <Route path="/video11" element={<CardVideo11 />} />
      </Routes>
    </>
  );
}

export default AppRouter;

