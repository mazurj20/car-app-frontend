import React from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const cars = location.state.results;

  return (
    <div className="result">
      <p>{cars}</p>
    </div>
  );
};

export default Result;
