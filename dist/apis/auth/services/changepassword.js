"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changePassword;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function changePassword(userId, oldPassword, newPassword) {
  const Users = (0, _user.default)();
  const user = await Users.findOne({
    userId,
    password: oldPassword
  });
  if (!user) throw _boom.default.badRequest('Wrong password');
  const updatedUser = await Users.update({
    userId
  }, {
    password: newPassword
  }, {
    new: true
  });
  return updatedUser;
}
//# sourceMappingURL=changepassword.js.map
