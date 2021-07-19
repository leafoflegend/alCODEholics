import React from "react";

import { Button } from "reactstrap";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <div>
      <Link to="/users">
        <Button>Users</Button>
      </Link>
    </div>
  );
};

export default Navbar;
