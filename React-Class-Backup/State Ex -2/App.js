import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Wish from "./components/StateEx/Wish";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Wish />
      </div>
    );
  }
}

export default App;
