import React from "react";
import logo from "../assets/imgname.png"; // ඔයාගේ logo path එක

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* 🔷 Logo + About Section එක එක්කම */}
        <div className="footer-section about">
          <img src={logo} alt="MediCare Logo" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
          </p>
        </div>

        {/* 🔶 Contact Section */}
        <div className="footer-section contact">
          <h3>Contact us</h3>
          <p><strong>Address</strong> Milton Str. 26–27 London UK</p>
          <p><strong>Phone</strong> +53 345 7953 32453</p>
          <p><strong>Email</strong> yourmail@gmail.com</p>
        </div>

        {/* 🔶 Links Section */}
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Departments</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 All rights reserved. MediCare Clinic</p>
      </div>
    </footer>
  );
}

export default Footer;






