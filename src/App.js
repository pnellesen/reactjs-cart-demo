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
      objCart:[],
      objCtlg:this.getCatalog(),
      objPhones:[],
      objPlans:[],
    }
    this.getItems = this.getItems.bind(this);
    this.navItemsData = navItemsFile.navItems;//This will likely not change often, if at all. No need to make it a state variable.
  }

  componentWillMount() {
    
  }
  
  componentDidMount() {
    this.setState({
      objPhones:this.getItems('phone'),
      objPlans: this.getItems('plan')
    })
    
    console.log("Phones: %O", this.state.objPhones);
  }

  getCatalog() {
    // This could be any method of data retrieval. Using an import from file system, but could easily change to an API call if needed.
    return catalogItemsFile.catalogItems;
  }


  
  getItems(type) {
    var itemList = [];
    var catalog = this.state.objCtlg;
    for (var i = 0; i< catalog.length; i++) {
      if (catalog[i].type === type) itemList.push(catalog[i].itemData);
    }
    return itemList;
  }

  getPlans() {

  }

  render() {
    
    return (
      <BrowserRouter>
      <div className="App">
      <TopNav navItems={this.navItemsData}/>
  
      <Route exact path="/" render={(props) => <Home {...props} phoneList={this.state.objPhones} />} />
      <Route path="/home" render={(props) => <Home {...props} phoneList={this.state.objPhones} />}  />
      <Route path="/phones" component={Phones} />
      <Route path="/plans" component={Plans} />
      <Route path="/cart" component={Cart} />
      
      
       </div>
      </BrowserRouter>
    );
  }
}

export default App;
