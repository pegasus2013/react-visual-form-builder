"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _headerBar = require("./header-bar");

var _headerBar2 = _interopRequireDefault(_headerBar);

var _reactTextareaAutosize = require("react-textarea-autosize");

var _reactTextareaAutosize2 = _interopRequireDefault(_reactTextareaAutosize);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

//var SortableItemMixin = require('react-sortable-items/SortableItemMixin')

exports.default = _react2.default.createClass({
  displayName: "repl",

  //mixins: [SortableItemMixin],
  getDefaultProps: function getDefaultProps() {
    return {
      className: "rfb-item"
    };
  },
  getInitialState: function getInitialState() {
    return {
      changedValue: this.props.data.value,
      data: this.props.data
    };
  },
  render: function render() {
    var headerClasses = "dynamic-input " + this.props.data.element + "-input";

    return this.renderWithSortable(
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_headerBar2.default, {
          name: this.props.data.text,
          onDestroy: this.props.onDestroy,
          onEdit: this.props.onEdit,
          static: this.props.data.static,
          required: this.props.data.required
        }),
        this.props.children
      )
    );
  }
});
