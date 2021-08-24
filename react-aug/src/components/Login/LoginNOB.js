import React from "react";
class LoginNOB extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <label>Email</label>
          <input type="text" /> <br />
          <label>Password</label>
          <input type="password" /> <br />
          <button>Login</button>
        </form>
      </React.Fragment>
    );
  }
}
export default LoginNOB;
