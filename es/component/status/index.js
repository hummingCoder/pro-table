import 'antd/es/badge/style';
import _Badge from 'antd/es/badge';
import React from 'react';
import './index.less';
/**
 * 快捷操作，用于快速的展示一个状态
 */

var Status = {
  success: function success(_ref) {
    var children = _ref.children;
    return React.createElement(_Badge, {
      status: 'success',
      text: children,
    });
  },
  error: function error(_ref2) {
    var children = _ref2.children;
    return React.createElement(_Badge, {
      status: 'error',
      text: children,
    });
  },
  default: function _default(_ref3) {
    var children = _ref3.children;
    return React.createElement(_Badge, {
      status: 'default',
      text: children,
    });
  },
  processing: function processing(_ref4) {
    var children = _ref4.children;
    return React.createElement(_Badge, {
      status: 'processing',
      text: children,
    });
  },
  warning: function warning(_ref5) {
    var children = _ref5.children;
    return React.createElement(_Badge, {
      status: 'warning',
      text: children,
    });
  },
};
export default Status;
export var Color = function Color(_ref6) {
  var color = _ref6.color,
    children = _ref6.children;
  return React.createElement(_Badge, {
    color: color,
    text: children,
  });
};
