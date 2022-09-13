import React, { useState } from "react";
import instance from "../api/api_instance.js";
import { Form, Button } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import email_regx from "../patterns/email_regx";
import phone_regx from "../patterns/phone_regx";
export default function Register() {
  const [persons, setPersons] = useState({});
  const [error, setError] = useState({});
  const [passtype, setPassType] = useState("password");
  const [conpasstype, setConPassType] = useState("password");
  const [formIsValid, setSuccess] = useState(false);
  const handleInputChange = (e) => {
    persons[e.target.name] = e.target.value;
    setPersons(persons);
    setError({});
  };
  const hideShowPassword = () => {
    setPassType(passtype === "text" ? "password" : "text");
  };
  const hideShowConPassword = () => {
    setConPassType(conpasstype === "text" ? "password" : "text");
  };
  const createUser = (event) => {
    event.preventDefault();
    console.log(formIsValid);
    if (formIsValid) {
      console.log("APi connected");
      instance
        .post("http://localhost:8000/employee_user/", persons)
        .then((response) => {
          setPersons(response.data);
          alert("Form Submitted");
          setPersons({ persons: "" });
        })
        .catch((error) => {
          alert("Data Saved Failed");
        });
    } else {
      alert("Fill the details in the form");
    }
  };
  const calculateAge = (date) => {
    var today = new Date();
    var birthDate = new Date(date);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };
  const handleError = (e) => {
    let field = e.target.name;
    if (!persons.FULL_NAME) {
      error.FULL_NAME = "Enter your full name";
    } else if (typeof persons.FULL_NAME !== "undefined") {
      if (!persons.FULL_NAME.match(/^[a-zA-Z]+$/)) {
        error.FULL_NAME = "Only letters are allowed";
      }
    }
    if (!persons.USERNAME) {
      error.USERNAME = "Username is required";
    } else if (persons.USERNAME.length > 50) {
      error.USERNAME = "Username should not exceed more than 50 characters";
    }
    if (!persons.GENDER) {
      error.GENDER = "This field is required";
    }
    if (persons.DATE_OF_BIRTH === undefined) {
      error.DATE_OF_BIRTH = "Enter your date of birth";
    } else if (calculateAge(persons.DATE_OF_BIRTH) < 20) {
      error.DATE_OF_BIRTH = "Not Valid age";
    }
    if (!persons.CONTACT_NUMBER) {
      error.CONTACT_NUMBER = "Enter your contact details";
    } else if (phone_regx.test(persons.CONTACT_NUMBER) === false) {
      error.CONTACT_NUMBER = "Contact details should contain only 10 digits";
    }
    if (!persons.EMAIL_ADDRESS) {
      error.EMAIL_ADDRESS = "Email Address is required";
    } else if (email_regx.test(persons.EMAIL_ADDRESS) === false) {
      error.EMAIL_ADDRESS = "Enter a valid email address";
    }
    if (!persons.MARITAL_STATUS) {
      error.MARITAL_STATUS = "This field is required";
    }
    if (!persons.PERMANENT_ADDRESS) {
      error.PERMANENT_ADDRESS = "The address field is empty";
    }
    if (!persons.PASSWORD) {
      error.PASSWORD = "Password field is required";
    } else if (persons.PASSWORD.length < 10 || persons.PASSWORD.length > 30) {
      error.PASSWORD = "The password must be between 10 to 30 characters";
    }
    if (!persons.CONFIRM_PASSWORD) {
      error.CONFIRM_PASSWORD = "Confirm Password field is required";
    } else if (persons.CONFIRM_PASSWORD < 10 || persons.CONFIRM_PASSWORD > 30) {
      error.CONFIRM_PASSWORD =
        "Confirm password must be between 10 to 30 characters";
    } else if (!(persons.PASSWORD === persons.CONFIRM_PASSWORD)) {
      error.CONFIRM_PASSWORD = "Password and Confirm Password are not matched";
    }
    return error[field];
  };
  const validateData = (e) => {
    let field = e.target.name;
    error[field] = handleError(e);
    if (error[field]) {
      setError({ [field]: error[field] });
    }
    if (!(Object.keys(error).length > 1)) {
      setSuccess(true);
    }
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <h2>USER REGISTRATION</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>FULL NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="FULL_NAME"
            onChange={(e) => handleInputChange(e)}
            onBlur={validateData}
          />

          <span className="text-danger">{error.FULL_NAME}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>USERNAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user name"
            name="USERNAME"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
          />
          <span className="text-danger">{error.USERNAME}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>GENDER</Form.Label>
          <Form.Select
            name="GENDER"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
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
          <span className="text-danger">{error.GENDER}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Date of Birth"
            name="DATE_OF_BIRTH"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
          />
          <span className="text-danger">{error.DATE_OF_BIRTH}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>CONTACT NUMBER</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your contact number"
            name="CONTACT_NUMBER"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
          />
          <span className="text-danger">{error.CONTACT_NUMBER}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>EMAIL ADDRESS</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter valid email id"
            name="EMAIL_ADDRESS"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <span className="text-danger">{error.EMAIL_ADDRESS}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>MARITAL STATUS</Form.Label>
          <Form.Control
            type="text"
            placeholder="Marital staus"
            name="MARITAL_STATUS"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
          />
          <span className="text-danger">{error.MARITAL_STATUS}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PERMANENT ADDRESS</Form.Label>
          <Form.Control
            type="text-area"
            placeholder="Type your address here"
            name="PERMANENT_ADDRESS"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
          />
          <span className="text-danger">{error.PERMANENT_ADDRESS}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            type={passtype}
            placeholder="Enter password"
            name="PASSWORD"
            className="password__input"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
          />
          {passtype === "text" ? (
            <EyeFill onClick={hideShowPassword}></EyeFill>
          ) : (
            <EyeSlashFill onClick={hideShowPassword}></EyeSlashFill>
          )}
          <span className="text-danger">{error.PASSWORD}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>CONFIRM PASSWORD</Form.Label>
          <Form.Control
            type={conpasstype}
            placeholder="Re-enter the password"
            name="CONFIRM_PASSWORD"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => validateData(e)}
          />
          {conpasstype === "text" ? (
            <EyeFill onClick={hideShowConPassword}></EyeFill>
          ) : (
            <EyeSlashFill onClick={hideShowConPassword}></EyeSlashFill>
          )}
          <span className="text-danger">{error.CONFIRM_PASSWORD}</span>
        </Form.Group>
        <Button
          className="btn btn-primary btn-lg"
          onClick={(e) => createUser(e)}
        >
          Register
        </Button>
        <h4>Already an user, login here</h4>
        <Link to="login"> User Login</Link>
      </Form>
    </div>
  );
}
