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
        <div className="cardetail__container">
          <img src={`${car[0].image_url}`} />
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
        </div>
      )}
    </div>
  );
}

export default CarDetails;
