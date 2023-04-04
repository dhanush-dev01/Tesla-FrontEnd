import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import model3 from "../assets/Model-3.png";
import models from "../assets/Model-S.png";
import modelx from "../assets/Model-X.png";
import modely from "../assets/Model-Y.png";

const DemoDriveForm = () => {
  const [carModel, setCarModel] = useState("");
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleCarModelChange = (event) => {
    setCarModel(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleDateChange = (date) => {
    setDate(date);
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
    console.log("Form submitted!");
  };

  const branches = {
    Bangalore: ["Branch A", "Branch B", "Branch C", "Branch D", "Branch E"],
    Delhi: ["Branch F", "Branch G", "Branch H", "Branch I", "Branch J"],
    Mumbai: ["Branch K", "Branch L", "Branch M", "Branch N", "Branch O"],
    Chennai: ["Branch P", "Branch Q", "Branch R", "Branch S", "Branch T"],
    Kolkata: ["Branch U", "Branch V", "Branch W", "Branch X", "Branch Y"],
  };

  return (
    <div className="container-fluid demo-drive-form-container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="demo-drive-form">
            <div className="form-group">
                <h1>Schedule A Demo Drive</h1>
              <label htmlFor="carModelSelect">Select Car Model</label>
              <select
                className="form-control"
                id="carModelSelect"
                value={carModel}
                onChange={handleCarModelChange}
                required
              >
                <option value="">--Select--</option>
                <option value="Model S">Model S</option>
                <option value="Model 3">Model 3</option>
                <option value="Model X">Model X</option>
                <option value="Model Y">Model Y</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="citySelect">Select City</label>
              <select
                className="form-control"
                id="citySelect"
                value={city}
                onChange={handleCityChange}
                required
              >
                <option value="">--Select--</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Chennai">Chennai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="branchSelect">Select Branch</label>
          <select
            className="form-control"
            id="branchSelect"
            value={branch}
            onChange={handleBranchChange}
            required
          >
            <option value="">--Select--</option>
            {branches[city] &&
              branches[city].map((branch, index) => (
                <option key={index} value={branch}>
                  {branch}
                </option>
              ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="datePicker">Select Date For Demo Drive</label>
          <br />
          <DatePicker
            id="datePicker"
            className="form-control"
            selected={date}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="titleSelect">Select Title</label>
          <select
            className="form-control"
            id="titleSelect"
            value={title}
            onChange={handleTitleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="firstNameInput">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstNameInput"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastNameInput">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastNameInput"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumberInput">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumberInput"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailInput">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>

    <div className="col-md-6 demo-drive-image">
        <h1>{carModel}</h1>
      {carModel === "Model S" && (
        <img
          src={models}
          alt="Model S"
        />
      )}
      {carModel === "Model 3" && (
        <img
          src={model3}
          alt="Model 3"
        />
      )}
      {carModel === "Model X" && (
        <img
          src={modelx}
          alt="Model X"
        />
      )}
      {carModel === "Model Y" && (
       <img
       src={modely}
       alt="Model Y"
     />
   )}
 </div>
</div>
</div>
);
}

export default DemoDriveForm;