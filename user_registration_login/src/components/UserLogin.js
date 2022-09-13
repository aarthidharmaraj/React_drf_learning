import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import instance from "../api/api_instance";
import email_regx from "../patterns/email_regx";

export default function UserLogin() {
  const [persons, setPersons] = useState({});
  const [error, setError] = useState({});
  const [passtype, setPassType] = useState("password");
  const [formIsValid, setSuccess] = useState(false);
  const hideShowPassword = () => {
    setPassType(passtype === "text" ? "password" : "text");
  };
  const handleInputChange = (event) => {
    persons[event.target.name] = event.target.value;
    setPersons(persons);
    // console.log(persons);
    setError({});
  };
  const validate = (e) => {
    let field = e.target.name;
    if (!persons.EMAIL_ADDRESS) {
      error.EMAIL_ADDRESS = "Email Address is required";
    } else if (email_regx.test(persons.EMAIL_ADDRESS) === false) {
      error.EMAIL_ADDRESS = "Enter a valid email address";
    }
    if (!persons.PASSWORD) {
      error.PASSWORD = "Password field is required";
    }
    setError({ [field]: error[field] });
    if (!(Object.keys(error).length > 0)) {
      setSuccess(true);
    }
    console.log("errors", error.EMAIL_ADDRESS, error.PASSWORD);
  };
  const loginUser = (event) => {
    event.preventDefault();
    console.log(formIsValid);
    if (formIsValid) {
      // instance
      //   .get("http://localhost:8000/employee_user/", {
      //     params: {
      //       EMAIL_ADDRESS: persons.EMAIL_ADDRESS,
      //       PASSWORD: persons.PASSWORD,
      //     },
      // })
      instance
        .get(
          `http://localhost:8000/employee_user/?EMAIL_ADDRESS=${persons.EMAIL_ADDRESS}?PASSWORD=${persons.PASSWORD}`
          // {
          //     //   params: {
          //     //     EMAIL_ADDRESS: persons.EMAIL_ADDRESS,
          //     //     PASSWORD: persons.PASSWORD,
          //     //   },
          //     // }
        )
        .then((response) => {
          if (response.data.length > 0) {
            console.log("data", response.data);
            alert("The user has been logged in successfully");
            return response.data;
          }

          alert("Entered field is invalid");
        })
        .catch((error) => {
          alert("No response from api");
        });
    } else {
      alert("Enter the username and Password to procced");
    }
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <Form>
        <div className="form">
          <h3>User Login</h3>
          <br />
          <div className="form-group">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="text"
              className="form-control"
              name="EMAIL_ADDRESS"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validate(e)}
            />
            <span className="text-danger">{error.EMAIL_ADDRESS}</span>
          </div>
          <div className="form-group">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type={passtype}
              className="form-control"
              name="PASSWORD"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validate(e)}
            />
            {passtype === "text" ? (
              <EyeFill onClick={hideShowPassword}></EyeFill>
            ) : (
              <EyeSlashFill onClick={hideShowPassword}></EyeSlashFill>
            )}
            <span className="text-danger">{error.PASSWORD}</span>
          </div>
          <Button onClick={(e) => loginUser(e)} className="btn btn-primary">
            LogIn
          </Button>
          <h4>New user ? Register here</h4>
          <Link to="register"> Register new user</Link>
        </div>
      </Form>
    </div>
  );
}
