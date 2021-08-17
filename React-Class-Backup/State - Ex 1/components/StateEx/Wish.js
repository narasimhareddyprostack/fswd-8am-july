import React, { Component } from "react";

class Wish extends Component {
  state1 = { message: "Hello" };
  messageHandler = () => {
    this.setState1({ message: "Good Moring" });
  };
  render() {
    return (
      <React.Fragment>
        <h2>Message: {this.state1.message}</h2>
        <button onClick={this.messageHandler}>GM</button>
      </React.Fragment>
    );
  }
}

export default Wish;
