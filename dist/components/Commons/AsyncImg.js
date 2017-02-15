'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncImg = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  left: 20%;\n  top: 15%;\n  width: 60%;\n'], ['\n  position: absolute;\n  left: 20%;\n  top: 15%;\n  width: 60%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var isImg = function isImg(b) {
  return b.type.match(/image/) ? { img: URL.createObjectURL(b) } : false;
};
var getImg = function getImg(url) {
  return fetch(url).then(function (r) {
    return r.blob();
  });
};

var Img = _styledComponents2.default.img(_templateObject);

var AsyncImg = exports.AsyncImg = function (_React$Component) {
  _inherits(AsyncImg, _React$Component);

  function AsyncImg() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, AsyncImg);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AsyncImg.__proto__ || Object.getPrototypeOf(AsyncImg)).call.apply(_ref, [this].concat(args))), _this), _this.state = { img: null }, _this.componentWillMount = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = _this;
              _context.next = 3;
              return getImg(_this.props.src);

            case 3:
              _context.t1 = _context.sent;
              _context.t2 = isImg(_context.t1);

              _context.t0.setState.call(_context.t0, _context.t2);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _this.render = function () {
      return _this.state.img && _react2.default.createElement(Img, {
        src: _this.state.img,
        alt: _this.props.alt,
        style: _this.props.style,
        role: _this.props.role
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return AsyncImg;
}(_react2.default.Component);

AsyncImg.propTypes = {
  src: _react2.default.PropTypes.string,
  alt: _react2.default.PropTypes.string,
  role: _react2.default.PropTypes.string,
  style: _react2.default.PropTypes.shape({})
};