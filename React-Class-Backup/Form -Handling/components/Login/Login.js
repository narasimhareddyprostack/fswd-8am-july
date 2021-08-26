import React from "react";
class Login extends React.Component {
  state = {
    email: "",
    password: "",
    repasswrod: "",
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
                        onChange={(e) => {
                          this.setState({ email: e.target.value });
                        }}
                        name="email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => {
                          this.setState({
                            [e.target.name]: e.target.value,
                          });
                        }}
                        name="password"
                      />
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="re-enter password"
                      name="repasswrod"
                      onChange={(e) => {
                        this.setState({ repassword: e.target.value });
                      }}
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
