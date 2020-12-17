"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUsersCount;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUsersCount(divisionId, search, limit, offset, role, type, all) {
  const Users = (0, _user.default)();
  const count = await Users.count({
    locationAccess: divisionId ? {
      $elemMatch: {
        division: {
          $in: divisionId.split(',')
        }
      }
    } : {
      $exists: true
    },
    active: !all ? true : {
      $exists: true
    },
    role: role || {
      $exists: true
    },
    ...(type ? {
      type
    } : {}),
    ...(search ? {
      $or: [{
        firstName: {
          $regex: `${search}`,
          $options: 'i'
        }
      }, {
        lastName: {
          $regex: `${search}`,
          $options: 'i'
        }
      }, {
        userId: {
          $regex: `${search}`,
          $options: 'i'
        }
      }]
    } : {})
  });
  return count;
}
//# sourceMappingURL=get_user_count.js.map
