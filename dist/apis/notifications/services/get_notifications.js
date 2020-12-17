"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNotificationsByUser;

var _notifications = _interopRequireDefault(require("../models/notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getNotificationsByUser(userId, offset, limit) {
  const Notifications = (0, _notifications.default)();
  const userNotifications = await Notifications.find({
    $or: [{
      userId
    }, {
      all: true
    }]
  }).sort([['createdOn', 'desc']]).skip(offset || 0).limit(limit || 0).lean();
  return {
    count: await Notifications.count({
      $or: [{
        userId
      }, {
        all: true
      }]
    }),
    notifications: userNotifications.map(notification => {
      if (!notification.userId) {
        return { ...notification,
          userId,
          all: undefined
        };
      }

      return { ...notification,
        all: undefined
      };
    })
  };
}
//# sourceMappingURL=get_notifications.js.map
