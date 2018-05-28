//import './App.css';

import React, { Component } from 'react';

import { ReactFormBuilder } from './react-form-builder';
import * as variables from './react-form-builder/variables';
import DemoBar from './react-form-builder/demobar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Sample BB8 FormGen Form</h1>
      
        {/*<PlayGround />*/}
        { /*<FormGen /> */}

        <DemoBar variables={variables} />
        <ReactFormBuilder variables={variables} />

      </div>
    );
  }
}

export default App;
