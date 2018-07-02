import './react-visual-form-builder/css/application.css';

import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import VisualFormBuilder from './VisualFormBuilder';


ReactDOM.render(<VisualFormBuilder />, document.getElementById('react-visual-form-builder'));

registerServiceWorker();
