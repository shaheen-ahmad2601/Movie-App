import { Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import MovieSlider from "../components/MovieSlider";
import MovieSlider1 from "../components/MovieSlider1";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Navbar from "../components/Navbar";
import Card1 from "../DetailPages/card1";
import Card2 from "../DetailPages/Card2";
import Card3 from "../DetailPages/Card3";
import Card4 from "../DetailPages/Card4";
import Card5 from "../DetailPages/Card5";
import Card6 from "../DetailPages/Card6";
import Card7 from "../DetailPages/Card7";
import Card8 from "../DetailPages/Card8";
import Card9 from "../DetailPages/Card9";
import Card10 from "../DetailPages/Card10";
import Card11 from "../DetailPages/Card11";
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
import AddMovie from "../Pages/AddMoive";
import MovieIcon from "../Pages/MovieIcon";
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

function AppRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart1" element={<Card1 />} />
        <Route path="/cart2" element={<Card2 />} />
        <Route path="/cart3" element={<Card3 />} />
        <Route path="/cart4" element={<Card4 />} />
        <Route path="/cart5" element={<Card5 />} />
        <Route path="/cart6" element={<Card6 />} />
        <Route path="/cart7" element={<Card7 />} />
        <Route path="/cart8" element={<Card8 />} />
        <Route path="/cart9" element={<Card9 />} />
        <Route path="/cart10" element={<Card10 />} />
        <Route path="/cart11" element={<Card11 />} />

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

        <Route path="/addmovie" element={<AddMovie />} />

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
      </Routes>
    </>
  );
}

export default AppRoutes;
