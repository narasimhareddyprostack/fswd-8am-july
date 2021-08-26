import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Videos from "./components/Videos/Videos";
import Movies from "./components/Movies/Movies";
import Contact from "./components/Contact/Contact";
let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/videos" component={Videos} />
          <Route path="/movies" component={Movies} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
