"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getOtpVerificationStatus;

var _twilioVerification = require("../../../helpers/otpVerification/twilioVerification");

async function getOtpVerificationStatus(phoneNumber, code) {
  const mobileNumberForOTP = `+91${phoneNumber}`;
  const verificationStatus = await (0, _twilioVerification.verifyOTP)(mobileNumberForOTP, code);
  return verificationStatus.status;
}
//# sourceMappingURL=verify_otp.js.map
