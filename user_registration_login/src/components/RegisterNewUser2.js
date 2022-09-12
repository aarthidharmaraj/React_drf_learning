import React, { useState, useRef } from "react";
import instance from "../api/api_instance.js";
import { Form, Button } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import email_regx from "../patterns/email_regx";
import phone_regx from "../patterns/phone_regx";
export default function Register() {
  const [persons, setPersons] = useState({});
  const [error, setError] = useRef({});
  const [passtype, setPassType] = useState("password");
  const [conpasstype, setConPassType] = useState("password");
  const [formIsValid, setSuccess] = useState(true);
  // const [showMessage, setShowMessage] = useState(true);
  // const showHideMessages = () => {
  //   handleError();
  //   if (formIsValid) {
  //     setShowMessage(false);
  //   }
  // };
  const handleInputChange = (e) => {
    persons[e.target.name] = e.target.value;
    setPersons(persons);
  };
  const hideShowPassword = () => {
    setPassType(passtype === "text" ? "password" : "text");
  };
  const hideShowConPassword = () => {
    setConPassType(conpasstype === "text" ? "password" : "text");
  };
  const createUser = (event) => {
    // handleError();
    event.preventDefault();
    // console.log(formIsValid);
    if (formIsValid) {
      //   alert("The form is submitted");
      // } else {
      //   alert("The form cannot be submitted");
      // }
      // console.log(handleError(event));{
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
    if (!persons.FULL_NAME) {
      // error[e.target.name] = "Enter your full name";
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
    if (!persons.DATE_OF_BIRTH) {
      error.DOB = "Enter your date of birth";
    }
    if (calculateAge(persons.DATE_OF_BIRTH) < 20) {
      error.DOB = "Not Valid age";
    }
    if (!persons.CONTACT_NUMBER) {
      error.CONTACT_NUMBER = "Enter your contact details";
    } else if (phone_regx.test(persons.CONTACT_NUMBER) === false) {
      error.CONTACT_NUMBER = "Contact details should contain only 10 digits";
    }
    if (!persons.EMAIL_ADDRESS) {
      error.EMAIL = "Email Address is required";
    }
    if (email_regx.test(persons.EMAIL_ADDRESS) === false) {
      error.EMAIL = "Enter a valid email address";
    }
    if (!persons.MARITAL_STATUS) {
      error.MARITAL = "This field is required";
    }
    if (!persons.PERMANENT_ADDRESS) {
      error.ADDRESS = "The address field is empty";
    }
    if (!persons.PASSWORD) {
      error.PASSWORD = "Password field is required";
    }
    if (!persons.CONFIRM_PASSWORD) {
      error.CONFIRM_PASSWORD = "Confirm Password field is required";
    }
    // if (
    //   persons.PASSWORD.length < 10 ||
    //   persons.PASSWORD.length > 30 ||
    //   persons.CONFIRM_PASSWORD < 10 ||
    //   persons.CONFIRM_PASSWORD > 30
    // ) {
    //   error.PASSWORD =
    //     "The password or confirm password must be between 10 to 30 characters";
    // }
    // if (!(persons.PASSWORD === persons.CONFIRM_PASSWORD)) {
    //   error.MATCH = "Password and Confirm Password are not matched";
    // }
    setError(error);

    // console.log(error);

    if (Object.keys(error).length > 0) {
      setSuccess(false);
    }
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <h2>USER REGISTRATION</h2>
      <Form onSubmit={(e) => handleError(e)}>
        <Form.Group className="mb-3">
          <Form.Label>FULL NAME</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            name="FULL_NAME"
            onChange={(e) => handleInputChange(e)}
            onBlur={handleError}
            // onClick={showHideMessages}
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
            onBlur={(e) => handleError(e)}
          />
          <span className="text-danger">{error.USERNAME}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>GENDER</Form.Label>
          <Form.Select
            name="GENDER"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleError(e)}
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
            onBlur={(e) => handleError(e)}
          />
          <span className="text-danger">{error.DOB}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>CONTACT NUMBER</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your contact number"
            name="CONTACT_NUMBER"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleError(e)}
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
            onBlur={(e) => handleError(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <span className="text-danger">{error.EMAIL}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>MARITAL STATUS</Form.Label>
          <Form.Control
            type="text"
            placeholder="Marital staus"
            name="MARITAL_STATUS"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleError(e)}
          />
          <span className="text-danger">{error.MARITAL}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PERMANENT ADDRESS</Form.Label>
          <Form.Control
            type="text-area"
            placeholder="Type your address here"
            name="PERMANENT_ADDRESS"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleError(e)}
          />
          <span className="text-danger">{error.ADDRESS}</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>PASSWORD</Form.Label>
          <Form.Control
            type={passtype}
            placeholder="Enter password"
            name="PASSWORD"
            className="password__input"
            onChange={(e) => handleInputChange(e)}
            onBlur={(e) => handleError(e)}
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
            onBlur={(e) => handleError(e)}
          />
          {conpasstype === "text" ? (
            <EyeFill onClick={hideShowConPassword}></EyeFill>
          ) : (
            <EyeSlashFill onClick={hideShowConPassword}></EyeSlashFill>
          )}
          <span className="text-danger">{error.CONFIRM_PASSWORD}</span>
          <span className="text-danger">{error.MATCH}</span>
        </Form.Group>
        <Button
          className="btn btn-primary btn-lg"
          onClick={(e) => createUser(e)}
          onBlur={handleError}
        >
          Register
        </Button>
        <h4>Already an user, login here</h4>
        <Link to="login"> User Login</Link>
      </Form>
    </div>
  );
}
