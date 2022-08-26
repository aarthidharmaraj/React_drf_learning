import React, { Component } from "react";
import axios from "axios";

export default class Registereduserss extends Component {
  constructor() {
    super();
    this.state = { registeredusers: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:9000/registeredusers")
      .then((response) => {
        this.setState({ registeredusers: response.data });
      })
      .catch((error) => {
        alert("Cannot fetch details", error);
      });
  }
  render() {
    return (
      <div>
        <h2>The details of registered users</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Id</th>
              <th>USER NAME</th>
              <th>AGE</th>
              <th>CONTACT NUMBER</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {this.state.registeredusers.map((users) => (
              <tr>
                {users.id}
                <td>{users.name}</td>
                <td> {users.age} </td>
                <td>{users.contact_number}</td>
                <td>{users.email} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
