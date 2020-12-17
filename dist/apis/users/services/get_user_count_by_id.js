"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInvalidUserIds;

var _lodash = _interopRequireDefault(require("lodash"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getInvalidUserIds(userIds) {
  const Users = (0, _user.default)();
  const validUsersInDb = await Users.find({
    userId: {
      $in: userIds
    }
  }).select('userId');
  const validUserIds = validUsersInDb.map(user => user._id);
  return _lodash.default.difference(userIds, validUserIds);
}
//# sourceMappingURL=get_user_count_by_id.js.map
