import React from "react";
import imgname from "../assets/imgname.png"; // adjust path if needed

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <img src={imgname} alt="logo" className="brand-image" />
        </div>

        <nav className="nav-links">
          <a href="#" className="home-link">Home</a>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Doctors</a>
          <a href="#">Contact US</a>
        </nav>

        <button className="book-btn">📅 BOOK APPOINTMENT</button>
      </div>
    </header>
  );
}

export default Navbar;
