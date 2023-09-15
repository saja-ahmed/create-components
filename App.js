import React, { Component } from 'react';
import './App.css';
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import Component5 from './Component5'
import Component6 from './Component6'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Component1 />
          <Component2 />
          <Component3 />
          <Component4 />
          <Component5 />
          <Component6 />
        </div>
      </div> 
    )
  }
}
export default App;

