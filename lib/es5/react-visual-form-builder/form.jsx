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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fbemitter = require("fbemitter");

var _formValidator = require("./form-validator");

var _formValidator2 = _interopRequireDefault(_formValidator);

var _formElements = require("./form-elements");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

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
 * <Form />
 */

var ReactForm = (function(_React$Component) {
  _inherits(ReactForm, _React$Component);

  function ReactForm(props) {
    _classCallCheck(this, ReactForm);

    var _this = _possibleConstructorReturn(
      this,
      (ReactForm.__proto__ || Object.getPrototypeOf(ReactForm)).call(
        this,
        props
      )
    );

    _this.emitter = new _fbemitter.EventEmitter();
    return _this;
  }

  _createClass(ReactForm, [
    {
      key: "_checkboxesDefaultValue",
      value: function _checkboxesDefaultValue(item) {
        var _this2 = this;

        var defaultChecked = [];
        item.options.forEach(function(option) {
          defaultChecked.push(_this2.props.answer_data["option_" + option.key]);
        });
        return defaultChecked;
      }
    },
    {
      key: "_isIncorrect",
      value: function _isIncorrect(item) {
        var _this3 = this;

        var incorrect = false;
        if (item.canHaveAnswer) {
          if (
            item.element === "Checkboxes" ||
            item.element === "RadioButtons"
          ) {
            item.options.forEach(function(option) {
              var $option = _reactDom2.default.findDOMNode(
                _this3.refs[item.field_name].refs["child_ref_" + option.key]
              );
              if (
                (option.hasOwnProperty("correct") && !$option.checked) ||
                (!option.hasOwnProperty("correct") && $option.checked)
              ) {
                incorrect = true;
              }
            });
          } else {
            var $item = null;
            if (item.element === "Rating") {
              $item = {};
              $item.value = this.refs[item.field_name].refs[
                "child_ref_" + item.field_name
              ].state.rating;
              if ($item.value.toString() !== item.correct) {
                incorrect = true;
              }
            } else {
              if (item.element === "Tags") {
                $item = {};
                $item.value = this.refs[item.field_name].refs[
                  "child_ref_" + item.field_name
                ].state.value;
              } else if (item.element === "DatePicker") {
                $item = {};
                $item.value = this.refs[item.field_name].state.value;
              } else {
                $item = _reactDom2.default.findDOMNode(
                  this.refs[item.field_name].refs[
                    "child_ref_" + item.field_name
                  ]
                );
                $item.value = $item.value.trim();
              }

              if (
                $item.value.toLowerCase() !== item.correct.trim().toLowerCase()
              ) {
                incorrect = true;
              }
            }
          }
        }
        return incorrect;
      }
    },
    {
      key: "_isInvalid",
      value: function _isInvalid(item) {
        var _this4 = this;

        var invalid = false;
        if (item.required === true) {
          if (
            item.element === "Checkboxes" ||
            item.element === "RadioButtons"
          ) {
            var checked_options = 0;
            item.options.forEach(function(option) {
              var $option = _reactDom2.default.findDOMNode(
                _this4.refs[item.field_name].refs["child_ref_" + option.key]
              );
              if ($option.checked) {
                checked_options += 1;
              }
            });
            if (checked_options < 1) {
              // errors.push(item.label + ' is required!');
              invalid = true;
            }
          } else {
            var $item = null;
            if (item.element === "Rating") {
              $item = {};
              $item.value = this.refs[item.field_name].refs[
                "child_ref_" + item.field_name
              ].state.rating;
              if ($item.value === 0) {
                invalid = true;
              }
            } else {
              if (item.element === "Tags") {
                $item = {};
                $item.value = this.refs[item.field_name].refs[
                  "child_ref_" + item.field_name
                ].state.value;
              } else if (item.element === "DatePicker") {
                $item = {};
                $item.value = this.refs[item.field_name].state.value;
              } else {
                $item = _reactDom2.default.findDOMNode(
                  this.refs[item.field_name].refs[
                    "child_ref_" + item.field_name
                  ]
                );
                $item.value = $item.value.trim();
              }

              if ($item.value === undefined || $item.value.length < 1) {
                invalid = true;
              }
            }
          }
        }
        return invalid;
      }
    },
    {
      key: "_getSignatureImg",
      value: function _getSignatureImg(item) {
        var $canvas_sig = this.refs[item.field_name].refs[
          "canvas_" + item.field_name
        ];
        var base64 = $canvas_sig
          .toDataURL()
          .replace("data:image/png;base64,", "");
        var isEmpty = $canvas_sig.isEmpty();
        var $input_sig = _reactDom2.default.findDOMNode(
          this.refs[item.field_name].refs["child_ref_" + item.field_name]
        );
        if (isEmpty) {
          $input_sig.value = "";
        } else {
          $input_sig.value = base64;
        }
        return true;
      }
    },
    {
      key: "handleSubmit",
      value: function handleSubmit(e) {
        e.preventDefault();

        var $form = _reactDom2.default.findDOMNode(this.refs.form);
        var errors = this.validateForm();

        // Publish errors, if any.
        this.emitter.emit("formValidation", errors);

        // Only submit if there are no errors.
        if (errors.length < 1) {
          $form.submit();
        }
      }
    },
    {
      key: "validateForm",
      value: function validateForm() {
        var _this5 = this;

        var errors = [];
        var data_items = this.props.data;

        if (this.props.display_short) {
          data_items = this.props.data.filter(function(i) {
            return i.alternateForm === true;
          });
        }

        data_items.forEach(function(item) {
          if (item.element === "Signature") {
            _this5._getSignatureImg(item);
          }

          if (_this5._isInvalid(item)) {
            errors.push(item.label + " is required!");
          }

          if (
            _this5.props.validateForCorrectness &&
            _this5._isIncorrect(item)
          ) {
            errors.push(item.label + " was answered incorrectly!");
          }
        });

        return errors;
      }
    },
    {
      key: "render",
      value: function render() {
        var _this6 = this;

        var data_items = this.props.data;

        if (this.props.display_short) {
          data_items = this.props.data.filter(function(i) {
            return i.alternateForm === true;
          });
        }

        data_items.forEach(function(item) {
          if (
            item.readOnly &&
            item.variableKey &&
            _this6.props.variables[item.variableKey]
          ) {
            _this6.props.answer_data[item.field_name] =
              _this6.props.variables[item.variableKey];
          }
        });

        var items = data_items.map(function(item) {
          switch (item.element) {
            case "Header":
              return _react2.default.createElement(_formElements.Header, {
                mutable: true,
                key: "form_" + item.id,
                data: item
              });
            case "Paragraph":
              return _react2.default.createElement(_formElements.Paragraph, {
                mutable: true,
                key: "form_" + item.id,
                data: item
              });
            case "Label":
              return _react2.default.createElement(_formElements.Label, {
                mutable: true,
                key: "form_" + item.id,
                data: item
              });
            case "LineBreak":
              return _react2.default.createElement(_formElements.LineBreak, {
                mutable: true,
                key: "form_" + item.id,
                data: item
              });
            case "TextInput":
              return _react2.default.createElement(_formElements.TextInput, {
                ref: item.field_name,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                read_only: _this6.props.read_only,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "NumberInput":
              return _react2.default.createElement(_formElements.NumberInput, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "TextArea":
              return _react2.default.createElement(_formElements.TextArea, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "Dropdown":
              return _react2.default.createElement(_formElements.Dropdown, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "Checkboxes":
              return _react2.default.createElement(_formElements.Checkboxes, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6._checkboxesDefaultValue(item)
              });
            case "DatePicker":
              return _react2.default.createElement(_formElements.DatePicker, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "RadioButtons":
              return _react2.default.createElement(_formElements.RadioButtons, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "Rating":
              return _react2.default.createElement(_formElements.Rating, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "Image":
              return _react2.default.createElement(_formElements.Image, {
                ref: item.field_name,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "Tags":
              return _react2.default.createElement(_formElements.Tags, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "Signature":
              return _react2.default.createElement(_formElements.Signature, {
                ref: item.field_name,
                read_only: _this6.props.read_only || item.readOnly,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
            case "HyperLink":
              return _react2.default.createElement(_formElements.HyperLink, {
                mutable: true,
                key: "form_" + item.id,
                data: item
              });
            case "Download":
              return _react2.default.createElement(_formElements.Download, {
                download_path: _this6.props.download_path,
                mutable: true,
                key: "form_" + item.id,
                data: item
              });
            case "Camera":
              return _react2.default.createElement(_formElements.Camera, {
                mutable: true,
                key: "form_" + item.id,
                data: item
              });
            case "Range":
              return _react2.default.createElement(_formElements.Range, {
                ref: item.field_name,
                read_only: _this6.props.read_only,
                handleChange: _this6.handleChange,
                mutable: true,
                key: "form_" + item.id,
                data: item,
                defaultValue: _this6.props.answer_data[item.field_name]
              });
          }
        });

        var formTokenStyle = {
          display: "none"
        };

        var actionName = this.props.action_name
          ? this.props.action_name
          : "Submit";
        var backName = this.props.back_name ? this.props.back_name : "Cancel";

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(_formValidator2.default, {
            emitter: this.emitter
          }),
          _react2.default.createElement(
            "div",
            { className: "react-form-builder-form" },
            _react2.default.createElement(
              "form",
              {
                encType: "multipart/form-data",
                ref: "form",
                action: this.props.form_action,
                onSubmit: this.handleSubmit.bind(this),
                method: this.props.form_method
              },
              this.props.authenticity_token &&
                _react2.default.createElement(
                  "div",
                  { style: formTokenStyle },
                  _react2.default.createElement("input", {
                    name: "utf8",
                    type: "hidden",
                    value: "\u2713"
                  }),
                  _react2.default.createElement("input", {
                    name: "authenticity_token",
                    type: "hidden",
                    value: this.props.authenticity_token
                  }),
                  _react2.default.createElement("input", {
                    name: "task_id",
                    type: "hidden",
                    value: this.props.task_id
                  })
                ),
              items,
              _react2.default.createElement(
                "div",
                { className: "btn-toolbar" },
                !this.props.hide_actions &&
                  _react2.default.createElement("input", {
                    type: "submit",
                    className: "btn btn-school btn-big btn-agree",
                    value: actionName
                  }),
                !this.props.hide_actions &&
                  this.props.back_action &&
                  _react2.default.createElement(
                    "a",
                    {
                      href: this.props.back_action,
                      className: "btn btn-default btn-cancel btn-big"
                    },
                    backName
                  )
              )
            )
          )
        );
      }
    }
  ]);

  return ReactForm;
})(_react2.default.Component);

exports.default = ReactForm;

ReactForm.defaultProps = { validateForCorrectness: false };
