import React, { Component } from "react";
import Wish from "./components/StateEx/Wish";
import Employee from "./Table/Employee";
class App extends Component {
  render() {
    return (
      <div>
        <h2> React State Example </h2>
        {/* <hr />
        <Wish /> */}
        <hr />

        <Employee />
      </div>
    );
  }
}

export default App;
