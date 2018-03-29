import React, { Component } from 'react';

export default class TopNav extends Component {
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
		        {/*
		        	NOTE: Angular 1.6 now uses "!" as the location hash-prefix. See https://stackoverflow.com/questions/41214312/exclamation-mark-after-hash-in-angularjs-app 
		        	To collapse the navbar when a link is selected, set data-target to '.navbar-collapse.in', which is only applied in small viewports for expanded navbar
		        */}
		        <div id="navbar" className="collapse navbar-collapse">
		          <ul className="nav navbar-nav">
		            <li ><a href="#!" active-link data-toggle="collapse" data-target=".navbar-collapse.in">Home</a></li>
		            <li><a href="#!phones" active-link data-toggle="collapse" data-target=".navbar-collapse.in">Phones</a></li>
		            <li><a href="#!plans" active-link data-toggle="collapse" data-target=".navbar-collapse.in">Plans</a></li>
		            <li ><a href="#!cart" active-link data-toggle="collapse" data-target=".navbar-collapse.in">Cart</a></li>
		          </ul>
		        </div>{/*//nav-collapse */}
		      </div>
		    </nav>
		 );
	}
}