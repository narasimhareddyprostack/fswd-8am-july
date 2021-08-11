import React, { Component } from "react";
class CompC extends Component {
  render() {
    return (
      <div>
        <h1>Component C</h1>
        <h2>{JSON.stringify(this.props)}</h2>
        <h4>Sal: {this.props.employee.sal}</h4>
      </div>
    );
  }
}

export default CompC;
