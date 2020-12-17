"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateUsers;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateUsers(data) {
  const Users = (0, _user.default)();
  const validUsers = await Users.find({
    _id: {
      $in: data.map(user => user._id)
    }
  });

  if (data.length !== validUsers.length) {
    throw _boom.default.badRequest('Invalid user ids passed in request');
  }

  await Promise.all(data.map(async user => {
    await Users.findByIdAndUpdate({
      _id: user._id
    }, user.userDetails);
  }));
  return {
    message: 'User details updated successfully'
  };
}
//# sourceMappingURL=update_users.js.map
