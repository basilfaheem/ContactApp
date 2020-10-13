//TODO: DONE set NavbarBrand to go to home page and export Header

import React from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="navbar">
  <NavbarBrand tag={Link} to="/" className="text-white">
       Contact App
      </NavbarBrand>
      <NavbarText className="text-white float-right">
        A simple Contact app
      </NavbarText>
</div>
    
    /*
    <Navbar color="dark" light className="navbar" >
      <NavbarBrand tag={Link} to="/" className="text-white">
        LCO Contact App
      </NavbarBrand>
      <NavbarText className="text-white float-right">
        A simple Contact app
      </NavbarText>
    </Navbar>

    */
  );
};

export default Header;
