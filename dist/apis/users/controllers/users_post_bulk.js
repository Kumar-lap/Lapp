"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bulkSaveUsers;

var _boom = _interopRequireDefault(require("@hapi/boom"));

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function bulkSaveUsers(req, res, next) {
  try {
    const {
      users,
      locationAccess,
      role,
      type
    } = req.body;

    if (users.length > 5000) {
      throw _boom.default.badRequest('Cannot save more than 5000 users at once');
    }

    const validUsers = await _index.default.validateUsers(users);
    const savedUsers = await _index.default.bulkInsert(validUsers, locationAccess, role, type);
    return res.json(savedUsers);
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=users_post_bulk.js.map
