"use strict";

var _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };

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

var _ElementActions = require("./actions/ElementActions");

var _ElementActions2 = _interopRequireDefault(_ElementActions);

var _formElements = require("./form-elements");

var _formElementsEdit = require("./form-elements-edit");

var _formElementsEdit2 = _interopRequireDefault(_formElementsEdit);

var _ElementStore = require("./stores/ElementStore");

var _ElementStore2 = _interopRequireDefault(_ElementStore);

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
  return call &&
    ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" ||
      typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        (typeof superClass === "undefined" ? "undefined" : _typeof(superClass))
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
 * <Preview />
 */

//import Sortable from 'react-sortable-items';

var Preview = (function(_React$Component) {
  _inherits(Preview, _React$Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(
      this,
      (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props)
    );

    _this.state = {
      data: [],
      answer_data: {}
    };

    var loadData = _this.props.url
      ? _this.props.url
      : _this.props.data
        ? _this.props.data
        : [];
    var saveUrl = _this.props.saveUrl ? _this.props.saveUrl : "";

    _ElementStore2.default.load(loadData, saveUrl);
    _ElementStore2.default.listen(_this._onChange.bind(_this));
    return _this;
  }

  _createClass(Preview, [
    {
      key: "_setValue",
      value: function _setValue(text) {
        return text.replace(/[^A-Z0-9]+/gi, "_").toLowerCase();
      }
    },
    {
      key: "updateElement",
      value: function updateElement(element) {
        var data = this.state.data;
        var found = false;

        for (var i = 0, len = data.length; i < len; i++) {
          if (element.id === data[i].id) {
            data[i] = element;
            found = true;
            break;
          }
        }

        if (found) {
          _ElementActions2.default.saveData(data);
        }
      }
    },
    {
      key: "_onChange",
      value: function _onChange(data) {
        var _this2 = this;

        var answer_data = {};

        data.forEach(function(item) {
          if (item.readOnly && _this2.props.variables[item.variableKey]) {
            answer_data[item.field_name] =
              _this2.props.variables[item.variableKey];
          }
        });

        this.setState({
          data: data,
          answer_data: answer_data
        });
      }
    },
    {
      key: "_onDestroy",
      value: function _onDestroy(item) {
        _ElementActions2.default.deleteElement(item);
      }
    },
    {
      key: "handleSort",
      value: function handleSort(orderedIds) {
        var sortedArray = [];
        var data = this.state.data;
        var index = 0;

        for (var i = 0, len = data.length; i < len; i++) {
          index = orderedIds.indexOf(data[i].id);
          sortedArray[index] = data[i];
        }

        _ElementActions2.default.saveData(sortedArray);
        this.state.data = sortedArray;
      }
    },
    {
      key: "render",
      value: function render() {
        var _this3 = this;

        var classes = this.props.className;
        if (this.props.editMode) {
          classes += " is-editing";
        }

        var items = this.state.data.map(function(item) {
          switch (item.element) {
            case "Header":
              return _react2.default.createElement(_formElements.Header, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Paragraph":
              return _react2.default.createElement(_formElements.Paragraph, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Label":
              return _react2.default.createElement(_formElements.Label, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "LineBreak":
              return _react2.default.createElement(_formElements.LineBreak, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "TextInput":
              return _react2.default.createElement(_formElements.TextInput, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "NumberInput":
              return _react2.default.createElement(_formElements.NumberInput, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "TextArea":
              return _react2.default.createElement(_formElements.TextArea, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Dropdown":
              return _react2.default.createElement(_formElements.Dropdown, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Checkboxes":
              return _react2.default.createElement(_formElements.Checkboxes, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "DatePicker":
              return _react2.default.createElement(_formElements.DatePicker, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "RadioButtons":
              return _react2.default.createElement(_formElements.RadioButtons, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Rating":
              return _react2.default.createElement(_formElements.Rating, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Image":
              return _react2.default.createElement(_formElements.Image, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Tags":
              return _react2.default.createElement(_formElements.Tags, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Signature":
              return _react2.default.createElement(_formElements.Signature, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                read_only: item.readOnly,
                defaultValue: _this3.state.answer_data[item.field_name],
                _onDestroy: _this3._onDestroy
              });
            case "HyperLink":
              return _react2.default.createElement(_formElements.HyperLink, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Download":
              return _react2.default.createElement(_formElements.Download, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Camera":
              return _react2.default.createElement(_formElements.Camera, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
            case "Range":
              return _react2.default.createElement(_formElements.Range, {
                mutable: false,
                parent: _this3.props.parent,
                editModeOn: _this3.props.editModeOn,
                isDraggable: true,
                key: item.id,
                sortData: item.id,
                data: item,
                _onDestroy: _this3._onDestroy
              });
          }
        });

        return _react2.default.createElement(
          "div",
          { className: classes },
          _react2.default.createElement(
            "div",
            { className: "edit-formX" },
            this.props.editElement !== null &&
              _react2.default.createElement(_formElementsEdit2.default, {
                showCorrectColumn: this.props.showCorrectColumn,
                files: this.props.files,
                manualEditModeOff: this.props.manualEditModeOff,
                preview: this,
                element: this.props.editElement,
                updateElement: this.updateElement
              })
          ),
          items
        );
      }
    }
  ]);

  return Preview;
})(_react2.default.Component);

exports.default = Preview;

Preview.defaultProps = {
  showCorrectColumn: false,
  files: [],
  editMode: false,
  editElement: null,
  className: "react-form-builder-preview pull-left"
};
