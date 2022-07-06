import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "../api/axios";
import { Button, Alert, Card, Form, Container } from "react-bootstrap";
import {useNavigate } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";
import AuthContext from "../context/AuthProvider";
import { FileEarmarkRuledFill } from "react-bootstrap-icons";

const Login = () => {
  const LOGIN_URL = "/users/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [validated, setValidated] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [username]);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    try {
      const data = { username: username, password: password };
      const response = await axios.post(LOGIN_URL, data);
      if (response.data.error) {
        setAlert(true);
      } else {
        localStorage.setItem("userId", response.data.id);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Container>
        {alert && (
          <Alert variant="danger">
            {" "}
            &nbsp; <FiAlertCircle /> &nbsp; Invalid login{" "}
          </Alert>
        )}
      </Container>
      <Container className="my-5">
        <Form className="mt-5" action="" noValidate validated={validated}>
          <h3 className="mb-5">LOGIN</h3>
          <Card className="mb-5 p-5 darkMode" style={{ width: "100%" }}>
            <Card.Body className="darkMode">
              <Card.Title className="mb-5 text-center">
                Welcome to the CERT Incident Management Tool (CIMT)
              </Card.Title>
              <Card.Text>
                The CIMT is an online web application that manages available
                resources and their assignments to various emergency incidents
                that may have already occurred, are happening or may happen in
                the future in and around the Pasadena City College campus.
                Emergency incidents may include, but not limited to, hazardous
                waste spills, acts of terrorism, nuclear incident, campus
                shooting, car crashes with fatalities, flooding, fire, etc.
              </Card.Text>
            </Card.Body>
          </Card>
          <Form.Group className="mb-3" controlId="text" hasValidation>
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="text"
              name="username"
              placeholder="default username: 'cat1'"
              onChange={onChangeUsername}
              autoComplete="off"
              style={{ backgroundColor: "#d4c9df" }}
            />{" "}
            <Form.Control.Feedback type="invalid">
              Please provide a valid username.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="password" hasValidation>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              placeholder="default password: 'cat1'"
              onChange={onChangePassword}
              autoComplete="off"
              style={{ backgroundColor: "#d4c9df" }}
            />{" "}
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>

          <Container className="">
            <Button
              onClick={onSubmit}
              variant="primary"
              className="my-btn m-5  ps-5 pe-5 shadow-lg">
              Submit
            </Button>
          </Container>
        </Form>
      </Container>
    </>
  );
};

export default Login;
