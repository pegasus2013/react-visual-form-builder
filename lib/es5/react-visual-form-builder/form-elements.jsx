"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Range = exports.Camera = exports.Download = exports.HyperLink = exports.Tags = exports.Rating = exports.Image = exports.RadioButtons = exports.DatePicker = exports.Checkboxes = exports.Signature = exports.Dropdown = exports.TextArea = exports.NumberInput = exports.TextInput = exports.LineBreak = exports.Label = exports.Paragraph = exports.Header = undefined;

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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSlider = require("react-bootstrap-slider");

var _reactBootstrapSlider2 = _interopRequireDefault(_reactBootstrapSlider);

var _reactDatepicker = require("react-datepicker");

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _reactSelect = require("react-select");

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _reactSignaturePad = require("react-signature-pad");

var _reactSignaturePad2 = _interopRequireDefault(_reactSignaturePad);

var _headerBar = require("./header-bar");

var _headerBar2 = _interopRequireDefault(_headerBar);

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

//import SortableItemMixin from 'react-sortable-items/SortableItemMixin';
//import StarRating from './star-rating';
//import xss from 'xss';
var FormElements = {};

/*let myxss = new xss.FilterXSS({
  whiteList: {
    u: [],
    br: [],
    b: [],
    i: [],
    ol:['style'],
    ul: ['style'],
    li: [],
    p: ['style'],
    sub: [],
    sup: [],
    div: ['style'],
    em: [],
    strong: [],
    span: ['style']
  }
});*/

var Header = (function(_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(
      this,
      (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments)
    );
  }

  _createClass(Header, [
    {
      key: "render",

      //mixins: [SortableItemMixin],
      value: function render() {
        var headerClasses =
          "dynamic-input " + this.props.data.element + "-input";
        var classNames = "static";
        if (this.props.data.bold) {
          classNames += " bold";
        }
        if (this.props.data.italic) {
          classNames += " italic";
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement("h3", {
            className: classNames,
            dangerouslySetInnerHTML: { __html: this.props.data.content }
          })
        );
      }
    }
  ]);

  return Header;
})(_react2.default.Component);

var Paragraph = (function(_React$Component2) {
  _inherits(Paragraph, _React$Component2);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _possibleConstructorReturn(
      this,
      (Paragraph.__proto__ || Object.getPrototypeOf(Paragraph)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(Paragraph, [
    {
      key: "render",

      //mixins: [SortableItemMixin],
      value: function render() {
        var classNames = "static";
        if (this.props.data.bold) {
          classNames += " bold";
        }
        if (this.props.data.italic) {
          classNames += " italic";
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement("p", {
            className: classNames,
            dangerouslySetInnerHTML: { __html: this.props.data.content }
          })
        );
      }
    }
  ]);

  return Paragraph;
})(_react2.default.Component);

var Label = (function(_React$Component3) {
  _inherits(Label, _React$Component3);

  function Label() {
    _classCallCheck(this, Label);

    return _possibleConstructorReturn(
      this,
      (Label.__proto__ || Object.getPrototypeOf(Label)).apply(this, arguments)
    );
  }

  _createClass(Label, [
    {
      key: "render",

      //mixins: [SortableItemMixin],
      value: function render() {
        var classNames = "static";
        if (this.props.data.bold) {
          classNames += " bold";
        }
        if (this.props.data.italic) {
          classNames += " italic";
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement("label", {
            className: classNames,
            dangerouslySetInnerHTML: { __html: this.props.data.content }
          })
        );
      }
    }
  ]);

  return Label;
})(_react2.default.Component);

var LineBreak = (function(_React$Component4) {
  _inherits(LineBreak, _React$Component4);

  function LineBreak() {
    _classCallCheck(this, LineBreak);

    return _possibleConstructorReturn(
      this,
      (LineBreak.__proto__ || Object.getPrototypeOf(LineBreak)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(LineBreak, [
    {
      key: "render",

      //mixins: [SortableItemMixin],
      value: function render() {
        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement("hr", null)
        );
      }
    }
  ]);

  return LineBreak;
})(_react2.default.Component);

var TextInput = (function(_React$Component5) {
  _inherits(TextInput, _React$Component5);

  function TextInput() {
    _classCallCheck(this, TextInput);

    return _possibleConstructorReturn(
      this,
      (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(TextInput, [
    {
      key: "render",

      //mixins: [SortableItemMixin],
      value: function render() {
        var props = {};
        props.type = "text";
        props.className = "form-control";
        props.name = this.props.data.field_name;

        if (this.props.mutable) {
          props.defaultValue = this.props.defaultValue;
          props.ref = "child_ref_" + this.props.data.field_name;
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        if (this.props.read_only) {
          props.disabled = "disabled";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            _react2.default.createElement("input", props)
          )
        );
      }
    }
  ]);

  return TextInput;
})(_react2.default.Component);

var NumberInput = (function(_React$Component6) {
  _inherits(NumberInput, _React$Component6);

  function NumberInput() {
    _classCallCheck(this, NumberInput);

    return _possibleConstructorReturn(
      this,
      (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(NumberInput, [
    {
      key: "render",

      //mixins: [SortableItemMixin],
      value: function render() {
        var props = {};
        props.type = "number";
        props.className = "form-control";
        props.name = this.props.data.field_name;

        if (this.props.mutable) {
          props.defaultValue = this.props.defaultValue;
          props.ref = "child_ref_" + this.props.data.field_name;
        }

        if (this.props.read_only) {
          props.disabled = "disabled";
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            _react2.default.createElement("input", props)
          )
        );
      }
    }
  ]);

  return NumberInput;
})(_react2.default.Component);

var TextArea = (function(_React$Component7) {
  _inherits(TextArea, _React$Component7);

  function TextArea() {
    _classCallCheck(this, TextArea);

    return _possibleConstructorReturn(
      this,
      (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(TextArea, [
    {
      key: "render",

      //mixins: [SortableItemMixin],
      value: function render() {
        var props = {};
        props.className = "form-control";
        props.name = this.props.data.field_name;

        if (this.props.read_only) {
          props.disabled = "disabled";
        }

        if (this.props.mutable) {
          props.defaultValue = this.props.defaultValue;
          props.ref = "child_ref_" + this.props.data.field_name;
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            _react2.default.createElement("textarea", props)
          )
        );
      }
    }
  ]);

  return TextArea;
})(_react2.default.Component);

var DatePicker = (function(_React$Component8) {
  _inherits(DatePicker, _React$Component8);

  function DatePicker() {
    _classCallCheck(this, DatePicker);

    return _possibleConstructorReturn(
      this,
      (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(DatePicker, [
    {
      key: "getInitialState",

      // mixins: [SortableItemMixin],

      value: function getInitialState() {
        var value, internalValue;

        if (
          this.props.data.defaultToday &&
          (this.props.defaultValue === "" ||
            this.props.defaultValue === undefined)
        ) {
          value = (0, _moment2.default)().format("MM/DD/YYYY");
          internalValue = (0, _moment2.default)();
        } else {
          value = this.props.defaultValue;

          if (
            this.props.defaultValue !== "" &&
            this.props.defaultValue !== undefined
          ) {
            internalValue = (0, _moment2.default)(value, "MM/DD/YYYY");
          }
        }

        return {
          value: value,
          internalValue: internalValue,
          placeholder: "mm/dd/yyyy",
          defaultToday: this.props.data.defaultToday
        };
      }
    },
    {
      key: "handleChange",
      value: function handleChange(dt) {
        if (dt && dt.target) {
          var placeholder =
            dt && dt.target && dt.target.value === "" ? "mm/dd/yyyy" : "";
          var formattedDate = dt.target.value
            ? (0, _moment2.default)(dt.target.value).format("YYYY-MM-DD")
            : "";

          this.setState({
            value: formattedDate,
            internalValue: formattedDate,
            placeholder: placeholder
          });
        } else {
          this.setState({
            value: dt ? dt.format("MM/DD/YYYY") : "",
            internalValue: dt,
            placeholder: placeholder
          });
        }
      }
    },
    {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.data.defaultToday && !this.state.defaultToday) {
          this.state.value = (0, _moment2.default)().format("MM/DD/YYYY");
          this.state.internalValue = (0, _moment2.default)(this.state.value);
        } else if (!this.props.data.defaultToday && this.state.defaultToday) {
          this.state.value = "";
          this.state.internalValue = undefined;
        }

        this.state.defaultToday = this.props.data.defaultToday;
      }
    },
    {
      key: "render",
      value: function render() {
        var props = {};
        props.type = "date";
        props.className = "form-control";
        props.name = this.props.data.field_name;

        var iOS =
          /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

        if (this.props.mutable) {
          props.defaultValue = this.props.defaultValue;
          props.ref = "child_ref_" + this.props.data.field_name;
        }

        if (this.props.read_only) {
          props.disabled = "disabled";
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            _react2.default.createElement(
              "div",
              null,
              this.props.data.readOnly &&
                _react2.default.createElement("input", {
                  type: "text",
                  name: props.name,
                  ref: props.ref,
                  readOnly: "true",
                  dateFormat: "MM/DD/YYYY",
                  placeholder: this.state.placeholder,
                  value: this.state.value,
                  className: "form-control"
                }),
              iOS &&
                !this.props.data.readOnly &&
                _react2.default.createElement("input", {
                  type: "date",
                  name: props.name,
                  ref: props.ref,
                  onChange: this.handleChange,
                  dateFormat: "MM/DD/YYYY",
                  placeholder: this.state.placeholder,
                  value: this.state.value,
                  className: "form-control"
                }),
              !iOS &&
                !this.props.data.readOnly &&
                _react2.default.createElement(_reactDatepicker2.default, {
                  name: props.name,
                  ref: props.ref,
                  onChange: this.handleChange,
                  selected: this.state.internalValue,
                  todayButton: "Today",
                  className: "form-control",
                  isClearable: true,
                  dateFormat: "MM/DD/YYYY",
                  placeholderText: "mm/dd/yyyy"
                })
            )
          )
        );
      }
    }
  ]);

  return DatePicker;
})(_react2.default.Component);

var Dropdown = (function(_React$Component9) {
  _inherits(Dropdown, _React$Component9);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _possibleConstructorReturn(
      this,
      (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(Dropdown, [
    {
      key: "render",

      // mixins: [SortableItemMixin],
      value: function render() {
        var props = {};
        props.className = "form-control";
        props.name = this.props.data.field_name;

        if (this.props.mutable) {
          props.defaultValue = this.props.defaultValue;
          props.ref = "child_ref_" + this.props.data.field_name;
        }

        if (this.props.read_only) {
          props.disabled = "disabled";
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            _react2.default.createElement(
              "select",
              props,
              this.props.data.options.map(function(option) {
                var this_key = "preview_" + option.key;
                return _react2.default.createElement(
                  "option",
                  { value: option.value, key: this_key },
                  option.text
                );
              })
            )
          )
        );
      }
    }
  ]);

  return Dropdown;
})(_react2.default.Component);

var Signature = (function(_React$Component10) {
  _inherits(Signature, _React$Component10);

  function Signature() {
    _classCallCheck(this, Signature);

    return _possibleConstructorReturn(
      this,
      (Signature.__proto__ || Object.getPrototypeOf(Signature)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(Signature, [
    {
      key: "componentDidMount",

      // mixins: [SortableItemMixin],
      value: function componentDidMount() {
        if (
          this.props.defaultValue !== undefined &&
          this.props.defaultValue.length > 0 &&
          !this.props.read_only
        ) {
          var canvas = this.refs["canvas_" + this.props.data.field_name];
          canvas.fromDataURL(
            "data:image/png;base64," + this.props.defaultValue
          );
        }
      }
    },
    {
      key: "render",
      value: function render() {
        var props = {};
        props.type = "hidden";
        props.name = this.props.data.field_name;

        if (this.props.mutable) {
          props.defaultValue = this.props.defaultValue;
          props.ref = "child_ref_" + this.props.data.field_name;
        }
        var pad_props = {};
        pad_props.clearButton = true;
        if (this.props.mutable) {
          pad_props.defaultValue = this.props.defaultValue;
          pad_props.ref = "canvas_" + this.props.data.field_name;
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        var sourceDataURL = void 0;
        if (
          this.props.read_only === true &&
          this.props.defaultValue &&
          this.props.defaultValue.length > 0
        ) {
          sourceDataURL = "data:image/png;base64," + this.props.defaultValue;
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            this.props.read_only === true &&
            this.props.defaultValue &&
            this.props.defaultValue.length > 0
              ? _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement("img", { src: sourceDataURL })
                )
              : _react2.default.createElement(
                  _reactSignaturePad2.default,
                  pad_props
                ),
            _react2.default.createElement("input", props)
          )
        );
      }
    }
  ]);

  return Signature;
})(_react2.default.Component);

var Tags = (function(_React$Component11) {
  _inherits(Tags, _React$Component11);

  function Tags() {
    _classCallCheck(this, Tags);

    return _possibleConstructorReturn(
      this,
      (Tags.__proto__ || Object.getPrototypeOf(Tags)).apply(this, arguments)
    );
  }

  _createClass(Tags, [
    {
      key: "getInitialState",

      // mixins: [SortableItemMixin],
      value: function getInitialState() {
        return {
          value:
            this.props.defaultValue !== undefined
              ? this.props.defaultValue.split(",")
              : []
        };
      }
    },
    {
      key: "handleChange",
      value: function handleChange(e) {
        this.setState({ value: e });
      }
    },
    {
      key: "render",
      value: function render() {
        var options = this.props.data.options.map(function(option) {
          option.label = option.text;
          return option;
        });
        var props = {};
        props.multi = true;
        props.name = this.props.data.field_name;
        props.onChange = this.handleChange;

        props.options = options;
        if (!this.props.mutable) {
          props.value = options[0].text;
        } // to show a sample of what tags looks like
        if (this.props.mutable) {
          props.value = this.state.value;
          props.ref = "child_ref_" + this.props.data.field_name;
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            _react2.default.createElement(_reactSelect2.default, props)
          )
        );
      }
    }
  ]);

  return Tags;
})(_react2.default.Component);

var Checkboxes = (function(_React$Component12) {
  _inherits(Checkboxes, _React$Component12);

  function Checkboxes() {
    _classCallCheck(this, Checkboxes);

    return _possibleConstructorReturn(
      this,
      (Checkboxes.__proto__ || Object.getPrototypeOf(Checkboxes)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(Checkboxes, [
    {
      key: "render",

      // mixins: [SortableItemMixin],
      value: function render() {
        var self = this;
        var classNames = "checkbox-label";
        if (this.props.data.inline) {
          classNames += " option-inline";
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              { className: "form-label" },
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            this.props.data.options.map(function(option) {
              var this_key = "preview_" + option.key;
              var props = {};
              props.name = "option_" + option.key;

              props.type = "checkbox";
              props.value = option.value;
              if (self.props.mutable) {
                props.defaultChecked =
                  self.props.defaultValue.indexOf(option.value) > -1
                    ? true
                    : false;
                props.ref = "child_ref_" + option.key;
              }
              return _react2.default.createElement(
                "label",
                { className: classNames, key: this_key },
                _react2.default.createElement("input", props),
                " ",
                option.text
              );
            })
          )
        );
      }
    }
  ]);

  return Checkboxes;
})(_react2.default.Component);

var RadioButtons = (function(_React$Component13) {
  _inherits(RadioButtons, _React$Component13);

  function RadioButtons() {
    _classCallCheck(this, RadioButtons);

    return _possibleConstructorReturn(
      this,
      (RadioButtons.__proto__ || Object.getPrototypeOf(RadioButtons)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(RadioButtons, [
    {
      key: "render",

      // mixins: [SortableItemMixin],
      value: function render() {
        var self = this;
        var classNames = "radio-label";
        if (this.props.data.inline) {
          classNames += " option-inline";
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              { className: "form-label" },
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            this.props.data.options.map(function(option) {
              var this_key = "preview_" + option.key;
              var props = {};
              props.name = self.props.data.field_name;

              props.type = "radio";
              props.value = option.value;
              if (self.props.mutable) {
                props.defaultChecked =
                  self.props.defaultValue !== undefined &&
                  self.props.defaultValue.indexOf(option.value) > -1
                    ? true
                    : false;
                props.ref = "child_ref_" + option.key;
              }
              return _react2.default.createElement(
                "label",
                { className: classNames, key: this_key },
                _react2.default.createElement("input", props),
                " ",
                option.text
              );
            })
          )
        );
      }
    }
  ]);

  return RadioButtons;
})(_react2.default.Component);

var Image = (function(_React$Component14) {
  _inherits(Image, _React$Component14);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(
      this,
      (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments)
    );
  }

  _createClass(Image, [
    {
      key: "render",

      // mixins: [SortableItemMixin],
      value: function render() {
        var style = this.props.data.center ? { textAlign: "center" } : "";

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses, style: style },
          !this.props.mutable &&
            _react2.default.createElement(_headerBar2.default, {
              parent: this.props.parent,
              editModeOn: this.props.editModeOn,
              data: this.props.data,
              onDestroy: this.props._onDestroy,
              onEdit: this.props.onEdit,
              required: this.props.data.required
            }),
          this.props.data.src &&
            _react2.default.createElement("img", {
              src: this.props.data.src,
              width: this.props.data.width,
              height: this.props.data.height
            }),
          !this.props.data.src &&
            _react2.default.createElement(
              "div",
              { className: "no-image" },
              "No Image"
            )
        );
      }
    }
  ]);

  return Image;
})(_react2.default.Component);

var Rating = (function(_React$Component15) {
  _inherits(Rating, _React$Component15);

  function Rating() {
    _classCallCheck(this, Rating);

    return _possibleConstructorReturn(
      this,
      (Rating.__proto__ || Object.getPrototypeOf(Rating)).apply(this, arguments)
    );
  }

  _createClass(Rating, [
    {
      key: "render",

      // mixins: [SortableItemMixin],
      value: function render() {
        var props = {};
        props.name = this.props.data.field_name;
        props.ratingAmount = 5;

        if (this.props.mutable) {
          props.rating =
            this.props.defaultValue !== undefined &&
            this.props.defaultValue.length
              ? parseFloat(this.props.defaultValue, 10)
              : 0;
          props.editing = true;
          props.ref = "child_ref_" + this.props.data.field_name;
        }

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              _react2.default.createElement("span", {
                dangerouslySetInnerHTML: { __html: this.props.data.label }
              }),
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            )
          )
        );
      }
    }
  ]);

  return Rating;
})(_react2.default.Component);

var HyperLink = (function(_React$Component16) {
  _inherits(HyperLink, _React$Component16);

  function HyperLink() {
    _classCallCheck(this, HyperLink);

    return _possibleConstructorReturn(
      this,
      (HyperLink.__proto__ || Object.getPrototypeOf(HyperLink)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(HyperLink, [
    {
      key: "render",

      // mixins: [SortableItemMixin],
      value: function render() {
        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "a",
              { target: "_blank", href: this.props.data.href },
              this.props.data.content
            )
          )
        );
      }
    }
  ]);

  return HyperLink;
})(_react2.default.Component);

var Download = (function(_React$Component17) {
  _inherits(Download, _React$Component17);

  function Download() {
    _classCallCheck(this, Download);

    return _possibleConstructorReturn(
      this,
      (Download.__proto__ || Object.getPrototypeOf(Download)).apply(
        this,
        arguments
      )
    );
  }

  _createClass(Download, [
    {
      key: "render",

      // mixins: [SortableItemMixin],
      value: function render() {
        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "a",
              {
                href:
                  this.props.download_path + "?id=" + this.props.data.file_path
              },
              this.props.data.content
            )
          )
        );
      }
    }
  ]);

  return Download;
})(_react2.default.Component);

var Camera = (function(_React$Component18) {
  _inherits(Camera, _React$Component18);

  function Camera() {
    _classCallCheck(this, Camera);

    return _possibleConstructorReturn(
      this,
      (Camera.__proto__ || Object.getPrototypeOf(Camera)).apply(this, arguments)
    );
  }

  _createClass(Camera, [
    {
      key: "getInitialState",

      // mixins: [SortableItemMixin],

      value: function getInitialState() {
        return { img: null };
      }
    },
    {
      key: "displayImage",
      value: function displayImage(e) {
        var self = this;
        var target = e.target;
        var file, reader;

        if (target.files && target.files.length) {
          file = target.files[0];
          reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onloadend = function() {
            self.setState({
              img: reader.result
            });
          };
        }
      }
    },
    {
      key: "clearImage",
      value: function clearImage() {
        this.setState({
          img: null
        });
      }
    },
    {
      key: "render",
      value: function render() {
        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              this.props.data.label,
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            _react2.default.createElement(
              "div",
              { className: "image-upload-container" },
              !this.state.img &&
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement("input", {
                    type: "file",
                    accept: "image/*",
                    capture: "camera",
                    className: "image-upload",
                    onChange: this.displayImage
                  }),
                  _react2.default.createElement(
                    "div",
                    { className: "image-upload-control" },
                    _react2.default.createElement(
                      "div",
                      { className: "btn btn-default btn-school" },
                      _react2.default.createElement("i", {
                        className: "fa fa-camera"
                      }),
                      " Upload Photo"
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      "Select an image from your computer or device."
                    )
                  )
                ),
              this.state.img &&
                _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement("img", {
                    src: this.state.img,
                    height: "100",
                    className: "image-upload-preview"
                  }),
                  _react2.default.createElement("br", null),
                  _react2.default.createElement(
                    "div",
                    {
                      className: "btn btn-school btn-image-clear",
                      onClick: this.clearImage
                    },
                    _react2.default.createElement("i", {
                      className: "fa fa-times"
                    }),
                    " Clear Photo"
                  )
                )
            )
          )
        );
      }
    }
  ]);

  return Camera;
})(_react2.default.Component);

var Range = (function(_React$Component19) {
  _inherits(Range, _React$Component19);

  function Range() {
    _classCallCheck(this, Range);

    return _possibleConstructorReturn(
      this,
      (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments)
    );
  }

  _createClass(Range, [
    {
      key: "render",

      // mixins: [SortableItemMixin],
      value: function render() {
        var props = {};
        props.type = "range";
        props.name = this.props.data.field_name;
        props.list = "tickmarks_" + this.props.data.field_name;
        props.min = this.props.data.min_value;
        props.max = this.props.data.max_value;
        props.step = this.props.data.step;

        props.defaultValue =
          this.props.defaultValue !== undefined
            ? parseInt(this.props.defaultValue, 10)
            : parseInt(this.props.data.default_value, 10);

        if (this.props.mutable) {
          props.ref = "child_ref_" + this.props.data.field_name;
        }

        var datalist = [];
        for (
          var i = parseInt(this.props.data.min_value, 10);
          i <= parseInt(this.props.data.max_value, 10);
          i += parseInt(this.props.data.step, 10)
        ) {
          datalist.push(i);
        }

        var oneBig = 100 / (datalist.length - 1);

        var _datalist = datalist.map(function(d, idx) {
          return _react2.default.createElement(
            "option",
            { key: props.list + "_" + idx },
            d
          );
        });

        var visible_marks = datalist.map(function(d, idx) {
          var option_props = {};
          var w = oneBig;
          if (idx === 0 || idx === datalist.length - 1) w = oneBig / 2;
          option_props.key = props.list + "_label_" + idx;
          option_props.style = { width: w + "%" };
          if (idx === datalist.length - 1)
            option_props.style = { width: w + "%", textAlign: "right" };
          return _react2.default.createElement("label", option_props, d);
        });

        var baseClasses = "rfb-item";
        if (this.props.data.pageBreakBefore) {
          baseClasses += " alwaysbreak";
        }

        return _react2.default.createElement(
          "div",
          { className: baseClasses },
          !this.props.mutable &&
            _react2.default.createElement(
              "div",
              null,
              this.props.data.pageBreakBefore &&
                _react2.default.createElement(
                  "div",
                  { className: "preview-page-break" },
                  "Page Break"
                ),
              _react2.default.createElement(_headerBar2.default, {
                parent: this.props.parent,
                editModeOn: this.props.editModeOn,
                data: this.props.data,
                onDestroy: this.props._onDestroy,
                onEdit: this.props.onEdit,
                static: this.props.data.static,
                required: this.props.data.required
              })
            ),
          _react2.default.createElement(
            "div",
            { className: "form-group" },
            _react2.default.createElement(
              "label",
              null,
              this.props.data.label,
              this.props.data.hasOwnProperty("required") &&
                this.props.data.required === true &&
                !this.props.read_only &&
                _react2.default.createElement(
                  "span",
                  { className: "label-required label label-danger" },
                  "Required"
                )
            ),
            _react2.default.createElement(
              "div",
              { className: "range" },
              _react2.default.createElement(
                "div",
                { className: "clearfix" },
                _react2.default.createElement(
                  "span",
                  { className: "pull-left" },
                  this.props.data.min_label
                ),
                _react2.default.createElement(
                  "span",
                  { className: "pull-right" },
                  this.props.data.max_label
                )
              ),
              _react2.default.createElement(_reactBootstrapSlider2.default, {
                name: props.name,
                value: props.defaultValue,
                step: this.props.data.step,
                max: this.props.data.max_value,
                min: this.props.data.min_value
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "visible_marks" },
              visible_marks
            ),
            _react2.default.createElement(
              "datalist",
              { id: props.list },
              _datalist
            )
          )
        );
      }
    }
  ]);

  return Range;
})(_react2.default.Component);

/*

FormElements.Header = Header;
FormElements.Paragraph = Paragraph;
FormElements.Label = Label;
FormElements.LineBreak = LineBreak;
FormElements.TextInput = TextInput;
FormElements.NumberInput = NumberInput;
FormElements.TextArea = TextArea;
FormElements.Dropdown = Dropdown;
FormElements.Signature = Signature;
FormElements.Checkboxes = Checkboxes;
FormElements.DatePicker = DatePicker;
FormElements.RadioButtons = RadioButtons;
FormElements.Image = Image;
FormElements.Rating = Rating;
FormElements.Tags = Tags;
FormElements.HyperLink = HyperLink;
FormElements.Download = Download;
FormElements.Camera = Camera;
FormElements.Range = Range;

module.exports = FormElements;*/

exports.Header = Header;
exports.Paragraph = Paragraph;
exports.Label = Label;
exports.LineBreak = LineBreak;
exports.TextInput = TextInput;
exports.NumberInput = NumberInput;
exports.TextArea = TextArea;
exports.Dropdown = Dropdown;
exports.Signature = Signature;
exports.Checkboxes = Checkboxes;
exports.DatePicker = DatePicker;
exports.RadioButtons = RadioButtons;
exports.Image = Image;
exports.Rating = Rating;
exports.Tags = Tags;
exports.HyperLink = HyperLink;
exports.Download = Download;
exports.Camera = Camera;
exports.Range = Range;
