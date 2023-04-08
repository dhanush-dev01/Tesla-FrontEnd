import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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
  const [formError, setFormError] = useState('');
  // const [confirmBook, setBooking]=useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    window.location.reload();
  };

  


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
   const handleConfirm=()=>{
    // setBooking(false);
  }

  const formattedDate = date && date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'});
  const branches = {
    Bangalore: [
      "Sujai Kumar, Tesla inc. , Jayanagar, 560004",
      "Bharath Naidu, Tesla inc., Koramangala, 560034",
      "Abhilash Gowda, Tesla inc., Jp Nagar, 560078",
      "Imran Siddiqui, Tesla inc., Banashankari, 560050  ",
      "Priya Shankar, Tesla inc., Indiranagar, 560038 ",
    ],
    Delhi: [
      "Aditya Prakash, Tesla inc., Chandni Chowk, 110006",
      "Abdul Ali, Tesla inc., Shastri Nagar, 110052" ,
      "Prateek Sikarvar, Tesla inc., Karol Bagh, 110005 ",
      "Anil Gupta, Tesla inc., Paharganj, 110055 ",
      "Ashish Shukla, Tesla inc., Daryaganj, 110002 ",
    ],
    Mumbai: [
      "Akash Malhotra, Tesla inc., Andheri, 400047",
      "Siddharth Shukla, Tesla inc., Bandra, 400050",
      "Abhinav Chaturvedi, Tesla inc.,Borivali, 400092",
      "Shubhas Goel, Tesla inc., Goregaon, 400060",
      "Pranav Kumar, Tesla inc., Juhu, 400049"
    ],
    Chennai: [
       "Kumaraswamy Iyer, Tesla inc., Anna Nagar, 600040",
       "Muttu Swami, Tesla inc., Besant Nagar, 600090",
       "Selvaratnam, Tesla inc., Mylapore, 600004",
       "Malavika Iyer, Tesla inc., Adyar, 600020",
       "Shanmuga, Tesla inc., Kotturpuram, 600085 "
    ],
    Kolkata: [
      "Benoy Basu,Tesla inc., Tollygunge, 700033",
      "Subroto Mukharjee, Tesla inc., Bhawanipur, 743270",
      "Shruthi Banarjee, Tesla inc., Jadavpur, 700032",
      "Deepa Chatterjee, Tesla inc., Salt lake, 700064",
      "Sunil Bhattacharya, Tesla inc., Park Street, 700016",
    ],
  };


 async function  handleSubmit (event) {

   event.preventDefault();
    if (!carModel) {
      setFormError('*Please Select Model');
      return;
    }
    if (!city) {
      setFormError('*Please Select City');
      return;
    }
    if (!branch) {
      setFormError('*Please Select Branch');
      return;
    }
    if (!date) {
      setFormError('*Please Select the date');
      return;
    }
    if (!title) {
      setFormError('*Please Select Title');
      return;
    }
    if (!firstName.match(/^[A-Za-z]+$/)) {
      setFormError('*Invalid First Name');
      return;
    }
    if (!lastName.match(/^[A-Za-z]+$/)) {
      setFormError('*Invalid Last Name');
      return;
    }
    if (!phoneNumber.match(/^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/)) {
      setFormError('*Please enter a valid 10 digit phone number');
      return;
    }
    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setFormError('*Please Enter a Valid Email ID');
      return;
    }
    setFormError('');
    // alert('Booking Details Submitted Successfully!');
  

    const newForm = {
      model: carModel,
      city: city,
      branch: branch,
      date: date,
      title: title,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    }



    console.log(newForm);
    console.log(date);

    await fetch("http://localhost:7080/savedetails", {
      method: "post",
      cache: "no-cache",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newForm ),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }else{
          // setBooking(true);
          setShow(true)
        }

        // console.log(confirmBook)
        return response.text();
      })
      .then((text) => {
        
        if(text==="updated"){
         console.log("data",text)
          // setBooking(true);
        }
      }
      )
      
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
                  <label htmlFor="carModelSelect">*Select Car Model</label>
                  <select
                    className="form-control"
                    id="carModelSelect"
                    value={carModel}
                    onChange={handleCarModelChange}
                    
                  >
                    <option className="optionvalue" value="Model S">Model S</option>
                    <option value="Model 3">Model 3</option>
                    <option value="Model X">Model X</option>
                    <option value="Model Y">Model Y</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="citySelect">*Select City</label>
                  <select
                    className="form-control"
                    id="citySelect"
                    value={city}
                    onChange={handleCityChange}
                    
                  >
                    <option value="">--Select--</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Kolkata">Kolkata</option>
                  </select>
                </div>
                {city!==""&&<div className="form-group">
                  <label htmlFor="branchSelect">*Select Nearest Branch</label>
                  <select
                    className="form-control"
                    id="branchSelect"
                    value={branch}
                    onChange={handleBranchChange}
                    
                  >
                    <option value="">--Select--</option>
                    {branches[city] &&
                      branches[city].map((branch, index) => (
                        <option key={index} value={branch}>
                          {branch}
                        </option>
                      ))}
                  </select>
                </div>}

                <div className="form-group">
                  <label htmlFor="datePicker">*Select Date</label>
                  {/* <br /> */}
                  <DatePicker
                    id="datePicker"
                    className="form-control"
                    selected={date}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="titleSelect">*Select Title</label>
                  <select
                    className="form-control"
                    id="titleSelect"
                    value={title}
                    onChange={handleTitleChange}
                    
                  >
                    <option value="">--Select--</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="firstNameInput">*First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstNameInput"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastNameInput">*Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastNameInput"
                    value={lastName}
                    onChange={handleLastNameChange}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumberInput">*Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumberInput"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="emailInput">*Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    value={email}
                    onChange={handleEmailChange}
                    
                  />
                </div>
                {formError && <div className="validate">{formError}</div>}
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
           <div>
</div>

          </div>
          {/* Confirm Booking */}
          <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered backdrop="static">
        <Modal.Header>
          <Modal.Title>Test Drive Booking Placed!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className="details-table">
  <tbody>
    <tr>
      <td className="details-table__heading">Model:</td>
      <td className="details-table__data">{carModel}</td>
    </tr>
    <tr>
      <td className="details-table__heading">Name</td>
      <td className="details-table__data">{`${title} ${firstName} ${lastName}`}</td>
    </tr>
    <tr>
      <td className="details-table__heading">Email:</td>
      <td className="details-table__data">{email}</td>
    </tr>
    <tr>
      <td className="details-table__heading">Phone:</td>
      <td className="details-table__data">{phoneNumber}</td>
    </tr>
    <tr>
      <td className="details-table__heading">Selected Branch:</td>
      <td className="details-table__data">{branch}</td>
    </tr>
    <tr>
      <td className="details-table__heading">City:</td>
      <td className="details-table__data">{city}</td>
    </tr>
    <tr>
      <td className="details-table__heading">Date:</td>
      <td className="details-table__data">{formattedDate}</td>
    </tr>
  </tbody>
</table>
<br />
<br />
<h6>Thank You for Booking a Test Drive with Tesla!</h6>
<h6>Our Sales Team will get in touch with you soon.</h6>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className="btn-confirm">
            Done
          </Button>
        </Modal.Footer>
      </Modal>
          

        </div>
        
      )}
    </>
  );
};

export default DemoDriveForm;
