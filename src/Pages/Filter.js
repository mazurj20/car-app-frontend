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
  const [state, setState] = useState({ key: "state", value: null });
  const [type, setType] = useState({ key: "type", value: null });
  const [typeOpt, setTypeOpt] = useState([]);
  const [colorOpt, setColorOpt] = useState([]);
  const [stateOpt, setStateOpt] = useState([]);
  const [manufacturerOpt, setManufacturerOpt] = useState([]);

  const [newestCars, setNewestCars] = useState([]);

  const filters = [manufacturer, color, state, type];
  let manuOptions = [];
  let colorOptions = [];
  let stateOptions = [];
  let typeOptions = [];

  useEffect(() => {
    axios.get("/manufacturers").then((res) => setManufacturerOpt(res.data));
    axios.get("/type").then((res) => setTypeOpt(res.data));
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
  createSelections(typeOpt, "type", typeOptions);

  return (
    <div className="filter__container">
      <h1 className="filter__header">Find your next match</h1>
      <div className="filter__filter">
        <Select
          className="grid1"
          defaultValue={"manufacturer"}
          onChange={setManufacturer}
          options={manuOptions}
          placeholder={"manufacterer"}
        />
        <Select
          className="grid2"
          defaultValue={"state"}
          onChange={setState}
          options={stateOptions}
          placeholder={"state"}
        />
        <Select
          className="grid3"
          defaultValue={"color"}
          onChange={setColor}
          options={colorOptions}
          placeholder={"color"}
        />
        <Select
          className="grid4"
          defaultValue={"type"}
          onChange={setType}
          options={typeOptions}
          placeholder={"type"}
        />
        <button className="grid5" onClick={handleFilterSubmit}>
          enter
        </button>
      </div>
      <h1 className="newCars">Fresh Off the Lot</h1>
      <div className="filter__body">
        {newestCars.map((car, key) => (
          <CarDisplay car={car} key={key} />
        ))}
      </div>
      <div className="filter__footer">
        <h3>footer</h3>
      </div>
    </div>
  );
};

export default Filter;
