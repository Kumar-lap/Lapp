"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealFeed;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealFeed(req, res, next) {
  try {
    return res.json(_index.default.updateHealFeedInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healfeed_put.js.map
