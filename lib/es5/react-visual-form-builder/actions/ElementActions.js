"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require("reflux");

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ElementActions = _reflux2.default.createActions([
  "createElement",
  "editElement",
  "deleteElement",
  "saveData",
  "save"
]);

//module.exports = ElementActions;

//var Reflux = require('reflux');

exports.default = ElementActions;
