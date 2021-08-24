import React, { Component } from "react";
class Wish extends Component {
  state = { message: "Hello" };

  gmHandler = () => {
    this.setState({ message: "Good Morning" });
  };
  gnHandler() {
    this.setState({ message: "Good Night" });
  }
  gaHandler() {}
  render() {
    return (
      <>
        <h1>Message: {this.state.message}</h1>
        <button onClick={this.gmHandler}>GM</button>
        <hr />
        <button
          onClick={() => {
            this.gnHandler();
          }}
        >
          GN
        </button>
        <button onClick={this.gaHandler}>GA</button>
      </>
    );
  }
}

export default Wish;
