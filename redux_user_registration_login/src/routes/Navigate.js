import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

export default class Navigate extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="register"> User Registration</Link>
            <Link to="login"> User Login</Link>
            <Link to="displayusers">Display Users</Link>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    );
  }
}
