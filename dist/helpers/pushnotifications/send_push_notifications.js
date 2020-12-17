"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewNotificationForAllUsers = createNewNotificationForAllUsers;
exports.createNewNotificationByDeviceTokens = createNewNotificationByDeviceTokens;

var _firebase_push_notifications = _interopRequireDefault(require("../../config/firebase_push_notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createNewNotificationForAllUsers(topic, notification, data) {
  try {
    const deviceOptions = {
      android: {
        ttl: 3600 * 1000,
        notification: {
          clickAction: 'FLUTTER_NOTIFICATION_CLICK'
        }
      },
      apns: {
        payload: {
          aps: {
            clickAction: 'FLUTTER_NOTIFICATION_CLICK'
          }
        }
      }
    };
    const response = await _firebase_push_notifications.default.messaging().send({
      topic,
      notification,
      data,
      ...deviceOptions
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function createNewNotificationByDeviceTokens(tokens, notification, data) {
  try {
    const deviceOptions = {
      android: {
        ttl: 3600 * 1000,
        notification: {
          clickAction: 'FLUTTER_NOTIFICATION_CLICK'
        }
      },
      apns: {
        payload: {
          aps: {
            clickAction: 'FLUTTER_NOTIFICATION_CLICK'
          }
        }
      }
    };
    const response = await _firebase_push_notifications.default.messaging().sendMulticast({
      tokens,
      notification,
      data,
      ...deviceOptions
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}
//# sourceMappingURL=send_push_notifications.js.map
