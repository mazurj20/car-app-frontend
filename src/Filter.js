import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "./axios.js";

const Filter = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/cars").then((res) => {
      setCars(res.data);
    });
  }, []);

  console.log(cars);

  const options = [];

  cars.map((car) => {
    options.push({ value: car.manufacturer, label: car.manufacturer });
    return options;
  });

  return (
    <div className="filter">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
};

export default Filter;
