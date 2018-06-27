'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  _cbs: [],
  notify: function notify(eventName) {
    this._cbs.map(function (cb) {
      if (cb.eventName === eventName && typeof cb.callback === 'function') {
        cb.callback();
      }
    });
  },
  on: function on(eventName, cb) {
    this._cbs.push({
      eventName: eventName,
      callback: cb
    });
  }
};