import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./NavbarElements";
import { ButtonContainer } from "../Global/Button";
import logo from "../../Logo.png";
import Search from "../Search/index";

const Navbar = () => {
  return (
    <Nav className="navbar justify-content-between align-content-center navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>

      <Search />
      <Link to="/cart">
        <ButtonContainer nav>
          <span>
            <i className="fas fa-shopping-cart " />
          </span>
        </ButtonContainer>
      </Link>
    </Nav>
  );
};

export default Navbar;
