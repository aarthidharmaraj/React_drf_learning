import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { loginUser } from "store/action/actions";
// import handleError from "./ErrorHandler";
import { hideShowPassword } from "utils/hideShowPassword";
import { handleInputChange } from "utils/handleInput";
import { validate } from "utils/validate";
import { debounce } from "lodash";

export default function UserLogin() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [persons, setPersons] = useState({});
  const [error, setError] = useState({});
  const [passtype, setPassType] = useState("password");
  const [formIsValid, setSuccess] = useState(false);

  const handleInputChange = debounce((event) => {
    persons[event.target.name] = event.target.value;
    setPersons(persons);
    console.log(persons);
  }, 2000);

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
        <h1> Login Form</h1>
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
              onBlur={(e) => validate(e, persons, error, setError, setSuccess)}
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
              onBlur={(e) => validate(e, persons, error, setError, setSuccess)}
            />
          </Col>
          <Col>
            {passtype === "text" ? (
              <EyeFill
                onClick={() => hideShowPassword(passtype, setPassType)}
              ></EyeFill>
            ) : (
              <EyeSlashFill
                onClick={() => hideShowPassword(passtype, setPassType)}
              ></EyeSlashFill>
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
