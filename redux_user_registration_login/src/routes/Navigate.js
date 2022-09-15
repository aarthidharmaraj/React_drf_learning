import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export default class Navigate extends Component {
  render() {
    return (
      <div>
        <Link to="home">Home</Link>&nbsp;&nbsp;
        <Link to="about">About</Link>&nbsp;&nbsp;
        <Link to="register"> User Registration</Link>&nbsp;&nbsp;
        <Link to="login"> User Login</Link>&nbsp;&nbsp;
        <Link to="displayusers">Display Users</Link>&nbsp;&nbsp;
        <Outlet />
      </div>
    );
  }
}
