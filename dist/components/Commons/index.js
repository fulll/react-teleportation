'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Background = exports.P = exports.H1 = exports.Img = exports.fontFamily = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0;\n  margin: 0;\n  font-family: ', ';\n'], ['\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0;\n  margin: 0;\n  font-family: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  padding: 24px;\n  margin: 0;\n  font-family: ', ';\n'], ['\n  font-size: 14px;\n  padding: 24px;\n  margin: 0;\n  font-family: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, ', ');\n'], ['\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, ', ');\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: fixed;\n  width: 200px;\n  height: 70px;\n  background: white;\n  padding: 20px;\n  box-sizing: border-box;\n  font-family: ', ';\n'], ['\n  position: fixed;\n  width: 200px;\n  height: 70px;\n  background: white;\n  padding: 20px;\n  box-sizing: border-box;\n  font-family: ', ';\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  background: white;\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  top: -6px;\n  transform: rotate(45deg);\n'], ['\n  background: white;\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  top: -6px;\n  transform: rotate(45deg);\n']);

var _AsyncImg = require('./AsyncImg');

Object.defineProperty(exports, 'Img', {
  enumerable: true,
  get: function get() {
    return _AsyncImg.AsyncImg;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fontFamily = exports.fontFamily = 'Noto, Roboto, sans-serif';
var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject, fontFamily);

var P = exports.P = _styledComponents2.default.p(_templateObject2, fontFamily);

var Background = exports.Background = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.opacity;
});

var Box = _styledComponents2.default.div(_templateObject4, fontFamily);

var Arrow = _styledComponents2.default.div(_templateObject5);

var Tooltip = exports.Tooltip = function Tooltip(_ref) {
  var style = _ref.style,
      children = _ref.children;
  return _react2.default.createElement(
    Box,
    { style: style },
    _react2.default.createElement(Arrow, null),
    children
  );
};

Tooltip.propTypes = {
  style: _react2.default.PropTypes.shape({}),
  children: _react2.default.PropTypes.node
};