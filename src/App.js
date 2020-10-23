import React from "react";
import Filter from "./Filter";
import Result from "./Result";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Filter} exact />
        <Route path="/result" component={Result} />
      </Switch>
      <div className="links">
        <Link to="/">Home </Link>
        <Link to="/result">enter </Link>
      </div>
    </main>
  );
}

export default App;
