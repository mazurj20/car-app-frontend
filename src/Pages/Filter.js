import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "../axios.js";
import { useHistory } from "react-router-dom";
import "../Styles/Filter.css";
import CarDisplay from "../Components/CarDisplay";

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
  const [maxPrice, setMaxPrice] = useState({ key: "max-price", value: null });
  const [colorOpt, setColorOpt] = useState([]);
  const [yearOpt, setYearOpt] = useState([]);
  const [modelOpt, setModelOpt] = useState([
    { manufacturer: null, model: null },
  ]);
  const [sizeOpt, setSizeOpt] = useState([]);
  const [stateOpt, setStateOpt] = useState([]);
  const [carsOpt, setCarsOpt] = useState([]);
  const [manufacturerOpt, setManufacturerOpt] = useState([]);

  const [newestCars, setNewestCars] = useState([]);

  const filters = [manufacturer, model, color, year, size, state, maxPrice];
  let manuOptions = [];
  let yearOptions = [];
  let modelOptions = [];
  let sizeOptions = [];
  let colorOptions = [];
  let stateOptions = [];
  let priceOptions = [];
  let priceOpt = [
    2000,
    4000,
    6000,
    8000,
    10000,
    15000,
    20000,
    25000,
    30000,
    35000,
    40000,
    45000,
    50000,
    60000,
    70000,
    80000,
    90000,
    100000,
    125000,
    150000,
    175000,
    200000,
    250000,
  ];

  useEffect(() => {
    axios.get("/manufacturers").then((res) => setManufacturerOpt(res.data));
    axios.get("/year").then((res) => setYearOpt(res.data));
    axios.get("/model").then((res) => setModelOpt(res.data));
    axios.get("/size").then((res) => setSizeOpt(res.data));
    axios.get("/color").then((res) => setColorOpt(res.data));
    axios.get("/state").then((res) => setStateOpt(res.data));
    axios.get("/newest").then((res) => setNewestCars(res.data));
  }, []);

  const addSelections = () => {
    let selectedFilters = [];
    filters.map((filter) => {
      if (filter.value !== null) {
        selectedFilters.push(filter);
      }
    });
    return selectedFilters;
  };

  const handleFilterSubmit = () => {
    let url = "/results";
    addSelections().map((filter, i) => {
      if (i === 0) {
        url = url + `?${filter.key}=${filter.value}`;
      } else {
        url = url + `&${filter.key}=${filter.value}`;
      }
    });
    history.push(url, { url: url });
  };

  const createSelections = (arr, key, newArr) => {
    for (let value of arr) {
      newArr.push({
        value: value,
        label: value,
        key: key,
      });
    }
  };

  for (let value of priceOpt) {
    priceOptions.push({
      value: value,
      label: `$${value}`,
      key: "max-price",
    });
  }

  createSelections(manufacturerOpt, "manufacturer", manuOptions);
  createSelections(colorOpt, "paint_color", colorOptions);
  createSelections(stateOpt, "state", stateOptions);
  return (
    <div>
      <h1 className="filter__header">Find your next match</h1>
      <div className="filter__filter">
        <Select
          defaultValue={"manufacturer"}
          onChange={setManufacturer}
          options={manuOptions}
          placeholder={"manufacturer"}
        />
        <Select
          defaultValue={"state"}
          onChange={setState}
          options={stateOptions}
          placeholder={`state`}
        />
        <Select
          defaultValue={"color"}
          onChange={setColor}
          options={colorOptions}
          placeholder={`color`}
        />
        <Select
          defaultValue={"model"}
          onChange={setModel}
          options={modelOptions}
          placeholder={`model`}
        />
        <Select
          defaultValue={"max price"}
          onChange={setMaxPrice}
          options={priceOptions}
          placeholder={`max price`}
        />
        <button onClick={handleFilterSubmit}>enter</button>
      </div>
      <h1>new cars</h1>
      <div className="filter__body">
        {newestCars.map((car) => (
          <CarDisplay car={car} />
        ))}
      </div>
      <div className="filter__footer">
        <h3>footer</h3>
      </div>
    </div>
  );
};

export default Filter;
