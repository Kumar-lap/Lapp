"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendSMS;

var _twilio = _interopRequireDefault(require("twilio"));

var _env = _interopRequireDefault(require("../../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const accountSID = _env.default.TWILIO_ACCOUNT_SID;
const authToken = _env.default.TWILIO_AUTH_TOKEN;
const twilioClient = (0, _twilio.default)(accountSID, authToken);

async function sendSMS(phoneNumber, message) {
  try {
    const verificationStatus = await twilioClient.messages.create({
      body: message,
      to: phoneNumber,
      from: _env.default.TWILIO_PHONE_NUMBER
    });
    return verificationStatus;
  } catch (err) {
    return err;
  }
}
//# sourceMappingURL=bulk_sms_sender.js.map
