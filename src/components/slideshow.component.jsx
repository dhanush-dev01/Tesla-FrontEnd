import React, { useState } from "react";
import model3 from "../assets/Model-3.png";
import models from "../assets/Model-S.png";
import modelx from "../assets/Model-X.png";
import modely from "../assets/Model-Y.png";
import { NavLink } from "react-router-dom";


const SlideShow = () => {
  const [carModel, setCarModel] = useState("modelS");
  const [isImageSliding, setIsImageSliding] = useState(false);
  const cars = {
    modelS: {
      image: models,
      description:
        "Model S - Luxury sedan with a range of up to 402 miles per charge",
    },
    model3: {
      image: model3,
      description:
        "Model 3 - Premium sedan with a range of up to 358 miles per charge",
    },
    modelX: {
      image: modelx,
      description: "Model X - High-performance SUV with a range of up to 371 miles",
    },
    modelY: {
      image: modely,
      description: "Model Y - Midsize SUV with a range of up to 326 miles per charge",
    },
  };

  const handleButtonClick = (model) => {
    setCarModel(model);
    setIsImageSliding(true);

    setTimeout(() => {
      setIsImageSliding(false);
    }, 500);
  };

  return (
    <div className="tesla-cars">
      <div className="car-models">
        <button
          className={`car-model ${carModel === "modelS" ? "active" : ""}`}
          onClick={() => handleButtonClick("modelS")}
        >
          Model S
        </button>
        <button
          className={`car-model ${carModel === "model3" ? "active" : ""}`}
          onClick={() => handleButtonClick("model3")}
        >
          Model 3
        </button>
        <button
          className={`car-model ${carModel === "modelX" ? "active" : ""}`}
          onClick={() => handleButtonClick("modelX")}
        >
          Model X
        </button>
        <button
          className={`car-model ${carModel === "modelY" ? "active" : ""}`}
          onClick={() => handleButtonClick("modelY")}
        >
          Model Y
        </button>
      </div>
      <div className="car-image">
        <img
          src={cars[carModel].image}
          alt={carModel}
          className={`slide-in ${isImageSliding ? "active" : ""} img-fluid`}
        />
        <div className="car-details">
          <p className="car-description">{cars[carModel].description}</p>
        </div>
      </div>
      <NavLink to={`/${carModel}`}><button className="button-model">View Details</button></NavLink>
      <NavLink to={"/demodrive"}><button className="button-model">Demo Drive</button></NavLink>
    </div>
  );
};

export default SlideShow;
