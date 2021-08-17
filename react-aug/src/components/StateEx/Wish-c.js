import React from "react";
class Wish extends React.Component {
  state = {
    message: "Hello...",
  };
  gmMessageHanlder = () => {
    this.setState({ message: "Good Morning" });
  };
  gNMessageHandler = () => {
    this.setState({ message: "Good Night" });
  };
  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <p className="h4"> Message:{this.state.message}</p>
                </div>
                <dic className="card-body">
                  <button
                    className="btn btn-success mr-4"
                    onClick={this.gmMessageHanlder}
                  >
                    GM
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={this.gNMessageHandler}
                  >
                    {" "}
                    GN{" "}
                  </button>
                </dic>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Wish;
