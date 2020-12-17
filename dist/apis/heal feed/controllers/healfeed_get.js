"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealFeed;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealFeed(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getHealFeedInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healfeed_get.js.map
