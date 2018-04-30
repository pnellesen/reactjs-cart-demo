import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { Route } from 'react-router-dom';

import TopNav from './components/TopNav';
import Home from './components/Home';
import Phones from './components/Phones';
import Plans from './components/Plans';
import Cart from './components/Cart';
//import PhoneCarousel from './components/PhoneCarousel';

// Would expect the following to be pulled from an API or service rather
// than from file system.
import navItemsFile from './appData/navItems.json';
import catalogItemsFile from './appData/catalogItems.json';

import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/cart-styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objCart:{},
      objCtlg:catalogItemsFile.catalogItems,
      objPhones:{},
      objPlans:{},
    }
    this.navItemsData = navItemsFile.navItems;//This will likely not change often, if at all. No need to make it a state variable.
    this.phoneList = [];
    for (var i = 0; i< this.state.objCtlg.length; i++) {
      if (this.state.objCtlg[i].type === 'phone') this.phoneList.push(this.state.objCtlg[i].phoneData);
    }
  }
  
  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
      <TopNav navItems={this.navItemsData}/>
  
      <Route exact path="/" render={(props) => <Home {...props} phoneList={this.phoneList} />} />
      <Route path="/home" render={(props) => <Home {...props} phoneList={this.phoneList} />}  />
      <Route path="/phones" component={Phones} />
      <Route path="/plans" component={Plans} />
      <Route path="/cart" component={Cart} />
      
      
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
