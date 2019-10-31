import React from 'react';
import { MDBBadge, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact"
import { Link } from 'react-router-dom'
import '../App.css'
class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      cart: []
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  handleScroll(){
    this.setState({
      color:'black',
    });
  }

  render() {
    return (
      <div>
        <header>
            <MDBNavbar color="elegant-color" fixed="top" expand="md" scrolling dark transparent>
              <MDBNavbarBrand href="/">
                <strong className="navbar-brand" 
                style={{color:this.state.color}} 
                id="nav-brand">
                CIMUR
                </strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/about">About</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/contact">Contact</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBNavLink style={{color:this.state.color}} className="nav-option" to="/contact">Logout</MDBNavLink>
                  </MDBNavItem>
                
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
        </header>
      </div>
    );
  }
}

export default Navigationbar;