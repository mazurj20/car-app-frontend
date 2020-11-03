import React, {useState, useEffect} from 'react'
import axios from '../axios'

function CarDetails({match}) {
    const [car, setCar] = useState(null)

    useEffect(() => {
        axios.get(`/details/${match.params._id}`).then((res) => setCar(res.data));
      }, []);
      
      return (
        <div>
            {car && (
                <div className="cardetail__container">
                    <img src={`${car[0].image_url}`} />
                    <p>{car[0].state}</p>
                    <p>{car[0].manufacturer}</p>
                    <p>{car[0].model}</p>
                    <p>{car[0].condition}</p>
                    <p>{car[0].size}</p>
                </div>)}
        </div>
    )
}

export default CarDetails
