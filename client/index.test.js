'use strict';

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _index = require('./index');

var modules = _interopRequireWildcard(_index);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('should import all files correctly', function () {
  _underscore2.default.mapObject(modules, function (value, key) {
    expect(typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)).toBe('function');
  });
});