import React from "react";
import "../Styles/CarDisplay.css";
import { Link } from "react-router-dom";

function CarDisplay({ car }) {
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/details/${car._id}`}
    >
      <div className="carDisplay__container">
        <div className="carDisplay__left">
          <img src={`${car.image_url}`} />
        </div>
        <div className="carDisplay__right">
          <h4>
            {`${car.year} ${car.manufacturer
              .charAt(0)
              .toUpperCase()}${car.manufacturer.slice(1)} ${car.model
              .charAt(0)
              .toUpperCase()}${car.model.slice(1)}`}
          </h4>
          <p>{car.odometer} mi.</p>
          <h2>${car.price}</h2>
          <div className="carDisplay__specs">
            <p>Fuel: {car.fuel}</p>
            <p>Drivetrain: {car.drive}</p>
            <p>Mileage: {car.odometer}</p>
            <p>Color: {car.paint_color}</p>
            <p>Transmission: {car.transmission}</p>
            <p>VIN: {car.vin}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarDisplay;
