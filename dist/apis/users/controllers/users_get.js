"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUsers;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getUsers(req, res, next) {
  try {
    const {
      divisionId,
      search,
      limit,
      offset,
      role,
      userType,
      all
    } = req.query;
    return res.json({
      count: await _index.default.getUsersCount(divisionId, search, limit, offset, role, userType, all),
      users: await _index.default.getUsers(divisionId, search, limit, offset, role, userType, all)
    });
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=users_get.js.map
