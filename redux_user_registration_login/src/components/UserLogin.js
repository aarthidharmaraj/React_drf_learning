import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { loginUser } from "../store/action/actions";
import email_regx from "../constants/email_regx";

export default function UserLogin() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
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
    // console.log("errors", error.EMAIL_ADDRESS, error.PASSWORD);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    console.log(formIsValid);
    if (formIsValid) {
      dispatch(loginUser(persons.EMAIL_ADDRESS, persons.PASSWORD));

      navigate("/logout");
    } else {
      alert("Enter the username and Password to procced");
    }
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <Form>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={4}>
            EMAIL ADDRESS
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              className="form-control"
              name="EMAIL_ADDRESS"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validate(e)}
            />
            <span className="text-danger">{error.EMAIL_ADDRESS}</span>
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row}>
          <Form.Label column sm={4}>
            PASSWORD
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type={passtype}
              className="form-control"
              name="PASSWORD"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validate(e)}
            />
          </Col>
          <Col>
            {passtype === "text" ? (
              <EyeFill onClick={hideShowPassword}></EyeFill>
            ) : (
              <EyeSlashFill onClick={hideShowPassword}></EyeSlashFill>
            )}
            <span className="text-danger">{error.PASSWORD}</span>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col>
            <br />
            <Button variant="primary" size="lg" onClick={(e) => handleLogin(e)}>
              Login
            </Button>
          </Col>
          <Col sm={5}>
            <h6>New user ? Register here</h6>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
