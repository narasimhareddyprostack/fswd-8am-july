import React, { useState } from "react";
let Home = () => {
  let [user, setUser] = useState({ userName: "Hello", email: "" });
  function updateMessage() {
    setUser({ userName: "Good Morning" });
    //console.log(message);
  }
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>{user.userName}</h4>
              </div>
              <div className="card-body">
                <button className="btn btn-success" onClick={updateMessage}>
                  GM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
