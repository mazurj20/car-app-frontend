import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import CarDisplay from './CarDisplay'
import axios from '../axios'

const Result = () => {
  const [cars, setCars] = useState([]);
  const location = useLocation()
  const url = location.state.url

  useEffect(() => {
    axios.get(url).then((res) => setCars(res.data));
  }, []);

  return (
    <div>
      {cars.map((car) => (
        <CarDisplay car={car} />
      ))}
    </div>
  );
};

export default Result;
