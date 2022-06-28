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
  };

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));

  }, [userId]);

  return (
    <Navbar
      bg=""
      variant="dark"
      expand="lg"
      className="text-center shadow-lg py-4">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>CIMT</Link>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link>
              {" "}
              <NavLink to="/resource">Add Available Resource</NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/incident"> Add Emergency Incident</NavLink>
            </Nav.Link>

            <Nav.Link>
              <NavLink to="/search-resources">Search Resources Form</NavLink>
            </Nav.Link>

            {/* <Nav.Link>
                <NavLink to="/search-resources-results">
                  Search Resources Results
                </NavLink>
              </Nav.Link> */}

            <Nav.Link>
              <NavLink to="/resource-report">Generate Resource Report</NavLink>
            </Nav.Link>

            {/* <Nav.Link>
              <NavLink to="/login"> Login</NavLink>
            </Nav.Link> */}

            <Nav.Link onClick={onClickHandler}>
              <NavLink to="/login">{userId ? "Exit" : "Login"}</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
