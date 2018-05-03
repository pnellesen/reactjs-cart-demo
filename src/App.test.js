import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var myApp = new App();
var myCatalog = {};
var myPhones = {};
var myPlans = {};
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('cart object exists', () => {
  expect(myApp.state.objCart).toBeDefined();
});

it ('can get Catalog', () => {
  myCatalog = myApp.getCatalog();
  expect(myCatalog.length).toBeDefined()
})

it('catalog state object contains the catalog data', () => {
  expect(myApp.state.objCtlg).toEqual(myCatalog);
})

it ('can get Phone list', () => {
  myPhones = myApp.getItems('phone');
  expect(myPhones.length).toBeDefined();
  console.log("myPhones: %O", myPhones);
})

it ('can get Plan list', () => {
  myPlans = myApp.getItems('plans');
  expect(myPlans.length).toBeDefined();
  console.log("myPlans: %O", myPlans);
})
