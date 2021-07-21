import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { registerUserAccount } from "../api";

import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  return (
    <div
      className="RegisterForm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        marginTop: "100px"
      }}
    >
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "250px",
        }}
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            await registerUserAccount(username, password);
            history.push("/users");
          } catch (error) {}
        }}
      >
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="text"
            id="username"
            placeholder="Enter Username"
            required={true}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="text"
            id="password"
            placeholder="Enter Password"
            required={true}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
