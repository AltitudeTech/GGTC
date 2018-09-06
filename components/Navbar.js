import React, { Component } from "react";
// import Link from 'next/link';
// import { withRouter } from 'next/router'
import SvgLoader from 'bv-react-svgloader'

import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  // NavLink
} from "reactstrap";

// const links = ;

class NavBar extends Component {
  // state = {
  //   isOpen: false
  // };
  //
  // toggle = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen
  //   });
  // };

  // activeMenu = (menu) => (menu==this.props.router.pathname ? 'menu-active' : '')

  render() {
    return (
      <Navbar
        color="transparent"
        light
        expand="md">
        <NavbarBrand href="/"><SvgLoader src='/static/images/logo.svg' className="svg-logo"/></NavbarBrand>
        <Nav className="ml-auto" navbar>
          <SvgLoader src='/static/images/cross.svg' className="svg-cross"/>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
