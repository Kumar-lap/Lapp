"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUsersById;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUsersById(userId, profileImage, deviceToken, active) {
  const Users = (0, _user.default)();
  let usersInDB;

  if (profileImage) {
    usersInDB = await Users.findByIdAndUpdate({
      _id: userId
    }, {
      profileImage
    }, {
      new: true
    });
  }

  if (deviceToken) {
    usersInDB = await Users.findByIdAndUpdate({
      _id: userId
    }, {
      deviceToken
    }, {
      new: true
    });
  }

  if (active !== undefined) {
    usersInDB = await Users.findByIdAndUpdate({
      _id: userId
    }, {
      active
    }, {
      new: true
    });
  }

  if (!usersInDB) {
    throw _boom.default.badRequest('Invalid id passed in request');
  }

  return usersInDB;
}
//# sourceMappingURL=update_user_details.js.map
