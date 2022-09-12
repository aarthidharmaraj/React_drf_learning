import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import email_regx from "../patterns/email_regx";
import phone_regx from "../patterns/phone_regx";

export default class RegisterNewUser extends Component {
  constructor() {
    super();
    this.state = {
      persons: {},
      errors: {},
      ctype: "password",
      ptype: "password",
    };
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
    console.log(this.handleError(event));
    if (this.handleError(event)) {
      axios
        .post("http://localhost:8000/employee_user/", this.state.persons)
        .then((response) => {
          this.setState({
            persons: response.data,
          });
          alert("Form Submitted");
          this.setState({ persons: "" });
        })
        .catch((error) => {
          alert("Data Saved Failed");
        });
    }
  };
  handleError = (event) => {
    let persons = this.state.persons;
    let errors = {};
    let formIsValid = true;
    if (!persons["FULL_NAME"]) {
      errors["FULL_NAME"] = "Enter your full name";
    }
    if (typeof persons["FULL_NAME"] !== "undefined") {
      if (!persons["FULL_NAME"].match(/^[a-zA-Z]+$/)) {
        errors["FULL_NAME"] = "Only letters are allowed";
      }
    }
    if (!persons["USERNAME"]) {
      errors["USERNAME"] = "Username is required";
    } else if (persons["USERNAME"].length > 50) {
      errors["USERNAME"] = "Username should not exceed more than 50 characters";
    }
    if (!persons["GENDER"]) {
      errors["GENDER"] = "This field is required";
    }
    if (!persons["DATE_OF_BIRTH"]) {
      errors["DOB"] = "Enter your date of birth";
    }
    if (this.calculateAge(persons["DATE_OF_BIRTH"]) < 20) {
      errors["DOB"] = "Not Valid age";
    }
    if (!persons["CONTACT_NUMBER"]) {
      errors["CONTACT_NUMBER"] = "Enter your contact details";
    } else if (phone_regx.test(persons["CONTACT_NUMBER"]) === false) {
      errors["CONTACT_NUMBER"] =
        "Contact details should contain only 10 digits";
    }
    if (!persons["EMAIL_ADDRESS"]) {
      errors["EMAIL"] = "Email Address is required";
    }
    if (email_regx.test(persons["EMAIL_ADDRESS"]) === false) {
      errors["EMAIL"] = "Enter a valid email address";
    }
    if (!persons["MARITAL_STATUS"]) {
      errors["MARITAL"] = "This field is required";
    }
    if (!persons["PERMANENT_ADDRESS"]) {
      errors["ADDRESS"] = "The address field is empty";
    }
    if (!persons["PASSWORD"]) {
      errors["PASSWORD"] = "Password field is required";
    }
    if (!persons["CONFIRM_PASSWORD"]) {
      errors["CONFIRM_PASSWORD"] = "Confirm Password field is required";
    }
    if (!(persons["PASSWORD"] === persons["CONFIRM_PASSWORD"])) {
      errors["MATCH"] = "Password and Confirm Password are not matched";
    }
    // if (!errors) {
    this.setState({ errors: errors });
    if (Object.keys(this.state.errors).length > 0) {
      formIsValid = false;
    }
    return formIsValid;
  };
  calculateAge = (date) => {
    var today = new Date();
    var birthDate = new Date(date);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    console.log("Your age", age_now);
    return age_now;
  };
  hideShowPassword = () => {
    this.setState({
      ptype: this.state.ptype === "text" ? "password" : "text",
    });
  };
  hideShowConPassword = () => {
    this.setState({
      ctype: this.state.ctype === "text" ? "password" : "text",
    });
  };
  render() {
    return (
      <div className="container">
        <h2>USER REGISTRATION</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>FULL NAME</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="FULL_NAME"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            <span className="text-danger">
              {this.state.errors["FULL_NAME"]}
            </span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>USERNAME</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              name="USERNAME"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            <span className="text-danger">{this.state.errors["USERNAME"]}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>GENDER</Form.Label>
            <Form.Select
              name="GENDER"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            >
              <option>select</option>
              <option name="GENDER" value="Male">
                Male
              </option>
              <option name="GENDER" value="Female">
                Female
              </option>
              <option name="GENDER" value="Others">
                Others
              </option>
            </Form.Select>
            <span className="text-danger">{this.state.errors["GENDER"]}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date of Birth"
              name="DATE_OF_BIRTH"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            <span className="text-danger">{this.state.errors["DOB"]}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CONTACT NUMBER</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your contact number"
              name="CONTACT_NUMBER"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            <span className="text-danger">
              {this.state.errors["CONTACT_NUMBER"]}
            </span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>EMAIL ADDRESS</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter valid email id"
              name="EMAIL_ADDRESS"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <span className="text-danger">{this.state.errors["EMAIL"]}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>MARITAL STATUS</Form.Label>
            <Form.Control
              type="text"
              placeholder="Marital staus"
              name="MARITAL_STATUS"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            <span className="text-danger">{this.state.errors["MARITAL"]}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>PERMANENT ADDRESS</Form.Label>
            <Form.Control
              type="text-area"
              placeholder="Type your address here"
              name="PERMANENT_ADDRESS"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            <span className="text-danger">{this.state.errors["ADDRESS"]}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>PASSWORD</Form.Label>
            <Form.Control
              type={this.state.ptype}
              placeholder="Enter password"
              name="PASSWORD"
              className="password__input"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            {this.state.ptype === "text" ? (
              <EyeFill onClick={this.hideShowPassword}></EyeFill>
            ) : (
              <EyeSlashFill onClick={this.hideShowPassword}></EyeSlashFill>
            )}
            <span className="text-danger">{this.state.errors["PASSWORD"]}</span>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CONFIRM PASSWORD</Form.Label>
            <Form.Control
              type={this.state.ctype}
              placeholder="Re-enter the password"
              name="CONFIRM_PASSWORD"
              onChange={(e) => this.handleInputChange(e)}
              onBlur={(e) => this.handleError(e)}
            />
            {this.state.ctype === "text" ? (
              <EyeFill onClick={this.hideShowConPassword}></EyeFill>
            ) : (
              <EyeSlashFill onClick={this.hideShowConPassword}></EyeSlashFill>
            )}
            <span className="text-danger">
              {this.state.errors["CONFIRM_PASSWORD"]}
            </span>
            <span className="text-danger">{this.state.errors["MATCH"]}</span>
          </Form.Group>
          <Button
            className="btn btn-primary btn-lg"
            onClick={(e) => this.CreateUser(e)}
          >
            Register
          </Button>
          <h4>Already an user, login here</h4>
          <Link to="login"> User Login</Link>
        </Form>
      </div>
    );
  }
}
