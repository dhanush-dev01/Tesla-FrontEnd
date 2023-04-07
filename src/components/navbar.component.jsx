import React from "react"
import logo from "../assets/logo.png"
import '../styles/styles.css'
import { NavLink } from "react-router-dom"

let NavBar=()=>{

    return(
        <header>  
        <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand mr-auto"  href="/"><img src={logo} alt="Tesla Logo" width={100} /></a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink to={"/"}><a className="nav-link" aria-current="page">Home</a></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/demodrive"}><a className="nav-link" aria-current="page">Demo Drive</a></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/modelS"}><a className="nav-link" >Model S</a></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/model3"}><a className="nav-link" >Model 3</a></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/modelX"}><a className="nav-link" >Model X</a></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/modelY"}><a className="nav-link" >Model Y</a></NavLink>
        </li>
      </ul>
    </div>
  </div>
  <ul className="navbar-nav ml-auto collapse navbar-collapse" id="navbarNav" >
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
         </li>
      </ul>
</nav>
</header>
    )
}


export default NavBar