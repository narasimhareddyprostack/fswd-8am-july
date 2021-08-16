import React, { Component } from "react";
class Display extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {this.props.emp_data.map((data) => {
                  return (
                    <tr>
                      <td>{data.id}</td>
                      <td>{data.first_name}</td>
                      <td>{data.gender}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
