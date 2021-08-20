import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
/* import Wish from "./components/Events/Wish"; */
import Salary from "./components/Events/Salary";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*  <Wish /> */}
        <Salary />
      </div>
    );
  }
}

export default App;
