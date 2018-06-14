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
 * <FormValidator />
 */

//import xss from 'xss';

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

var FormValidator = (function(_React$Component) {
  _inherits(FormValidator, _React$Component);

  function FormValidator(props) {
    _classCallCheck(this, FormValidator);

    var _this = _possibleConstructorReturn(
      this,
      (FormValidator.__proto__ || Object.getPrototypeOf(FormValidator)).call(
        this,
        props
      )
    );

    _this.state = {
      errors: []
    };
    return _this;
  }

  _createClass(FormValidator, [
    {
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this2 = this;

        this.subscription = this.props.emitter.addListener(
          "formValidation",
          function(errors) {
            _this2.setState({ errors: errors });
          }
        );
      }
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.subscription.remove();
      }
    },
    {
      key: "dismissModal",
      value: function dismissModal(e) {
        e.preventDefault();
        this.setState({ errors: [] });
      }
    },
    {
      key: "render",
      value: function render() {
        var errors = this.state.errors.map(function(error, index) {
          //return <li key={'error_'+index} dangerouslySetInnerHTML={{__html: myxss.process(error) }} />
          return _react2.default.createElement("li", {
            key: "error_" + index,
            dangerouslySetInnerHTML: { __html: error }
          });
        });

        return _react2.default.createElement(
          "div",
          null,
          this.state.errors.length > 0 &&
            _react2.default.createElement(
              "div",
              { className: "alert alert-danger validation-error" },
              _react2.default.createElement(
                "div",
                { className: "clearfix" },
                _react2.default.createElement("i", {
                  className: "fa fa-exclamation-triangle pull-left"
                }),
                _react2.default.createElement(
                  "ul",
                  { className: "pull-left" },
                  errors
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "clearfix" },
                _react2.default.createElement(
                  "a",
                  {
                    className: "pull-right btn btn-default btn-sm btn-danger",
                    onClick: this.dismissModal.bind(this)
                  },
                  "Dismiss"
                )
              )
            )
        );
      }
    }
  ]);

  return FormValidator;
})(_react2.default.Component);

exports.default = FormValidator;
