"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUserByPasswordChangeUID;

var _moment = _interopRequireDefault(require("moment"));

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _passwordresetrequest = _interopRequireDefault(require("../models/passwordresetrequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUserByPasswordChangeUID(uid) {
  const PasswordResetRequests = (0, _passwordresetrequest.default)();
  const currentTime = (0, _moment.default)();
  const previousDay = (0, _moment.default)(currentTime).subtract(1, 'day');
  const resetRequest = await PasswordResetRequests.findOne({
    code: uid
  });

  if (!resetRequest) {
    throw _boom.default.badRequest('Invalid reset code');
  } else if ((0, _moment.default)(resetRequest.expiresAt).diff(currentTime, 'seconds') < 0) {
    throw _boom.default.conflict('Password Reset link already expired');
  }

  await PasswordResetRequests.deleteMany({
    expiresAt: {
      $lte: new Date(previousDay)
    }
  });
  return resetRequest.userId;
}
//# sourceMappingURL=get_user_by_password_reset_uid.js.map
