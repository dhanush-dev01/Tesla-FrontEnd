
import React, { useState } from 'react';
// import Image from './tesla-image.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import model3 from "../assets/Model-3.png";
import models from "../assets/Model-S.png";
import modelx from "../assets/Model-X.png";
import modely from "../assets/Model-Y.png";
const DemoForm = () => {
  const [carModel, setCarModel] = useState('');
  const [city, setCity] = useState('');
  const [branch, setBranch] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState('');

  const handleCarModelChange = (event) => {
    setCarModel(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!carModel) {
      setFormError('Please Select Model');
      return;
    }
    if (!city) {
      setFormError('Please Select City');
      return;
    }
    if (!branch) {
      setFormError('Please Select Branch');
      return;
    }
    if (!date) {
      setFormError('Please Select the date');
      return;
    }
    if (!title) {
      setFormError('Please Select Title');
      return;
    }
    if (!firstName.match(/^[A-Za-z]+$/)) {
      setFormError('First Name should only have alphabetical characters');
      return;
    }
    if (!lastName.match(/^[A-Za-z]+$/)) {
      setFormError('Last Name should only have alphabetical characters');
      return;
    }
    if (!phoneNumber.match(/^\d+$/)) {
      setFormError('Phone Number should only have numbers');
      return;
    }
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setFormError('Please Enter a Valid Email ID');
      return;
    }
    setFormError('');
    alert('Form Submitted Successfully!');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
        {formError && <div className="alert alert-danger mt-3">{formError}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="carModel">Select Car Model</label>
              <select
                className="form-control"
                id="carModel"
                value={carModel}
                onChange={handleCarModelChange}
              >
                <option value="">Select Car Model</option>
                <option value="Model S">Model S</option>
                <option value="Model 3">Model 3</option>
                <option value="Model X">Model X</option>
                <option value="Model Y">Model Y</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">Select City</label>
              <select
                className="form-control"
                id="city"
                value={city}
                onChange={handleCityChange}
              >
                <option value="">Select City</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="branch">Select Branch</label>
              <select
                className="form-control"
                id="branch"
                value={branch}
                onChange={handleBranchChange}
              >
                <option value="">Select Branch</option>
                {city === 'Bangalore' && (
                  <>
                    <option value="Branch A">Branch A</option>
                    <option value="Branch B">Branch B</option>
                    <option value="Branch C">Branch C</option>
                    <option value="Branch D">Branch D</option>
                    <option value="Branch E">Branch E</option>
                  </>
                )}
                {city === 'Delhi' && (
                  <>
                    <option value="Branch F">Branch F</option>
                    <option value="Branch G">Branch G</option>
                    <option value="Branch H">Branch H</option>
                    <option value="Branch I">Branch I</option>
                    <option value="Branch J">Branch J</option>
                  </>
                )}
                {city === 'Mumbai' && (
                  <>
                    <option value="Branch K">Branch K</option>
                    <option value="Branch L">Branch L</option>
                    <option value="Branch M">Branch M</option>
                    <option value="Branch N">Branch N</option>
                    <option value="Branch O">Branch O</option>
                  </>
                )}
                {city === 'Chennai' && (
                  <>
                    <option value="Branch P">Branch P</option>
                    <option value="Branch Q">Branch Q</option>
                    <option value="Branch R">Branch R</option>
                    <option value="Branch S">Branch S</option>
                    <option value="Branch T">Branch T</option>
                  </>
                )}
                {city === 'Kolkata' && (
                  <>
                    <option value="Branch U">Branch U</option>
                    <option value="Branch V">Branch V</option>
                    <option value="Branch W">Branch W</option>
                    <option value="Branch X">Branch X</option>
                    <option value="Branch Y">Branch Y</option>
                  </>
                )}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="demoDate">Select Date For Demo Drive</label>
              <input
                type="date"
                className="form-control"
                id="demoDate"
                value={date}
                onChange={handleDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Select Title</label>
              <select
                className="form-control"
                id="title"
                value={title}
                onChange={handleTitleChange}
              >
                <option value="">Select Title</option>
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            {formError && <div className="alert alert-danger mt-3">{formError}</div>}
          </form>
        </div>
        <div className="col-md-6">
        {carModel === "Model S" && (
                <img src={models} alt="Model S" className="img-fluid" />
              )}
              {carModel === "Model 3" && (
                <img src={model3} alt="Model 3" className="img-fluid" />
              )}
              {carModel === "Model X" && (
                <img src={modelx} alt="Model X" className="img-fluid" />
              )}
              {carModel === "Model Y" && (
                <img src={modely} alt="Model Y" className="img-fluid" />
              )}
              <h1>{carModel}</h1>
        </div>
      </div>
    </div>
  );
};

export default DemoForm;
