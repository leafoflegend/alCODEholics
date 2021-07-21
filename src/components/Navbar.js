import React from "react";

import { Button } from "reactstrap";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
      }}
    >
      <Link to="/users">
        <Button color="info">List of Users</Button>
      </Link>
      <Link to="/alcohol">
        <Button color="danger">List of Alcohol</Button>
      </Link>
      <Link to="/registerUserAccount">
        <Button color="primary">Register For a User Account</Button>
      </Link>
    </div>
  );
};

export default Navbar;
