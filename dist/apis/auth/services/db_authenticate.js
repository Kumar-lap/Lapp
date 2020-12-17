"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mongoAuthenticate;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _user = _interopRequireDefault(require("../models/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function mongoAuthenticate(userId, password) {
  const Users = (0, _user.default)();
  let user = await Users.findOne({
    userId
  });
  if (!user) throw _boom.default.badRequest('Invalid username');
  user = await Users.findOne({
    userId,
    password
  });
  if (!user) throw _boom.default.badRequest('Invalid password');
}
//# sourceMappingURL=db_authenticate.js.map
