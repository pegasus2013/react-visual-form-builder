"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require("reflux");

var _reflux2 = _interopRequireDefault(_reflux);

var _ElementActions = require("../actions/ElementActions");

var _ElementActions2 = _interopRequireDefault(_ElementActions);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _data; /*var Reflux = require('reflux');
           var ElementActions = require('../actions/ElementActions');*/

var _saveUrl;

var ElementStore = _reflux2.default.createStore({
  init: function init() {
    this.listenTo(_ElementActions2.default.createElement, this._create);
    this.listenTo(_ElementActions2.default.deleteElement, this._delete);
    this.listenTo(_ElementActions2.default.save, this.save);
    this.listenTo(_ElementActions2.default.saveData, this._updateOrder);
  },

  load: function load(urlOrData, saveUrl) {
    var self = this;
    _saveUrl = saveUrl;

    if (typeof urlOrData == "string" || urlOrData instanceof String) {
      _jquery2.default.ajax({
        url: urlOrData,
        success: function success(data) {
          _data = data;
          self.trigger(_data);
        }
      });
    } else {
      _data = urlOrData;
      self.trigger(_data);
    }
  },

  _create: function _create(element) {
    _data.push(element);
    this.trigger(_data);
    this.save();
  },

  _delete: function _delete(element) {
    var index = _data.indexOf(element);
    _data.splice(index, 1);
    this.trigger(_data);
    this.save();
  },

  _updateOrder: function _updateOrder(elements) {
    _data = elements;
    this.trigger(_data);
    this.save();
  },

  save: function save() {
    if (_saveUrl) {
      _jquery2.default.ajax({
        type: "POST",
        url: _saveUrl,
        data: {
          task_data: JSON.stringify(_data)
        },
        dataType: "json",
        success: function success(data) {
          console.log("Saved... ", arguments);
        }
      });
    }
  }
});

exports.default = ElementStore;
