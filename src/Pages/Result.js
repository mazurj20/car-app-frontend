import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import CarDisplay from '../Components/CarDisplay'
import axios from '../axios'
import '../Styles/Result.css'
import {Link} from 'react-router-dom'

const Result = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const url = location.state.url

  useEffect(() => {
    axios.get(url).then((res) => {
      setIsLoading(false)
      setCars(res.data)});
  }, []);

  if (isLoading) {
    return (<div>Loading...</div>)
  }
  return (
    <div className="result__container">
      <div className="sidebar__filter">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button>New Search</button>
      </Link>
        <p style={{padding: '20px'}}>Sidebar react filter</p>
      </div>
      <div>
      {cars.map((car) => (
        <CarDisplay car={car} />
      ))}
      </div>
    </div>
  );
};

export default Result;
