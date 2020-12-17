"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUserByMobileNumber;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUserByMobileNumber(mobileNumber) {
  const Users = (0, _user.default)();
  const userInDB = await Users.findOne({
    mobileNumber
  });
  if (!userInDB) throw _boom.default.notFound('No account found for this mobile number');
  return {
    userId: userInDB.userId
  };
}
//# sourceMappingURL=get_user_by_mobile.js.map
