"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createUser;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function createUser(user) {
  const User = (0, _user.default)();
  const userInDB = await User.findOne({
    userId: user.userId
  });
  if (userInDB) throw _boom.default.badRequest('Cannot add users with same userId');
  const savedUser = await User.create(user);
  return savedUser.toObject();
}
//# sourceMappingURL=createuser.js.map
