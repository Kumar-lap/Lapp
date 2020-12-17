"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = putNotifications;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function putNotifications(req, res, next) {
  try {
    const {
      ids
    } = req.body;
    return res.json(await _index.default.markNotificationAsRead(ids));
  } catch (err) {
    return next(err);
  }
}
//# sourceMappingURL=notifications_put.js.map
