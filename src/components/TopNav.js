import React, { Component } from 'react';

import {
	  Collapse,
	  Navbar,
	  NavbarToggler,
	  NavbarBrand,
	  Nav,
	  NavItem,
	  NavLink,
	  UncontrolledDropdown,
	  DropdownToggle,
	  DropdownMenu,
	  DropdownItem } from 'reactstrap';



export default class TopNav extends Component {
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
	
	render () {
		return (
			<div>
	        <Navbar color="dark" inverse expand="md">
	          <NavbarBrand href="/">Mobile Web App</NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            {/*<Nav className="ml-auto" navbar>*/}
	            <Nav className="" navbar>
	              <NavItem>
	                <NavLink href="/components/Home">Home</NavLink>
	              </NavItem>
	              <NavItem>
	              <NavLink href="/components/Phones">Phones</NavLink>
	              </NavItem>
	              <NavItem>
	              <NavLink href="/components/Plans">Plans</NavLink>
	              </NavItem>
	              <NavItem>
	              <NavLink href="/components/Cart">Cart</NavLink>
	              </NavItem>
	              {/*<UncontrolledDropdown nav inNavbar>
	                <DropdownToggle nav caret>
	                  Options
	                </DropdownToggle>
	                <DropdownMenu right>
	                  <DropdownItem>
	                    Option 1
	                  </DropdownItem>
	                  <DropdownItem>
	                    Option 2
	                  </DropdownItem>
	                  <DropdownItem divider />
	                  <DropdownItem>
	                    Reset
	                  </DropdownItem>
	                </DropdownMenu>
	              </UncontrolledDropdown>*/}
	            </Nav>
	          </Collapse>
	        </Navbar>
	      </div>
		)
	}
	
	/* OLD
	render () {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
		      <div className="container">
		        <div className="navbar-header">
		          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
		            <span className="sr-only">Toggle navigation</span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		            <span className="icon-bar"></span>
		          </button>
		          <a className="navbar-brand" href="#" data-toggle="collapse" data-target=".navbar-collapse.in">Mobile Web App</a>
		        </div>
		        
		        <div id="navbar" className="collapse navbar-collapse">
		          <ul className="nav navbar-nav">
		            <li ><a href="#!" active-link data-toggle="collapse" data-target=".navbar-collapse.in">Home</a></li>
		            <li><a href="#!phones" active-link data-toggle="collapse" data-target=".navbar-collapse.in">Phones</a></li>
		            <li><a href="#!plans" active-link data-toggle="collapse" data-target=".navbar-collapse.in">Plans</a></li>
		            <li ><a href="#!cart" active-link data-toggle="collapse" data-target=".navbar-collapse.in">Cart</a></li>
		          </ul>
		        </div>
		      </div>
		    </nav>
		 );
	}
	 END OLD */
	
}