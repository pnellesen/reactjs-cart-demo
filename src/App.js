import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { Route } from 'react-router-dom';

import TopNav from './components/TopNav';
import Home from './components/Home';
import Phones from './components/Phones';
import Plans from './components/Plans';
import Cart from './components/Cart';


import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/cart-styles.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <TopNav />
      
      
      
      
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
