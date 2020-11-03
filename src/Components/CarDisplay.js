import React from "react";
import "../Styles/CarDisplay.css";
import {Link} from 'react-router-dom'

function CarDisplay({car}) {
    return (
        <Link to={`/details/${car._id}`} >
        <div className="carDisplay__container">
            <div className="carDisplay__left">
                <img src={`${car.image_url}`} />
            </div>
            <div className="carDisplay__right">
                <p>{car.manufacturer}</p>
                <p>{car.model}</p>
                <p>{car.condition}</p>
                <p>{car.size}</p>
            </div>
        </div>
        </Link>
    )
}

export default CarDisplay;
