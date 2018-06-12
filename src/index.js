import React from 'react';
import ReactDOM from 'react-dom';

import VisualFormBuilder from './VisualFormBuilder';
import registerServiceWorker from './registerServiceWorker';

//import './index.css';
import './react-visual-form-builder/css/application.css';


ReactDOM.render(<VisualFormBuilder />, document.getElementById('visual-form-builder'));

registerServiceWorker();
