// Footer.js
import React from 'react';
import './footer.css'; // Make sure to create a corresponding Footer.css file
import logo from './assests/logo.jpeg'; // Import your logo image
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
    
          <img src={logo} alt="Logo" />
   
        </div>
        <div className="footer-info">
          <h3 className='contactUs'>Contact Us</h3>
          <p><FaLocationDot /> Registered Office: E-14, Lajpat Nagar -II Central Market, New Delhi -110024</p>
          <p><FaPhoneAlt /> +91 9599784310, +91 9310103230</p>
          <p><MdEmail /> medhkara.llp@gmail.com</p>
          <p className='socialMediaIcons'><FaTwitter size={20} style={{ cursor: "pointer" }} /> &nbsp; <FaLinkedin size={20} style={{ cursor: "pointer" }}/> &nbsp; <FaFacebook size={20} style={{ cursor: "pointer" }}/> &nbsp; <FaWhatsapp size={20} style={{ cursor: "pointer" }}/> </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
