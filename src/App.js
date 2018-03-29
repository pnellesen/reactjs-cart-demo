import React, { Component } from 'react';
import TopNav from './components/TopNav';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/cart-styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopNav />
      <div className="container">
      	<h1>Welcome to the demo cart</h1>
       </div>
       </div>
      
    );
  }
}

export default App;
