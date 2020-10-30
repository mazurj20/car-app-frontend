import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "../axios.js";
import { useHistory } from "react-router-dom";

const Filter = () => {
  const history = useHistory();
  const [manufacturer, setManufacturer] = useState({
    key: "manufacturer",
    value: null,
  });
  const [color, setColor] = useState({ key: "paint_color", value: null });
  const [year, setYear] = useState({ key: "year", value: null });
  const [model, setModel] = useState({ key: "model", value: null });
  const [size, setSize] = useState({ key: "size", value: null });
  const [state, setState] = useState({ key: "state", value: null });
  const [cars, setCars] = useState({ key: "state", value: null });
 
  const filters = [manufacturer, color];

  useEffect(() => {
    axios.get("/test").then((res) => {
      setCars(res.data);
    axios.get("/manufacturers").then((res) => {
      setManufacturer(res.data);
    axios.get("/year").then((res) => {
      setYear(res.data);
    axios.get("/model").then((res) => {
      setModel(res.data);
    axios.get("/size").then((res) => {
      setSize(res.data);
    axios.get("/color").then((res) => {
      setColor(res.data);
    axios.get("/state").then((res) => {
      setState(res.data);
    
    });
  }, []);

  const handleFilterSubmit = () => {
    let url = "/result";
    filters.map((filter, i) => {
      if (filter.value !== null) {
        if (i === 0) {
          url = url + `?${filter.key}=${filter.value}`;
        } else {
          url = url + `&${filter.key}=${filter.value}`;
        }
      }
    });
   

    
    history.push("/results", { results: cars });
  };

  let options = [];

  for (let car of cars) {
    options.push({
      value: car.manufacturer,
      label: car.manufacturer,
      key: "manufacturer",
    });
  }
  let unique = Array.from(
    new Set(options.map((obj) => JSON.stringify(obj)))
  ).map((obj) => JSON.parse(obj));

  return (
    <div className="filter">
      <>
        <h1>filter</h1>
        <Select
          defaultValue={manufacturer}
          onChange={setManufacturer}
          options={unique}
        />
        <button onClick={handleFilterSubmit}>enter</button>
      </>
    </div>
  );
};

export default Filter;
