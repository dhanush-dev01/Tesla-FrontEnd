import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import model3 from "../assets/Model-3.png";
import models from "../assets/Model-S.png";
import modelx from "../assets/Model-X.png";
import modely from "../assets/Model-Y.png";
import Loading from "./loading.component";
const DemoDriveForm = () => {
  const [carModel, setCarModel] = useState("Model S");
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [formdata, setForm] = useState({});

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setForm({
      model: carModel,
      city: city,
      branch: branch,
      date: date,
      title: title,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    });

    console.log(formdata);

    await fetch("http://localhost:7080/savedetails", {
      method: "post",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formdata),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.text();
      })
      .then((text) => {
        if(text==="updated"){
            
        }
      });
  };

  const branches = {
    Bangalore: [
      "Jayanagar",
      "Koramangala",
      "Jp Nagar",
      "Banashankari",
      "Indiranagar",
    ],
    Delhi: [
      "Chandni Chowk",
      "Shastri Nagar",
      "Karol Bagh",
      "Paharganj",
      "Daryaganj",
    ],
    Mumbai: ["Andheri", "Bandra", "Borivali", "Goregaon", "Juhu"],
    Chennai: ["Anna Nagar", "Besant Nagar", "Mylapore", "Adyar", "Kotturpuram"],
    Kolkata: [
      "Tollygunge",
      "Bhawanipur",
      "Jadavpur",
      "Salt lake",
      "Park Street",
    ],
  };

  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isloading ? (
        <Loading />
      ) : (
        <div className="container-fluid demo-drive-form-container">
          <div className="row">
            <div className="col-md-6">
              <form onSubmit={handleSubmit} className="demo-drive-form">
                <div className="form-group">
                  <h1>Schedule A Demo Drive</h1>
                  <br />
                  <label htmlFor="carModelSelect">Select Car Model</label>
                  <select
                    className="form-control"
                    id="carModelSelect"
                    value={carModel}
                    onChange={handleCarModelChange}
                    required
                  >
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
                  {/* <br /> */}
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
                <br />
                <button type="submit" className="btn-form">
                  Confirm Your Demo Drive
                </button>
              </form>
            </div>

            <div className="col-md-6 col-sm-10 demo-drive-image ">
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
      )}
    </>
  );
};

export default DemoDriveForm;
