import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SignIn from "../SignIn";
import { NavLink } from "react-router-dom";
const Navbarss = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="">
      <Container>
        <Nav>
          <div className="px-4">
            <NavLink to="/">User Registration</NavLink>
          </div>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
        </Nav>

        <Nav>
          <NavLink to="signin">Sigh In</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbarss;
