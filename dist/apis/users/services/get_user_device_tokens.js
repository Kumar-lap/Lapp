"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUserDeviceTokens;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUserDeviceTokens(ids) {
  const Users = (0, _user.default)();
  const usersInDB = await Users.find({
    _id: {
      $in: ids
    }
  }).select('deviceToken');
  return usersInDB.filter(user => user.deviceToken).map(user => user.deviceToken);
}
//# sourceMappingURL=get_user_device_tokens.js.map
