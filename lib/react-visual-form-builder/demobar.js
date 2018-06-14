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

var _ElementStore = require("./stores/ElementStore");

var _ElementStore2 = _interopRequireDefault(_ElementStore);

var _form = require("./form");

var _form2 = _interopRequireDefault(_form);

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

var Demobar = (function(_React$Component) {
  _inherits(Demobar, _React$Component);

  function Demobar(props) {
    _classCallCheck(this, Demobar);

    var _this = _possibleConstructorReturn(
      this,
      (Demobar.__proto__ || Object.getPrototypeOf(Demobar)).call(this, props)
    );

    _this.state = {
      data: [],
      previewVisible: false,
      shortPreviewVisible: false,
      roPreviewVisible: false
    };

    _ElementStore2.default.listen(_this._onChange.bind(_this));
    return _this;
  }

  _createClass(Demobar, [
    {
      key: "showPreview",
      value: function showPreview() {
        this.setState({
          previewVisible: true
        });
      }
    },
    {
      key: "showShortPreview",
      value: function showShortPreview() {
        this.setState({
          shortPreviewVisible: true
        });
      }
    },
    {
      key: "showRoPreview",
      value: function showRoPreview() {
        this.setState({
          roPreviewVisible: true
        });
      }
    },
    {
      key: "closePreview",
      value: function closePreview() {
        this.setState({
          previewVisible: false,
          shortPreviewVisible: false,
          roPreviewVisible: false
        });
      }
    },
    {
      key: "_onChange",
      value: function _onChange(data) {
        this.setState({
          data: data
        });
      }
    },
    {
      key: "render",
      value: function render() {
        var modalClass = "modal";
        if (this.state.previewVisible) {
          modalClass += " show";
        }

        var shortModalClass = "modal short-modal";
        if (this.state.shortPreviewVisible) {
          shortModalClass += " show";
        }

        var roModalClass = "modal ro-modal";
        if (this.state.roPreviewVisible) {
          roModalClass += " show";
        }

        return _react2.default.createElement(
          "div",
          { className: "clearfix", style: { margin: "10px", width: "70%" } },
          _react2.default.createElement(
            "h4",
            { className: "pull-left" },
            "Visual Form Builder: "
          ),
          _react2.default.createElement(
            "button",
            {
              className: "btn btn-primary pull-right",
              style: { marginRight: "10px" },
              onClick: this.showPreview.bind(this)
            },
            "Preview Form"
          ),
          this.state.previewVisible &&
            _react2.default.createElement(
              "div",
              { className: modalClass },
              _react2.default.createElement(
                "div",
                { className: "modal-dialog" },
                _react2.default.createElement(
                  "div",
                  { className: "modal-content" },
                  _react2.default.createElement(_form2.default, {
                    download_path: "",
                    back_action: "/",
                    back_name: "Back",
                    answer_data: {},
                    action_name: "Save",
                    form_action: "/",
                    form_method: "POST",
                    variables: this.props.variables,
                    data: this.state.data
                  }),
                  _react2.default.createElement(
                    "div",
                    { className: "modal-footer" },
                    _react2.default.createElement(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-default",
                        "data-dismiss": "modal",
                        onClick: this.closePreview.bind(this)
                      },
                      "Close"
                    )
                  )
                )
              )
            ),
          this.state.roPreviewVisible &&
            _react2.default.createElement(
              "div",
              { className: roModalClass },
              _react2.default.createElement(
                "div",
                { className: "modal-dialog" },
                _react2.default.createElement(
                  "div",
                  { className: "modal-content" },
                  _react2.default.createElement(_form2.default, {
                    download_path: "",
                    back_action: "/",
                    back_name: "Back",
                    answer_data: {},
                    action_name: "Save",
                    form_action: "/",
                    form_method: "POST",
                    read_only: true,
                    variables: this.props.variables,
                    hide_actions: true,
                    data: this.state.data
                  }),
                  _react2.default.createElement(
                    "div",
                    { className: "modal-footer" },
                    _react2.default.createElement(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-default",
                        "data-dismiss": "modal",
                        onClick: this.closePreview.bind(this)
                      },
                      "Close"
                    )
                  )
                )
              )
            ),
          this.state.shortPreviewVisible &&
            _react2.default.createElement(
              "div",
              { className: shortModalClass },
              _react2.default.createElement(
                "div",
                { className: "modal-dialog" },
                _react2.default.createElement(
                  "div",
                  { className: "modal-content" },
                  _react2.default.createElement(_form2.default, {
                    download_path: "",
                    back_action: "",
                    answer_data: {},
                    form_action: "/",
                    form_method: "POST",
                    data: this.state.data,
                    display_short: true,
                    variables: this.props.variables,
                    hide_actions: false
                  }),
                  _react2.default.createElement(
                    "div",
                    { className: "modal-footer" },
                    _react2.default.createElement(
                      "button",
                      {
                        type: "button",
                        className: "btn btn-default",
                        "data-dismiss": "modal",
                        onClick: this.closePreview.bind(this)
                      },
                      "Close"
                    )
                  )
                )
              )
            )
        );
      }
    }
  ]);

  return Demobar;
})(_react2.default.Component);

exports.default = Demobar;
