'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scroll = require('./scroll');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @authors ZiQiangWang
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @email   814120507@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @date    2017-08-04 16:08:43
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BackToTop = function (_Component) {
  _inherits(BackToTop, _Component);

  function BackToTop(props) {
    _classCallCheck(this, BackToTop);

    var _this = _possibleConstructorReturn(this, (BackToTop.__proto__ || Object.getPrototypeOf(BackToTop)).call(this, props));

    _this.handleScroll = function () {
      var scrollY = (0, _scroll.currentYPosition)();
      var show = scrollY > _this.props.topDistance;

      var opacity = _this.state.style.opacity;

      if (opacity === 0 && show) {
        _this.setState(_extends({}, _this.state, {
          style: _extends({}, _this.state.style, {
            opacity: 1,
            zIndex: 1000
          })
        }));
      } else if (opacity === 1 && !show) {
        _this.setState(_extends({}, _this.state, {
          style: _extends({}, _this.state.style, {
            opacity: 0,
            zIndex: -1
          })
        }));
      }
    };

    _this.handleHover = function (hover) {
      _this.setState(_extends({}, _this.state, {
        hover: hover
      }));
    };

    _this.handleClickBack = function () {
      var scrollY = (0, _scroll.currentYPosition)();
      (0, _scroll.scrollTo)(0, scrollY / _this.props.speed, _this.props.timing);
    };

    _this.state = {
      style: _extends({}, props.position, {
        position: 'fixed',
        zIndex: 1000,
        paddingBottom: '50%',
        padding: '6px 12px',
        fontSize: props.fontSize,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        width: props.text === '' && props.radius * 2 + 'px',
        height: props.text === '' && props.radius * 2 + 'px',
        opacity: 0,
        color: props.color,
        background: props.background,
        border: 'none',
        borderRadius: props.shape === 'round' ? '50%' : '2px',
        cursor: 'pointer',
        outline: 'none',
        boxShadow: '0 2px 5px 0 rgba(0,0,0,.26)',

        transition: 'all .5s'
      }),
      hover: false
    };
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }

  _createClass(BackToTop, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          icon = _props.icon,
          text = _props.text;

      var iconStyle = {
        paddingRight: text !== '' ? '10px' : '0'
      };
      if (icon === '') {
        this.ico = '';
      } else if (/^material-icons[\s]/.test(icon)) {
        var classes = icon.split(' ');
        var item = classes.pop();
        this.ico = _react2.default.createElement(
          'span',
          { className: classes.join(' '), style: iconStyle },
          item
        );
      } else {
        this.ico = _react2.default.createElement('span', { className: icon, style: iconStyle });
      }
    }
    /* eslint-disable react/no-did-mount-set-state */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          text = _props2.text,
          hover = _props2.hover;


      return _react2.default.createElement(
        'button',
        {
          ref: function ref(instance) {
            _this2.btn = instance;
          },
          style: this.state.hover ? _extends({}, this.state.style, hover) : this.state.style,
          onClick: this.handleClickBack,
          onMouseOver: function onMouseOver() {
            return _this2.handleHover(true);
          },
          onMouseOut: function onMouseOut() {
            return _this2.handleHover(false);
          }
        },
        this.ico,
        text
      );
    }
  }]);

  return BackToTop;
}(_react.Component);

BackToTop.defaultProps = {
  shape: 'default',
  text: '',
  icon: '',
  radius: 24,
  fontSize: '18px',
  position: {
    bottom: '10%',
    right: '5%'
  },
  color: 'white',
  background: '#ff5252',
  hover: {
    background: '#eb0000'
  },
  topDistance: 200,
  timing: 'linear',
  speed: 100
};

BackToTop.propTypes = {
  shape: _propTypes2.default.oneOf(['default', 'round']),
  radius: _propTypes2.default.number,
  text: _propTypes2.default.string,
  fontSize: _propTypes2.default.string,
  position: _propTypes2.default.shape({
    top: _propTypes2.default.string,
    bottom: _propTypes2.default.string,
    left: _propTypes2.default.string,
    right: _propTypes2.default.string
  }),
  icon: _propTypes2.default.string,
  color: _propTypes2.default.string,
  background: _propTypes2.default.string,
  hover: _propTypes2.default.object,
  topDistance: _propTypes2.default.number,
  timing: _propTypes2.default.oneOf(['linear', 'easeIn', 'easeOut', 'easeInOut']),
  speed: _propTypes2.default.number
};
exports.default = BackToTop;