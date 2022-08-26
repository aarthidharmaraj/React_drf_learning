import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class UserLogin extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }
  handleInputChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        console.log(
          "email :",
          this.state.email,
          "Password:",
          this.state.password
        );
      }
    );
  };
  validate() {
    let emailError = "";
    let passwordError = "";
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email || reg.test(this.state.email) === false) {
      emailError = "Email Field is Invalid ";
    }
    if (!this.state.password) {
      passwordError = "Password field is required";
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  }
  loginUser(event) {
    event.preventDefault();
    if (this.validate()) {
      axios
        .get("http://localhost:9000/registeredusers", {
          params: {
            email: this.state.email,
            password: this.state.password,
          },
        })
        .then((response) => {
          if (response.data.length > 0) {
            console.log("data", response.data);
            alert("The user has been logged in successfully");
            return response.data;
          }

          alert("The user is not registered");
        })
        .catch((error) => {
          alert("No response from api", error);
        });
    }
  }

  render() {
    return (
      <div className="container" style={{ width: "50%" }}>
        <form>
          <div className="form">
            <h3>User Login</h3>
            <br />
            <div className="form-group">
              <label>Email :</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={(e) => this.handleInputChange(e)}
              />
              <span className="text-danger">{this.state.emailError}</span>
            </div>
            <div className="form-group">
              <label>Password :</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e) => this.handleInputChange(e)}
              />
              <span className="text-danger">{this.state.passwordError}</span>
            </div>
            <button
              onClick={(e) => this.loginUser(e)}
              className="btn btn-primary"
            >
              LogIn
            </button>
            <h4>New user ? Register here</h4>
            <Link to="register"> Register new user</Link>
          </div>
        </form>
      </div>
    );
  }
}
