"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactFormGenerator = exports.ReactFormBuilder = undefined;

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _preview = require("./preview");

var _preview2 = _interopRequireDefault(_preview);

var _toolbar = require("./toolbar");

var _toolbar2 = _interopRequireDefault(_toolbar);

var _ElementActions = require("./actions/ElementActions");

var _ElementActions2 = _interopRequireDefault(_ElementActions);

var _form = require("./form");

var _form2 = _interopRequireDefault(_form);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
/**
 * <ReactFormBuilder />
 */

var FormBuilders = {};

var ReactFormBuilder = (function(_React$Component) {
  _inherits(ReactFormBuilder, _React$Component);

  function ReactFormBuilder(props) {
    _classCallCheck(this, ReactFormBuilder);

    var _this = _possibleConstructorReturn(
      this,
      (
        ReactFormBuilder.__proto__ || Object.getPrototypeOf(ReactFormBuilder)
      ).call(this, props)
    );

    _this.state = {
      editMode: false,
      editElement: null
      //document.addEventListener("click", this.editModeOff.bind(this));
    };
    return _this;
  }

  _createClass(ReactFormBuilder, [
    {
      key: "editModeOn",
      value: function editModeOn(data, e) {
        e.stopPropagation();
        //e.preventDefault();

        console.log("editModeOn", data, e);

        if (this.state.editMode) {
          this.setState({ editMode: !this.state.editMode, editElement: null });
        } else {
          this.setState({ editMode: !this.state.editMode, editElement: data });
        }
      }
    },
    {
      key: "manualEditModeOff",
      value: function manualEditModeOff() {
        if (this.state.editMode) {
          this.setState({
            editMode: false,
            editElement: null
          });
        }
      }
    },
    {
      key: "editModeOff",
      value: function editModeOff(e) {
        var $menu = (0, _jquery2.default)(".edit-form");
        var click_is_outside_menu =
          !$menu.is(e.target) && $menu.has(e.target).length === 0;

        if (this.state.editMode && click_is_outside_menu) {
          this.setState({
            editMode: false,
            editElement: null
          });
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var toolbarProps = {};

        if (this.props.toolbarItems)
          toolbarProps.items = this.props.toolbarItems;

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { className: "react-form-builder clearfix" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(_preview2.default, {
                files: this.props.files,
                manualEditModeOff: this.manualEditModeOff.bind(this),
                parent: this,
                url: this.props.url,
                saveUrl: this.props.saveUrl,
                editModeOn: this.editModeOn,
                editMode: this.state.editMode,
                variables: this.props.variables,
                editElement: this.state.editElement
              }),
              _react2.default.createElement(_toolbar2.default, toolbarProps)
            )
          )
        );
      }
    }
  ]);

  return ReactFormBuilder;
})(_react2.default.Component);

/*FormBuilders.ReactFormBuilder = ReactFormBuilder;
FormBuilders.ReactFormGenerator = ReactFormGenerator;

module.exports = FormBuilders;*/

exports.ReactFormBuilder = ReactFormBuilder;
exports.ReactFormGenerator = _form2.default;
