import axios from "axios";

const instance = axios.create({
  baseURL: "https://used-cars-app.herokuapp.com/",
});

export default instance;
