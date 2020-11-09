import React, { useState, useEffect } from "react";
import CarDisplay from "../Components/CarDisplay";
import axios from "../axios";
import "../Styles/Result.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Explore = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sort, setSort] = useState({ value: "Featured", label: "Featured" });
  const sortOptions = ["Featured", "Price: High to Low", "Price: Low to High"];

  useEffect(() => {
    axios.get("/results").then((res) => {
      setIsLoading(false);
      let newCars = res.data;
      for (let i = 0; i < newCars.length; i++) {
        if (newCars[i].price < 700) {
          newCars.splice(i, 1);
        }
        setCars(newCars);
      }
    });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (option) => {
    setSort(option);
    handleSort(option);
  };

  const handleSort = (sort) => {
    if (sort.value === "Price: Low to High") {
      let newCars = cars.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
      setCars(newCars);
    } else if (sort.value === "Price: High to Low") {
      let newCars = cars.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
      setCars(newCars);
    } else if (sort.value === "Featured") {
      for (let i = cars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = cars[i];
        cars[i] = cars[j];
        cars[j] = temp;
      }
    }
  };

  return (
    <div className="result__container">
      <div className="result__body">
        <Dropdown
          className="result__sort"
          options={sortOptions}
          onChange={handleSubmit}
          placeholder="Sort by: Featured"
          value={`Sort by: ${sort.value}`}
        />
        {cars.map((car, key) => (
          <CarDisplay car={car} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
