import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser, checkEmail } from "store/action/actions.js";
import handleError from "./ErrorHandler";
import * as handlePass from "utils/hideShowPassword";

export default function Register() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
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

  // const handleEmail = () => {
  //   dispatch(checkEmail(persons.EMAIL_ADDRESS));
  // };

  const createUser = (event) => {
    event.preventDefault();
    // handleEmail();
    console.log(formIsValid);
    if (formIsValid) {
      dispatch(registerUser(persons));
      navigate("/");
    } else {
      alert("Fill the details in the form");
    }
  };

  const validateData = (e) => {
    let field = e.target.name;
    error[field] = handleError(e, persons, error);
    if (error[field]) {
      setError({ [field]: error[field] });
    }
    if (!(Object.keys(error).length > 1)) {
      setSuccess(true);
    }
  };
  return (
    <div className="container" style={{ width: "50%" }}>
      <h1>Registration Form</h1>
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
              // onInput={(e) => handleEmail(e)}
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
              <EyeFill
                onClick={() =>
                  handlePass.hideShowPassword(passtype, setPassType)
                }
              ></EyeFill>
            ) : (
              <EyeSlashFill
                onClick={() =>
                  handlePass.hideShowPassword(passtype, setPassType)
                }
              ></EyeSlashFill>
            )}
          </Col>
          <span className="text-danger">{error.PASSWORD}</span>
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
              <EyeFill
                onClick={() =>
                  handlePass.hideShowConPassword(conpasstype, setConPassType)
                }
              ></EyeFill>
            ) : (
              <EyeSlashFill
                onClick={() =>
                  handlePass.hideShowConPassword(conpasstype, setConPassType)
                }
              ></EyeSlashFill>
            )}
            <span className="text-danger">{error.CONFIRM_PASSWORD}</span>
          </Col>
        </Form.Group>
        <Row>
          <Col>
            <br />
            <Button variant="primary" size="lg" onClick={(e) => createUser(e)}>
              Register
            </Button>
          </Col>
          <Col sm={5}>
            <h6>Already an user, login here</h6>
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
