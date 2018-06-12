//import './App.css';

import React, { Component } from 'react';

import { ReactFormBuilder } from './react-visual-form-builder'; //./react-visual-form-builder/index
import * as variables from './react-visual-form-builder/variables';
import DemoBar from './react-visual-form-builder/demobar';


class VisualFormBuilder extends Component {
  render() {
    return (

      <div>
        
        <DemoBar variables={variables} />
        <ReactFormBuilder variables={variables} />
        
      </div>
    );
  }
}

export default VisualFormBuilder;
