"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUsers;

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUsers(divisionId, search, limit, offset, role, type, all) {
  const Users = (0, _user.default)();
  let usersInDB = [];
  const usersInDBQuery = Users.find();

  if (divisionId) {
    usersInDB = usersInDBQuery.and([{
      locationAccess: {
        $elemMatch: {
          division: {
            $in: divisionId.split(',')
          }
        }
      }
    }]);
  }

  if (!all) {
    usersInDB = usersInDBQuery.and([{
      active: true
    }]);
  }

  if (role) {
    usersInDB = usersInDBQuery.and([{
      role
    }]);
  }

  if (type) {
    usersInDB = usersInDBQuery.and([{
      type
    }]);
  }

  if (search) {
    usersInDB = await usersInDBQuery.or([{
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
    }]).sort([['firstName', 'asc']]).skip(offset || 0).limit(limit || 20).select('userId firstName lastName mobileNumber email active');
  }

  usersInDB = await usersInDBQuery.sort([['firstName', 'asc']]).skip(offset || 0).limit(limit || 20).select('userId firstName lastName mobileNumber email active');
  return usersInDB;
}
//# sourceMappingURL=get_users.js.map
