"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = updateHealUsage;

var _index = _interopRequireDefault(require("../services/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function updateHealUsage(req, res, next) {
  try {
    return res.json(_index.default.updateHealUsageInDB(req.body));
  } catch (error) {
    return next(error);
  }
}
//# sourceMappingURL=healusage_put.js.map
