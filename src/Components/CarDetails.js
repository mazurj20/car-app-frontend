import React, {useState, useEffect} from 'react'
import axios from '../axios'

function CarDetails({match}) {
    const [car, setCar] = useState(null)

    useEffect(() => {
        axios.get(`/details/${match.params._id}`).then((res) => setCar(res.data));
      }, []);
      
      return (
        <div>
            {car && (<div>{car.state}</div>)}
        </div>
    )
}

export default CarDetails
