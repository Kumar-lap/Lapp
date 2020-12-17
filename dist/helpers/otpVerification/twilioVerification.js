"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendVerificationToken = sendVerificationToken;
exports.verifyOTP = verifyOTP;
exports.cancelExistingVerification = cancelExistingVerification;

var _twilio = _interopRequireDefault(require("twilio"));

var _env = _interopRequireDefault(require("../../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const accountSID = _env.default.TWILIO_ACCOUNT_SID;
const verificationSID = _env.default.VERIFY_SERVICE_SID;
const authToken = _env.default.TWILIO_AUTH_TOKEN;
const twilioClient = (0, _twilio.default)(accountSID, authToken);

async function sendVerificationToken(phoneNumber) {
  try {
    const verificationStatus = await twilioClient.verify.services(verificationSID).verifications.create({
      to: phoneNumber,
      channel: 'sms'
    });
    return verificationStatus;
  } catch (err) {
    return err;
  }
}

async function verifyOTP(phoneNumber, code) {
  const verificationStatus = await twilioClient.verify.services(verificationSID).verificationChecks.create({
    to: phoneNumber,
    code
  });
  return verificationStatus;
}

async function cancelExistingVerification(mobileNumber) {
  const updatedStatus = await twilioClient.verify.services(verificationSID).verifications(mobileNumber).update({
    status: 'canceled'
  });
  return updatedStatus;
}
//# sourceMappingURL=twilioVerification.js.map
