import React, { Component } from 'react';
import './App.css';
import Harp from './Harp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          something goes here
        </p>
        <Harp harp={this.props.harp}/>
      </div>
    );
  }
}

export default App;
