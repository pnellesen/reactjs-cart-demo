import React, { Component } from 'react';
import PhoneCarousel from './PhoneCarousel';
	
export default class Home extends Component {
	render () {
		return (
				<div className="container">
		      	<h1>Welcome to the demo cart</h1>
		      	<PhoneCarousel items={this.props.phoneList}/>
		      	</div>
		       
		       
		       
		       
		);
	}
}