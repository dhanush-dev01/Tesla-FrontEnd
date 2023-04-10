import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import logo from "../assets/logo.png"

const Login = () => {
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

  return (
      <Modal show={true} onHide={handleClose} centered style={{fontFamily: 'Orbitron'}}>
      <Modal.Header style={{ backgroundColor: 'black', color: 'white', border:'5px solid white' }}>
        <Modal.Title style={{ backgroundColor: 'black', color: 'white' , marginLeft: '18%'}}>
          <img src={logo} alt="Tesla Logo"  width={300} height={50}/>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'black', color: 'white',borderBottom:' 5px solid white',borderRight:' 5px solid white',borderLeft:' 5px solid white' }}>
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

          <Form.Group controlId="formPassword">
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

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button  type="submit" className='btn-form'>Login</button>
            </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
