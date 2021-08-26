import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Counter from "./components/Counter/Counter";

let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/counter" component={Counter} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
