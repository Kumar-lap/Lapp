"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getNotifications;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getNotifications(req, res, next) {
  try {
    const {
      offset,
      limit
    } = req.query;
    return res.json(await _index.default.getNotifications(req.loggedInUser._id, offset, limit));
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=notifications_get.js.map
