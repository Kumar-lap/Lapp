"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createNotifications;

var _notifications = _interopRequireDefault(require("../models/notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createNotifications(users, title, body) {
  const Notifications = (0, _notifications.default)();
  let newNotifications = [];

  if (users === 'all') {
    newNotifications = [{
      all: true,
      userId: undefined,
      title,
      body,
      createdOn: new Date().toISOString()
    }];
  } else {
    newNotifications = users.map(user => ({
      userId: user,
      title,
      body,
      createdOn: new Date().toISOString()
    }));
  }

  await Notifications.insertMany(newNotifications);
  return {
    message: 'Notifications created successfully'
  };
}
//# sourceMappingURL=create_notifications.js.map
