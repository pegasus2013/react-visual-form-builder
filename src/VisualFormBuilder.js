import React, { Component } from 'react';

import ReactFormBuilder  from './react-visual-form-builder'; //./react-visual-form-builder/index
import * as variables from './react-visual-form-builder/variables';
import DemoBar from './react-visual-form-builder/demobar';
import ReactFormGenerator from './react-visual-form-builder/form';


let VisualFormBuilder = {}

class VisualBuilder extends Component {

  render() {
    
    return (

      <div>
        
        <DemoBar variables={variables} />
        <ReactFormBuilder variables={variables} />
        
      </div>
    );

  }

}

VisualFormBuilder.Builder = VisualBuilder;
VisualFormBuilder.Generator = ReactFormGenerator;

export default VisualFormBuilder;
