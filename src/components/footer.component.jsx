
import React from "react";
import "../styles/styles.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"; // import the social media icons
import { NavLink } from "react-router-dom";

let Footer=()=> {
  return (
    
    <footer className="footer">
      
    <div className="row">
      <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
   
        <div className="footer-links">
          <ul>
            <NavLink to={"/models"}><li>
              Model S
            </li></NavLink>
            <NavLink to={"/model3"}><li>
              Model 3
            </li></NavLink>
            <NavLink to={"/modelx"}><li>
              Model X
            </li></NavLink>
            <NavLink to={"/modely"}><li>
              Model Y
            </li></NavLink>
           
          </ul>
        </div>
        </div>
       
        <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
        <div className="footer-social-media">
          <a href="https://www.facebook.com/TeslaMotorsCorp/">
            <BsFacebook />
          </a>
          <a href="https://twitter.com/tesla">
            <BsTwitter />
          </a>
          <a href="https://www.instagram.com/teslamotors/">
            <BsInstagram />
          </a>
        </div>
      </div>
   
      <p className="footer-text">© 2023 Tesla, Inc.</p>
    </div>
    </footer>
  );
}

export default Footer;
