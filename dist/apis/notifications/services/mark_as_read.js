"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = markNotificationAsRead;

var _notifications = _interopRequireDefault(require("../models/notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function markNotificationAsRead(ids) {
  const Notifications = (0, _notifications.default)();
  await Notifications.findByIdAndUpdate({
    _id: {
      $in: ids
    }
  }, {
    $set: {
      new: false
    }
  });
  return {
    message: 'Notifications marked as read successfully'
  };
}
//# sourceMappingURL=mark_as_read.js.map
