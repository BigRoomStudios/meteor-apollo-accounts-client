'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.USER_ID_KEY = exports.TOKEN_KEY = exports.TOKEN_EXPIRES_KEY = exports.loggingIn = exports.onLogout = exports.onLoginFailure = exports.onLogin = exports.getLoginToken = exports.setTokenStore = exports.initWithClient = exports.userId = exports.loginWithLinkedIn = exports.loginWithGoogle = exports.loginWithFacebook = exports.verifyEmail = exports.resetPassword = exports.resendVerificationEmail = exports.logout = exports.loginWithPassword = exports.hashPassword = exports.forgotPassword = exports.createUser = exports.changePassword = undefined;

var _changePassword = require('./changePassword');

var _changePassword2 = _interopRequireDefault(_changePassword);

var _createUser = require('./createUser');

var _createUser2 = _interopRequireDefault(_createUser);

var _forgotPassword = require('./forgotPassword');

var _forgotPassword2 = _interopRequireDefault(_forgotPassword);

var _hashPassword = require('./hashPassword');

var _hashPassword2 = _interopRequireDefault(_hashPassword);

var _loginWithPassword = require('./loginWithPassword');

var _loginWithPassword2 = _interopRequireDefault(_loginWithPassword);

var _logout = require('./logout');

var _logout2 = _interopRequireDefault(_logout);

var _resendVerificationEmail = require('./resendVerificationEmail');

var _resendVerificationEmail2 = _interopRequireDefault(_resendVerificationEmail);

var _resetPassword = require('./resetPassword');

var _resetPassword2 = _interopRequireDefault(_resetPassword);

var _verifyEmail = require('./verifyEmail');

var _verifyEmail2 = _interopRequireDefault(_verifyEmail);

var _loginWithFacebook = require('./oauth/loginWithFacebook');

var _loginWithFacebook2 = _interopRequireDefault(_loginWithFacebook);

var _loginWithGoogle = require('./oauth/loginWithGoogle');

var _loginWithGoogle2 = _interopRequireDefault(_loginWithGoogle);

var _loginWithLinkedIn = require('./oauth/loginWithLinkedIn');

var _loginWithLinkedIn2 = _interopRequireDefault(_loginWithLinkedIn);

var _userId = require('./userId');

var _userId2 = _interopRequireDefault(_userId);

var _store = require('./store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.changePassword = _changePassword2.default;
exports.createUser = _createUser2.default;
exports.forgotPassword = _forgotPassword2.default;
exports.hashPassword = _hashPassword2.default;
exports.loginWithPassword = _loginWithPassword2.default;
exports.logout = _logout2.default;
exports.resendVerificationEmail = _resendVerificationEmail2.default;
exports.resetPassword = _resetPassword2.default;
exports.verifyEmail = _verifyEmail2.default;
exports.loginWithFacebook = _loginWithFacebook2.default;
exports.loginWithGoogle = _loginWithGoogle2.default;
exports.loginWithLinkedIn = _loginWithLinkedIn2.default;
exports.userId = _userId2.default;
exports.initWithClient = _store.initWithClient;
exports.setTokenStore = _store.setTokenStore;
exports.getLoginToken = _store.getLoginToken;
exports.onLogin = _store.onLogin;
exports.onLoginFailure = _store.onLoginFailure;
exports.onLogout = _store.onLogout;
exports.loggingIn = _store.loggingIn;
exports.TOKEN_EXPIRES_KEY = _store.TOKEN_EXPIRES_KEY;
exports.TOKEN_KEY = _store.TOKEN_KEY;
exports.USER_ID_KEY = _store.USER_ID_KEY;
exports.default = {
  changePassword: _changePassword2.default,
  createUser: _createUser2.default,
  forgotPassword: _forgotPassword2.default,
  loginWithPassword: _loginWithPassword2.default,
  logout: _logout2.default,
  resendVerificationEmail: _resendVerificationEmail2.default,
  resetPassword: _resetPassword2.default,
  verifyEmail: _verifyEmail2.default,
  loginWithFacebook: _loginWithFacebook2.default,
  loginWithGoogle: _loginWithGoogle2.default,
  loginWithLinkedIn: _loginWithLinkedIn2.default,
  userId: _userId2.default,
  initWithClient: _store.initWithClient,
  setTokenStore: _store.setTokenStore,
  getLoginToken: _store.getLoginToken,
  onLogin: _store.onLogin,
  onLoginFailure: _store.onLoginFailure,
  onLogout: _store.onLogout,
  loggingIn: _store.loggingIn,
  TOKEN_EXPIRES_KEY: _store.TOKEN_EXPIRES_KEY,
  TOKEN_KEY: _store.TOKEN_KEY,
  USER_ID_KEY: _store.USER_ID_KEY
};