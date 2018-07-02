import React, { Component } from 'react';

import ReactFormBuilder from './react-visual-form-builder';
import DemoBar from './react-visual-form-builder/demobar';
import ReactFormGenerator from './react-visual-form-builder/form';
import * as variables from './react-visual-form-builder/variables';


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

VisualFormBuilder = VisualBuilder;
VisualFormBuilder.Builder = ReactFormBuilder;
VisualFormBuilder.Generator = ReactFormGenerator;

export default VisualFormBuilder;
