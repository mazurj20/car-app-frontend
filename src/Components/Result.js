import React from "react";
import { useLocation } from "react-router-dom";
import CarDisplay from './CarDisplay'

const Result = () => {
  const location = useLocation();
  const cars = location.state.results;

  return (
    <div>
      <div className="filter">
        
      </div>
      {cars.map((car) => (
        <CarDisplay car={car} />
      ))}
    </div>
  );
};

export default Result;
