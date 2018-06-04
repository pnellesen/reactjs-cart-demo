import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

		
/*const navItems = [
      {navTo:'/home', navText:'Home'},
      {navTo:'/phones', navText:'Phones'},
      {navTo:'/plans', navText:'Plans'},
      {navTo:'/cart', navText:'Cart'},
];
*/
/*const navItemLinks = navItems.map((item, i) => 
	<NavItem key={i}>
		<NavLink tag={Link} to={item.navTo}>{item.navText}</NavLink>
	</NavItem>
);*/

export default class TopNav extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
                this.toggleCollapse = this.toggleCollapse.bind(this);
			this.state = {
					isOpen: false
			};
			console.log("Props: %O", props );
		};

	toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  }
          
        toggleCollapse() {// Use this on links - will only cause rerender if in small viewports. If in large viewport, isOpen will always be false
            if (this.state.isOpen) {
                this.setState({isOpen: !this.state.isOpen});
            }
        }
	
	render () {
		
		return (
			<div>
	        <Navbar color="dark" dark expand="md">
                  <NavbarBrand tag={Link} to="/" onClick={this.toggleCollapse}>Mobile Web App</NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="" navbar>{
                            this.props.navItems.map((item, i) => 
                                    <NavItem key={i}>
                                            <NavLink tag={Link} to={item.navTo} onClick={this.toggleCollapse}>{item.navText}</NavLink>
                                    </NavItem>
                            )
                    }</Nav>
	          </Collapse>
	        </Navbar>
	      </div>
		)
	}
}