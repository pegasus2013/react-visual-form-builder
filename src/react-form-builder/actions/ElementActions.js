//var Reflux = require('reflux');

import Reflux from 'reflux';

var ElementActions = Reflux.createActions([
  'createElement',
  'editElement',
  'deleteElement',
  'saveData',
  'save'
]);

//module.exports = ElementActions;

export default ElementActions;