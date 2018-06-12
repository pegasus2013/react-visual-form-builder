'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactVisualFormBuilder = require('./react-visual-form-builder');

var _variables = require('./react-visual-form-builder/variables');

var variables = _interopRequireWildcard(_variables);

var _demobar = require('./react-visual-form-builder/demobar');

var _demobar2 = _interopRequireDefault(_demobar);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //./react-visual-form-builder/index


var VisualFormBuilder = function (_Component) {
  _inherits(VisualFormBuilder, _Component);

  function VisualFormBuilder() {
    _classCallCheck(this, VisualFormBuilder);

    return _possibleConstructorReturn(this, (VisualFormBuilder.__proto__ || Object.getPrototypeOf(VisualFormBuilder)).apply(this, arguments));
  }

  _createClass(VisualFormBuilder, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_demobar2.default, { variables: variables }),
        _react2.default.createElement(_reactVisualFormBuilder.ReactFormBuilder, { variables: variables })
      );
    }
  }]);

  return VisualFormBuilder;
}(_react.Component);

exports.default = VisualFormBuilder;