import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.props)}</pre>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Salary</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.props.emp_data.map((data) => {
              return (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.salary}</td>
                  <td>{data.loc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Display;
