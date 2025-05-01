


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <div className="container">
//       <div className="navbar">
//         <div className="left">
//           <Link to="/">Movie</Link>
//         </div>
//         <div className="right">
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact Us</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="container">
      <div className="navbar">
        <div className="left">
          <Link to="/">Movie</Link>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          Menu
        </div>

        <div className={`right ${menuOpen ? 'open' : ''}`}>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

