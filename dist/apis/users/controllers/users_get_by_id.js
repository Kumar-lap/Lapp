"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getUserById;

async function getUserById(req, res, next) {
  try {
    const {
      loggedInUser
    } = req;
    return res.json(loggedInUser);
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=users_get_by_id.js.map
