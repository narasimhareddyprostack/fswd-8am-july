import React from "react";

class Salary extends React.Component {
  state = {
    salary: 50000,
  };
  hike20KHandler = () => {
    console.log("20k");
    this.setState({ salary: 70000 });
  };
  hike30KHandler() {
    console.log("30k");
    this.setState({ salary: 80000 });
  }
  hike1RsHandler = () => {
    console.log("1 Rupees");
    this.setState({ salary: 50001 });
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
                    onClick={this.hike20KHandler}
                  >
                    Hike 20K
                  </button>
                  <button
                    className="btn btn-primary mr-3"
                    onClick={() => {
                      this.hike30KHandler();
                    }}
                  >
                    Hike 30K
                  </button>
                  <button
                    className="btn btn-danger mr-3"
                    onClick={this.hike1RsHandler}
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
