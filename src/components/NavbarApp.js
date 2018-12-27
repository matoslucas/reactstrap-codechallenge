import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class NavbarApp extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar dark expand="md" color="dark">
        <NavbarBrand href="/">Carousel</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar >
            <NavItem>
              <NavLink href="#" active> Home </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                Link
                </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" disabled>
                Disabled
                </NavLink>
            </NavItem>
          </Nav>
          <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarApp;