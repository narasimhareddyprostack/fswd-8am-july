import React from "react";

class Salary extends React.Component {
  state = {
    salary: 50000,
  };
  getHike = (hike_value) => {
    console.log("getting Hike");
    this.setState({ salary: this.state.salary + hike_value });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  Your Monthly Grass Salary:{this.state.salary}
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-success mr-3"
                    onClick={this.getHike.bind(this, 20000)}
                  >
                    Hike 20K
                  </button>
                  <button
                    className="btn btn-primary mr-3"
                    onClick={this.getHike.bind(this, 30000)}
                  >
                    Hike 30K
                  </button>
                  <button
                    className="btn btn-danger mr-3"
                    onClick={this.getHike.bind(this, 1)}
                  >
                    Hike 1 Rupees
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Salary;
