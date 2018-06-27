'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n      mutation logout($token: String!) {\n        logout(token: $token) {\n          success\n        }\n      }\n    '], ['\n      mutation logout($token: String!) {\n        logout(token: $token) {\n          success\n        }\n      }\n    ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(apollo) {
    var token, result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _store.getLoginToken)();

          case 2:
            token = _context.sent;

            if (token) {
              _context.next = 5;
              break;
            }

            return _context.abrupt('return');

          case 5:
            _context.next = 7;
            return (0, _store.getClient)().mutate({
              mutation: (0, _graphqlTag2.default)(_templateObject),
              variables: {
                token: (0, _store.getLoginToken)()
              }
            });

          case 7:
            result = _context.sent;
            _context.next = 10;
            return (0, _store.handleLogout)();

          case 10:
            return _context.abrupt('return', result.data.logout.success);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();