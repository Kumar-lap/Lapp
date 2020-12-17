"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealDailyIndents;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealDailyIndents(req, res, next) {
  try {
    const {
      limit,
      offset
    } = req.query;
    return res.json(_index.default.getHealDailyIndentsInDB(offset, limit));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healdailyindents_get.js.map
