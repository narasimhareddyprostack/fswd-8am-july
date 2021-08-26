import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import LoginNOB from "./components/Login/LoginNOB";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Login />
        <hr />
        {/*   <LoginNOB /> */}
      </div>
    );
  }
}

export default App;
