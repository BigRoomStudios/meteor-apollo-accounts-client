'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserId = exports.getLoginToken = exports.endLoggingIn = exports.startLoggingIn = exports.onLogout = exports.onLoginFailure = exports.onLogin = exports.loggingIn = exports._storeLoginToken = exports.handleLogout = exports.handleLoginCallback = exports.getClient = exports.initWithClient = exports.setTokenStore = exports.TOKEN_EXPIRES_KEY = exports.TOKEN_KEY = exports.USER_ID_KEY = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n          query checkToken {\n            checkToken {\n              success\n              userId\n            }\n          }\n        '], ['\n          query checkToken {\n            checkToken {\n              success\n              userId\n            }\n          }\n        ']);

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _Events = require('./Events');

var _Events2 = _interopRequireDefault(_Events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var USER_ID_KEY = exports.USER_ID_KEY = 'Meteor.userId';
var TOKEN_KEY = exports.TOKEN_KEY = 'Meteor.loginToken';
var TOKEN_EXPIRES_KEY = exports.TOKEN_EXPIRES_KEY = 'Meteor.loginTokenExpires';

var _tokenSaved = void 0;
var _userIdSaved = void 0;
var _isLoggingIn = true;
var apollo = void 0;

var tokenStore = {
  set: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
      var userId = _ref2.userId,
          token = _ref2.token,
          tokenExpires = _ref2.tokenExpires;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              global.localStorage[USER_ID_KEY] = userId;
              global.localStorage[TOKEN_KEY] = token;
              global.localStorage[TOKEN_EXPIRES_KEY] = tokenExpires.toString();

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function set(_x) {
      return _ref.apply(this, arguments);
    }

    return set;
  }(),
  get: function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', {
                userId: global.localStorage[USER_ID_KEY],
                token: global.localStorage[TOKEN_KEY],
                tokenExpires: global.localStorage[TOKEN_EXPIRES_KEY]
              });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function get() {
      return _ref3.apply(this, arguments);
    }

    return get;
  }(),
  remove: function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              global.localStorage.removeItem(USER_ID_KEY);
              global.localStorage.removeItem(TOKEN_KEY);
              global.localStorage.removeItem(TOKEN_EXPIRES_KEY);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function remove() {
      return _ref4.apply(this, arguments);
    }

    return remove;
  }()
};

var setTokenStore = exports.setTokenStore = function setTokenStore(newStore) {
  tokenStore = newStore;
};

var initWithClient = exports.initWithClient = function initWithClient(apolloClientInstance) {
  apollo = apolloClientInstance;
  _loadInitialUser();
};

var getClient = exports.getClient = function getClient() {
  if (!apollo) {
    throw new Error('Meteor Apollo Accounts not initialized. Make sure you have called initWithClient(apollo).');
  }
  return apollo;
};

var handleLoginCallback = exports.handleLoginCallback = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(err, loginMethodResponse) {
    var id, token, tokenExpires;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (err) {
              _context4.next = 10;
              break;
            }

            // save user id and token
            id = loginMethodResponse.id, token = loginMethodResponse.token, tokenExpires = loginMethodResponse.tokenExpires;
            _context4.next = 4;
            return _storeLoginToken(id, token, new Date(tokenExpires));

          case 4:
            _tokenSaved = token;
            _userIdSaved = id;
            _Events2.default.notify('onLogin');
            return _context4.abrupt('return', id);

          case 10:
            _Events2.default.notify('onLoginFailure');
            handleLogout();
            return _context4.abrupt('return', Promise.reject(err));

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function handleLoginCallback(_x2, _x3) {
    return _ref5.apply(this, arguments);
  };
}();

var handleLogout = exports.handleLogout = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return tokenStore.remove();

          case 2:
            _tokenSaved = null;
            _userIdSaved = null;
            _Events2.default.notify('onLogout');

          case 5:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function handleLogout() {
    return _ref6.apply(this, arguments);
  };
}();

var _storeLoginToken = exports._storeLoginToken = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(userId, token, tokenExpires) {
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt('return', tokenStore.set({ userId: userId, token: token, tokenExpires: tokenExpires }));

          case 1:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function _storeLoginToken(_x4, _x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();

var _loadInitialUser = function () {
  var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
    var token, store;
    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            token = null;
            _context7.prev = 1;
            _context7.next = 4;
            return tokenStore.get();

          case 4:
            store = _context7.sent;

            token = store.token;
            _context7.next = 11;
            break;

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7['catch'](1);

            console.warn('Token Store error: ' + _context7.t0.message);

          case 11:
            return _context7.abrupt('return', _checkLogin(token));

          case 12:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, this, [[1, 8]]);
  }));

  return function _loadInitialUser() {
    return _ref8.apply(this, arguments);
  };
}();

var _checkLogin = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(token) {
    var result;
    return _regenerator2.default.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _tokenSaved = token;

            if (!token) {
              _context8.next = 22;
              break;
            }

            startLoggingIn();
            result = void 0;
            _context8.prev = 4;
            _context8.next = 7;
            return getClient().query({
              query: (0, _graphqlTag2.default)(_templateObject)
            });

          case 7:
            result = _context8.sent;
            _context8.next = 13;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8['catch'](4);
            return _context8.abrupt('return', handleLoginCallback(_context8.t0));

          case 13:
            _context8.prev = 13;

            endLoggingIn();
            return _context8.finish(13);

          case 16:
            if (!(result.data && result.data.checkToken && result.data.checkToken.success && result.data.checkToken.userId)) {
              _context8.next = 20;
              break;
            }

            _userIdSaved = result.data.checkToken.userId;
            _Events2.default.notify('onLogin');
            return _context8.abrupt('return', _userIdSaved);

          case 20:
            _context8.next = 23;
            break;

          case 22:
            endLoggingIn();

          case 23:
          case 'end':
            return _context8.stop();
        }
      }
    }, _callee8, this, [[4, 10, 13, 16]]);
  }));

  return function _checkLogin(_x7) {
    return _ref9.apply(this, arguments);
  };
}();

var loggingIn = exports.loggingIn = function loggingIn() {
  return _isLoggingIn;
};

var onLogin = exports.onLogin = function onLogin(cb) {
  _Events2.default.on('onLogin', cb);
};

var onLoginFailure = exports.onLoginFailure = function onLoginFailure(cb) {
  _Events2.default.on('onLoginFailure', cb);
};

var onLogout = exports.onLogout = function onLogout(cb) {
  _Events2.default.on('onLogout', cb);
};

var startLoggingIn = exports.startLoggingIn = function startLoggingIn() {
  _isLoggingIn = true;
};

var endLoggingIn = exports.endLoggingIn = function endLoggingIn() {
  _isLoggingIn = false;
};

var getLoginToken = exports.getLoginToken = function getLoginToken() {
  return _tokenSaved;
};
var getUserId = exports.getUserId = function getUserId() {
  return _userIdSaved;
};