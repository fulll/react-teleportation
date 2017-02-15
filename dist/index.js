'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = require('./components/Modal.js');

Object.keys(_Modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Modal[key];
    }
  });
});

var _Alert = require('./components/Alert.js');

Object.keys(_Alert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Alert[key];
    }
  });
});

var _Lightbox = require('./components/Lightbox.js');

Object.keys(_Lightbox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Lightbox[key];
    }
  });
});

var _Tutorial = require('./components/Tutorial.js');

Object.keys(_Tutorial).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Tutorial[key];
    }
  });
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var style = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 10
};

var Teleport = function Teleport() {
  var _this = this;

  _classCallCheck(this, Teleport);

  this.i = (0, _lodash.uniqueId)('teleport');
  this.m = document.body.appendChild(document.createElement('m'));

  this.M = function () {
    return _react2.default.createElement(
      'x',
      { style: style },
      _react2.default.cloneElement(_this.el, { clear: _this.clear })
    );
  };

  this.init = function (el) {
    _this.el = el;_this._render();
  };

  this.clear = function () {
    (0, _lodash.defer)(_reactDom2.default.unmountComponentAtNode, _this.m);
  };

  this._render = function () {
    _reactDom2.default.render(_react2.default.createElement(_this.M, null), _this.m);
  };
};

exports.default = new Teleport();