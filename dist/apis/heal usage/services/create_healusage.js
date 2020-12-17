"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getHealUsageListInDB;

var _heal_usage = _interopRequireDefault(require("../models/heal_usage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getHealUsageListInDB(healusageInRequest) {
  const HealUsage = (0, _heal_usage.default)();
  const HealUsageInDb = await HealUsage.insertMany(healusageInRequest);
  return HealUsageInDb;
}
//# sourceMappingURL=create_healusage.js.map
