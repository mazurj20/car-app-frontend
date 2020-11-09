import React from "react";
import Filter from "./Pages/Filter";
import Result from "./Pages/Result";
import "./Styles/App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CarDetails from "./Pages/CarDetails";
import Explore from "./Pages/Explore";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={Filter} />
          <Route exact path="/results" component={Result} />
          <Route exact path="/explore" component={Explore} />

          <Route
            exact
            path="/details/:_id"
            render={({ match }) => <CarDetails match={match} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
