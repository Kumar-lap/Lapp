"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealUsageInDB;

var _heal_usage = _interopRequireDefault(require("../models/heal_usage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealUsageInDB(offset, limit) {
  const HealUsage = (0, _heal_usage.default)();
  const healusageInDb = await HealUsage.find().skip(offset || 0).limit(limit || 20).lean();
  return healusageInDb;
}
//# sourceMappingURL=get_healusage_in_db.js.map
