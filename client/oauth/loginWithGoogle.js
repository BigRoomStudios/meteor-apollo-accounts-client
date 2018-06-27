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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n      mutation loginWithGoogle ($accessToken: String!) {\n        loginWithGoogle (accessToken: $accessToken) {\n          id\n          token\n          tokenExpires\n        }\n      }\n      '], ['\n      mutation loginWithGoogle ($accessToken: String!) {\n        loginWithGoogle (accessToken: $accessToken) {\n          id\n          token\n          tokenExpires\n        }\n      }\n      ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Pass the accessToken
 * It's recommended to use https://github.com/anthonyjgrove/react-google-login
 */

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var accessToken = _ref2.accessToken;
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _store.startLoggingIn)();
            result = void 0;
            _context.prev = 2;
            _context.next = 5;
            return (0, _store.getClient)().mutate({
              mutation: (0, _graphqlTag2.default)(_templateObject),
              variables: {
                accessToken: accessToken
              }
            });

          case 5:
            result = _context.sent;
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](2);
            return _context.abrupt('return', (0, _store.handleLoginCallback)(_context.t0));

          case 11:
            _context.prev = 11;

            (0, _store.endLoggingIn)();
            return _context.finish(11);

          case 14:
            return _context.abrupt('return', (0, _store.handleLoginCallback)(null, result.data.loginWithGoogle));

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 8, 11, 14]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();