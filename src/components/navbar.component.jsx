import React from "react"
import logo from "../assets/logo.png"
import '../styles/styles.css'
import { NavLink } from "react-router-dom"

let NavBar=()=>{

    return(
        <header>  
        <nav className="navbar navbar-expand-lg bg-black  fixed-top" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand mr-auto"  href="/"><img src={logo} alt="Tesla Logo" width={100} /></a>
    <button className="navbar-toggler bg-black" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
         <NavLink to={"/"}><button className="nav-link" aria-current="page">Home</button></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/demodrive"}><button className="nav-link" aria-current="page">Demo Drive</button></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/modelS"}><button className="nav-link" >Model S</button></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/model3"}><button className="nav-link" >Model 3</button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/modelX"}><button className="nav-link" >Model X</button></NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/modelY"}><button className="nav-link" >Model Y</button></NavLink>
        </li>
      </ul>
    </div>
  </div>
  <ul className="navbar-nav ml-auto collapse navbar-collapse" id="navbarNav" >
        <li className="nav-item">
          <NavLink to={"/login"}><button className="nav-link">Login</button></NavLink>
         </li>
      </ul>
</nav>
</header>
    )
}


export default NavBar