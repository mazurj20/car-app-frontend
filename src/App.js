import React from "react";
import Filter from "./Components/Filter";
import Result from "./Components/Result";
import "./Styles/App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Filter} />
          <Route path="/result" component={Result} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
