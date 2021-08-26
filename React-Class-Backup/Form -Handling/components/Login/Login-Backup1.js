import React from "react";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
    repasswrod: "",
  };
  updateForm = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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
                        onChange={this.updateForm}
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.updateForm}
                        name="password"
                      />
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="re-enter password"
                      name="repasswrod"
                      onChange={this.updateForm}
                    />
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
