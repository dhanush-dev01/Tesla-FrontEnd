import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

let Footer = () => {
  return (
    <footer className="footer">
      
    <div className="row">
      <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
   
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Model S</a>
            </li>
            <li>
              <a href="#">Model X</a>
            </li>
            <li>
              <a href="#">Model Y</a>
            </li>
            <li>
              <a href="#">Model 3</a>
            </li>
           
          </ul>
        </div>
        </div>
       
        <div className="col-12 col-md-6 col-xl-6 col-xxl-6">
        <div className="footer-social-media">
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
        </div>
      </div>
   
      <p className="footer-text">© 2023 Tesla, Inc.</p>
    </div>
    </footer>
  );
};

export default Footer;
