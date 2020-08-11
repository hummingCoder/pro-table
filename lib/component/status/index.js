'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Color = exports.default = void 0;

require('antd/lib/badge/style');

var _badge = _interopRequireDefault(require('antd/lib/badge'));

var _react = _interopRequireDefault(require('react'));

require('./index.less');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * 快捷操作，用于快速的展示一个状态
 */
var Status = {
  success: function success(_ref) {
    var children = _ref.children;
    return _react.default.createElement(_badge.default, {
      status: 'success',
      text: children,
    });
  },
  error: function error(_ref2) {
    var children = _ref2.children;
    return _react.default.createElement(_badge.default, {
      status: 'error',
      text: children,
    });
  },
  default: function _default(_ref3) {
    var children = _ref3.children;
    return _react.default.createElement(_badge.default, {
      status: 'default',
      text: children,
    });
  },
  processing: function processing(_ref4) {
    var children = _ref4.children;
    return _react.default.createElement(_badge.default, {
      status: 'processing',
      text: children,
    });
  },
  warning: function warning(_ref5) {
    var children = _ref5.children;
    return _react.default.createElement(_badge.default, {
      status: 'warning',
      text: children,
    });
  },
};
var _default2 = Status;
exports.default = _default2;

var Color = function Color(_ref6) {
  var color = _ref6.color,
    children = _ref6.children;
  return _react.default.createElement(_badge.default, {
    color: color,
    text: children,
  });
};

exports.Color = Color;
