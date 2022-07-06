import React, { useState, useEffect, useRef, useContext } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const MyNavbar = () => {
  const [exit, setExit] = useState(false);
  const [userId, setUserId] = useState(null);

  const onClickHandler = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("displayName");
    setExit(true);
    setUserId(null);
  };

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    console.log(userId);
  }, [userId]);

  return (
    <Navbar
      bg=""
      variant="dark"
      expand="lg"
      className="text-center shadow-lg py-4">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">CIMT</NavLink>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link>
              {" "}
              <NavLink to="resources">Add Available Resource</NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="incidents"> Add Emergency Incident</NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="search-resources">Search Resources Form</NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="resource-report">Generate Resource Report</NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/login"> Login</NavLink>
            </Nav.Link>

            <Nav.Link onClick={onClickHandler}>
              <NavLink to="login">Exit</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
