import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "../axios.js";
import { useHistory } from "react-router-dom";
import '../Styles/Filter.css'
import CarDisplay from '../Components/CarDisplay'

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
  const [colorOpt, setColorOpt] = useState([]);
  const [yearOpt, setYearOpt] = useState([]);
  const [modelOpt, setModelOpt] = useState([
    { manufacturer: null, model: null },
  ]);
  const [sizeOpt, setSizeOpt] = useState([]);
  const [stateOpt, setStateOpt] = useState([]);
  const [carsOpt, setCarsOpt] = useState([]);
  const [manufacturerOpt, setManufacturerOpt] = useState([]);

  const [newestCars, setNewestCars] = useState([])

  const filters = [manufacturer, model, color, year, size, state];
  let manuOptions = [];
  let yearOptions = [];
  let modelOptions = [];
  let sizeOptions = [];
  let colorOptions = [];
  let stateOptions = [];

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

  createSelections(manufacturerOpt, "manufacturer", manuOptions);
  createSelections(colorOpt, "paint_color", colorOptions);
  createSelections(stateOpt, "state", stateOptions);
  
  return (
    <div>
      <h1 className="filter__header">Find your next match</h1>
      <div className="filter__filter">
          <Select
            defaultValue={manufacturer}
            onChange={setManufacturer}
            options={manuOptions}
          />
          <Select
            defaultValue={state}
            onChange={setState}
            options={stateOptions}
          />
          <Select
            defaultValue={color}
            onChange={setColor}
            options={colorOptions}
          />
          <Select
            defaultValue={model}
            onChange={setModel}
            options={modelOptions}
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
