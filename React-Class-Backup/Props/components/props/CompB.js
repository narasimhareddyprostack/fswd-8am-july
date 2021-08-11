import React from "react";
let CompB = (props) => {
  return (
    <React.Fragment>
      <h2>Component - CompB</h2>
      <pre>{JSON.stringify(props)}</pre>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>{props.wish}</h5>
                <h4>{props.name}</h4>
              </div>
              <div className="card-body">
                <h4>{props.price}</h4>

                <h4>{props.product_Color[3]}</h4>
                <p>{props.details.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CompB;
