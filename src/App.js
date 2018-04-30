import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { Route } from 'react-router-dom';

import TopNav from './components/TopNav';
import Home from './components/Home';
import Phones from './components/Phones';
import Plans from './components/Plans';
import Cart from './components/Cart';
//import PhoneCarousel from './components/PhoneCarousel';


import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/cart-styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objCart:{},
      objPhones:{},
      objPlans:{}
      
    }
    
      
    
  }
  
   navItems = [
    {navTo:'/home', navText:'Home'},
    {navTo:'/phones', navText:'Phones'},
    {navTo:'/plans', navText:'Plans'},
    {navTo:'/cart', navText:'Cart'},
  ];


  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
      <TopNav navItems={this.navItems}/>
      
      
      
      
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/phones" component={Phones} />
      <Route path="/plans" component={Plans} />
      <Route path="/cart" component={Cart} />
      
      
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
