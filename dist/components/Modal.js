'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  width: 500px;\n  height: 300px;\n  background: white;\n  margin: 20vh auto;\n  box-sizing: border-box;\n  padding: 20px;\n  font-family: ', ';\n'], ['\n  width: 500px;\n  height: 300px;\n  background: white;\n  margin: 20vh auto;\n  box-sizing: border-box;\n  padding: 20px;\n  font-family: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Commons = require('./Commons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Div = _styledComponents2.default.div(_templateObject, _Commons.fontFamily);

var Modal = exports.Modal = function Modal(_ref) {
  var children = _ref.children,
      clear = _ref.clear;

  var id = 'modal';
  var close = function close(e) {
    if (e.target.id === id) clear();
  };

  return _react2.default.createElement(
    _Commons.Background,
    { opacity: 0.1, id: id, onClick: close },
    _react2.default.createElement(
      Div,
      null,
      children
    )
  );
};

Modal.propTypes = {
  children: _react2.default.PropTypes.node,
  clear: _react2.default.PropTypes.func
};