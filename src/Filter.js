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

  let options = [];

  for (let car of cars) {
    options.push({ value: car.manufacturer, label: car.manufacturer });
  }
  let unique = Array.from(
    new Set(options.map((obj) => JSON.stringify(obj)))
  ).map((obj) => JSON.parse(obj));

  return (
    <div className="filter">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={unique}
      />
    </div>
  );
};

export default Filter;
