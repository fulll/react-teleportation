'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tutorial = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Commons = require('./Commons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tutorial = exports.Tutorial = function (_React$Component) {
  _inherits(Tutorial, _React$Component);

  function Tutorial() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tutorial);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tutorial.__proto__ || Object.getPrototypeOf(Tutorial)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      id: 'tutorial',
      index: 0,
      text: '',
      position: {
        top: 0,
        left: 0
      }
    }, _this.id = 'tutorial', _this.next = function () {
      var index = _this.state.index;
      var exist = index < _this.props.children.length;

      if (exist) {
        var id = _this.props.children[_this.state.index].id;

        var element = document.getElementById(id);

        var _element$getBoundingC = element.getBoundingClientRect(),
            top = _element$getBoundingC.top,
            left = _element$getBoundingC.left,
            height = _element$getBoundingC.height;

        var position = { top: top + height + 12, left: left };
        var text = _this.props.children[index].text;

        _this.setState({ position: position, text: text, index: _this.state.index + 1 });
      } else {
        _this.props.clear();
      }
    }, _this.componentDidMount = _this.next, _this.render = function () {
      return _react2.default.createElement(
        _Commons.Background,
        { opacity: 0.1, id: _this.id, onClick: _this.next },
        _react2.default.createElement(
          _Commons.Tooltip,
          { style: _this.state.position },
          _this.state.text
        )
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  } // eslint-disable-line react/sort-comp

  return Tutorial;
}(_react2.default.Component);

Tutorial.propTypes = {
  clear: _react2.default.PropTypes.func,
  on: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    id: _react2.default.PropTypes.string,
    text: _react2.default.PropTypes.string
  }))
};