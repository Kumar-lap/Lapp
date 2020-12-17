"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = login;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function login(req, res, next) {
  try {
    const mobileRegex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
    const {
      mobileNumber
    } = req.query;
    const match = mobileNumber.match(mobileRegex);
    if (!match) throw _boom.default.badRequest('Invalid mobile number');
    const verificationStatus = await _index.default.sendOtp(mobileNumber);

    if (verificationStatus === 'pending') {
      return res.json({
        message: 'OTP sent successfully'
      });
    }

    throw _boom.default.badRequest('Unable to send OTP at the moment');
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=otp_get.js.map
