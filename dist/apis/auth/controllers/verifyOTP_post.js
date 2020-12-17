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
    } = req.body;
    const match = mobileNumber.match(mobileRegex);
    if (!match) throw _boom.default.badRequest('Invalid mobile number');
    const {
      code
    } = req.body;
    const verificationStatus = await _index.default.getOtpVerificationStatus(mobileNumber, code);

    if (verificationStatus !== 'approved') {
      throw _boom.default.unauthorized('Invalid OTP');
    }

    const user = await _index.default.getUserByMobileNumber(mobileNumber);
    const issueTime = Date.now();
    const jwt = await _index.default.generateJwt(user.userId, issueTime);
    const refreshToken = await _index.default.generateRefreshToken(user.userId, issueTime);
    return res.json({
      jwt,
      refreshToken
    });
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=verifyOTP_post.js.map
