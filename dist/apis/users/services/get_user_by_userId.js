"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUserByUserId;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUserByUserId(userId) {
  const Users = (0, _user.default)();
  const userInDB = await Users.findOne({
    userId
  }).populate({
    path: 'locationAccess.division',
    select: 'locationName'
  }).populate({
    path: 'role',
    select: '-users'
  });
  if (!userInDB) throw _boom.default.notFound('No account found for this user id');
  return userInDB;
}
//# sourceMappingURL=get_user_by_userId.js.map
