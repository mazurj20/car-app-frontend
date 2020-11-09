import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Styles/CarDetails.css";

function CarDetails({ match }) {
  const [car, setCar] = useState(null);

  useEffect(() => {
    axios.get(`/details/${match.params._id}`).then((res) => setCar(res.data));
  }, []);

  return (
    <div>
      {car && (
        <div className="carDetail__container">
          <div className="carDetail__top">
            <img src={`${car[0].image_url}`} />
            <div>
              <div className="cardetail__details">
                <h1>
                  {car[0].year} {car[0].manufacturer} {car[0].model}
                </h1>
                <p>
                  {car[0].odometer === ""
                    ? "mileage unkown"
                    : `${car[0].odometer} miles`}
                </p>
                <h1>${car[0].price}</h1>
                <p>{car[0].state}</p>
                <h2>Specs</h2>
              </div>

              <div className="cardetail__specs">
                <p>Fuel: {car[0].fuel}</p>
                <p>Drivetrain: {car[0].drive}</p>
                <p>Mileage: {car[0].odometer}</p>
                <p>Color: {car[0].paint_color}</p>
                <p>Transmission: {car[0].transmission}</p>
                <p>VIN: {car[0].vin}</p>
              </div>
            </div>
          </div>
          <div className="carDetail__bottom">
            <a className="link" href={`${car[0].url}`}>
              Check Availability
            </a>
            <div className="collapse-content">
              <div className="collapse" id="desc">
                <a className="description" href="#desc">
                  Description
                </a>
                <div className="content">
                  <div className="inner-content">
                    <p>{car[0].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarDetails;
