'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var App = _react2['default'].createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    return {
      name: 'World'
    };
  },

  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      'Hello, ',
      this.state.name,
      '!'
    );
  }
});

exports.App = App;
exports['default'] = App;