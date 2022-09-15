import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import email_regx from "../constants/email_regx";
import phone_regx from "../constants/phone_regx";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateSingleUser } from "../store/action/actions.js";
export default function UpdateUser() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { getUser } = useSelector((state) => state.actiondata);
  let { id } = useParams();
  const [persons, setPersons] = useState({});
  const [error, setError] = useState({});
  const [passtype, setPassType] = useState("password");
  const [conpasstype, setConPassType] = useState("password");
  const [formIsValid, setSuccess] = useState(false);
  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);
  useEffect(() => {
    console.log("getUser", getUser);
    if (getUser) {
      setPersons({ ...getUser });
    }
  }, [getUser]);

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
      dispatch(updateSingleUser(persons, id));
      navigate("/");
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
      <br />
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            FULL NAME
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Enter full name"
              name="FULL_NAME"
              onChange={(e) => handleInputChange(e)}
              onBlur={validateData}
            />

            <span className="text-danger">{error.FULL_NAME}</span>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            USERNAME
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              name="USERNAME"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validateData(e)}
            />
            <span className="text-danger">{error.USERNAME}</span>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            GENDER
          </Form.Label>
          <Col sm={8}>
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
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            DOB
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="date"
              placeholder="Enter Date of Birth"
              name="DATE_OF_BIRTH"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validateData(e)}
            />
            <span className="text-danger">{error.DATE_OF_BIRTH}</span>{" "}
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            CONTACT NUMBER
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="tel"
              placeholder="Enter your contact number"
              name="CONTACT_NUMBER"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validateData(e)}
            />
            <span className="text-danger">{error.CONTACT_NUMBER}</span>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            EMAIL ADDRESS
          </Form.Label>
          <Col sm={8}>
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
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            MARITAL STATUS
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Marital staus"
              name="MARITAL_STATUS"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validateData(e)}
            />
            <span className="text-danger">{error.MARITAL_STATUS}</span>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            PERMANENT ADDRESS
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text-area"
              placeholder="Type your address here"
              name="PERMANENT_ADDRESS"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validateData(e)}
            />
            <span className="text-danger">{error.PERMANENT_ADDRESS}</span>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            PASSWORD
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type={passtype}
              placeholder="Enter password"
              name="PASSWORD"
              className="password__input"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validateData(e)}
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
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            CONFIRM PASSWORD
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type={conpasstype}
              placeholder="Re-enter the password"
              name="CONFIRM_PASSWORD"
              onChange={(e) => handleInputChange(e)}
              onBlur={(e) => validateData(e)}
            />
          </Col>
          <Col>
            {conpasstype === "text" ? (
              <EyeFill onClick={hideShowConPassword}></EyeFill>
            ) : (
              <EyeSlashFill onClick={hideShowConPassword}></EyeSlashFill>
            )}
            <span className="text-danger">{error.CONFIRM_PASSWORD}</span>
          </Col>
        </Form.Group>
        <Button variant="primary" size="lg" onClick={(e) => createUser(e)}>
          UPDATE
        </Button>
        {/* <h4>Already an user, login here</h4> */}
        {/* <Button variant="secondary" size="sm" onClick={() => navigate("login")}>
          login
        </Button> */}
      </Form>
    </div>
  );
}
