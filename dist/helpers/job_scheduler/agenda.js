"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailScheduler = emailScheduler;
exports.scheduleEmailNow = scheduleEmailNow;
exports.otpScheduler = otpScheduler;
exports.scheduleOtpNow = scheduleOtpNow;
exports.smsScheduler = smsScheduler;
exports.scheduleNewSmsNow = scheduleNewSmsNow;
exports.pushNotificationScheduler = pushNotificationScheduler;
exports.schedulePushNotificationForAllUsersNow = schedulePushNotificationForAllUsersNow;
exports.userSpecificPushNotificationScheduler = userSpecificPushNotificationScheduler;
exports.schedulePushNotificationByDeviceTokensNow = schedulePushNotificationByDeviceTokensNow;

var _sendMail = _interopRequireDefault(require("../emailverification/sendMail"));

var _twilioVerification = require("../otpVerification/twilioVerification");

var _bulk_sms_sender = _interopRequireDefault(require("../twilio_bulk_sms/bulk_sms_sender"));

var _send_push_notifications = require("../pushnotifications/send_push_notifications");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function emailScheduler(agenda) {
  agenda.define('Send password reset mail', async job => {
    const {
      email,
      subject,
      text,
      html
    } = job.attrs.data;
    await (0, _sendMail.default)(email, subject, text, html);
  });
}

function scheduleEmailNow(agenda, emailData) {
  agenda.now('Send password reset mail', emailData);
}

function otpScheduler(agenda) {
  agenda.define('Send one time password', async job => {
    const {
      mobileNumber
    } = job.attrs.data;
    await (0, _twilioVerification.sendVerificationToken)(mobileNumber);
  });
}

function scheduleOtpNow(agenda, data) {
  agenda.now('Send one time password', data);
}

function smsScheduler(agenda) {
  agenda.define('Send sms to users', async job => {
    const {
      mobileNumber,
      message
    } = job.attrs.data;
    await (0, _bulk_sms_sender.default)(mobileNumber, message);
  });
}

function scheduleNewSmsNow(agenda, data) {
  agenda.now('Send sms to users', data);
}

function pushNotificationScheduler(agenda) {
  agenda.define('Send push notifications to all users now', async job => {
    const {
      topic,
      notification,
      data
    } = job.attrs.data;
    await (0, _send_push_notifications.createNewNotificationForAllUsers)(topic, notification, data);
  });
}

function schedulePushNotificationForAllUsersNow(agenda, data) {
  agenda.now('Send push notifications to all users now', data);
}

function userSpecificPushNotificationScheduler(agenda) {
  agenda.define('Send push notifications to specific users', async job => {
    const {
      tokens,
      notification,
      data
    } = job.attrs.data;
    await (0, _send_push_notifications.createNewNotificationByDeviceTokens)(tokens, notification, data);
  });
}

function schedulePushNotificationByDeviceTokensNow(agenda, data) {
  agenda.now('Send push notifications to specific users', data);
}
//# sourceMappingURL=agenda.js.map
