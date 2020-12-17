"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealDailyIndents;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealDailyIndents(req, res, next) {
  try {
    return res.json(_index.default.updateHealDailyIndentsInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healdailyindents_put.js.map
