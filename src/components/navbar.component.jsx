import React from "react"
import { useState } from 'react';
import logo from "../assets/logo.png"
import '../styles/styles.css'
import { NavLink } from "react-router-dom"
import { Modal, Form} from 'react-bootstrap';

let NavBar=()=>{

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [show, setShow] = useState(false)

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleShow=()=>{
      setShow(true);
  }
  const handleClose = ()=>{
    setShow(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // input validation
    if (username.length < 1) {
      setUsernameError('Please enter a username');
      return;
    }

    if (password.length < 1) {
      setPasswordError('Please enter a password');
      return;
    }

    console.log(`Logging in with username ${username} and password ${password}`);

    // Close the modal
    handleClose();
  };


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
          {/* <NavLink to={"/login"}><button className="nav-link" onClick={handleShow}>Login</button></NavLink> */}
          <button className="nav-link" onClick={handleShow}>Login</button>
         </li>
      </ul>
</nav>
<Modal show={show} onHide={handleClose} centered style={{fontFamily: 'Orbitron'}}>
      <Modal.Header style={{ backgroundColor: 'black', color: 'white', border:'2px solid white' }}>
        <Modal.Title style={{ backgroundColor: 'black', color: 'white' , marginLeft: '25%', marginRight: '25%'}}>
          <img src={logo} alt="Tesla Logo"  width={300} height={50} className="img-fluid"/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'black', color: 'white',borderBottom:' 2px solid white',borderRight:' 2px solid white',borderLeft:' 2px solid white' }}>
        <h4 style={{ textAlign: 'center' }}>Admin Panel</h4>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
              style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}
            />
            {usernameError && <Form.Text className="text-danger">{usernameError}</Form.Text>}
          </Form.Group>

          <Form.Group controlId="formPassword" style={{marginTop:'10px'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}
            />
            {passwordError && <Form.Text className="text-danger">{passwordError}</Form.Text>}
          </Form.Group>

          <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '5px' }}>
            {/* <Button variant="dark" type="submit" style={{ backgroundColor: 'black', color: 'white', border: '1px solid white' }}>
              Login
            </Button> */}
            <button  type="submit" className='btn-form'>Login</button>
            </div>
        </Form>
      </Modal.Body>
    </Modal>
</header>
    )
}


export default NavBar