import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
const UserLogout = () => {
  let navigate = useNavigate();
  const handleLogOut = () => {
    <Alert variant="warning">The user will be logged out from the page</Alert>;
    if (window.confirm("Are you sure to log out from the page?")) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>
        Welcome User<span></span>
      </h1>

      <Button variant="warning" size="lg" onClick={() => handleLogOut()}>
        LOG OUT
      </Button>
    </div>
  );
};

export default UserLogout;
