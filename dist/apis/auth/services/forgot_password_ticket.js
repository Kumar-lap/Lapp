"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generatePasswordResetRequest;

var _uuidv = require("uuidv4");

var _ms = _interopRequireDefault(require("ms"));

var _passwordresetrequest = _interopRequireDefault(require("../models/passwordresetrequest"));

var _env = _interopRequireDefault(require("../../../config/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function generatePasswordResetRequest(userId) {
  const PasswordResetRequests = (0, _passwordresetrequest.default)();
  const currentTime = new Date();
  await PasswordResetRequests.deleteMany({
    expiresAt: {
      $lte: currentTime
    }
  });
  const expiresAt = new Date(Date.now() + (0, _ms.default)(_env.default.FORGOT_PASSWORD_URL_EXPIRY));
  const request = await PasswordResetRequests.findOneAndUpdate({
    userId
  }, {
    userId,
    expiresAt,
    code: (0, _uuidv.uuid)()
  }, {
    upsert: true,
    new: true
  });
  return request;
}
//# sourceMappingURL=forgot_password_ticket.js.map
