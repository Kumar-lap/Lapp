"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sendOtp;

var _twilioVerification = require("../../../helpers/otpVerification/twilioVerification");

async function sendOtp(phoneNumber) {
  const mobileNumberForOTP = `+91${phoneNumber}`;
  const verificationStatus = await (0, _twilioVerification.sendVerificationToken)(mobileNumberForOTP);
  return verificationStatus.status;
}
//# sourceMappingURL=send_otp.js.map
