"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateUserDetails;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateUserDetails(req, res, next) {
  try {
    return res.json(await _index.default.updateUsers(req.body));
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=users_put.js.map
