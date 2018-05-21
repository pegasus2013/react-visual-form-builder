import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormGen from './FormGen';

import { PlayGround } from './playground/PlayGround';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Sample BB8 FormGen Form</h1>

        <PlayGround />
        { /*<FormGen /> */}


      </div>
    );
  }
}

export default App;
