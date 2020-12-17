"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get_notifications = _interopRequireDefault(require("./get_notifications"));

var _create_notifications = _interopRequireDefault(require("./create_notifications"));

var _mark_as_read = _interopRequireDefault(require("./mark_as_read"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const services = {
  getNotifications: _get_notifications.default,
  createNotifications: _create_notifications.default,
  markNotificationAsRead: _mark_as_read.default
};
var _default = services;
exports.default = _default;
//# sourceMappingURL=index.js.map
