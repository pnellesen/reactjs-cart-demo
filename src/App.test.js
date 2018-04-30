import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var myApp = new App();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('cart object exists', () => {
  expect(myApp.state.objCart).toBeDefined();
})
