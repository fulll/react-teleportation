'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lightbox = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Commons = require('./Commons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lightbox = exports.Lightbox = function Lightbox(_ref) {
  var clear = _ref.clear,
      url = _ref.url;

  var id = 'lightbox';
  var close = function close(e) {
    if (e.target.id === id) clear();
  };

  return _react2.default.createElement(
    _Commons.Background,
    { opacity: 0.9, onClick: close, id: id },
    _react2.default.createElement(_Commons.Img, { src: url, alt: id })
  );
};

Lightbox.propTypes = {
  children: _react2.default.PropTypes.node
};

Lightbox.propTypes = {
  clear: _react2.default.PropTypes.func,
  url: _react2.default.PropTypes.string
};