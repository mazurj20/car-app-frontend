import React from 'react'
import '../Styles/CarDisplay.css'

function CarDisplay({car}) {
    return (
        <div className="carDisplay__container">
            <p>{car.manufacturer}</p>
            <p>{car.model}</p>
            <p>{car.condition}</p>
            <p>{car.size}</p>
            <img src={`${car.image_url}`} />
        </div>
    )
}

export default CarDisplay
