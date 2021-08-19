import React from "react";
class Wish extends React.Component {
  message = "hello";
  gmMessageHandler = () => {
    console.log("Test 123");
    this.message = "Good Morning";
    console.log(".....", this.message);
  };
  render() {
    return (
      <>
        <h1>Message:{this.message}</h1>
        <button onClick={this.gmMessageHandler}>GM</button>
      </>
    );
  }
}
export default Wish;
