import React from "react";
import Filter from "./Filter";
import Result from "./Result";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Filter} exact />
          <Route path="/result" component={Result} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
