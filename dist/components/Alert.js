'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: table;\n  max-width: 400px;\n  min-width: 350px;\n  margin: 25vh auto;\n  background-color: white;\n  padding-bottom: 8px;\n  box-shadow:  0 5px 20px rgba(0,0,0,0.1);\n  &:hover {\n    box-shadow:  0 5px 20px rgba(0,0,0,0.15);\n  }\n'], ['\n  display: table;\n  max-width: 400px;\n  min-width: 350px;\n  margin: 25vh auto;\n  background-color: white;\n  padding-bottom: 8px;\n  box-shadow:  0 5px 20px rgba(0,0,0,0.1);\n  &:hover {\n    box-shadow:  0 5px 20px rgba(0,0,0,0.15);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: transparent;\n  cursor: pointer;\n  color: #2196F3;\n  font-size: 14px;\n  height: 45px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 12px 10px;\n  float: right;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  user-select: none;\n  &:hover {\n    background-color: #eee;\n  }\n'], ['\n  background-color: transparent;\n  cursor: pointer;\n  color: #2196F3;\n  font-size: 14px;\n  height: 45px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 12px 10px;\n  float: right;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  user-select: none;\n  &:hover {\n    background-color: #eee;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Commons = require('./Commons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Modal = _styledComponents2.default.div(_templateObject);

var Button = _styledComponents2.default.button(_templateObject2);

var Alert = exports.Alert = function Alert(_ref) {
  var title = _ref.title,
      description = _ref.description,
      right = _ref.right,
      left = _ref.left;
  return _react2.default.createElement(
    _Commons.Background,
    { opacity: 0.1 },
    _react2.default.createElement(
      Modal,
      null,
      _react2.default.createElement(
        _Commons.H1,
        null,
        (0, _lodash.capitalize)(title)
      ),
      _react2.default.createElement(
        _Commons.P,
        null,
        (0, _lodash.capitalize)(description)
      ),
      _react2.default.createElement(
        'footer',
        { style: { padding: 8 } },
        _react2.default.createElement(
          Button,
          { onClick: right.action },
          right.title
        ),
        _react2.default.createElement(
          Button,
          { onClick: left.action },
          left.title
        )
      )
    )
  );
};

Alert.propTypes = {
  title: _react2.default.PropTypes.string.isRequired,
  description: _react2.default.PropTypes.string.isRequired,
  right: _react2.default.PropTypes.shape({
    title: _react2.default.PropTypes.string.isRequired,
    action: _react2.default.PropTypes.func.isRequired
  }),
  left: _react2.default.PropTypes.shape({
    title: _react2.default.PropTypes.string.isRequired,
    action: _react2.default.PropTypes.func.isRequired
  })
};