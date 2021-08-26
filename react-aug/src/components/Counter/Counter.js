import React, { useState } from "react";
let Counter = () => {
  let [counter, setCounter] = useState(1);
  let decrHanlder = () => {
    setCounter(counter - 1);
  };
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Counter:{counter}</h4>
              </div>
              <div className="card-body">
                <button
                  className="btn btn-success mr-4"
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  INCR
                </button>
                <button className="btn btn-primary" onClick={decrHanlder}>
                  DECR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Counter;
