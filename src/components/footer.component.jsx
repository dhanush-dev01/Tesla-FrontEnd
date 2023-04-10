
import React from "react";
import "../styles/styles.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs"; 
import { NavLink } from "react-router-dom";

let Footer=()=> {
  return (
    
    <footer className="footer">
      
    <div className="row">
      <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
   
        <div className="footer-links">
          <ul>
            <NavLink to={"/modelS"}><li>
              Model S
            </li></NavLink>
            <NavLink to={"/model3"}><li>
              Model 3
            </li></NavLink>
            <NavLink to={"/modelX"}><li>
              Model X
            </li></NavLink>
            <NavLink to={"/modelY"}><li>
              Model Y
            </li></NavLink>
           
          </ul>
        </div>
        </div>
       
        <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
        <div className="footer-social-media">
          <a href="https://www.facebook.com/TeslaMotorsCorp/" target="_blank" rel="noopener noreferrer">
            <BsFacebook />
          </a>
          <a href="https://twitter.com/tesla" target="_blank" rel="noopener noreferrer">
            <BsTwitter />
          </a>
          <a href="https://www.instagram.com/teslamotors/" target="_blank" rel="noopener noreferrer">
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
