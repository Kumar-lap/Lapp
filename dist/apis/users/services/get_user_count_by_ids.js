"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUserCountByUserIds;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUserCountByUserIds(userIds) {
  const Users = (0, _user.default)();
  const userCount = await Users.count({
    userId: {
      $in: userIds
    }
  });
  return userCount;
}
//# sourceMappingURL=get_user_count_by_ids.js.map
