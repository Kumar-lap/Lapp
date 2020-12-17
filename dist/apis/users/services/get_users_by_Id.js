"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUsersById;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUsersById(ids) {
  const Users = (0, _user.default)();
  const usersInDB = await Users.find({
    _id: {
      $in: ids
    }
  }).populate('locationAccess.division').populate('role');
  if (usersInDB.length !== ids.length) throw _boom.default.notFound('Invalid user ids found in request');
  return usersInDB;
}
//# sourceMappingURL=get_users_by_Id.js.map
