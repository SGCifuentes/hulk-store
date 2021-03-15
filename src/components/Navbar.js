import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>

      <Link to="/cart" className="ml-auto">
        <ButtonContainer nav>
          <span className="mr-2">
            <i className="fas fa-shopping-cart " />
          </span>
        </ButtonContainer>
      </Link>
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #001f01;
`;

export default Navbar;
