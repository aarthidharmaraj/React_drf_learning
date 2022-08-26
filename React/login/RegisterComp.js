import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class RegisterNewUser extends Component {
  constructor() {
    super();
    this.state = { persons: {}, error: {} };
  }
  handleInputChange = (event) => {
    let persons = this.state.persons;
    persons[event.target.name] = event.target.value;

    this.setState(
      {
        persons,
      },
      () => {
        console.log(this.state.persons);
      }
    );
  };
  CreateUser = (event) => {
    event.preventDefault();
    if (this.validate()) {
      axios
        .post("http://localhost:9000/registeredusers/", this.state.persons)
        .then((response) => {
          this.setState({
            persons: response.data,
          });
          alert("Form Submitted");
        })
        .catch((error) => {
          alert("Data Saved Failed");
        });
    }
  };
  validate() {
    let persons = this.state.persons;
    let valueError = "";
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let matchError = "";
    let CpasswordError = "";
    if (!persons["name"] || !persons["age"] || !persons["contact_number"]) {
      nameError = "This field is required";
    }
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!persons["email"] || reg.test(persons["email"]) === false) {
      emailError = "Email Field is Invalid ";
    }
    if (!persons["language"]) {
      valueError = "Select a value from the given list";
    }
    if (!persons["password"]) {
      passwordError = "Password field is required";
    }
    if (!persons["confirm_password"]) {
      CpasswordError = "Confirm Password field is required";
    }
    if (!(persons["password"] === persons["confirm_password"])) {
      matchError = "Password and Confirm Password are not matched";
    }
    if (
      emailError ||
      valueError ||
      passwordError ||
      nameError ||
      matchError ||
      CpasswordError
    ) {
      this.setState({
        valueError,
        emailError,
        passwordError,
        nameError,
        matchError,
        CpasswordError,
      });
      return false;
    }
    return true;
  }
  render() {
    return (
      <div>
        <div className="container" style={{ width: "50%" }}>
          <h3>USER REGISTRATION</h3>
          <form>
            <div className="form">
              <div className="form-group">
                <label className="col-sm-2 control-label">USER NAME :</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={(e) => this.handleInputChange(e)}
                />
                <span className="text-danger">{this.state.nameError}</span>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">AGE :</label>
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  onChange={(e) => this.handleInputChange(e)}
                />
                <span className="text-danger">{this.state.nameError}</span>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  CONTACT NUMBER :
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="contact_number"
                  onChange={(e) => this.handleInputChange(e)}
                />
                <span className="text-danger">{this.state.nameError}</span>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  PROGRAMMING LANGUAGE
                </label>
                <select
                  value={this.state.language}
                  className="form-control"
                  name="language"
                  onChange={(e) => this.handleInputChange(e)}
                >
                  <option>select </option>
                  <option value="Python"> Python</option>
                  <option value="Java"> Java</option>
                  <option value="Django"> Django</option>
                  <option value="React"> React</option>
                </select>
                <span className="text-danger">{this.state.valueError}</span>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label"> EMAIL </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={(e) => this.handleInputChange(e)}
                ></input>
                <span className="text-danger">{this.state.emailError}</span>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">PASSWORD</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={(e) => this.handleInputChange(e)}
                ></input>
                <span className="text-danger">{this.state.passwordError}</span>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">
                  Confirm Password :
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="confirm_password"
                  value={this.state.confirm_password}
                  onChange={(e) => this.handleInputChange(e)}
                />
                <span className="text-danger">
                  {this.state.CpasswordError} {this.state.matchError}
                </span>
              </div>
              <button
                className="btn btn-primary btn-lg"
                onClick={(e) => this.CreateUser(e)}
              >
                Register
              </button>
              <h4>Already an user, login here</h4>
              <Link to="login"> User Login</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
