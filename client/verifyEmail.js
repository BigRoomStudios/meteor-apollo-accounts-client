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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['mutation verifyEmail($token: String!) {\n        verifyEmail(token: $token) {\n          id\n          token\n          tokenExpires\n        }\n      }'], ['mutation verifyEmail($token: String!) {\n        verifyEmail(token: $token) {\n          id\n          token\n          tokenExpires\n        }\n      }']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var token = _ref2.token;
    var result;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            result = void 0;
            _context.prev = 1;
            _context.next = 4;
            return (0, _store.getClient)().mutate({
              mutation: (0, _graphqlTag2.default)(_templateObject),
              variables: {
                token: token
              }
            });

          case 4:
            result = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', (0, _store.handleLoginCallback)(_context.t0));

          case 10:
            return _context.abrupt('return', (0, _store.handleLoginCallback)(null, result.data.verifyEmail));

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();