import React from "react";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  changeEmailHandler = (event) => {
    /*  console.log(event);
    console.log(event.target);
    console.log(event.target.value);
 */
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };
  submitLoginData = (event) => {
    //apply your business login
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">{JSON.stringify(this.state)}</div>
                <div className="card-body">
                  <form onSubmit={this.submitLoginData}>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email"
                        onChange={this.changeEmailHandler}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.changePasswordHandler}
                      />
                    </div>
                    <button type="submit" className="btn btn-success">
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
