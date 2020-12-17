"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealUsage;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealUsage(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getHealUsageInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healusage_get.js.map
