"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _UUID = require("./UUID");

var _UUID2 = _interopRequireDefault(_UUID);

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
 * <DynamicOptionList />
 */

var DynamicOptionList = (function(_React$Component) {
  _inherits(DynamicOptionList, _React$Component);

  function DynamicOptionList(props) {
    _classCallCheck(this, DynamicOptionList);

    var _this = _possibleConstructorReturn(
      this,
      (
        DynamicOptionList.__proto__ || Object.getPrototypeOf(DynamicOptionList)
      ).call(this, props)
    );

    _this.state = {
      element: _this.props.element,
      data: _this.props.data,
      dirty: false
    };
    return _this;
  }

  _createClass(DynamicOptionList, [
    {
      key: "_setValue",
      value: function _setValue(text) {
        return text.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
      }
    },
    {
      key: "editOption",
      value: function editOption(option_index, e) {
        var this_element = this.state.element;
        var val =
          this_element.options[option_index].value !==
          this._setValue(this_element.options[option_index].text)
            ? this_element.options[option_index].value
            : this._setValue(e.target.value);

        this_element.options[option_index].text = e.target.value;
        this_element.options[option_index].value = val;
        this.setState({
          element: this_element,
          dirty: true
        });
      }
    },
    {
      key: "editValue",
      value: function editValue(option_index, e) {
        var this_element = this.state.element;
        var val =
          e.target.value === ""
            ? this._setValue(this_element.options[option_index].text)
            : e.target.value;
        this_element.options[option_index].value = val;
        this.setState({
          element: this_element,
          dirty: true
        });
      }
    },
    {
      key: "editOptionCorrect",
      value: function editOptionCorrect(option_index, e) {
        var this_element = this.state.element;
        if (this_element.options[option_index].hasOwnProperty("correct")) {
          delete this_element.options[option_index]["correct"];
        } else {
          this_element.options[option_index].correct = true;
        }
        this.setState({ element: this_element });
        this.props.updateElement.call(this.props.preview, this_element);
      }
    },
    {
      key: "updateOption",
      value: function updateOption() {
        var this_element = this.state.element;
        // to prevent ajax calls with no change
        if (this.state.dirty) {
          this.props.updateElement.call(this.props.preview, this_element);
          this.setState({ dirty: false });
        }
      }
    },
    {
      key: "addOption",
      value: function addOption(index) {
        var this_element = this.state.element;
        this_element.options.splice(index + 1, 0, {
          value: "",
          text: "",
          key: _UUID2.default.uuid()
        });
        this.props.updateElement.call(this.props.preview, this_element);
      }
    },
    {
      key: "removeOption",
      value: function removeOption(index) {
        var this_element = this.state.element;
        this_element.options.splice(index, 1);
        this.props.updateElement.call(this.props.preview, this_element);
      }
    },
    {
      key: "render",
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          "div",
          { className: "dynamic-option-list" },
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "div",
                { className: "row" },
                _react2.default.createElement(
                  "div",
                  { className: "col-sm-6" },
                  _react2.default.createElement("b", null, "Options")
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-sm-2" },
                  _react2.default.createElement("b", null, "Value")
                ),
                _react2.default.createElement(
                  "div",
                  { className: "col-sm-4" },
                  _react2.default.createElement("b", null, "Correct")
                )
              )
            ),
            this.props.element.options.map(function(option, index) {
              var this_key = "edit_" + option.key;
              var val =
                option.value !== _this2._setValue(option.text)
                  ? option.value
                  : "";
              return _react2.default.createElement(
                "li",
                { className: "clearfix", key: this_key },
                _react2.default.createElement(
                  "div",
                  { className: "row" },
                  _react2.default.createElement(
                    "div",
                    { className: "col-sm-6" },
                    _react2.default.createElement("input", {
                      tabIndex: index + 1,
                      className: "form-control",
                      style: { width: "100%" },
                      type: "text",
                      name: "text_" + index,
                      placeholder: "Option text",
                      value: option.text,
                      onBlur: _this2.updateOption.bind(_this2),
                      onChange: _this2.editOption.bind(_this2, index)
                    })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-sm-2" },
                    _react2.default.createElement("input", {
                      className: "form-control",
                      type: "text",
                      name: "value_" + index,
                      value: val,
                      onChange: _this2.editValue.bind(_this2, index)
                    })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-sm-1" },
                    _react2.default.createElement("input", {
                      className: "form-control",
                      type: "checkbox",
                      value: "1",
                      onChange: _this2.editOptionCorrect.bind(_this2, index),
                      checked: option.hasOwnProperty("correct")
                    })
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "col-sm-3" },
                    _react2.default.createElement(
                      "div",
                      { className: "dynamic-options-actions-buttons" },
                      _react2.default.createElement(
                        "button",
                        {
                          onClick: _this2.addOption.bind(_this2, index),
                          className: "btn btn-success"
                        },
                        _react2.default.createElement("i", {
                          className: "fa fa-plus-circle"
                        })
                      ),
                      index > 0 &&
                        _react2.default.createElement(
                          "button",
                          {
                            onClick: _this2.removeOption.bind(_this2, index),
                            className: "btn btn-danger"
                          },
                          _react2.default.createElement("i", {
                            className: "fa fa-minus-circle"
                          })
                        )
                    )
                  )
                )
              );
            })
          )
        );
      }
    }
  ]);

  return DynamicOptionList;
})(_react2.default.Component);

exports.default = DynamicOptionList;
