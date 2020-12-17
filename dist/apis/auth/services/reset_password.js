"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resetPassword;

var _user = _interopRequireDefault(require("../models/user"));

var _passwordresetrequest = _interopRequireDefault(require("../models/passwordresetrequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function resetPassword(userId, newPassword, uid) {
  const Users = (0, _user.default)();
  const PasswordResetRequests = (0, _passwordresetrequest.default)();
  const updatedUser = await Users.update({
    userId
  }, {
    password: newPassword
  }, {
    new: true
  });
  await PasswordResetRequests.deleteOne({
    code: uid
  });
  return updatedUser;
}
//# sourceMappingURL=reset_password.js.map
