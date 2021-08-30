import React, { Component } from "react";
import Axios from "axios";
class User extends Component {
  state = {
    users: [],
    errMessage: null,
  };
  getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        console.log(response.data);
        this.setState({ users: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <pre>{JSON.stringify(this.state.users)}</pre>
              <button className="btn btn-success" onClick={this.getData}>
                Get Data
              </button>
              <table className="table table-hover">
                <thead>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                </thead>
                <tbody>
                  {this.state.users.length > 0 ? (
                    <React.Fragment>
                      {this.state.users.map((user) => {
                        return (
                          <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
/*
     API URL :https://jsonplaceholder.typicode.com/users
     Method: GET 
     Access Type: Public
     Field : N/A
     */
/*
    Axios.get().then().catch();
    Axios.get(url).then(()=>{}).catch(()=>{});
    Axios.get(url).then((resonpse)=>{ 
        //business logic

    }).catch((err)=>{
        //handle error
    });
*/
